<template>
  <div>
    <div class="single-container">
      單張形式：<br/>
      <!-- <button @click="handleSimplePicture()">點我看圖</button> -->
      <img class="single-images" src="https://images.pexels.com/photos/3114350/pexels-photo-3114350.jpeg" @click="handleSimplePicture()" alt="單張形式" />
      <ImageLoader
        :show.sync="singleImageShow"
        :images="images"
      />
    </div>
    <!-- <div>
      一次給多張圖片形式：
      <button @click="handle_multiple_picture()">點我看圖</button>
      <ImageLoader
        :show.sync="multiple_image_show"
        :images="images"
        :title="image_title"
        :right_button="image_right_button"
        :left_button="image_left_button"
        @click_button="handle_arrow_button"
      />
    </div> -->
  </div>
</template>

<script>
import ImageLoader from '@/components/ImageLoader/ImageLoader.vue'

export default {
  props: [],
  components: {
    ImageLoader
  },
  data () {
    return {
      images: null,
      singleImageShow: false
    }
  },
  created () {
    // temp
    this.images = [
      {
        imgUrl: 'https://images.pexels.com/photos/3114350/pexels-photo-3114350.jpeg',
        imgTitle: 'Hi'
      }
    ]
  },
  methods: {
    async init () {

    },
    handleSimplePicture () {
      this.$set(this, 'singleImageShow', true)
    }
  }
}
</script>

<style lang="scss">
  .single-container {
    margin: 10px;
    .single-images {
      width: 20vw;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.5s ease-in;
      &:hover {
        opacity: 0.6;
      }
    }
  }
</style>
