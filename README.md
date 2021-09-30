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
- [ ] Демонстрация знаний современных стандартов ES.
- [ ] Грамотное использование SCSS препроцессора.
- [ ] Использование линтеров.
- [ ] Разработка задания в разных ветках по системе git-flow. `Для ускорения выполнения задания решила отложить изучение git-flow`
### Уровень 1
- [x] Использование системы контроля версий.
- [ ] Настройка сборки проекта. `nuxt-app сделал все за меня`
- [x] Использование Vue фреймворка.
- [x] Использование CSS препроцессора.`SASS`
- [x] Верстка задания согласно макету.
#### Плюсом будет
- [ ] Стилизация состояний взаимодействий (hover, active, focused) с элементами на свое усмотрение.
- [ ] Верстка адаптивной версии под мобильные устройства.
### Уровень 2
- [ ] Добавить валидацию для формы добавления товара.
- [ ] Название - обязательное поле.
- [ ] Ссылка на изображение товара - обязательное поле.
- [ ] Цена - обязательное полек.
- [ ] Кнопка добавления товара неактивна пока форма пуста или невалидна.
- [ ] Добавление маски разделения тысячных пробелом для поля цены.
- [ ] Разработка функционала добавления товара в общий список из формы.
#### Плюсом будет
- [ ] Верстка состояния удачного добавления товара в форме на свое усмотрение.
- [ ] Анимация перехода состояний.
- [ ] Анимация добавления товара в список.
### Уровень 3
- [ ] Добавление функционала удаления товара из списка.
- [ ] Разработка функционала сохранения списка товаров при перезагрузке страницы.
- [ ] Разработка функционала сортировки списка товаров по следующим параметрам:
  - [ ] По цене min (от меньшего к большему).
  - [ ] По цене max (от большего к меньшему).
  - [ ] По наименованию.
#### Плюсом будет
- [ ] Анимация удаления товара.
- [ ] Анимация сортировки товара.
- [ ] Добавление прелодера на странице для плавной инициализации списка



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
