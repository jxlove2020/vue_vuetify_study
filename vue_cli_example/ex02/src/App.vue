<template>
  <!-- 첫 화면의 시작은 v-app 엘리먼트 사용 -->
  <v-app>
    <!-- 앱바 테마를 primary(파랑색) 로 설정 -->
    <v-app-bar app color="primary" dark>
      <!-- 왼쪽에 메뉴 아이콘 넣음 -->
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Joseph</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- 내용 영역에 라우터 페이지 렌더링 -->
    <v-content>
      <!-- 페이지 장면 전환 효과 넣기 -->
      <v-slide-x-transition mode="out-in">
        <router-view></router-view>
      </v-slide-x-transition>
    </v-content>
    <!-- 바닥글 테마를 secondary(짙은 회색)로 설정 -->
    <v-footer color="secondary" fixed dark>
      <div class="mx-auto">Copyright &copy;</div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
