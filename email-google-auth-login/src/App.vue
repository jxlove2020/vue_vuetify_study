<template>
  <v-app>
    <!--  반응형 중단점이 데스크톱(lg) 이상일 때 탐색 서랍이 툴바 아래에 표시되도록 함
          app 어트리뷰트는 반드시 설정해야함
          v-app 엘리먼트 안의 내용이 적절히 표시되도록 도움 -->
    
    <v-navigation-drawer clipped v-model="drawer" app>
      <v-list>
        <!-- items 배열을 읽어와서 차례로 메뉴로 바인딩하여 표시 -->
        <v-list-item value="true" v-for="(item, i) in fnGetMenuItems" :to="item.to" :key=i>
          <v-list-item-action>
            <!-- html 엘리먼트의 값으로 바인딩할 때는 v-html 디렉티브 사용 -->
            <v-icon v-html="item.icon"></v-icon>
          </v-list-item-action>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item>
        <!-- 로그인된 경우만 로그아웃 버튼 표시 -->
        <v-list-item @click="fnDoLogout" v-if="fnGetAuthStatus">
          <v-list-item-action>
            <v-icon>mdi-arrow-right-bold-box-outline</v-icon>
          </v-list-item-action>
          <v-list-item-title>로그아웃</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- 탐색 서랍이 툴바 아래에 위치할 때
         메뉴 아이콘이 적절히 왼쪽에 배치되도록 app과 clipped-left 어트리뷰트 지정 -->
    <v-app-bar clipped-left app color="primary" dark>
    <!-- 햄버거 아이콘은 반응형 크기가 sm 이상일 때 숨김 -->
    <v-app-bar-nav-icon @click.stop="drawer =! drawer" class="hidden-sm-and-up"></v-app-bar-nav-icon>
    <router-link to="/" style="cursor: pointer">
      <!-- 머터리얼 디자인 아이콘 사용시 아이콘 이름에 'mdi-' 붙임 -->
      <!-- 홈 로고 아이콘은 반응형 크기가 xs 일 때 숨김 -->
      <v-icon class="hidden-xs-only" large color="teal lighten-4">mdi-home</v-icon>
    </router-link>
    <v-toolbar-title class="headline">
      이메일-구글 인증 로그인
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <!-- 툴바의 메뉴명을 표시할 때 xs 일 때는 숨기고 나머지 크기에는 보이게 함 -->
    <v-toolbar-items class="hidden-xs-only">
      <v-btn text v-for="item in fnGetMenuItems" :key="item.title" :to="item.to">
        <v-icon left>{{item.icon}}</v-icon>{{item.title}}
      </v-btn>
      <!-- 로그인된 경우만 로그아웃 버튼 메뉴에 표시 -->
      <v-btn text @click="fnDoLogout" v-if="fnGetAuthStatus">
        <v-icon left>mdi-arrow-right-bold-box-outline</v-icon>로그아웃
      </v-btn>
    </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
    <v-footer app>
      <div class="mx-auto">&copy; jxlove2020.github.io</div>
    </v-footer>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      drawer: false
    } 
  },
  computed: {
    // 스토어에서 현재 인증 상태인지 반환
    fnGetAuthStatus() {
      return this.$store.getters.fnGetAuthStatus
    },
    // 로그인 여부에 따라 다르게 탐색 서랍과 툴바 메뉴명 항목 배열 반환
    fnGetMenuItems() {
      if(!this.fnGetAuthStatus){
        return [{
          title: '회원가입',
          to: '/register',
          icon: 'mdi-lock-open-outline'
        }]
      } else {
        return [{
          title: '메인페이지',
          to: '/main',
          icon: 'mdi-account'
        }]
      }
    }
  },
  // 스토어의 로그아웃 기능 사용
  methods: {
    fnDoLogout() {
      this.$store.dispatch('fnDoLogout');
    }
  }
};
</script>
