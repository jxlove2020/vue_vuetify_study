<template>
  <v-app>
    <!-- 데스크톱 크기에서 탐색 서랍이 툴바 아래에 표시되게 함.
         app 어트리뷰트는 반드시 설정해야 하며 v-app 엘리먼트 안의 내용이 적절히 표시되도록 도움 -->
    <v-navigation-drawer clipped v-model="drawer" app>
      <v-list>
        <!-- items 배열을 읽어와서 차례로 메뉴로 바인딩하여 표시 -->
        <v-list-item value="true" v-for="(item,i) in items" :key="i" :to="item.to">
          <v-list-item-action>
            <!-- html 엘리먼트의 값으로 바인딩할 때는 v-html 디렉티브 사용 -->
            <v-icon v-html="item.icon"></v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- 탐색 서랍이 툴바 아라에 위치할 때 메뉴 아이콘이 적절히 왼쪽에 배치되도록 app 과 clipped-left 어트리뷰트 지정 -->
    <v-app-bar app clipped-left fixed color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer =! drawer"></v-app-bar-nav-icon>
      <v-toobar-title>푸시 알림</v-toobar-title>
    </v-app-bar>

    <v-main>
      <div class="mt-5"></div>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data() {
    // 탐색 서랍과 툴바 메뉴명 항목 배열 반환
    return {
      drawer: false,
      items: [{
        icon: 'notifications',
        title: '푸시 알림 등록 및 해지',
        to: '/'
      },
      {
        icon: 'sms',
        title: '푸시 알림 메시지 보내기',
        to: '/pushnotify'
      }]
    }
  },
};
</script>
