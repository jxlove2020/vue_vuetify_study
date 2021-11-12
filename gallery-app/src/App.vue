<template>
  <v-app>
    <!-- 툴바에 제목과 버튼 삽입 -->
    <v-app-bar color="blue-grey" dark fixed>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>갤러리 앱</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container style="margin: 50px 0">
        <v-row>
          <!-- 기기별로 그리드의 크기 설정 -->
          <v-col
            cols="12"
            sm="6"
            md="4"
            lg="3"
            xl="2"
            v-for="item in this.aPictures"
            :key="item.key"
          >
            <v-card height="330px">
              <v-img :src="item.url" height="200px"></v-img>
              <v-card-title>
                <h1 class="title grey--text text-darken-3 mb-3">
                  {{ item.title }}
                </h1>
                <p class="body-2 grey--text">{{ item.info }}</p>
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <!-- 바닥글 고정 -->
    <v-footer fixed>
      <div class="mx-auto">&copy; joseph.web.app</div>
    </v-footer>
  </v-app>
</template>

<script>
// 사진 정보 (JSON 파일) 읽어오기
import oPictureData from '@/datasources/picture-data';
export default {
  data() {
    return {
      // aPictures 의 배열에 사진 정보 저장하기
      aPictures: oPictureData.aPictures,
    };
  },
  name: 'App',
};
</script>
