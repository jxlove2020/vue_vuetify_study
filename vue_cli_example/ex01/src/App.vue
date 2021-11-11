<template>
  <div id="app">
    <h1>Hello Vue Cli</h1>
    <!-- 라우터 컴포넌트에 연결된 컴포넌트 렌더링 -->
    <router-view></router-view>
    <hr />
    <!-- 라우터 링크 사용 -->
    <div id="nav">
      <router-link to="/">Main</router-link> |
      <router-link to="/sub">Sub</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
