<!-- 서브 페이지 마크업 -->
<template>
  <div>
    <h2>서브 페이지입니다.</h2>
    <button @click="fnMainPage">메인페이지로 이동 (라우터 함수 사용)</button>
  </div>
</template>
<script>
export default {
  methods: {
    // 라우터 함수로 이동할 때는 $router 글로벌 객체에 이동할 주소를 넣어줌
    fnMainPage() {
      this.$router.push('/');
    },
  },
};
</script>
