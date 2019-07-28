<template>
  <div id="baseIndex">
    <div class="contact__us">
      <div class="contact__us__wrapper">
        <div class="left">
          <p>Welcome to INFINYTEL</p>
        </div>
        <div class="right">
          <a href="mailto:infinytel@gmail.com">infinytel@gmail.com</a>
          <span>+237 677464284</span>
        </div>
      </div>
    </div>
    <nav>
      <div class="nav__wrapper">
        <div class="logo">
          <img
            src="@/assets/logo/logo.png"
            alt="INFINYTEL"
            width="115"
            title="INFINYTEL AT THE EDGE OF YOUR BUSINESS"
          />
        </div>
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/">Services</router-link>
          </li>
          <li>
            <router-link to="/">Blog</router-link>
          </li>
          <li>
            <router-link to="/">Testimonies</router-link>
          </li>
          <li>
            <router-link to="/">About</router-link>
          </li>
          <li>
            <router-link to="/">Contact</router-link>
          </li>
          <li id="icons">
            <div id="nav__icon" @click="hamburger" :class="{ open: toggle }">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </li>
        </ul>
      </div>
    </nav>

    <div class="mobile_nav_wrapper" :class="[toggle ? '' : 'hide']">
      <header>
        <div class="nav__wrapper">
          <div class="logo">
            <img
              src="@/assets/logo/logo.png"
              alt="INFINYTEL"
              width="100"
              title="INFINYTEL AT THE EDGE OF YOUR BUSINESS"
            />
          </div>
          <ul>
            <li>
              <div id="nav__icon" @click="hamburger" :class="{ open: toggle }">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </li>
          </ul>
        </div>
      </header>
      <div class="mobile__nav__links">
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/">Services</router-link>
          </li>
          <li>
            <router-link to="/">Blog</router-link>
          </li>
          <li>
            <router-link to="/">Testimonies</router-link>
          </li>
          <li>
            <router-link to="/">About</router-link>
          </li>
          <li>
            <router-link to="/">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- Body -->
    <main class="body__wrapper">
      <slot></slot>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggle: false,
      nav: []
    };
  },
  computed: {},
  methods: {
    hamburger() {
      if (this.toggle) {
        this.toggle = false;
      } else {
        this.toggle = true;
      }
    }
  }
};
</script>

<style lang="sass" scoped>
// Variables
$shadow: 0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -1px rgba(0,0,0,.06)
$color: #2d3748
$text-color: #4a5567
$border-bottom: 1px solid grey
$bg: #edf2f7

@mixin links
  font-size: 1rem
  text-decoration: none
  white-space: nowrap
  color: $color
  font-weight: bolder
@mixin nav($nav__wrapper, $logo,$ul,$li,$a,$span)
  #{$nav__wrapper}
      width: 70%
      height: 100px
      margin: 0 auto
      display: flex
      place-items: center
      justify-content: space-between
      #{$logo}
        margin: 0 20px
      #{$ul}
        list-style-type: none
        display: flex
        flex-direction: row
        flex-wrap: nowrap
        place-items: center

        #icons
          display: none
        #{$li}
          flex: 1 1 0
          margin: 0 15px
          #{$a}
            @include links
            &:hover
              color: var(--base-color)

          /* Icon 1 */
          #nav__icon
            width: 40px
            height: 40px
            transform: rotate(0deg)
            transition: .5s ease-in-out
            cursor: pointer
            position: relative
            &:hover
              background-color: $bg
              border-radius: 50%
            #{$span}
              display: block
              position: absolute
              height: 5px
              width: 30px
              background: $text-color
              border-radius: 9px
              opacity: 1
              left: 50%
              transform: rotate(0deg)translate(-50%,-50%)
              transition: .25s ease-in-out
            #{$span}:nth-child(1)
              top: 50%
            #{$span}:nth-child(2)
              top: 10px
            #{span}:nth-child(3)
              bottom: 5px
          #nav__icon.open #{$span}:nth-child(1)
            top: 50%
            transform: translate(-50%, -50%) rotate(135deg)
          #nav__icon.open #{$span}:nth-child(2)
            opacity: 0
            left: -60px
          #nav__icon.open #{$span}:nth-child(3)
            top: 50%
            transform: translate(-50%, -50%) rotate(-135deg)


// BaseIndex
#baseIndex
  // Mobile View
  .mobile_nav_wrapper.hide
    top: 100%
    visibility: hidden
  .mobile_nav_wrapper
    transition: all 250ms ease-in-out
    height: 100vh
    width: 100%
    position: fixed
    left: 0
    top: 0%
    visibility: visible
    header
      background-color: red
      height: 100px
      width: 100%
      background-color: var(--white-bg)
      box-shadow: $shadow
      @include nav('.nav__wrapper','.logo','ul','li','a','span')
    .mobile__nav__links
      background-color: var(--white-bg)
      ul
        width: 80%
        margin: 0 auto
        list-style-type: none
        display:flex
        flex-direction: column
        li
          display: block
          a
            padding: 10px
            display: block
            @include links
            &:hover
              background-color: grey
              color: white

  // Web View
  div.contact__us
    padding: 5px 0
    background-color: var(--base-color)
    display: flex
    .contact__us__wrapper
      width: 70%
      margin: 0 auto
      display: flex
      flex-wrap: wrap
      justify-content: space-between
      align-items: center
      color: var(--white-text)
      font-size: 13px
      place-items: center
      p
        margin: unset
      .right
        display: flex
        justify-content: space-between
        flex-wrap: wrap
        place-items: center
        a
          @include links
          color: var(--white-text)
          margin-right: 20px
          font-weight: unset
          font-size: 13px

  nav
    width: 100%
    height: 100px
    background-color: var(--white-bg)
    box-shadow: $shadow
    @include nav('.nav__wrapper','.logo','ul','li','a','span')

  @media (max-width: 1020px)
    nav .nav__wrapper,.contact__us .contact__us__wrapper
      width: 80%

  @media (max-width: 820px)
    nav .nav__wrapper ul
      li
        display: none
      #icons
        display: block
    .mobile_nav_wrapper header .nav__wrapper .logo, nav .nav__wrapper .logo,nav .nav__wrapper ul li,.mobile_nav_wrapper header .nav__wrapper ul li
      margin: unset
    nav .nav__wrapper,.mobile_nav_wrapper header .nav__wrapper, .mobile_nav_wrapper .mobile__nav__links ul,div.contact__us .contact__us__wrapper
      width: 80%

  @media (max-width: 560px)
    div.contact__us .contact__us__wrapper
      .left
        display: none
      .right
        width: 100%
        padding: 0 5px

  @media (max-width: 300px)
    nav .nav__wrapper,.mobile_nav_wrapper header .nav__wrapper,div.contact__us .contact__us__wrapper,.mobile_nav_wrapper .mobile__nav__links ul
      width: 100%
    // .mobile_nav_wrapper .mobile__nav__links ul
    //   width: 100%
</style>
