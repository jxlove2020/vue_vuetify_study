<template>
  <v-container>
    <v-main>
      <div class="text-center display-3 my-4">main page</div>
      <v-row>
        <v-col offset-sm="1" sm="10"></v-col>
        <!-- 제목을 입력 받아 sTitle 데이터와 바인딩해서 store 에 저장 -->
        <v-text-field label="제목" v-model="sTitle"></v-text-field>
      </v-row>
      <div class="text-center">
        <v-btn large class="mt-5" color="purple" dark @click="fnSetTitle"
          >확인</v-btn
        >
      </div>
    </v-main>
  </v-container>
</template>

<script>
export default {
  // store에 있는 데이터를 가져옴
  data() {
    return {
      sTitle: this.$store.getters.fnGetData,
    };
  },
  methods: {
    // 입력 받은 제목을 store에 저장
    fnSetTitle() {
      this.$store.commit('fnSetData', this.sTitle);
      this.$router.push('/sub');
    },
  },
};
</script>
