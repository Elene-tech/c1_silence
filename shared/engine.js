/* C1 Lab lesson engine: renders a lesson from window.LESSON (see lessons/<id>/data.js).
   No external libraries. Answers are saved in the browser (localStorage) and survive a reload. */
(function () {
  'use strict';
  var L = window.LESSON;
  var ABCD = 'ABCD';

  /* ---------- helpers ---------- */
  function h(tag, attrs) {
    var e = document.createElement(tag);
    if (attrs) for (var k in attrs) {
      var v = attrs[k];
      if (v == null || v === false) continue;
      if (k === 'class') e.className = v;
      else if (k === 'html') e.innerHTML = v;
      else if (k.slice(0, 2) === 'on') e.addEventListener(k.slice(2), v);
      else e.setAttribute(k, v === true ? '' : v);
    }
    for (var i = 2; i < arguments.length; i++) add(e, arguments[i]);
    return e;
  }
  function add(e, kid) {
    if (kid == null || kid === false) return;
    if (Array.isArray(kid)) { kid.forEach(function (k) { add(e, k); }); return; }
    e.append(kid.nodeType ? kid : document.createTextNode(String(kid)));
  }
  function norm(s) {
    return String(s == null ? '' : s).toLowerCase().replace(/[’‘`´]/g, "'")
      .replace(/[.,;:!?"“”()]+/g, ' ').replace(/\s+/g, ' ').trim();
  }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function mmss(s) { return pad(Math.floor(s / 60)) + ':' + pad(s % 60); }
  function words(s) { var m = String(s).trim().match(/[A-Za-z0-9’'\-]+/g); return m ? m.length : 0; }
  function fix(s) { return String(s).replace(/'/g, '’'); }
  /* text with simple <em>…</em> / <b>…</b> marks -> DOM nodes (no raw tags on screen) */
  function rich(s) {
    var out = [], re = /<(em|b)>([\s\S]*?)<\/\1>/g, last = 0, m;
    s = fix(s);
    while ((m = re.exec(s))) {
      if (m.index > last) out.push(s.slice(last, m.index));
      var el = document.createElement(m[1]); el.textContent = m[2]; out.push(el);
      last = m.index + m[0].length;
    }
    if (last < s.length) out.push(s.slice(last));
    return out;
  }

  /* ---------- store ---------- */
  var KEY = 'c1:' + L.id + ':v1';
  var S = { items: {}, text: {}, media: {}, theme: null };
  try { var raw = localStorage.getItem(KEY); if (raw) { var p = JSON.parse(raw); for (var k in p) S[k] = p[k]; } } catch (e) {}
  var saveT;
  function save() {
    clearTimeout(saveT); if (noSave) return;
    saveT = setTimeout(function () { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }, 120);
  }
  var noSave = false;
  function flush() { clearTimeout(saveT); if (noSave) return; try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }
  window.addEventListener('pagehide', flush);
  document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'hidden') flush(); });
  function item(id, def) { if (!S.items[id]) S.items[id] = def; return S.items[id]; }

  /* ---------- registry + stats ---------- */
  var EX = [];          // graded exercises: {id,title,step,total,get()->{answered,first}}
  var SUM = [];         // exercises that contribute to the export text
  var STEPOF = {};
  var curStep = null;

  function reg(ex) { ex.step = curStep; EX.push(ex); STEPOF[ex.id] = curStep; }
  function stats() {
    var total = 0, answered = 0, first = 0, review = [];
    var perStep = {};
    EX.forEach(function (ex) {
      var g = ex.get();
      total += ex.total; answered += g.answered; first += g.first;
      var ps = perStep[ex.step] || (perStep[ex.step] = { total: 0, answered: 0 });
      ps.total += ex.total; ps.answered += g.answered;
      if (g.answered === ex.total && g.first < ex.total) review.push({ id: ex.id, title: ex.title });
    });
    var acc = answered ? Math.round(100 * first / answered) : 0;
    $q('#st-ans').textContent = answered + '/' + total;
    $q('#st-ok').textContent = first;
    $q('#st-acc').textContent = answered ? acc + '%' : '–';
    var rv = $q('#review'); rv.innerHTML = '';
    if (review.length) {
      rv.append(h('b', null, 'To review: '));
      review.forEach(function (r) { rv.append(h('a', { href: '#ex-' + r.id, 'data-go': 'ex-' + r.id }, r.title)); });
    }
    document.querySelectorAll('.steps a').forEach(function (a) {
      var ps = perStep[a.getAttribute('data-step')];
      a.classList.toggle('done', !!ps && ps.total > 0 && ps.answered >= ps.total);
    });
    try { localStorage.setItem('c1:' + L.id + ':summary', JSON.stringify({ total: total, answered: answered, first: first })); } catch (e) {}
    save();
  }
  function $q(s) { return document.querySelector(s); }

  /* ---------- exercise frame ---------- */
  function frame(b, tagLabel, body) {
    var id = b.id;
    var sec = h('section', { class: 'ex', id: 'ex-' + id },
      h('div', { class: 'ex-h' }, tagLabel ? h('span', { class: 'tag' }, tagLabel) : null, h('h3', null, b.title)),
      b.instr ? h('p', { class: 'instr', html: b.instr }) : null,
      body);
    return sec;
  }

  /* ---------- gap engine (cloze, kwt, sentence completion) ---------- */
  function gapEngine(b, defs, st, barExtra) {
    var total = defs.length;
    var score = h('span', { class: 'score' });
    function paint() {
      defs.forEach(function (d, i) {
        if (st.tries > 0) {
          var ok = !!st.ok[i];
          d.mk.textContent = ok ? '✓' : '✗';
          d.mk.className = 'mk ' + (ok ? 'ok' : 'bad');
          d.el.classList.toggle('ok', ok); d.el.classList.toggle('bad', !ok);
          d.lock(ok);
        } else {
          d.mk.textContent = ''; d.mk.className = 'mk';
          d.el.classList.remove('ok', 'bad'); d.lock(false);
        }
        d.ansEl.textContent = (st.shown && !st.ok[i]) ? '→ ' + d.ans[0] : '';
      });
      var n = st.ok.filter(Boolean).length;
      score.textContent = st.tries > 0 ? n + '/' + total + ' correct' : '';
    }
    function check() {
      var first = st.tries === 0;
      defs.forEach(function (d, i) {
        var v = d.read();
        var ok = d.ans.some(function (a) { return norm(a) === norm(v); });
        st.v[i] = v; st.ok[i] = ok;
        if (first) st.first[i] = ok;
      });
      st.tries++; paint(); stats();
    }
    function reset() {
      st.v = []; st.ok = []; st.first = []; st.tries = 0; st.shown = false;
      defs.forEach(function (d) { d.write(''); });
      paint(); stats();
    }
    function show() {
      if (!st.tries) return;
      st.shown = true; paint(); save();
    }
    var bar = h('div', { class: 'bar' },
      h('button', { class: 'btn primary', type: 'button', onclick: check }, 'Check answers'),
      h('button', { class: 'btn', type: 'button', onclick: show }, 'Show answers'),
      h('button', { class: 'btn ghost', type: 'button', onclick: reset }, 'Reset'),
      barExtra, score);
    defs.forEach(function (d, i) { if (st.v[i]) d.write(st.v[i]); });
    paint();
    reg({ id: b.id, title: b.title, total: total, get: function () { return { answered: st.tries > 0 ? total : 0, first: st.first.filter(Boolean).length }; } });
    SUM.push({ title: b.title, text: function () {
      return defs.map(function (d, i) { return (i + 1) + '. ' + (d.read() || '—') + (st.tries ? (st.ok[i] ? '  ✓' : '  ✗ (' + d.ans[0] + ')') : ''); }).join('\n');
    } });
    return bar;
  }
  function newGapState(id) {
    var st = item(id, { v: [], ok: [], first: [], tries: 0, shown: false });
    return st;
  }

  function inputDef(ans, cls) {
    var el = h('input', { type: 'text', class: 'gap' + (cls ? ' ' + cls : ''), autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false' });
    var mk = h('span', { class: 'mk' }), ansEl = h('span', { class: 'ans' });
    return { el: el, mk: mk, ansEl: ansEl, ans: ans,
      read: function () { return el.value; }, write: function (v) { el.value = v; },
      lock: function (ok) { el.readOnly = ok; } };
  }
  function selectDef(ans, opts) {
    var el = h('select', { class: 'gap' }, h('option', { value: '' }, '–'));
    opts.forEach(function (o) { el.append(h('option', { value: o }, o)); });
    var mk = h('span', { class: 'mk' }), ansEl = h('span', { class: 'ans' });
    return { el: el, mk: mk, ansEl: ansEl, ans: ans,
      read: function () { return el.value; }, write: function (v) { el.value = v; },
      lock: function (ok) { el.disabled = ok; } };
  }

  /* ---------- block renderers ---------- */
  var R = {};

  R.html = function (b) { return h('div', { class: b.cls || 'note', html: b.html }); };

  R.photo = function (b) {
    var fig = h('figure', { class: 'photo' });
    fig.appendChild(h('img', { src: b.src, alt: b.alt || '', loading: 'lazy', decoding: 'async' }));
    if (b.cap) { var fc = h('figcaption'); fc.textContent = b.cap; fig.appendChild(fc); }
    return fig;
  };

  R.tips = function (b) {
    return h('div', { class: 'tips' }, b.items.map(function (t) {
      return h('div', { class: 'tip' }, h('div', { class: 'tip-k' }, t.k), h('h4', null, t.h), h('p', { html: t.p }));
    }));
  };

  R.story = function (b) {
    var s = h('article', { class: 'paper story', id: 'ex-' + b.id },
      h('h4', null, b.title), h('div', { class: 'by' }, b.by || ''));
    b.paras.forEach(function (p) { s.append(h('p', { html: p })); });
    return s;
  };

  R.flash = function (b) {
    var grid = h('div', { class: 'fgrid' });
    b.cards.forEach(function (c) {
      var btn = h('button', { class: 'fc', type: 'button', 'aria-expanded': 'false' },
        h('span', { class: 'p' }, c.pos), h('span', { class: 't' }, c.term),
        h('span', { class: 'b' }, c.def, h('i', null, c.ex)),
        h('span', { class: 'hintline' }, 'tap to flip'));
      btn.addEventListener('click', function () {
        var o = btn.classList.toggle('open'); btn.setAttribute('aria-expanded', o ? 'true' : 'false');
      });
      grid.append(btn);
    });
    return frame(b, b.tag, grid);
  };

  R.match = function (b) {
    var n = b.pairs.length;
    var st = item(b.id, { done: [], missed: [] });
    var order = b.order, selL = null;
    var left = h('div', { class: 'mcol' }), right = h('div', { class: 'mcol' });
    var lb = [], rb = [];
    function paint() {
      b.pairs.forEach(function (p, i) { lb[i].classList.toggle('ok', !!st.done[i]); });
      order.forEach(function (pi, pos) { rb[pos].classList.toggle('ok', !!st.done[pi]); });
    }
    b.pairs.forEach(function (p, i) {
      var e = h('button', { class: 'mi', type: 'button' }, h('b', null, String(i + 1)), p.l);
      e.addEventListener('click', function () {
        if (st.done[i]) return;
        if (selL != null) lb[selL].classList.remove('sel');
        selL = i; e.classList.add('sel');
      });
      lb.push(e); left.append(e);
    });
    order.forEach(function (pi, pos) {
      var e = h('button', { class: 'mi', type: 'button' }, h('b', null, ABCD.charAt(pos) || String.fromCharCode(65 + pos)), b.pairs[pi].r);
      e.addEventListener('click', function () {
        if (selL == null || st.done[pi]) return;
        if (pi === selL) {
          st.done[pi] = true; lb[selL].classList.remove('sel'); selL = null; paint(); stats();
        } else {
          st.missed[selL] = true; var i0 = selL;
          e.classList.add('flash'); lb[i0].classList.add('flash');
          setTimeout(function () { e.classList.remove('flash'); lb[i0].classList.remove('flash'); }, 650);
          stats();
        }
      });
      rb.push(e); right.append(e);
    });
    paint();
    reg({ id: b.id, title: b.title, total: n, get: function () {
      var ans = st.done.filter(Boolean).length, first = 0;
      b.pairs.forEach(function (p, i) { if (st.done[i] && !st.missed[i]) first++; });
      return { answered: ans, first: first };
    } });
    var reset = h('button', { class: 'btn ghost', type: 'button', onclick: function () {
      st.done = []; st.missed = []; selL = null; lb.forEach(function (e) { e.classList.remove('sel'); }); paint(); stats();
    } }, 'Reset');
    SUM.push({ title: b.title, text: function () { return b.pairs.map(function (p, i) { return (i + 1) + '. ' + p.l + (st.done[i] ? ' = ' + p.r : ' (not matched)'); }).join('\n'); } });
    return frame(b, b.tag, [h('div', { class: 'mgrid' }, left, right), h('div', { class: 'bar' }, reset)]);
  };

  R.mcq = function (b) {
    var st = item(b.id, { a: [] });
    var list = h('div', { class: 'q5list' });
    var qs = b.qs.map(function (q) {
      var o = q.wrong.slice(); o.splice(q.pos, 0, q.right); return { q: q, opts: o };
    });
    qs.forEach(function (it, qi) {
      var q = it.q, btns = [];
      var why = h('p', { class: 'qwhy', hidden: true });
      var opts = h('div', { class: 'opts' });
      function paint() {
        var a = st.a[qi];
        btns.forEach(function (bt, oi) {
          bt.disabled = a != null;
          bt.classList.toggle('ok', a != null && oi === q.pos);
          bt.classList.toggle('bad', a != null && oi === a && a !== q.pos);
        });
        if (a != null) { why.hidden = false; why.innerHTML = '<b>' + ABCD.charAt(q.pos) + '.</b> ' + (q.why || ''); }
      }
      it.opts.forEach(function (t, oi) {
        var bt = h('button', { class: 'opt', type: 'button' }, h('b', null, ABCD.charAt(oi)), t);
        bt.addEventListener('click', function () { if (st.a[qi] != null) return; st.a[qi] = oi; paint(); stats(); });
        btns.push(bt); opts.append(bt);
      });
      list.append(h('div', { class: 'q5' }, h('div', { class: 'qn' }, String(qi + 1)),
        h('div', null, h('p', { class: 'qs', html: q.q }), opts), why));
      paint();
    });
    var reset = h('button', { class: 'btn ghost', type: 'button', onclick: function () {
      st.a = []; list.querySelectorAll('.opt').forEach(function (bt) { bt.disabled = false; bt.classList.remove('ok', 'bad'); });
      list.querySelectorAll('.qwhy').forEach(function (w) { w.hidden = true; }); stats();
    } }, 'Reset');
    reg({ id: b.id, title: b.title, total: qs.length, get: function () {
      var ans = 0, first = 0;
      qs.forEach(function (it, i) { if (st.a[i] != null) { ans++; if (st.a[i] === it.q.pos) first++; } });
      return { answered: ans, first: first };
    } });
    SUM.push({ title: b.title, text: function () { return qs.map(function (it, i) { var a = st.a[i]; return (i + 1) + '. ' + (a == null ? '—' : ABCD.charAt(a) + (a === it.q.pos ? '  ✓' : '  ✗ (' + ABCD.charAt(it.q.pos) + ')')); }).join('\n'); } });
    return frame(b, b.tag, [list, h('div', { class: 'bar' }, reset, h('span', { class: 'score', id: 'sc-' + b.id }))]);
  };

  R.tfng = function (b) {
    var st = item(b.id, { a: [] });
    var wrap = h('div', null);
    var labels = { T: 'True', F: 'False', NG: 'Not given' };
    b.items.forEach(function (it, i) {
      var btns = [], why = h('p', { class: 'qwhy', hidden: true });
      function paint() {
        var a = st.a[i];
        btns.forEach(function (bt) {
          var k = bt.getAttribute('data-k');
          bt.disabled = a != null;
          bt.classList.toggle('ok', a != null && k === it.a);
          bt.classList.toggle('bad', a != null && k === a && a !== it.a);
        });
        if (a != null) { why.hidden = false; why.innerHTML = '<b>' + labels[it.a] + '.</b> ' + (it.why || ''); why.style.gridColumn = '2'; }
      }
      var row = h('div', { class: 'tfrow' }, h('div', { class: 'qn' }, String(i + 1)),
        h('div', null, h('p', { class: 'st' }, fix(it.s)),
          h('div', { class: 'tfb' }, ['T', 'F', 'NG'].map(function (k) {
            var bt = h('button', { class: 'opt', type: 'button', 'data-k': k }, labels[k]);
            bt.addEventListener('click', function () { if (st.a[i] != null) return; st.a[i] = k; paint(); stats(); });
            btns.push(bt); return bt;
          })), why));
      wrap.append(row); paint();
    });
    reg({ id: b.id, title: b.title, total: b.items.length, get: function () {
      var ans = 0, first = 0;
      b.items.forEach(function (it, i) { if (st.a[i] != null) { ans++; if (st.a[i] === it.a) first++; } });
      return { answered: ans, first: first };
    } });
    SUM.push({ title: b.title, text: function () { return b.items.map(function (it, i) { var a = st.a[i]; return (i + 1) + '. ' + (a == null ? '—' : a + (a === it.a ? '  ✓' : '  ✗ (' + it.a + ')')); }).join('\n'); } });
    var reset = h('button', { class: 'btn ghost', type: 'button', onclick: function () {
      st.a = []; wrap.querySelectorAll('.opt').forEach(function (bt) { bt.disabled = false; bt.classList.remove('ok', 'bad'); });
      wrap.querySelectorAll('.qwhy').forEach(function (w) { w.hidden = true; }); stats();
    } }, 'Reset');
    return frame(b, b.tag, [wrap, h('div', { class: 'bar' }, reset)]);
  };

  R.cloze = function (b) {
    var st = newGapState(b.id), defs = [], bankChips = [], active = null;
    function bankDef(g) {
      var el = h('button', { class: 'gap w', type: 'button' }, ' ');
      var mk = h('span', { class: 'mk' }), ansEl = h('span', { class: 'ans' }), val = '', locked = false;
      var d = { el: el, mk: mk, ansEl: ansEl, ans: g.ans,
        read: function () { return val; },
        write: function (v) {
          if (val) bankChips.forEach(function (c) { if (c.textContent === val) c.disabled = false; });
          val = v; el.textContent = v || ' ';
          if (v) bankChips.forEach(function (c) { if (c.textContent === v) c.disabled = true; });
        },
        lock: function (ok) { locked = ok; } };
      el.addEventListener('click', function () {
        if (locked) return;
        if (val) { d.write(''); save(); return; }
        defs.forEach(function (x) { if (x.el.classList) x.el.classList.remove('active'); });
        active = d; el.classList.add('active');
      });
      return d;
    }
    function tokens(str) {
      var out = [], re = /\{(\d+)\}/g, last = 0, m;
      while ((m = re.exec(str))) {
        if (m.index > last) out.push(rich(str.slice(last, m.index)));
        var gi = parseInt(m[1], 10) - 1, g = b.gaps[gi], d;
        if (b.mode === 'select') d = selectDef(g.ans, g.opts);
        else if (b.mode === 'bank') d = bankDef(g);
        else d = inputDef(g.ans, g.long ? 'long' : '');
        defs[gi] = d;
        var showN = b.numbered !== false && !b.lines;
        out.push(h('span', { class: 'gw' }, showN ? h('span', { class: 'gn' }, '(' + (gi + 1) + ')') : null, d.el, d.mk, d.ansEl, g.hint ? h('span', { class: 'hint' }, g.hint) : null));
        last = m.index + m[0].length;
      }
      if (last < str.length) out.push(rich(str.slice(last)));
      return out;
    }
    var body;
    if (b.lines) body = h('ol', { class: 'lines' }, b.lines.map(function (ln) { return h('li', null, tokens(ln)); }));
    else body = h('div', null, b.text.map(function (p) { return h('p', { class: 'txt' }, tokens(p)); }));
    var pre = [];
    if (b.mode === 'bank') {
      var bank = h('div', { class: 'bank' });
      b.bank.forEach(function (w) {
        var c = h('button', { class: 'chip', type: 'button' }, w);
        c.addEventListener('click', function () {
          var tgt = active && !active.read() ? active : defs.filter(function (d) { return !d.read(); })[0];
          if (!tgt) return;
          tgt.write(w); tgt.el.classList.remove('active'); active = null; save();
        });
        bankChips.push(c); bank.append(c);
      });
      pre.push(bank);
    }
    var bar = gapEngine(b, defs, st);
    // keep typed/selected values saved while the student works
    body.addEventListener('input', function () { defs.forEach(function (d, i) { st.v[i] = d.read(); }); save(); });
    body.addEventListener('change', function () { defs.forEach(function (d, i) { st.v[i] = d.read(); }); save(); });
    if (b.mode === 'bank') { // restore chips state after gapEngine wrote values
      defs.forEach(function (d, i) { if (st.v[i]) d.write(st.v[i]); });
    }
    return frame(b, b.tag, [pre, body, bar]);
  };

  R.kwt = function (b) {
    var st = newGapState(b.id), defs = [];
    var wrap = h('div', null);
    b.items.forEach(function (it, i) {
      var d = inputDef(it.ans, 'long'); defs.push(d);
      wrap.append(h('div', { class: 'kw' },
        h('p', { class: 's' }, h('span', { class: 'n' }, String(i + 1)), fix(it.s)),
        h('span', { class: 'k' }, it.key),
        h('div', { class: 'g' }, fix(it.pre || ''), ' ', d.el, ' ', fix(it.post || ''), d.mk, d.ansEl)));
    });
    var bar = gapEngine(b, defs, st);
    wrap.addEventListener('input', function () { defs.forEach(function (d, i) { st.v[i] = d.read(); }); save(); });
    return frame(b, b.tag, [wrap, bar]);
  };

  /* ---------- media ---------- */
  function ytId(u) {
    if (!u) return null;
    var m = String(u).match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([A-Za-z0-9_-]{11})/);
    if (m) return m[1];
    return /^[A-Za-z0-9_-]{11}$/.test(u) ? u : null;
  }
  R.media = function (b) {
    var box = h('div', null);
    var conf = (L.media || {})[b.id] || (L.media || {})[b.kind] || {};
    var localSrc = null;
    function draw() {
      box.innerHTML = '';
      if (b.kind === 'video') {
        var id = ytId(S.media.video) || ytId(conf.id) || ytId(conf.url);
        if (id) {
          box.append(h('div', { class: 'vwrap' }, h('iframe', { src: 'https://www.youtube-nocookie.com/embed/' + id + '?rel=0', title: b.title, allow: 'accelerometer; encrypted-media; picture-in-picture', allowfullscreen: true, loading: 'lazy' })));
          box.append(h('p', { class: 'instr' }, 'If the video does not load here, ', h('a', { href: 'https://www.youtube.com/watch?v=' + id, target: '_blank', rel: 'noopener' }, 'open it on YouTube'), '.'));
        } else {
          var inp = h('input', { type: 'text', id: 'vid-url', placeholder: 'Paste a YouTube link (teacher preview)' });
          box.append(h('div', { class: 'slot' }, h('b', null, 'Video coming soon'),
            h('p', null, 'Your teacher will add the 2–3 minute video here. You can already read the questions below.'),
            h('div', { class: 'tinput' }, inp, h('button', { class: 'btn sm', type: 'button', onclick: function () { S.media.video = inp.value; save(); draw(); } }, 'Preview link'))));
        }
      } else {
        var src = localSrc || conf.src;
        if (src) box.append(h('audio', { controls: true, preload: 'metadata', src: src }));
        else {
          var f = h('input', { type: 'file', accept: 'audio/*', id: 'aud-' + b.id });
          f.addEventListener('change', function () { if (f.files[0]) { localSrc = URL.createObjectURL(f.files[0]); draw(); } });
          box.append(h('div', { class: 'slot' }, h('b', null, 'Audio coming soon'),
            h('p', null, 'The recording will appear here. The questions below are ready to read.'),
            h('div', { class: 'tinput' }, f)));
        }
      }
    }
    draw();
    var out = [box];
    if (b.transcript) {
      var rev = h('div', { class: 'reveal', hidden: true, html: b.transcript });
      var tb = h('button', { class: 'btn', type: 'button', onclick: function () {
        rev.hidden = !rev.hidden; tb.textContent = rev.hidden ? b.transcriptBtn || 'Show transcript' : 'Hide transcript';
      } }, b.transcriptBtn || 'Show transcript');
      out.push(h('div', { class: 'bar' }, tb), rev);
    }
    return frame(b, b.tag, out);
  };

  /* ---------- timers ---------- */
  function timer(secs, label) {
    var left = secs, iv = null;
    var btn = h('button', { class: 'btn', type: 'button', 'data-tm': secs }, (label ? label + ' ' : '') + mmss(secs));
    var rs = h('button', { class: 'btn ghost sm', type: 'button' }, 'Reset');
    function stop() { clearInterval(iv); iv = null; btn.classList.remove('run'); }
    btn.addEventListener('click', function () {
      if (iv) { stop(); return; }
      if (left <= 0) left = secs;
      btn.classList.add('run');
      iv = setInterval(function () {
        left--; btn.textContent = (label ? label + ' ' : '') + mmss(Math.max(left, 0));
        if (left <= 0) { stop(); btn.classList.add('end'); }
      }, 1000);
    });
    rs.addEventListener('click', function () { stop(); left = secs; btn.classList.remove('end'); btn.textContent = (label ? label + ' ' : '') + mmss(secs); });
    return h('span', { style: 'display:inline-flex;gap:6px;align-items:center' }, btn, rs);
  }
  R.timer = function (b) {
    return h('div', { class: 'bar' }, b.times.map(function (t) { return timer(t.s, t.label); }));
  };

  /* ---------- speaking cards ---------- */
  R.speak = function (b) {
    var cur = 0, filter = 'All';
    var filters = h('div', { class: 'sp-filters' });
    var who = h('div', { class: 'sp-who' }), q = h('p', { class: 'sp-q' }), tip = h('div', { class: 'sp-tip' });
    var card = h('div', { class: 'sp-card' }, who, q, tip);
    var count = h('span', { class: 'score' });
    function pool() { return b.cards.filter(function (c) { return filter === 'All' || c.topic === filter; }); }
    function draw() {
      var p = pool(); if (!p.length) return;
      cur = (cur + p.length) % p.length; var c = p[cur];
      who.textContent = (b.whoLabels || ['Partner A', 'Partner B'])[cur % 2] + ' asks · ' + c.topic;
      q.innerHTML = c.q; tip.innerHTML = c.tip || '';
      count.textContent = (cur + 1) + ' / ' + p.length;
    }
    ['All'].concat(b.topics).forEach(function (t) {
      var c = h('button', { class: 'chip' + (t === 'All' ? ' on' : ''), type: 'button' }, t);
      c.addEventListener('click', function () {
        filter = t; cur = 0; filters.querySelectorAll('.chip').forEach(function (x) { x.classList.toggle('on', x === c); }); draw();
      });
      filters.append(c);
    });
    draw();
    var bar = h('div', { class: 'bar' },
      h('button', { class: 'btn', type: 'button', onclick: function () { cur--; draw(); } }, '← Previous'),
      h('button', { class: 'btn primary', type: 'button', onclick: function () { cur++; draw(); } }, 'Next card →'),
      h('button', { class: 'btn ghost', type: 'button', onclick: function () { cur = Math.floor(Math.random() * pool().length); draw(); } }, 'Random'),
      b.timer ? timer(b.timer, 'Timer') : null, count);
    return frame(b, b.tag, [filters, card, bar]);
  };

  /* ---------- chart (CAE Speaking Part 3) ---------- */
  R.chart = function (b) {
    var grid = h('div', { class: 'cgrid' });
    b.opts.forEach(function (o, i) {
      var d = h('div', { class: 'copt' }, h('b', null, o.h), h('span', null, o.p));
      d.style.gridColumn = ''; grid.append(d);
    });
    var cq = h('div', { class: 'cq' }, h('div', null, b.center, h('small', null, b.centerSmall || '')));
    // place centre in the middle of the 3x2 grid
    grid.insertBefore(cq, grid.children[4]);
    var st = item(b.id, { c: {} });
    var chk = h('ul', { class: 'chk2' }, b.check.map(function (c, i) {
      var cb = h('input', { type: 'checkbox', id: b.id + '-c' + i });
      cb.checked = !!st.c[i];
      cb.addEventListener('change', function () { st.c[i] = cb.checked; save(); });
      return h('li', null, h('label', null, cb, c));
    }));
    var lang = [];
    b.bank.forEach(function (g) {
      lang.push(h('div', { class: 'lgroup' }, g.g));
      lang.push(h('div', { class: 'lang' }, g.items.map(function (x) { return h('span', null, fix(x)); })));
    });
    return frame(b, b.tag, [
      h('div', { class: 'paper' }, h('p', { class: 'instr', style: 'margin-top:0', html: b.task }), grid),
      h('div', { class: 'bar' }, timer(120, 'Discuss'), timer(60, 'Decide')),
      h('div', { class: 'note', html: b.q2 }),
      h('div', { class: 'lgroup' }, 'Language bank'), lang,
      h('div', { class: 'lgroup' }, 'Self-check (tick after the task)'), chk
    ]);
  };

  /* ---------- writing ---------- */
  R.write = function (b) {
    var out = [];
    if (b.promptHtml) out.push(h('div', { class: 'paper', html: b.promptHtml }));
    if (b.plan) {
      var plan = h('div', { class: 'plan' }, b.plan.map(function (f) {
        var ta = h('textarea', { id: b.id + '-' + f.id, placeholder: f.ph || '' });
        ta.value = S.text[b.id + '-' + f.id] || '';
        ta.addEventListener('input', function () { S.text[b.id + '-' + f.id] = ta.value; save(); });
        return h('div', null, h('label', { for: b.id + '-' + f.id }, f.label), ta);
      }));
      out.push(h('div', { class: 'lgroup', style: 'margin-top:20px' }, 'Plan'), plan);
    }
    var ta = h('textarea', { id: b.id + '-text', placeholder: b.ph || 'Write here…', rows: 12 });
    ta.value = S.text[b.id + '-text'] || '';
    var wc = h('div', { class: 'wc' }); var chk = h('ul', { class: 'chk' }); var exp = h('div', { class: 'exp' });
    var checks = (b.checks || []).map(function (c) { var li = h('li', null, c.label); chk.append(li); return { li: li, c: c }; });
    var exps = (b.exp || []).map(function (e) { var sp = h('span', null, e); exp.append(sp); return { sp: sp, e: e }; });
    function upd() {
      var t = ta.value, n = words(t);
      wc.innerHTML = n + ' <small>/ ' + (b.min ? b.min + '–' : '') + (b.max || '') + ' words</small>';
      checks.forEach(function (k) {
        var ok = k.c.min ? n >= k.c.min : (k.c.max ? (n > 0 && n <= k.c.max) : new RegExp(k.c.re, k.c.flags || 'i').test(t));
        k.li.classList.toggle('y', ok);
      });
      exps.forEach(function (k) { k.sp.classList.toggle('y', norm(t).indexOf(norm(k.e)) !== -1); });
      S.text[b.id + '-text'] = t; save();
    }
    ta.addEventListener('input', upd);
    var side = h('div', { class: 'side' }, h('h4', null, 'Word count'), wc, h('h4', null, 'Checklist'), chk,
      exps.length ? [h('h4', null, 'Useful language used'), exp] : null);
    out.push(h('div', { class: 'wgrid' }, ta, side));
    if (b.model) {
      var m = h('div', { class: 'model', hidden: true, html: b.model });
      var mb = h('button', { class: 'btn', type: 'button', onclick: function () { m.hidden = !m.hidden; mb.textContent = m.hidden ? 'Show model' : 'Hide model'; } }, 'Show model');
      out.push(h('div', { class: 'bar' }, mb), m);
    }
    upd();
    SUM.push({ title: b.title, text: function () { return (b.plan || []).map(function (f) { return f.label + ':\n' + (S.text[b.id + '-' + f.id] || '—'); }).join('\n\n') + '\n\n' + (ta.value || '—'); } });
    return frame(b, b.tag, out);
  };

  R.reflect = function (b) {
    var g = h('div', { class: 'rgrid' }, b.fields.map(function (f) {
      var ta = h('textarea', { id: b.id + '-' + f.id });
      ta.value = S.text[b.id + '-' + f.id] || '';
      ta.addEventListener('input', function () { S.text[b.id + '-' + f.id] = ta.value; save(); });
      return h('div', null, h('label', { for: b.id + '-' + f.id }, f.label), ta);
    }));
    SUM.push({ title: b.title, text: function () { return b.fields.map(function (f) { return f.label + ': ' + (S.text[b.id + '-' + f.id] || '—'); }).join('\n'); } });
    return frame(b, b.tag, g);
  };

  /* ---------- page assembly ---------- */
  function buildSteps(container, steps, isHw) {
    steps.forEach(function (s, si) {
      curStep = s.id;
      var sec = h('section', { class: 'step', id: 's-' + s.id },
        h('div', { class: 'step-h' },
          h('div', { class: 'time' }, isHw ? 'HW' : pad(s.t[0]) + '–' + pad(s.t[1]), h('small', null, isHw ? 'at home' : 'minutes')),
          h('div', null, h('h2', null, s.title), s.goal ? h('p', { class: 'goal' }, s.goal) : null)));
      s.blocks.forEach(function (b) {
        var fn = R[b.t]; if (!fn) { console.error('Unknown block', b.t); return; }
        sec.append(fn(b));
      });
      container.append(sec);
    });
  }

  function init() {
    document.title = L.title;
    var theme = S.theme;
    if (theme) document.documentElement.setAttribute('data-theme', theme);
    $q('#lesson-title').textContent = L.title;
    $q('#lesson-eyebrow').textContent = L.eyebrow;
    $q('#lesson-sub').textContent = L.sub;
    var main = $q('#main-lesson'), hw = $q('#main-hw');
    buildSteps(main, L.steps, false);
    if (L.homework) buildSteps(hw, [L.homework], true);

    var steps = $q('#steps');
    function navFor(list, isHw) {
      steps.innerHTML = '';
      list.forEach(function (s) {
        steps.append(h('a', { href: '#s-' + s.id, 'data-step': s.id, 'data-go': 's-' + s.id },
          h('b', null, isHw ? 'HW' : pad(s.t[0])), s.short || s.title, isHw ? null : h('i', null, (s.t[1] - s.t[0]) + ' min')));
      });
    }
    var tabLesson = $q('#tab-lesson'), tabHw = $q('#tab-hw');
    function showTab(which) {
      var hwOn = which === 'hw';
      main.hidden = hwOn; hw.hidden = !hwOn;
      tabLesson.setAttribute('aria-selected', hwOn ? 'false' : 'true'); tabHw.setAttribute('aria-selected', hwOn ? 'true' : 'false');
      navFor(hwOn ? [L.homework] : L.steps, hwOn);
      stats();
    }
    tabLesson.addEventListener('click', function () { showTab('lesson'); window.scrollTo(0, 0); });
    tabHw.addEventListener('click', function () { showTab('hw'); window.scrollTo(0, 0); });
    if (!L.homework) tabHw.hidden = true;
    showTab('lesson');

    function go(id) {
      var el = document.getElementById(id); if (!el) return;
      var inHw = hw.contains(el);
      if (inHw && hw.hidden) showTab('hw'); else if (!inHw && main.hidden) showTab('lesson');
      el.scrollIntoView({ block: 'start' });
    }
    document.addEventListener('click', function (e) {
      var a = e.target.closest && e.target.closest('a[data-go]');
      if (a) { e.preventDefault(); go(a.getAttribute('data-go')); }
    });

    // theme + save-answers tools
    $q('#btn-theme').addEventListener('click', function () {
      var cur = document.documentElement.getAttribute('data-theme');
      var dark = cur ? cur === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
      S.theme = dark ? 'light' : 'dark'; document.documentElement.setAttribute('data-theme', S.theme); save();
    });
    var panel = $q('#export'), area = $q('#export-text');
    $q('#btn-export').addEventListener('click', function () {
      var parts = ['C1 Lab · ' + L.title, new Date().toLocaleString(), ''];
      var st = $q('#st-ans').textContent + ' answered · ' + $q('#st-acc').textContent + ' accuracy'; parts.push(st, '');
      SUM.forEach(function (s) { parts.push('== ' + s.title + ' ==', s.text(), ''); });
      area.value = parts.join('\n'); panel.hidden = false; area.focus(); area.select();
    });
    $q('#btn-copy').addEventListener('click', function () {
      area.select();
      var done = function () { $q('#copy-msg').textContent = 'Copied.'; };
      try { navigator.clipboard.writeText(area.value).then(done, function () { document.execCommand('copy'); done(); }); }
      catch (e) { try { document.execCommand('copy'); done(); } catch (e2) {} }
    });
    $q('#btn-dl').addEventListener('click', function () {
      try {
        var a = document.createElement('a');
        a.href = URL.createObjectURL(new Blob([area.value], { type: 'text/plain' }));
        a.download = L.id + '-answers.txt'; document.body.append(a); a.click(); a.remove();
      } catch (e) {}
    });
    $q('#btn-close').addEventListener('click', function () { panel.hidden = true; });
    $q('#btn-clear').addEventListener('click', function () {
      var b = $q('#btn-clear');
      if (b.getAttribute('data-sure') !== '1') { b.setAttribute('data-sure', '1'); b.textContent = 'Click again to erase everything'; return; }
      noSave = true;
      try { localStorage.removeItem(KEY); localStorage.removeItem('c1:' + L.id + ':summary'); } catch (e) {}
      location.reload();
    });
    stats();
    window.__C1 = { S: S, EX: EX, stats: stats, go: go, showTab: showTab };
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
