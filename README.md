# Generator react

Добавьте краткое описание проекта, опишите какую задачу он решает. 1-3 предложения будет достаточно. Добавьте бейджи для важных статусов проекта: статус разработки (в разработке, на поддержке и т.д.), статус билда, процент покрытия тестами и тд.

## Содержание

-   [Технологии](#технологии)
-   [Начало работы](#начало-работы)
-   [Тестирование](#тестирование)
-   [Deploy и CI/CD](#deploy-и-ci/cd)
-   [Contributing](#contributing)
-   [To do](#to-do)
-   [Команда проекта](#команда-проекта)

## Технологии

-   [GatsbyJS](https://www.gatsbyjs.com/)
-   [TypeScript](https://www.typescriptlang.org/)
-   ...

<<<<<<< HEAD

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

-   Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
    languageOptions: {
        // other options...
        parserOptions: {
            project: ['./tsconfig.node.json', './tsconfig.app.json'],
            tsconfigRootDir: import.meta.dirname,
        },
    },
});
```

-   Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
-   Optionally add `...tseslint.configs.stylisticTypeChecked`
-   Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

````js
// eslint.config.js
import react from 'eslint-plugin-react';

export default tseslint.config({
    // Set the react version
    settings: { react: { version: '18.3' } },
    plugins: {
        // Add the react plugin
        react,
    },
    rules: {
        // other rules...
        // Enable its recommended rules
        ...react.configs.recommended.rules,
        ...react.configs['jsx-runtime'].rules,
    },
});
=======
## Использование
Расскажите как установить и использовать ваш проект, покажите пример кода:

Установите npm-пакет с помощью команды:
```sh
$ npm i your-awesome-plugin-name
````

И добавьте в свой проект:

```typescript
import { hi } from "your-awesome-plugin-name";

hi(); // Выведет в консоль "Привет!"
>>>>>>> 160f29ec6d4b5d6401856e728e5d1bb83dc6a194
```

## Разработка

### Требования

Для установки и запуска проекта, необходим [NodeJS](https://nodejs.org/) v8+.

### Установка зависимостей

Для установки зависимостей, выполните команду:

```sh
$ npm i
```

### Запуск Development сервера

Чтобы запустить сервер для разработки, выполните команду:

```sh
npm start
```

### Создание билда

Чтобы выполнить production сборку, выполните команду:

```sh
npm run build
```

## Тестирование

Какие инструменты тестирования использованы в проекте и как их запускать. Например:

Наш проект покрыт юнит-тестами Jest. Для их запуска выполните команду:

```sh
npm run test
```

## Deploy и CI/CD

Расскажите, как развернуть приложение. Как запустить пайплайны и т.д.

## Contributing

Как помочь в разработке проекта? Как отправить предложение или баг-репорт. Как отправить доработку (оформить pull request, какие стайлгайды используются). Можно вынести в отдельный файл — [Contributing.md](./CONTRIBUTING.md).

## FAQ

Если потребители вашего кода часто задают одни и те же вопросы, добавьте ответы на них в этом разделе.

### Зачем вы разработали этот проект?

Чтобы был.

## To do

-   [x] Добавить крутое README
-   [ ] Всё переписать
-   [ ] ...

## Команда проекта

Оставьте пользователям контакты и инструкции, как связаться с командой разработки.

-   [Богдан Звягинцев](tg://resolve?domain=bzvyagintsev) — Front-End Engineer

## Источники

Если вы чем-то вдохновлялись, расскажите об этом: где брали идеи, какие туториалы смотрели, ссылки на исходники кода.
