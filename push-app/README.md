# push-app

### vue-cli 설치

```
npm i -g @vue/cli
```

### serve 설치

```
npm i -g serve
```

### vue 프로젝트 생성

```
vue create push-app
```

### 설치시 선택할 내용

| Question                                         |                                        Answer |
| :----------------------------------------------- | --------------------------------------------: |
| Please pick a preset                             |                [manually select features] 선택 |
| Check the features needed for your project       |          [Babel], [Router], [PWA_SUPPORT] 선택 |
| Use history mode for router?                     |                                    기본값 Y 선택 |
| Where do you prefer placing config for..         |                    기본값 그대로 [config] 파일 선택 |
| Save this as a preset for future projects? (Y/N) |                                    기본값 N 선택 |

### vuetify 설치

```
cd push-app
vue add vuetify
```

설치 옵션이 나오면 Default 설치  
자동으로 생성된 \*.vue파일에 기본 템플릿 디자인이 포함

### package.json 에 scripts 부분 설정
```json
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "web-push": "web-push"
  },
```
web-push 항목 추가  

```bash
# "firebase": "^8.10.0"
  npm install web-push firebase vuefire firebase-tools
  npm run web-push generate-vapid-keys
```
web-push 포함 프로젝트에서 사용하는 모듈 추가 설치  
공개키와 비공개 키 생성  
생성된 키는 web-push-key.txt 파일로 만들어서 임시 저장   

### firebase 서버 함수 설치
curl -sL https://firebase.tools | bash 
```bash
# firebase-tools 설치 방법 ( 위에 npm 으로 설치 했으므로 건너띄기 )
> curl -sL https://firebase.tools | bash

# firebase 로그인 하기
> firebase login  
하게 되면 Firebase에서 CLI 사용 및 오류 보고 정보를 수집하도록 허용하시겠습니까? 아니오 
(Allow Firebase to collect CLI usage and error reporting information? No) 해준다.
브라우저가 하나 열리면서 로그인 하게 되면 Success! 성공 메시지가 뜨면서 연결이 됩니다.

> firebase init  
하게 되면 
Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your choices. 
 ◯ Realtime Database: Configure a security rules file for Realtime Database and (optionally) provision default instance
 ◯ Firestore: Configure security rules and indexes files for Firestore
❯◉ Functions: Configure a Cloud Functions directory and its files
 ◯ Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
 ◯ Hosting: Set up GitHub Action deploys
 ◯ Storage: Configure a security rules file for Cloud Storage
 ◯ Emulators: Set up local emulators for Firebase products
(Move up and down to reveal more choices)

=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add, 
but for now we'll just set up a default project.

? Please select an option: `Use an existing project`
? Select a default Firebase project for this directory: `pwa-push-95ce5 (pwa-push)`
i  Using project pwa-push-95ce5 (pwa-push)

=== Functions Setup

A functions directory will be created in your project with sample code
pre-configured. Functions can be deployed with firebase deploy.

? What language would you like to use to write Cloud Functions? `JavaScript`
? Do you want to use ESLint to catch probable bugs and enforce style? `No`
✔  Wrote functions/package.json
✔  Wrote functions/index.js
✔  Wrote functions/.gitignore
? Do you want to install dependencies with npm now? `Yes`

```

src > functions 폴더가 생성됨
폴더안에 index.js 파일을 열고 다음과 같이 작성하여 테스트 해본다.
```javascript
const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  // functions.logger.info("Hello logs!", {structuredData: true});
  response.send("안녕하세요!");
});
```  
파이어 베이스 index.js 작성한 후에 
```bash
> firebase deploy
```

### firebase 함수 설정
```bash
> cd functions # 펑션폴더 안에서 npm install web-push firebase-admin cors 설치
> npm install web-push firebase-admin cors

# firebase에서 [설정> 서비스계정> firebase Admin SDK] 에서 [새 비공개 키 생성] 버튼을 클릭하여  
# 비공개 키를 생성하면 파일이 다운로드 됩니다.  

# 파이어 베이스 index.js > 함수를 만든 후에 deploy 함.
> firebase deploy --only functions  
# 로 함수만 업로드 할 수 있습니다.
```

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
