<template>
  <div>
    <div>
      單張打api形式：
      <button @click="handle_simgle_picture()">點我看圖</button>
      <ImageLoader
        :show.sync="simgle_image_show"
        :images="images"
        :title="image_title"
        :right_button="image_right_button"
        :left_button="image_left_button"
        @click_button="handle_arrow_button"
      />
    </div>
    <div>
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
    </div>
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
      image_title: null,
      simgle_image_show: false,
      multiple_image_show: false,
      image_current_digital_id: null,
      image_current_level: null,
      image_current_metadata_id: null,
      image_prev_digital_id: null,
      image_prev_level: null,
      image_prev_metadata_id: null,
      image_next_digital_id: null,
      image_next_level: null,
      image_next_metadata_id: null,
      image_left_button: false,
      image_right_button: false
    }
  },
  created () {
    // temp
    this.images = 'https://images.pexels.com/photos/3114350/pexels-photo-3114350.jpeg'
  },
  methods: {
    async init () {

    },
    handle_simgle_picture () {
      this.simgle_image_show = true
    },
    handle_multiple_picture () {
      this.multiple_image_show = true
    },
    async handle_arrow_button (val) {
      console.log(val)

      // if(val === 'right'){
      //   let preview_res = await api.digital_object_preview(
      //     {
      //       level: this.image_next_level,
      //       meta_data_id: this.image_next_metadata_id,
      //       digital_id: this.image_next_digital_id
      //     }
      //   )
      //   if(preview_res['success'] === true &&  preview_res['payload']['curr'] != null){
      //     this.image_current_digital_id = preview_res['payload']['curr']['id']
      //     this.image_current_level = preview_res['payload']['curr']['levels_of_control']
      //     this.image_current_metadata_id = preview_res['payload']['curr']['meta_data_id']
      //     this.image_title = preview_res['payload']['curr']['image_name_public']

      //     if(preview_res['payload']['prev'] != null){
      //       this.image_prev_digital_id = preview_res['payload']['prev']['id']
      //       this.image_prev_level = preview_res['payload']['prev']['levels_of_control']
      //       this.image_prev_metadata_id = preview_res['payload']['prev']['meta_data_id']
      //       this.image_left_button = true
      //     }else if(preview_res['payload']['prev'] == null){
      //       this.image_prev_digital_id = null
      //       this.image_prev_level = null
      //       this.image_prev_metadata_id = null
      //       this.image_left_button = false
      //     }

      //     if(preview_res['payload']['next'] != null){
      //       this.image_next_digital_id =  preview_res['payload']['next']['id']
      //       this.image_next_level = preview_res['payload']['next']['levels_of_control']
      //       this.image_next_metadata_id = preview_res['payload']['next']['meta_data_id']
      //       this.image_right_button = true
      //     }else if(preview_res['payload']['next'] == null) {
      //       this.image_next_digital_id = null
      //       this.image_next_level = null
      //       this.image_next_metadata_id = null
      //       this.image_right_button = false
      //     }

      //     let imgs = this.get_img_url(preview_res['payload']['curr']['url'])
      //     this.images = imgs
      //   }

      // }else if (val === 'left'){
      //   let preview_res = await api.digital_object_preview(
      //     {
      //       level: this.image_prev_level,
      //       meta_data_id: this.image_prev_metadata_id,
      //       digital_id: this.image_prev_digital_id
      //     }
      //   )

      //   if(preview_res['success'] === true &&  preview_res['payload']['curr'] != null){
      //     this.image_current_digital_id = preview_res['payload']['curr']['id']
      //     this.image_current_level = preview_res['payload']['curr']['levels_of_control']
      //     this.image_current_metadata_id = preview_res['payload']['curr']['meta_data_id']
      //     this.image_title = preview_res['payload']['curr']['image_name_public']

      //     if(preview_res['payload']['prev'] != null){
      //       this.image_prev_digital_id = preview_res['payload']['prev']['id']
      //       this.image_prev_level = preview_res['payload']['prev']['levels_of_control']
      //       this.image_prev_metadata_id = preview_res['payload']['prev']['meta_data_id']
      //       this.image_left_button = true
      //     }else if(preview_res['payload']['prev'] == null){
      //       this.image_prev_digital_id = null
      //       this.image_prev_level = null
      //       this.image_prev_metadata_id = null
      //       this.image_left_button = false
      //     }

      //     if(preview_res['payload']['next'] != null){
      //       this.image_next_digital_id =  preview_res['payload']['next']['id']
      //       this.image_next_level = preview_res['payload']['next']['levels_of_control']
      //       this.image_next_metadata_id = preview_res['payload']['next']['meta_data_id']
      //       this.image_right_button = true
      //     }else if(preview_res['payload']['next'] == null) {
      //       this.image_next_digital_id = null
      //       this.image_next_level = null
      //       this.image_next_metadata_id = null
      //       this.image_right_button = false
      //     }

      //     let imgs = this.get_img_url(preview_res['payload']['curr']['url'])
      //     this.images = imgs
      //   }
      // }
    }
  }
}
</script>

<style>

</style>
