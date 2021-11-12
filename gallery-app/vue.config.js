module.exports = {
  pwa: {
    // Injectmanifest 플러그인 모드는 반드시 선언해 주어야 함
    // workboxPluginMode: 'InjectManifest',

    // GenerateSW 는 기본 값이므로 모드 선언을 생략해도 됨

    workboxOptions: {
      // 프리캐시 옵션 지정
      runtimeCaching: [
        {
          // 런타임 캐시 옵션 지정
          urlPattern: /\.png$/, // *.png 이미지 캐시
          handler: 'cacheFirst', // 캐시 이미지를 먼저 사용하고 만양 캐시에 없으면 인터넷에 접속
          options: {
            cacheName: 'png-cache', // 캐시 이름 설정
            expiration: {
              maxEntries: 10, // png 이미지를 10개까지만 캐시
              maxAgeSeconds: 60 * 60 * 24 * 365, // 1년 캐시
            },
          },
        },
        {
          urlPattern: /\.json$/,
          handler: 'staleWhileRevalidate', // 캐시 된 것을 먼저 사용, 내용이 변경되면 최신으로 교체, manifest.json 파일이 캐시
          options: {
            cacheName: 'json-cache', // 캐시 이름 설정
            cacheableResponse: { statuses: [200] }, // http를 요청후 응답코드가 200 이면 캐시 수행
          },
        },
      ],
    },
  },
  transpileDependencies: ['vuetify'],
};
