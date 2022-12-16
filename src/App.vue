<template>
  <div id="app">
     <Header />
    <div class="container-fluid">
      <div class="col-md-1 sidenav">
        <SideNav />
      </div>
      <div class="col-md-11">
        <img src="./assets/side1.png" />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import SideNav from "@/components/SideNav.vue";
export default {
  components: {
    Header,
    SideNav,
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container-fluid {
  padding-right: 0px;
  padding-left: 0px;
  margin-right: auto;
  margin-left: auto;
  display: flex;

  .sidenav {
    padding: 0;
  }
}

img {
      position: absolute;
    left: -2px;
    top: -1.5px;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
