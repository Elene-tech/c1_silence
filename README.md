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
