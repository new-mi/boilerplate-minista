### Шаблон основан на бьиблиотеке minista

https://minista.qranoko.jp/

### Основные команды

```javascript
    "dev": "minista",
    "build": "minista build",
    "preview": "minista preview"
```

### Особенности

- Функционал написания компонентов и страниц основан на react jsx. Он конечно же ограничен. Желательно использовать без css, scss модулей и внутренних состояний react компонентов(хуков). Есть возможность использовать хуки - https://minista.qranoko.jp/docs/partial-hydration
- По пути `/src/assets/entries` находятся все скрипты и стили которые добаляются на страницы, так как есть особенность библиотеки, пришло назвать через префиксы
- после build появление _commonjsHelpers- из-за Inputmask
