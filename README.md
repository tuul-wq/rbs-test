# Тестовое задание
Приложение по регистрации заказа в шлюзе.

## Цель
Реализовать мини-страничку по удобной регистрации заказов в шлюзе для оплаты на React + Redux.

## Общее описание
Есть страничка для быстрой регистрации заказа на DEV-стенде.
В ней можно указывать первоначальные данные о регистрации заказа. Проблема в том, что для проверки разного функционала надо иметь ряд нескольких наборов данных.

## Надо
Сделать такую же страничку с полями для регистрации заказа и возможностью сохранять наборы данных в профили (сейчас там это сделано не красиво, в localStorage).

1. Страничка должна уметь авторизовываться по логину и паролю под пользователем от другого проекта.
- Использовать метод /auth/login для авторизации
- Использовать server-storage-controller для сохранения наборов полей на стороне сервера. Типичный localStorage, только на сервере.
2. Придумать удобный механизм сохранения пресетов и задания им имени.
3. Все пути должны быть относительные, без указания доменов.
4. На случай если бек упал, или пользователь не авторизовался, должна быть возможность сохранения данных в localStorage.
5. Можно использовать какой-нибудь CSS-фреймворк для красоты.

-------------------------------------------------------------
Для проверки локально необходимо заменить "X-Original-Url" в файле rbsService.js.
Не забываем pathName - /sb-mp3back-stg
