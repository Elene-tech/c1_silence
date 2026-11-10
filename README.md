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
