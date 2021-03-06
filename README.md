# test_task_idaproject_v2
## Требование к стеку 

### Требование к стеку и исполнению
- [x] Верстка должна совпадать с макетами.
- [x] Проект должен быть выполнен с использованием Vue фреймворка
- [x] Для реализации допустимо использование сборщика, Vue CLI или Nuxt.js, последний в приоритете. `Nuxt.js`
- [x] Каждый компонент должен являться SFC.
- [x] При выполнении работы не разрешается использовать никакие UI библиотеки.
- [x] В секции template не разрешается использовать HTML препроцессоры.
- [x] В секции script допускается использование только JavaScript. 
- [x] Секция style должна быть написана с использованием css-modules или scoped, будет плюсом использование препроцессора.
- [x] Проект должен храниться у вас в личном репозитории GitHub/GitLab/Bitbucket в котором должно быть описание запуска проекта на локальной машине.

#### Плюсом будет
- [ ] Демонстрация знаний современных стандартов ES. `По мере необходимости использую. Если глянуть топ 10 самых используемых фич ес6, то их знаю, но конкретно в этом проекте их не использовала`
- [x] Грамотное использование SCSS препроцессора.`Хотелось бы узнать о чем речь. Если речь о порядке свойств, вроде`[ этого примера ](https://codeguide.academy/html-css.html#css-order) `, то этим можно заняться вручную. А можно линтер+сборщик настроить,  чтобы автоматически причесывал стили. Могу разобраться когда к вам устроюсь). ` [ Еще пример ](https://github.com/necolas/idiomatic-css/tree/master/translations/ru-RU)
- [x] Использование линтеров.
- [ ] Разработка задания в разных ветках по системе git-flow. `Для ускорения выполнения задания решила отложить изучение git-flow`
### Уровень 1
- [x] Использование системы контроля версий.
- [x] Настройка сборки проекта. `nuxt-app сделал все за меня, если нужно что сконфигурировать иду доку, изучаю примеры`
- [x] Использование Vue фреймворка.
- [x] Использование CSS препроцессора.`SASS`
- [x] Верстка задания согласно макету.
#### Плюсом будет
- [x] Стилизация состояний взаимодействий (hover, active, focused) с элементами на свое усмотрение.
- [x] Верстка адаптивной версии под мобильные устройства.
### Уровень 2
- [x] Добавить валидацию для формы добавления товара.
  - [x] Название - обязательное поле.
  - [x] Ссылка на изображение товара - обязательное поле.
  - [x] Цена - обязательное полек.
- [x] Кнопка добавления товара неактивна пока форма пуста или невалидна.`Тут нет конкретики. От себя добавила валидацию цены.`
- [x] Добавление маски разделения тысячных пробелом для поля цены.`при целых числах ^_^`
- [x] Разработка функционала добавления товара в общий список из формы.
#### Плюсом будет
- [ ] Верстка состояния удачного добавления товара в форме на свое усмотрение.`У меня анимируется список при добавлении, это считается?)`
- [ ] Анимация перехода состояний.`Речь об переходе из "удачного в неудачное?" Не понятно`
- [x] Анимация добавления товара в список.
### Уровень 3
- [x] Добавление функционала удаления товара из списка.
- [x] Разработка функционала сохранения списка товаров при перезагрузке страницы.
- [x] Разработка функционала сортировки списка товаров по следующим параметрам:
  - [x] По цене min (от меньшего к большему).
  - [x] По цене max (от большего к меньшему).
  - [x] По наименованию.`добавила сортировку A-Я, Я-А`
#### Плюсом будет
- [x] Анимация удаления товара.
- [x] Анимация сортировки товара.
- [x] Добавление прелодера на странице для плавной инициализации списка


#### Отдельное спасибо [Boussadjra Brahim](https://stackoverflow.com/users/8172857/boussadjra-brahim) за инстуркцию деплоя
[link](https://stackoverflow.com/questions/65250206/problem-with-deploy-nuxt-js-in-github-pages)
1. remove the `dist` entry from `.gitignore` file
2. run `npm run generate`
3. run `git add .` then `git commit -m "deploy on gh-pages"`
4. We need to add router base configuration in `nuxt.config.js`:
```javascript
target: 'static',
        router: {
  base: '/<repository-name>/'
}
```
5.run `git subtree push --prefix dist origin gh-pages`

Make sure to delete the current gh-pages branch before running these commands

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
