# ex03

vue-cli 설치

```
npm i -g @vue/cli
```

vue 프로젝트 생성

```
vue create ex03
```

설치시 선택할 내용
| Question | Answer |
| :----------------------------------------------- | -------------------------------: |
| Please pick a preset | [manually select features] 선택 |
| Check the features needed for your project | [Router]와[Vuex] 선택 |
| Use history mode for router? | 기본값 Y 선택 |
| Where do you prefer placing config for.. | 기본값 그대로 [config] 파일 선택 |
| Save this as a preset for future projects? (Y/N) | 기본값 N 선택 |

```
cd ex03
vue add vuetify
```

설치 옵션이 나오면 Default 설치  
자동으로 생성된 \*.vue파일에 기본 템플릿 디자인이 포함

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
