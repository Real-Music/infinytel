<template>
  <!--  eslint-disable -->
  <div id="index">
    <home>
      <div id="carousel-container">
        <div class="black__wrapper"></div>

        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1" class></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2" class></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                data-src="holder.js/800x400?auto=yes&amp;bg=777&amp;fg=555&amp;text=First slide"
                alt="First slide [800x400]"
                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16c6a6403ac%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16c6a6403ac%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22217.7%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                data-holder-rendered="true"
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                data-src="holder.js/800x400?auto=yes&amp;bg=666&amp;fg=444&amp;text=Second slide"
                alt="Second slide [800x400]"
                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16c6a6403ad%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16c6a6403ad%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3125%22%20y%3D%22217.7%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                data-holder-rendered="true"
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                data-src="holder.js/800x400?auto=yes&amp;bg=555&amp;fg=333&amp;text=Third slide"
                alt="Third slide [800x400]"
                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16c6a6403ae%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16c6a6403ae%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22217.7%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                data-holder-rendered="true"
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <!-- Card -->
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
                <h4>Web &amp; App Development</h4>
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

        <!-- Apply Now -->
        <div class="apply__now">
          <div class="apply__now__wrapper">
            <div class="apply__title">
              <h3>We Are Going To Contact You</h3>
            </div>

            <div class="form">
              <form @submit.prevent>
                <div class="form_group">
                  <label for="name">Name</label>
                  <input type="text" name="name" id="name" required />
                </div>
                <div class="form_group">
                  <label for="email">Email</label>
                  <input type="email" name="email" id="email" required />
                </div>
                <div class="form_group">
                  <label for="phone">Phone</label>
                  <input type="text" name="phone" id="phone" required />
                </div>
                <div class="form_group">
                  <label for="service">Your Interest</label>
                  <select name="service" id="service" v-model="service" required>
                    <option
                      v-for="(service, index) in services"
                      :key="index"
                      :value="service"
                    >{{ service }}</option>
                  </select>
                </div>
                <div class="form_group msg">
                  <label for="message">Message</label>
                  <textarea name="message" id="message" cols="30" rows="5" placeholder="Optional"></textarea>
                </div>
                <button>Send</button>
              </form>
            </div>
          </div>
        </div>

        <!-- Simple blog -->
        <div class="simple__blog">
          <h3>Get Started Simple &amp; Securely</h3>
        </div>

        <!-- Testimony -->
        <div class="testimonial__blog">
          <div class="testimonial__wrapper">
            <div class="testimony__title">
              <h3>Some of our Awesome Testimonials</h3>
            </div>
            <div class="testimony__content">
              <div class="testimony__items">
                <p>
                  <i class="fas fa-quote-left"></i> I loved the customer service you guys provided me. That was very nice...
                  <i
                    class="fas fa-quote-right"
                  ></i>
                </p>
                <div class="image__wrapper">
                  <img
                    src="https://www.sickkidsfoundation.com/-/media/images/skf/about-us/governance-and-staff/board-of-directors/albertwang_378x378.jpg?h=378&w=378&la=en&hash=4A5D730373693165C89163BF134DF2807E398329"
                    alt
                  />
                  <div>
                    <span>Fedjio Raymond</span>
                    <span>Web &amp; App Development</span>
                  </div>
                </div>
              </div>
              <div class="testimony__items">
                <p>
                  <i class="fas fa-quote-left"></i> I loved the customer service you guys provided me. That was very nice...
                  <i
                    class="fas fa-quote-right"
                  ></i>
                </p>
                <div class="image__wrapper">
                  <img
                    src="https://www.sickkidsfoundation.com/-/media/images/skf/about-us/governance-and-staff/board-of-directors/albertwang_378x378.jpg?h=378&w=378&la=en&hash=4A5D730373693165C89163BF134DF2807E398329"
                    alt
                  />
                  <div>
                    <span>Fedjio Raymond</span>
                    <span>Web &amp; App Development</span>
                  </div>
                </div>
              </div>
              <div class="testimony__items">
                <p>
                  <i class="fas fa-quote-left"></i> I loved the customer service you guys provided me. That was very nice...
                  <i
                    class="fas fa-quote-right"
                  ></i>
                </p>
                <div class="image__wrapper">
                  <img
                    src="https://www.sickkidsfoundation.com/-/media/images/skf/about-us/governance-and-staff/board-of-directors/albertwang_378x378.jpg?h=378&w=378&la=en&hash=4A5D730373693165C89163BF134DF2807E398329"
                    alt
                  />
                  <div>
                    <span>Fedjio Raymond</span>
                    <span>Web &amp; App Development</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Appointment -->
        <div class="appointment">
          <div class="appointment__wrapper">
            <div class="appointment__title">
              <h1>We are Here to Help You</h1>
            </div>
            <div class="appointment__content">
              <div class="appointment__items">
                <i class="fas fa-calendar-check"></i>
                <h3>Appointment</h3>
                <p>You can book an appointment and we get to talk one on one.</p>
                <router-link to>Get Appointment</router-link>
              </div>
              <div class="appointment__items">
                <i class="fas fa-phone-alt"></i>
                <h3>Give Us a Call</h3>
                <ul>
                  <li>+237 670 678 660</li>
                  <li>
                    <a class="email" href="mailto:fedjioraymond@gmail.com">fedjioraymond@gmail.com</a>
                  </li>
                </ul>
                <router-link to>Contact Us</router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- Partners -->
        <div class="partners">
          <div class="partners__container">
            <div class="partner__title">
              <h1>Our Partners</h1>
            </div>
            <infinite-slide-bar>
              <div class="partners__wrapper">
                <div class="partners__content" v-for="(partner, index) in partners" :key="index">
                  <div class="f-left pd-t-8px mg-r-10px">
                    <img :src="partner.url" height="300" width="300" style="padding: 20px" />
                  </div>
                </div>
              </div>
            </infinite-slide-bar>
          </div>
        </div>
      </section>
    </home>
  </div>
