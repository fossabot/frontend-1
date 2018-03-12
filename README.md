# NevaTrip

[![GitHub issues](https://img.shields.io/github/issues/Nevatrip/frontend.svg)](https://github.com/Nevatrip/frontend/issues)
[![Build Status](https://travis-ci.org/Nevatrip/frontend.svg?branch=master)](https://travis-ci.org/Nevatrip/frontend)

## Установка

```sh
git clone https://github.com/Nevatrip/frontend.git
cd frontend
npm i
```

## Разработка

```sh
npm run dev
```
запускает команду `enb make`, которая стартует сервер с `nodemon`, который автоматически будет перезапускать при изменениях. Таже `chokidar` будет следить за изменениями в `*.blocks/**` и автоматически пересобирать проект, а `livereload` обновит открытые в браузере страницы.

Чтобы отключить автоматическую перезагрузку в браузере, достаточно запустить сборку с переменной окружения `NO_LIVERELOAD`:
```sh
NO_LIVERELOAD=1 npm run dev
```

Пересборку можно запустить вручную с `enb make` или с другим внешним вотчером (например, `npm run watch`). Для отключения автоматической пересборки достаточно запуститься с переменной окружения `NO_AUTOMAKE`:
```sh
NO_AUTOMAKE=1 npm run dev
## Шаблонизация

Шаблоны инициируются в блоке `root`, который подменяет себя на `page` или другой контекст (если он определён в аргументе функции `render`).

## Дополнительно

Запуск сервера с переменной окружения `NODE_ENV=development` (`nodemon` уже настроен на такое поведение).

В режиме разработки:

* Добавить `?json=1` к URL, чтобы увидеть сырые данные
* Добавить `?bemjson=1` к URL, чтобы увидеть генерируемый BEMJSON с BEMTREE-шаблонами.

## Idea

Возможная структура блоков:

```
page
  _no-scroll
  __gtm
  __header
  __footer

attach
button
checkbox
checkbox-group
control-group
dropdown
fieldset
form
  _view
    _payment Платёжная форма
    _rent Аренда транспортного средства
form-field
icon
image
input
label
link
menu
message
modal
popup
progressbar
radio
radio-group
select
spin
textarea

navigation
  _type
    _breadcrumbs
    _menu
list
  _
logo
  __image
  __text
  __slogan
address
header
footer

trip
  Экскурсия
    _api
      _nevatravel
      _astramarin
      _radisson
    _type
      _nevatrip
      _moskvatrip
      _busguide
    _view
      _card
      _page
      _form
      _ticket
    __cover Изображение
      _preview Миниатюра
      _fullpage На всю ширину
    __features (.list) Преимущества
    __langs (.list) Список языков
    __on-boat (.list) Список услуг на борту
    __gallery (.list) Фотоальбом
    __pier (.list) Связь «Место отправления»
    __vechicle (.list) Связь «Транспортное средство»
    __sights (.list) Список достопримечательностей
    __route (.list) Название маршрута, связь «Маршрут»
    __map Карта маршрута
    __appeal Текст с призывом
    __advice Совет от организатора
    __navigation-start Дата начала навигации
    __navigation-finish ата окончания навигации
    __ticket-print Пользователю нужно распечатать билет
    __name Название экскурсии
      _operator Название экскурсии для партнёра
    __operator Партнёры Связь «Партнёры»
    __date Дата отправления
    __time Время отправления
    __buy Ссылка «Купить»
    __show-more Ссылка «Подробнее об экскурси»

    __price (.list)
      _type
        _adult
        _child
        _discount
        _on-pier
    __price-description

    __api-id
    __api-pier
    __api-fixed-time

pier
sight
rent
```