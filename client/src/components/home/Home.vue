<template>
  <div id="index">
    <home>
      <div id="carousel-container">
        <div class="black__wrapper"></div>
        <b-carousel
          style="text-shadow: 1px 1px 2px #333;"
          id="carousel-1"
          v-model="slide"
          :interval="4000"
          controls
          indicators
          background="#ababab"
          img-width="1024"
          img-height="480"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Text slides with image -->
          <b-carousel-slide
            caption="First slide"
            text="Nulla vitae elit libero, a pharetra augue mollis interdum."
            img-src="https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/SsLYSh45lizrfzvep/videoblocks-beautiful-african-american-woman-working-with-laptop-computer-at-the-office-woman-typing-on-laptop-computer_hwk9ayb-b_thumbnail-full01.png"
          ></b-carousel-slide>

          <b-carousel-slide
            caption="First slide"
            text="Nulla vitae elit libero, a pharetra augue mollis interdum."
            img-src="https://p.motionelements.com/stock-video/business/me11573542-portrait-african-american-businessman-woman-standing-office-russia-4k-a0051.jpg"
          ></b-carousel-slide>

          <b-carousel-slide
            caption="First slide"
            text="Nulla vitae elit libero, a pharetra augue mollis interdum."
            img-src="http://www.fotoab.com/wp-content/uploads/2017/11/Selfie_officeworker.jpg"
          ></b-carousel-slide>
        </b-carousel>
      </div>
    </home>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    }
  }
};
</script>

<style lang="sass" scoped>
#index
  #carousel-container
    position: relative
    height: calc(100vh - 129px)
    .black__wrapper
      position: absolute
      top: 0
      left: 0
      height: 100%
      width: 100%
      background: linear-gradient(45deg, rgba(17,73,182,0.5), rgba(17,73,182,0.5))
      z-index: 1
    .carousel
      height: 100%
      .carousel-item
        height: 100%
</style>
