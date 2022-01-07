// 파이어베이스 앱 객체 모듈 가져오기
import firebase from 'firebase/app';

// 파이어베이스 DB를 초기화
const oFirebase = firebase.initializeApp({
  // 파이어베이스 콘솔에서 복사하여 붙여넣기
  apiKey: "AIzaSyA4twYK1oTwfhOyL1Y1Zy75DgS3PrnB7PA",
  authDomain: "pwa-login-auth-e92ba.firebaseapp.com",
})

// 파이어베이스 인증 객체 공개
export const oFirebaseAuth = oFirebase.auth();