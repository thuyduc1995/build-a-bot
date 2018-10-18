<template>
  <div v-if="parts" class="content">
    <div class="preview">
      <CollapsibleSection>
        <div class="preview-content">
          <div class="top-row">
            <img :src="robot.head.src"/>
          </div>
          <div class="middle-row">
            <img :src="robot.left.src" class="rotate-left"/>
            <img :src="robot.center.src"/>
            <img :src="robot.right.src" class="rotate-right"/>
          </div>
          <div class="bottom-row">
            <img :src="robot.bottom.src"/>
          </div>
        </div>
      </CollapsibleSection>
      <button class="add-to-cart" @click="addToCart()">Add to cart</button>
    </div>
    <div class="top-row">
      <PartSelector position="top" :parts="parts.heads" @partSelected="part => robot.head = part"/>
    </div>
    <div class="middle-row">
      <PartSelector position="left" :parts="parts.arms" @partSelected="part => robot.left = part"/>
      <PartSelector position="center" :parts="parts.torsos" @partSelected="part => robot.center = part"/>
      <PartSelector position="right" :parts="parts.arms" @partSelected="part => robot.right = part"/>
    </div>
    <div class="bottom-row">
      <PartSelector position="bottom" :parts="parts.bases" @partSelected="part => robot.bottom = part"/>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  // import parts from '../data/parts';
  import mixins from './created-hook-mixin';
  import PartSelector from './PartSelector.vue';
  import CollapsibleSection from '../components/CollapsibleSection.vue';

  export default {
    name: 'RobotBuilder',
    mixins: [mixins],
    components: {
      PartSelector,
      CollapsibleSection
    },
    created() {
      this.$store.dispatch('robot/getParts');
    },
    data() {
      return {
        robot: {
          head: {},
          left: {},
          center: {},
          right: {},
          bottom: {},
        },
        cart: [],
      };
    },
    computed: {
      parts() {
        return this.$store.state.robot.parts
      }
    },
    methods: {
      addToCart() {
        const { robot } = this;
        const cost = robot.head.cost + robot.left.cost + robot.center.cost + robot.right.cost + robot.bottom.cost;
        this.$store.dispatch('robot/addRobotToCart', Object.assign({}, robot, { cost }));
      },
    },
  };
</script>

<style lang="scss" scoped>
  .part {
    position: relative;
    width: 165px;
    height: 165px;
    border: 3px solid #aaa;
  }

  .part img {
    width: 165px;
  }

  .top-row {
    display: flex;
    justify-content: space-around;
  }

  .middle-row {
    display: flex;
    justify-content: center;
  }

  .bottom-row {
    display: flex;
    justify-content: space-around;
    border-top: none;
  }

  .head {
    border-bottom: none;
  }

  .left {
    border-right: none;
  }

  .right {
    border-left: none;
  }

  .left img {
    transform: rotate(-90deg);
  }

  .right img {
    transform: rotate(90deg);
  }

  .bottom {
    border-top: none;
  }

  .prev-selector {
    position: absolute;
    z-index: 1;
    top: -3px;
    left: -28px;
    width: 25px;
    height: 171px;
  }

  .next-selector {
    position: absolute;
    z-index: 1;
    top: -3px;
    right: -28px;
    width: 25px;
    height: 171px;
  }

  .center .prev-selector, .center .next-selector {
    opacity: 0.8;
  }

  .left .prev-selector {
    top: -28px;
    left: -3px;
    width: 144px;
    height: 25px;
  }

  .left .next-selector {
    top: auto;
    bottom: -28px;
    left: -3px;
    width: 144px;
    height: 25px;
  }

  .right .prev-selector {
    top: -28px;
    left: 24px;
    width: 144px;
    height: 25px;
  }

  .right .next-selector {
    top: auto;
    bottom: -28px;
    left: 24px;
    width: 144px;
    height: 25px;
  }

  .right .next-selector {
    right: -3px;
  }

  .robot-name {
    position: absolute;
    top: -25px;
    text-align: center;
    width: 100%;
  }

  .sale {
    color: red;
  }

  .content {
    position: relative;
  }

  .add-to-cart {
    position: absolute;
    width: 210px;
    padding: 3px;
    font-size: 16px;
  }

  td, th {
    text-align: left;
    padding: 5px 20px 5px 2px;
  }

  .cost {
    text-align: right;
  }

  .sale-border {
    border: 3px solid red;
  }

  .preview {
    position: absolute;
    top: -20px;
    right: 0;
    width: 210px;
    height: 210px;
    padding: 5px;
  }

  .preview-content {
    border: 1px solid #999;
  }

  .preview img {
    width: 50px;
    height: 50px;
  }

  .rotate-right {
    transform: rotate(90deg);
  }

  .rotate-left {
    transform: rotate(-90deg);
  }

</style>
