page
================================================================================

Обзор блока
--------------------------------------------------------------------------------

Блок предоставляет шаблоны, создающие набор HTML-элементов верхнего уровня страницы: &lt;html&gt;, &lt;head&gt;, &lt;body&gt; и элементов.

### Модификаторы блока

| Модификатор | Допустимые значения | Способы использования | Описание |
| ----------- | ------------------- | -------------------- | -------- |
| <a href="#mod-no-scroll">no-scroll</a> | true | <code>BEMJSON</code> | Скрывает скролл страницы |

### Специализированные поля блока

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <a href="#declfields-doctype">doctype</a> | `String` | Позволяет переопределить строку DTD текущего документа. |
| <a href="#declfields-title">title</a> | `String` | Позволяет указать содержимое `<title>`. |
| <a href="#declfields-favicon">favicon</a> | `String` | Позволяет указать URL значка страницы (фавиконки). |
| <a href="#declfields-head">head</a> | `BEMJSON` | Позволяет дополнить содержимое `<head>`. |
| <a href="#declfields-styles">styles</a> | `BEMJSON` | Позволяет подключать таблицы стилей CSS. |
| <a href="#declfields-scripts">scripts</a> | `BEMJSON` | Позволяет подключать скрипты в тело документа. |
| <a href="#declfields-content">content</a> | `BEMJSON` | Позволяет указать содержимое страницы. |

### Элементы блока

| Элемент | Способы использования | Описание |
| ------- | --------------------- | -------- |
| <a href="#elems-css">css</a> | `BEMJSON` | Служит для подключения CSS по ссылке или в виде строки. |
| <a href="#elems-js">js</a> | `BEMJSON` | Служит для подключения JS по ссылке или в виде строки. |
| <a href="#elems-meta">meta</a> | `BEMJSON` | Служит для создания HTML-элементов `<meta>`. |
| <a href="#elems-gtm">gtm</a> | `BEMJSON` | Служит для создания кода отслеживания Google Tag Manager. |
| <a href="#elems-ym">ym</a> | `BEMJSON` | Служит для создания кода отслеживания Яндекс Метрики. |
| <a href="#elems-header">header</a> | `BEMJSON` | Служит для создания «шапки» страницы |
| <a href="#elems-footer">footer</a> | `BEMJSON` | Служит для создания «подвала» страницы |

### Специализированные поля элементов блока

| Элемент | Поле | Тип | Описание |
| ------- | ---- | --- | -------- |
| <a href="#elems-css">css</a> | <a href="#elems-css-declfields-url">url</a> | `String`  | Позволяет задать URL для загрузки стилей. |
|  | <a href="#elems-css-declfields-content">content</a> | `String`  | Служит для задания стилей в виде строки |
| <a href="#elems-js">js</a> | <a href="#elems-css-declfields-url">url</a> | `String`  | Позволяет задать URL для загрузки скрипта. |
|  | <a href="#elems-css-declfields-content">content</a> | `String`  | Служит для задания скриптов в виде строки |
| <a href="#elems-gtm">gtm</a> | <a href="#elems-gtm-code">url</a> | `String`  | Позволяет задать идентификатор Google Tag Manager. |
| <a href="#elems-ym">ym</a> | <a href="#elems-ym-code">url</a> | `String`  | Позволяет задать идентификатор Яндекс Метрики. |

Описание блока
--------------------------------------------------------------------------------

Блок отвечает за создание HTML-элементов верхнего уровня, подключение к странице CSS, JS, элементов `<meta>` и указание заголовка. Для этого в BEMJSON-декларации блока и элементов блока зарезервированы специальные поля.

### Модификаторы блока

<a name="#mod-no-scroll"></a>
#### Модификатор `no-scroll`

Допустимые значения: `true`.

Способы использования: `BEMJSON`, `JS`.

Отвечает за скрытие скролла со страницы.

```js
{
  block : 'page',
  mods : { 'no-scroll' : true },
  content: Array(100).join({ tag: 'br' })
}
```

### Специальные поля блока

<a name="declfields-doctype"></a>

#### Поле  `doctype`

Тип: `String`.

Позволяет явно указать строку с DTD (Document Type Definition) текущего документа. Если свойство не задано, по умолчанию будет использоваться `<!DOCTYPE html>`.

<a name="declfields-title"></a>

#### Поле `title`

Тип: `String`.

Название страницы. Становится HTML-элементом `<title>`.

```js
{
    block : 'page',
    title : 'Заголовок страницы',
    content : 'Блок page'
}
```

<a name="declfields-favicon"></a>

#### Поле `favicon`

Тип: `String`.

Позволяет указать URL значка страницы (фавиконки):

```js
{
    block : 'page',
    title : 'Заголовок страницы',
    favicon : 'favicon.ico',
    content : 'Страница с пользовательской фавиконкой'
}
```

<a name="declfields-head"></a>

#### Поле `head`

Тип: `BEMJSON`.

Позволяет дополнить содержимое `HTML`-элемента `<head>`, определенное в шаблоне блока:

```js
{
    block : 'page',
    title : 'Заголовок страницы',
    head : [
        { elem : 'js', url : 'jquery-min.js' },
        { elem : 'meta', attrs : { name : 'description', content : 'Yet another webdev blog' } }
    ],
    content : 'Страница с подключенным JS и meta-данными'
}
```

<a name="declfields-styles"></a>

#### Поле `styles`

Тип: `BEMJSON`.

Позволяет подключить `CSS`:

```js
{
    block : 'page',
    title : 'Заголовок страницы',
    styles : { elem : 'css', url : '_index.css' },
    content : 'Страница с подключенным CSS'
}
```

<a name="declfields-scripts"></a>

#### Поле `scripts`

Тип: `BEMJSON`.

Позволяет подключать JS в тело страницы в конец HTML-элемента `<body>`:

```js
{
    block : 'page',
    title : 'Заголовок страницы',
    scripts : { elem : 'js', url : '_index.js' },
    content : 'Страница со скриптом подключенным в body'
}
```

<a name="declfields-content"></a>

#### Поле `content`

Тип: `BEMJSON`.

Позволяет указать содержимое страницы.

```js
{
    block : 'page',
    title : 'Заголовок страницы',
    content : {
        block : 'link',
        mods : { pseudo : 'yes', togcolor : 'yes', color : 'green' },
        url : '#',
        target : '_blank',
        title : 'Кликни меня',
        content : 'Псевдоссылка, меняющая цвет по клику'
    }
}
```

### Элементы блока

<a name=#elem></a>
#### Элемент `elem`

<a name="#elem-mod-name"></a>
##### Модификатор `elem-mod-name` элемента `elem`

###### Модификатор `elem-mod-name` элемента `elem` в значении `elem-mod-val-1`
###### Модификатор `elem-mod-name` элемента `elem` в значении `elem-mod-val-2`
###### Модификатор `elem-mod-name` элемента `elem` в значении `elem-mod-val-3`

##### Специализированные поля элемента

<a name="#elem-type"></a>
###### Поле `type` элемента `elem`