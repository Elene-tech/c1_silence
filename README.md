# C1 Lab (Target English)

Один проект для всех уроков C1. Статический сайт без сборки: просто загрузить на GitHub и подключить к Vercel.

## Структура

```
index.html               главная: список уроков C1
shared/theme.css         общий дизайн (цвета, шрифты, компоненты)
shared/engine.js         движок упражнений (проверка, сохранение ответов, таймеры)
shared/lessons.js        реестр уроков (одна запись = одна карточка на главной)
lessons/silence/         урок 01 "Silence Lab"
  index.html             оболочка урока
  data.js, data2.js      весь контент урока (тексты, вопросы, ответы)
  media/                 talk.mp3 и dialogue.mp3 (уже лежат)
```

## Как выложить на Vercel (один раз)

1. Создать на GitHub репозиторий `c1-lab`, загрузить в него содержимое этой папки (кнопка Add file > Upload files).
2. На vercel.com: Add New > Project > выбрать `c1-lab` > Framework Preset: **Other** > Deploy.
3. Любое следующее изменение: заменить файл в GitHub, Vercel сам обновит сайт за минуту.

## Как добавить аудио в урок Silence Lab

В `lessons/silence/data.js` вверху:

```js
media: {
  talk:     { src: 'media/talk.mp3' },      // Audio 1 (текст-«видео»)
  dialogue: { src: 'media/dialogue.mp3' }   // Audio 2 (диалог с Lama Tenzin); файлы лежат в lessons/silence/media/
}
```

## Как добавить новый урок C1

1. Скопировать папку `lessons/silence` в `lessons/<новое-имя>`.
2. Заменить контент в `data.js` (и `data2.js`, если нужен).
3. Добавить одну запись в `shared/lessons.js`. Карточка появится на главной.

Типы блоков в data.js: `speak`, `flash`, `match`, `story`, `mcq`, `tfng`, `cloze` (режимы `type`, `select`, `bank`), `kwt`, `media`, `chart`, `write`, `reflect`, `html`.
Правильный ответ в `mcq` задаётся полем `pos` (позиция A=0, B=1, C=2, D=3), поэтому порядок букв всегда под контролем.

## Ответы учеников

Хранятся в браузере ученика (localStorage). Кнопка "Save my answers" в шапке урока собирает все ответы в текст, который можно скопировать и прислать тебе.

## Practice Lab (вкладка с дополнительной практикой)

Файл `lessons/silence/data3.js` задаёт `window.LESSON.practice` — массив разделов (P1–P8): Use of English Part 1–4, Reading Part 7–8, лексика, аудирование (детали), грамматика. Движок показывает их на третьей вкладке. Чтобы добавить раздел, скопируйте любой блок в этом файле и поменяйте текст и ответы. Новые файлы `data3.js` подключаются в `lessons/silence/index.html` перед `engine.js`.


## Урок 03: High Time Lab (`lessons/hightime/`)

Урок на 120 минут по фотографиям: Warm-up (фото C), Vocabulary (3 набора слов, matching, select, word formation), Reading (статья с MCQ, matching, T/F/NG), Speaking по двум парам фото + разбор языка сравнения, Grammar (unreal time с цветовой кодировкой), обсуждение (chart), Writing. Вкладка Practice Lab (`data2.js`): Use of English 1–3 и идиомы. Вкладка Homework: open cloze, эссе, история по фото, словарь. Блок `photos` (две картинки рядом) добавлен в движок. Картинки лежат в `lessons/hightime/img/`.

## Урок 04: Dream City Lab (`lessons/dreamcity/`)

Урок на 120 минут по TED-видео James Rojas «How would you design your dream city?». Видео встроено через `embed.ted.com` (в `data.js`, поле `media.ted.embed`), ниже кнопка-ссылка на страницу talk на ted.com. Задания: аудирование (gist, note completion, T/F/NG, детали, числа), слова из talk, Use of English Part 1–4, четыре задания на перефразирование, второй reading, speaking по фото, discussion chart, writing. Practice Lab (`data2.js`): Use of English 1–4, Paraphrase, лексика, второй reading, повтор видео. Данные разбиты на `data.js` (этапы 1–5), `data1b.js` (этапы 6–9) и `data2.js` (Practice Lab и домашка).

**Фото.** В блоках `photos` без `src` показывается рамка «Photo to add» с описанием нужной картинки. Чтобы добавить фото, положите файл в `lessons/dreamcity/img/` и впишите `src: 'img/имя.jpg'` вместо `slot: '…'`. Уже есть `future.jpg` (город будущего).

**Build your city.** В engine добавлен блок `citybuilder` (интерактивный, без оценок): палитра предметов, сетка, счётчики по категориям, сообщение-вердикт, таймер, сохранение картинки в PNG, состояние хранится в браузере. Параметры блока: `cols`, `rows`, `timer`, `cats` (ключи `green`, `social`, `move`, `car` задают цвета), `palette` (`e` эмодзи, `n` название, `c` категория), `verdict(counts, total)`. В уроке Dream City он используется дважды (воспоминание и город мечты). Фото из `img/`: `future.jpg`, `planner.jpg`, `city-data.jpg`, `city-model.jpg`. Осталось добавить 3 фото (playground, pedestrian street, car park), рамки «Photo to add» подскажут, где.