</template>

<script>
import InfiniteSlideBar from "vue-infinite-slide-bar";

export default {
  components: {
    InfiniteSlideBar
  },
  data() {
    return {
      service: "",
      services: [
        "IT Consultancy",
        "Network and Cabling",
        "Web & Apps Dev",
        "Video Surveillances",
        "All"
      ],
      partners: [
        {
          name: "One",
          url: "https://source.unsplash.com/random/300×300",
          price: 200
        },
        {
          name: "Two",
          url: "https://source.unsplash.com/random/300×300",
          price: 200
        },
        {
          name: "Three",
          url: "https://source.unsplash.com/random/300×300",
          price: 200
        },
        {
          name: "Four",
          url: "https://source.unsplash.com/random/300×300",
          price: 200
        }
      ]
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
      background: #eeeeee
      @media screen and (max-width: 1386px)
        background-color: #eeeeee
      .why__choose__us__wrapper
        background-color: #eeeeee
        width: 80%
        margin: 20px auto
        text-align: center
        padding: 100px 0
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
    .apply__now
      background-color: white
      width: 100%
      height: fit-content
      .apply__now__wrapper
        background-color: white
        width: 80%
        margin: 20px auto
        text-align: center
        padding: 40px 0
        .apply__title h3
          color: black
          padding: 20px
        .form
          text-align: left
          width: 70%
          margin: 0 auto
          @media screen and (min-width: 1920px)
            width: 50%
          @media screen and (max-width: 1000px)
            width: 100%
          form
            display: grid
            grid-template-columns: repeat(2,1fr)
            grid-gap: 20px
            @media screen and (max-width: 690px)
              all: unset
            .msg
              grid-column: 1/3
            .form_group
              display: block
              @media screen and (max-width: 690px)
                margin-bottom: 20px
              label
                display: block
                margin: unset
              input, select
                display: block
                width: 100%
                height: calc(1.5em + 0.75rem + 2px)
                padding: 0.375rem 0.75rem
                font-size: 1rem
                font-weight: 400
                line-height: 1.5
                color: #495057
                background-color: #fff
                background-clip: padding-box
                border: 1px solid #ced4da
                border-radius: 0.25rem
                outline: none
              select
                cursor: pointer
              textarea
                resize: none
                width: 100%
                padding: 0.375rem 0.75rem
                outline: none
            button
              grid-row: 4
              // width: fit-content
              background-color: black
    // Simple blog
    .simple__blog
      background-color: var(--base-color)
      height: 300px
      h3
        width: 60%
        height: 100%
        margin: 0 auto
        display: grid
        place-content: center
        background:
          image: linear-gradient(rgba(17, 73, 182, 0.5), rgba(17, 73, 182, 0.5)), url("https://www.sfgnetwork.com/media/bg-business-customer-care.jpg")
          attachment: fixed
          size: cover
          repeat: no-repeat
        color: white
        padding: 20px
        @media screen and (max-width: 690px)
          width: 80%
        @media screen and (max-width: 515px)
          width: 100%
    // Testimony
    .testimonial__blog
      background: #eeeeee
      text-align: center
      .testimonial__wrapper
        width: 80%
        margin: 0 auto
        padding: 100px 0
        @media screen and (max-width: 760px )
          width: 90%
        .testimony__title h3
          color: black
          padding: 20px
        .testimony__content
          display: grid
          grid-template-columns: repeat(3,1fr)
          width: 100%
          margin: 0 auto
          grid-gap: 20px
          place-items: center
          @media screen and (max-width: 1210px )
            grid-template-columns: repeat(2, 1fr)
          @media screen and (max-width: 580px )
            grid-template-columns: repeat(1, 1fr)
            row-gap: 40px
          .testimony__items
            p
              // width: 350px
              padding: 50px
              background: white
            .image__wrapper
              text-align: left
              display: flex
              flex-wrap: wrap
              div
              img
                height: 100px
                margin-right: 10px
                object-fit: cover
              span
                display: block
    // Appointment
    .appointment
      padding: 100px 0
      .appointment__wrapper
        width: 80%
        margin: 0 auto
        text-align: center
        .appointment__title h1
          padding: 20px
          color: black
          font-weight: bolder !important
        .appointment__content
          display: flex
          width: fit-content
          flex-wrap: wrap
          margin: 0 auto
          .appointment__items
            flex: 1 1 0
            box-shadow: 0 4px 5px 0 rgba(112, 178, 68,0.1), 0 1px 10px 0 rgba(112, 178, 68,0.1), 0 2px 4px -1px rgba(112, 178, 68,0.2)
            padding: 30px
            ul
              list-style-type: none
            i.fas
              font-size: 3.5em
              color: var(--base-green)
              margin: 10px 0
            h3
              color: black
            a
              background: var(--base-green)
              color: white
              border-radius: unset
              &:hover
                background-color: var(--base-color)
                text-decoration: none
            .email
              all: unset
              &:hover
                cursor: pointer
                background-color: unset
                color: var(--base-color)
    .partners
      // width: 100%
      text-align: center
      background-color: #eeeeee
      padding: 50px
      .partners__container
        // width: 80%
        margin: 0 auto
        overflow: hidden
      .partner__title h1
        padding: 20px
        color: black
        font-weight: bolder !important
      .partners__wrapper
        display: grid
        grid-template-columns: 1fr 1fr 1fr 1fr
        margin: 0 20px
        // background: red
        // grid-gap: 50px !important
        width: fit-content
        .partners__content
      //     // flex: 1 1 0
      //     overflow: hidden
</style>
