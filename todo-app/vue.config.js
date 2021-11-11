module.exports = {
  pwa: {
    // Injectmanifest 플러그인 모드는 반드시 선언해 주어야 함
    // workboxPluginMode: 'InjectManifest',

    // GenerateSW 는 기본 값이므로 모드 선언을 생략해도 됨

    workboxOptions: {
      // // InjectManifest 모드에서는 서비스 워커 파일을 꼭 지정해야 함
      // swSrc: 'src/serviceworker.js',

      // // 프리캐시 옵션 지정
      // runtimeCaching: [
      //   {
      //     // 런타임 캐시 옵션 지정
      //   },
      // ],

      // 프리캐시할 파일 지정
      include: [
        /^index\.html$/,
        /\.css$/,
        /\.js$/,
        /^manifest\.json$/,
        /\.png$/,
      ],
      // exclude는 반드시 기입해야 제대로 동작함 (제거할 파일이 없어도 작성)
      exclude: [],
    },
  },
  transpileDependencies: ['vuetify'],
};
