# todo-app

### vue-cli 설치

```
npm i -g @vue/cli
```

### vue 프로젝트 생성

```
vue create todo_app
```

### 설치시 선택할 내용

| Question                                         |                                        Answer |
| :----------------------------------------------- | --------------------------------------------: |
| Please pick a preset                             |               [manually select features] 선택 |
| Check the features needed for your project       | [Babel], [Router], [PWA_SUPPORT], [Vuex] 선택 |
| Use history mode for router?                     |                                 기본값 Y 선택 |
| Where do you prefer placing config for..         |              기본값 그대로 [config] 파일 선택 |
| Save this as a preset for future projects? (Y/N) |                                 기본값 N 선택 |

### vuetify 설치

```
cd todo_app
vue add vuetify
```

설치 옵션이 나오면 Default 설치  
자동으로 생성된 \*.vue파일에 기본 템플릿 디자인이 포함

### firebase vuefire 설치

```
npm install firebase vuefire@next
```

firebase.google.com 사이트에서 Realtime Database 의 databaseURL 복사
src/datasources/firebase.js 의 데이터베이스 url에 붙여넣기

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
