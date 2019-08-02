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
        <!-- Caard -->
      </div>
      <div class="card__wrapper">
        <div class="card__item">
          <h5>Title Something</h5>
          <!-- eslint-disable-next-line -->
          <p>Find out more about our range of everyday and savings accounts. Easy to open only 2 minute.</p>
          <p>
            <router-link to>Contact Us →</router-link>
          </p>
        </div>
        <div class="card__item">
          <h5>Title Something</h5>
          <!-- eslint-disable-next-line -->
          <p>We have accounts that provide a comfortable fit for any lifestyle. Find the right account today</p>
          <p>
            <router-link to>Contact Us →</router-link>
          </p>
        </div>
        <div class="card__item">
          <h5>Title Something</h5>
          <!-- eslint-disable-next-line -->
          <p>Your business is unique and tailored to meet the needs of your customers,first prioraty is customer Satisfaction</p>
          <p>
            <router-link to>Contact Us →</router-link>
          </p>
        </div>
      </div>
      <section>
        <!-- Content -->
        <div class="services__off">
          <div class="service__title">
            <h3>Discover More About Our Service</h3>
            <!-- eslint-disable-next-line -->
            <p>We will match you with a service that meets your financial needs. In short-term liquidity, striving to make profit within 24 hours of application.</p>
          </div>
          <div class="offers">
            <div class="offers__item">
              <div class="offer__img">
                <img src="../../assets/services/10-12.jpg" width="100" />
              </div>
              <div class="offer__details">
                <h4>Web & App Development</h4>
                <hr />
                <!-- eslint-disable-next-line -->
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. nisi, magnam quas vitae architecto enim. Assumenda impedit. Lorem ipsum dolor sit amet. Lorem, ipsum.</p>
                <p>
                  <router-link to>Read More →</router-link>
                </p>
              </div>
            </div>
            <div class="offers__item">
              <div class="offer__img">
                <img src="../../assets/services/10-12.jpg" width="100" />
              </div>
              <div class="offer__details">
                <h4>Network and Cabling</h4>
                <hr />
                <!-- eslint-disable-next-line -->
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. nisi, magnam quas vitae architecto enim. Assumenda impedit. Lorem ipsum dolor sit amet. Lorem, ipsum.</p>
                <p>
                  <router-link to>Read More →</router-link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Why Choose Us -->
        <div class="why__choose__us">
          <div class="why__choose__us__wrapper">
            <div class="why__title">
              <h3>Why choose Us</h3>
            </div>
            <div class="why__cards">
              <div class="why__cards__item">
                <img src="../../assets/Shape/1.svg" alt="1" />
                <h3>Reason to Choose us</h3>
                <p>
                  93% of client's rate us
                  <br />
                  <span>
                    <strong>
                      <i class="fas fa-quote-left"></i> 5 OUT 5
                      <i class="fas fa-quote-right"></i>
                    </strong>
                  </span>
                  <br />for response and communication.
                </p>
              </div>
              <div class="why__cards__item">
                <img src="../../assets/Shape/2.svg" alt="2" />
                <h3>Reason to Choose us</h3>
                <p>
                  90% of client's rate our services as
                  <br />
                  <span>
                    <strong>
                      <i class="fas fa-quote-left"></i>
                      Excellent
                      <i class="fas fa-quote-right"></i>
                    </strong>
                  </span>
                </p>
              </div>
              <div class="why__cards__item">
                <img src="../../assets/Shape/3.svg" alt="3" />
                <h3>Reason to Choose us</h3>
                <p>
                  80% of client's have used our services for
                  <br />
                  <span>
                    <strong>
                      <i class="fas fa-quote-left"></i>
                      5 years
                      <i class="fas fa-quote-right"></i>
                    </strong>
                  </span>
                  <br />or more.
                </p>
              </div>
              <div class="why__cards__item">
                <img src="../../assets/Shape/4.svg" alt="4" />
                <h3>Reason to Choose us</h3>
                <p>
                  99% of client's have rate us for
                  <br />
                  <span>
                    <strong>
                      <i class="fas fa-quote-left"></i>
                      Safety Management.
                      <i class="fas fa-quote-right"></i>
                    </strong>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
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
  .card__wrapper
    display: flex
    justify-content: center
    z-index: 1
    place-items: center
    background:
      // image: url('https://www.barraques.cat/pngfile/big/103-1038226_networking-icon-network-png.png')
      size: contain
      color: var(--base-color)
    @media screen and (max-width: 730px)
      flex-direction: column
    .card__item
      position: relative
      top: -90px
      height: fit-content
      width: 400px
      background-color: white
      border-radius: 20px
      z-index: 1
      padding: 50px
      margin: 0 20px
      @media screen and (max-width: 1450px)
        padding: 30px 20px
      @media screen and (max-width: 1050px)
        &:last-child
          display: none
      @media screen and (max-width: 730px)
        &:first-child
          margin-bottom: 20px
      @media screen and (max-width: 430px)
        width: unset
      h5
        color: var(--base-color)
        font-weight: bolder
        font-family: 'Roboto', Times, sans-serif !important
        line-height: 100%
        font-weight: 900
        letter-spacing: -1px
        word-spacing: 0px
        padding-bottom: 5px
      p
        text-align: justify
        a
          text-decoration: none
          padding: 7px 10px
          color: white
          background: var(--base-green)
          border-radius: 5px
  section
    margin: 0 auto
    .services__off
      display: grid
      grid-template-rows: auto 1fr
      .service__title
        padding: 80px 0
        text-align: center
        p
          width: 70%
          margin: 0 auto
          color: unset
      .offers
        display: grid
        grid-template-columns: 1fr 1fr
        place-items: center
        width: 100%
        height: 100%
        text-align: center
        @media screen and (max-width: 1150px)
          grid-template-columns: unset
        .offers__item
          background-color: #FFFFFF
          overflow: hidden
          margin-bottom: 90px
          border-radius: 30px
          align-items: center
          box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2)
          display: flex
          overflow: hidden
          @media screen and (max-width: 790px)
            flex-direction: column
            width: 80%
            border-radius: unset
          .offer__img
            width: 400px
            overflow: hidden
            display: grid
            place-content: center
            @media screen and (max-width: 1450px)
              width: unset
              padding: 0 20px
            @media screen and (max-width: 790px)
              width: 100%
            img
              width: 220px
              height: 220px
              object-fit: cover
              border-radius: 50%
              @media screen and (max-width: 1450px)
                width: 200px
                height: 200px
              @media screen and (max-width: 790px)
                width: 100%
                border-radius: unset
          .offer__details
            width: 300px
            padding: 20px
            background: rgba(17,73,182,1)
            border-radius: 30px
            @media screen and (max-width: 790px)
              width: unset
              border-radius: unset
              margin: 20px
            h4
              font-weight: bolder
              letter-spacing: -1.5px
              color: white
              font-size: 19px
            p
              text-align: justify
              color: white
              @media screen and (max-width: 1450px)
                font-size: 14px
              a
                padding: 7px 10px
                color: white
                border-radius: 5px
                background: black

    .why__choose__us
      width: 100%
      // background: red
      @media screen and (max-width: 1386px)
        background-color: #eeeeee
      .why__choose__us__wrapper
        background-color: #eeeeee
        width: 80%
        margin: 20px auto
        text-align: center
        padding: 40px
        .why__title h3
          color: black
          padding: 20px
        .why__cards
          display: grid
          grid-template-columns: repeat(4,1fr)
          column-gap: 50px
          @media screen and (max-width: 1280px)
            column-gap: 0px
          @media screen and (max-width: 1120px)
            grid-template-columns: repeat(2,1fr)
            grid-gap: 50px
          @media screen and (max-width: 720px)
            grid-template-columns: unset
          .why__cards__item
            background: white
            padding: 20px
            border-radius: 5px
            img
              height: 100px
              width: 100px
              margin-bottom: 20px
            h3
              font-size: 18px
              color: black
            p
              width: 80%
              margin: 0 auto
</style>
