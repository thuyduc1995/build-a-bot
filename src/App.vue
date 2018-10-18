<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <router-link active-class="link-active" :to="{name: 'Home'}" class="nav-link" exact>
              <img class="logo" src="./assets/build-a-bot-logo.png"/>
              Build a bot
            </router-link>
          </li>
          <li class="nav-item">
            <router-link active-class="link-active" :to="{name: 'Build'}" class="nav-link" exact>
              Build
            </router-link>
          </li>
          <li class="nav-item cart">
            <router-link active-class="link-active" :to="{name: 'Cart'}" class="nav-link" exact>
              Cart {{numberOfItems}} items
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
    <div class="container">
      <aside class="aside">
        <router-view name="sidebar" />
      </aside>
      <main>
        <!--<RobotBuilder/>-->
        <!--<DucHomePage msg="Welcome to Your Vue.js App"/>-->
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  computed: {
    numberOfItems() {
      return this.$store.state.robot.cart.length || 0;
    },
  },
};
</script>

<style>
  body {
    background-color: #C2C2C2;
  }
</style>

<style scoped>
  header {
    background: #999;
    width: 1084px;
    margin: 0 auto;
  }
  ul {
    padding: 3px;
    display: flex;
  }
  .nav-item {
    display: inline-block;
    padding: 5px 10px;
    font-size: 22px;
    border-right: 1px solid #bbb;
  }
  .logo {
    vertical-align: middle;
    height: 30px;
  }
  main {
    background-color: white;
    padding: 30px;
    width: 964px;
    min-height: 300px
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
  .nav-link {
    text-decoration: none;
    color: inherit;
  }
  .link-active {
    color: red;
  }
  .container {
    display: flex;
    margin: 10px auto 0 auto;
    justify-content: center;
  }
  .aside {
    padding: 30px;
    background-color: #aaa;
    width: 100px;
    min-height: 300px;
  }
  .nav-item.cart {
    position: relative;
    margin-left: auto;
    border-right: none;
  }
</style>
