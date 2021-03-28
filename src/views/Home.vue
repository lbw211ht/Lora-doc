<template>
  <div class="home">
    <div class="head">
      <img src="../assets/images/background.jpg" alt="bgc-img" />
      <span class="title">Lora-doc</span>
      <span class="describe">高效的团队接口<span id="typed"></span>工具</span>
      <button>
        <router-link to="/workStation"> Getting start </router-link>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Typed from 'typed.js'

export default defineComponent({
  name: 'Home',
  components: {},
  mounted() {
    this.pageInit()
  },
  methods: {
    pageInit: function (): void {
      let options = {
        strings: ['编写', '测试', '管理'],
        typeSpeed: 200,
        typeDelay: 1000,
        loop: true,
        backDelay: 1000,
        backSpeed: 200,
      }
      let typed = new Typed('#typed', options)
    },
  },
})
</script>

<style lang="scss" scoped>
@import url('../assets/css/animista.css');

.head {
  position: relative;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  img {
    position: absolute;
    width: 100vw;
    min-height: 850px;
    object-fit: cover;
    filter: blur(0px) brightness(30%);
    z-index: -1;
  }
  .title {
    -webkit-animation: tracking-in-expand 0.7s
      cubic-bezier(0.215, 0.61, 0.355, 1) both;
    animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) both;
    position: absolute;
    width: 100vw;
    top: 25%;
    text-align: center;
    color: white;
    font: {
      size: 85px;
    }
  }
  .describe {
    position: absolute;
    width: 100vw;
    top: 40%;
    color: white;
    text-align: center;
    span {
      color: orange;
    }
    font: {
      size: 30px;
    }
  }
  button {
    position: absolute;
    width: 210px;
    height: 70px;
    border-radius: 10px;
    outline: none;
    border: none;
    left: 50%;
    top: 60%;
    transform: translate(-50%);
    background-color: #f39c12;
    font-size: 25px;
    &:hover {
      background-color: #d35400;
    }
    &:active {
      font-size: 20px;
    }
    a{
      display: flex;
      height: inherit;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>