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