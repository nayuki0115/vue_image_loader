<template>
  <div class="image-wrapper" v-if="currentShow">
    <div class="image-content">
      <div class="image-title">{{title}}</div>
      <div class="image-button image-close" @click="handle_close">
        <!-- <i class="fas fa-times"></i> -->
      </div>
      <div>
        <span v-if="left_button === true" class="arrow-left" @click="handle_arrow_button('left')"><i class="el-icon-caret-left"></i></span>
        <div class="img-box"><img :src="images" alt="" :style="imageStyle"></div>
        <span v-if="right_button ===  true" class="arrow-right" @click="handle_arrow_button('right')"><i class="el-icon-caret-right"></i></span>
      </div>
      <div class="image-tool">
        <span class="image-tool-button" @click="handle_tool_button('zoom-in')"><i class="fas fa-search-plus"></i></span>
        <span class="image-tool-button" @click="handle_tool_button('zoom-out')"><i class="fas fa-search-minus"></i></span>
        <span class="image-tool-button" @click="handle_tool_button('rotate-left')"><i class="fas fa-undo-alt"></i></span>
        <span class="image-tool-button" @click="handle_tool_button('rotate-right')"><i class="fas fa-redo-alt"></i></span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['show', 'images', 'title', 'right_button', 'left_button'],
  data () {
    return {
      currentShow: false,
      imageStyle: {
        'width': '',
        'transform': ''
      },
      imageWidth: '',
      imageRotate: 0
    }
  },
  created () {

  },
  watch: {
    show: {
      handler (val) {
        this.currentShow = val
      },
      immediate: true
    },
    images: {
      handler (val) {
        let img = new Image()
        img.src = this.images
        img.onload = async () => {
          this.imageWidth = img.width
          this.$set(this.imageStyle, 'width', `${img.width}px`)

          this.imageRotate = 0
          this.$set(this.imageStyle, 'transform', `rotate(0deg)`)
        }
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    handle_close () {
      console.log('close')
      this.currentShow = false
      this.$set(this, 'imageStyle', {})
      this.$emit('update:show', this.currentShow)
    },
    handle_arrow_button (action) {
      this.$emit('click_button', action)
    },
    handle_tool_button (featuresName) {
      console.log(featuresName)

      switch (featuresName) {
        case 'zoom-in':
          this.$set(this, 'imageWidth', this.imageWidth + 50)
          this.$set(this.imageStyle, 'width', `${this.imageWidth + 50}px`)
          break
        case 'zoom-out':
          this.$set(this, 'imageWidth', this.imageWidth - 50)
          this.$set(this.imageStyle, 'width', `${this.imageWidth - 50}px`)
          break
        case 'rotate-left':
          this.$set(this, 'imageRotate', this.imageRotate - 5)
          this.$set(this.imageStyle, 'transform', `rotate(${this.imageRotate - 5}deg)`)
          break
        case 'rotate-right':
          this.$set(this, 'imageRotate', this.imageRotate + 5)
          this.$set(this.imageStyle, 'transform', `rotate(${this.imageRotate + 5}deg)`)
          break
      }
    }
  }

}
</script>

<style lang="scss" scoped>
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
    background-position: -260px 0;
    content: 'X';
    color: #FFF
  }

  .arrow-left{
    top: 50%;
    transform: translateY(-50%);
    width: 44px;
    height: 44px;
    font-size: 24px;
    color: #fff;
    background-color: #606266;
    border-color: #fff;
    left: 40px;
    position: absolute;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    opacity: .8;
    cursor: pointer;
    box-sizing: border-box;
    user-select: none;
  }

  .arrow-right{
    right: 40px;
    text-indent: 2px;
    top: 50%;
    transform: translateY(-50%);
    width: 44px;
    height: 44px;
    font-size: 24px;
    color: #fff;
    background-color: #606266;
    border-color: #fff;
    position: absolute;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    opacity: .8;
    cursor: pointer;
    box-sizing: border-box;
    user-select: none;
  }

  .img-box {
    text-align: center;
    height: 95vh;
    overflow: auto;
    padding: 50px 0;
    box-sizing: border-box;
    &:before {
      content:'';
      display: inline-block;
      vertical-align: middle;
      width: 0;
      height: 100%;
    }
    img {
      // max-width: 100%;
      vertical-align: middle;
    }
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

  .image-tool{
    width: 400px;
    left: calc(50% - 200px);
    color: white;
    z-index: 1;
    position: absolute;
    height: 5vh;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 6px;

    @media screen and (max-width: 1280px) {
      width: 350px;
      left: calc(50% - 175px);
    }

    @media screen and (max-width: 960px) {
      width: 300px;
      left: calc(50% - 150px);
    }

    @media screen and (max-width: 540px) {
      width: 250px;
      left: calc(50% - 175px);
    }

    @media screen and (max-width: 320px) {
      width: 200px;
      left: calc(50% - 100px);
    }

    .image-tool-button{
      font-size: 35px;
      color: #fff;
      border-color: #fff;
      padding: 0 15px;
      cursor: pointer;
      display: inline-block;
      vertical-align: middle;

      @media screen and (max-width: 1280px) {
        font-size: 30px;
      }

      @media screen and (max-width: 960px) {
        font-size: 25px;
      }

      @media screen and (max-width: 540px) {
        font-size: 20px;
      }

      @media screen and (max-width: 320px) {
        font-size: 15px;
      }
    }
  }

  .image-tool:before {
    display: inline-block;
    vertical-align: middle;
    content: '';
    height: 100%;
    width: 0px;
    background: red;
  }

</style>
