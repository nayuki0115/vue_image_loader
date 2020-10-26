<template>
  <div class="image-wrapper" v-if="syncShow">
    <div class="imgage-content">
      <div class="image-title" v-if="images[imageIndex]['imgTitle']  && images[imageIndex]['imgTitle'] !== ''">{{images[imageIndex]['imgTitle'] }}</div>
      <div class="image-button image-close" @click="handleClose"></div>
      <div>
        <span></span>
        <div class="img-box" v-if="images[imageIndex]['imgUrl']  && images[imageIndex]['imgUrl'] !== ''"><pinch-zoom><img :src="images[imageIndex]['imgUrl']" alt="" ></pinch-zoom></div>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
import PinchZoom from 'vue-pinch-zoom'
export default {
  props: {
    'show': {
      type: Boolean,
      required: true
    },
    'images': {
      type: Array,
      required: true
    }
  },
  components: {
    PinchZoom
  },
  data () {
    return {
      imageIndex: 0
    }
  },
  created () {

  },
  computed: {
    syncShow: {
      get () {
        return this.show
      },
      set (value) {
        console.log('value', value)
        this.$emit('update:show', value)
        // emit
      }
    }
  },
  methods: {
    handleClose () {
      console.log('close')
      this.syncShow = false
    }
  }
}
</script>

<style lang="scss">
  .image-wrapper {
    z-index: 2009;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    margin: 0;
    background-color: rgba(0,0,0,.8);
  }

  .image-content {
    margin: 0 auto 50px;
    border-radius: 2px;
    box-sizing: border-box;
  }

  .image-title{
    width: 600px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 6px;
    padding: 4px;
    overflow: hidden;
    position: absolute;
    color: white;
    z-index: 1;
    left: calc(50% - 300px);
    text-align: center;

    @media screen and (max-width: 1280px) {
      width: 500px;
      left: calc(50% - 250px);
    }

    @media screen and (max-width: 960px) {
      width: 400px;
      left: calc(50% - 200px);
    }

    @media screen and (max-width: 540px) {
      width: 300px;
      left: calc(50% - 150px);
    }

    @media screen and (max-width: 320px) {
      width: 200px;
      left: calc(50% - 100px);
    }
  }

  .image-button {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    cursor: pointer;
    height: 80px;
    overflow: hidden;
    position: absolute;
    right: -40px;
    top: -40px;
    -webkit-transition: background-color 0.15s;
    transition: background-color 0.15s;
    width: 80px;
    z-index: 1;
  }

  .image-button::before {
    bottom: 15px;
    left: 15px;
    position: absolute;
  }

  .image-close::before {
    // font-family: "Font Awesome 5 Free";
    // font-weight: 900;
    // content: '\f00d';
    background-position: -260px 0;
    content: '✖';
    color: #FFF;
  }

  .img-box {
    max-width: 100vw !important;
    max-height: 100vh !important;
  }
</style>
