<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>

export default {

}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
  align-items: center;
  justify-items: center;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
