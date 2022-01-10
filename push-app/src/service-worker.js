// Workbox를 디버그 모드로 설정
workbox.setConfig({
  debug: false
});

// Vue-Cli에서 기본으로 제공하는 프리캐시 설정을 Workbox에 적용
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// 푸시 메시지를 받는 경우 처리
self.addEventListener("push", function(event) {
  // 푸시 메시지를 JSON 형태로 변경
  if(event.data) {
    data = JSON.parse(event.data.text());
  } else {
    console.log("데이터가 비었습니다.");
  }

  // 알림메시지 옵션 준비
  const options = {
    body: data.pMsg,
    icon: "",
    badge: "",
    image: "",
    actions: [
      {
        action: "info",
        title: "이 링크는 상세정보 페이지로 이동합니다.",
        icon: ""
      }
    ],
    vibrate: [500, 100, 500]
  };
  event.waitUntil(
    // 알림 메시지 전송하여 표시
    self.registration.showNotification(data.pTitle, options)
  );
});

// 푸시 알림 메시지에서 사용자가 링크 클릭 시 처리
self.addEventListener(
  "notificationclick",
  function(event) {
    // 알림메시지의 링크 클릭시 각 사이트로 이동
    if(event.action == "like") {
      compileToFunctions.openWindow("https://www.starbucks.com/")
    } else if (event.action == "info") {
      compileToFunctions.openWindow("https://jxlove2020.github.io/");
    }
    // 푸시 알림 이벤트 종료
    event.notification.close();
  }, 
  false
);