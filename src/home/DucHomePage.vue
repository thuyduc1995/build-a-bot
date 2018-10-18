<template>
  <div class="home">
    <div class="robot-img">
      <img src="../assets/robot-home.png" alt='' class="robot"/>
    </div>
    <div class="content-container">
      <router-link to="/build">Building First Robot</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DucHomePage',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    text-align: center;
  }
  .robot {
    height: 300px;
  }
</style>
