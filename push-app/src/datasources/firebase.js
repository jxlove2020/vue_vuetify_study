// 파이어베이스 앱 객체 모듈 가져오기
import firebase from 'firebase/app';
// 파이어베이스 패키지 모듈 가져오기
import 'firebase/firebase-database';

// 파이어베이스 DB를 초기화
const oFirebase = firebase.initializeApp({
  // 파이어베이스 콘솔에서 복사하여 붙여넣기
  databaseURL: "https://pwa-push-95ce5-default-rtdb.firebaseio.com/"
})

// 파이어베이스 DB 객체 연결
const oDB = oFirebase.database();

// 파이어베이스 DB 객체 중 subscriptions 항목 공개
export const oSubscriptionsinDB = oDB.ref('subscriptions');