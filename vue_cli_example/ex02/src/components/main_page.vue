<!-- 메인 페이지 의 뷰 화면을 디자인 -->
<template>
  <v-container>
    <p class="display-1 my-4">메인 페이지 입니다.</p>
    <v-divider></v-divider>
    <p class="display-4 my-4">메인 페이지 입니다.</p>
    <div class="text-center">
      <!-- 버튼에서 fab, large 어트리뷰트를 사용해서 큰 원으로 설정 -->
      <v-btn fab large class="mt-5" color="purple" dark to="/sub">
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
    </div>
  </v-container>
</template>
