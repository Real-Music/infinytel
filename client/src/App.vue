<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view></router-view>
  </div>
</template>
<style>
* {
  font-family: "Open Sans", sans-serif, "ubuntu";
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  line-height: 1.5;
  transition: all 150ms ease-in-out;
}
:root {
  --base-color: #1149b6;
  --base-green: #3dbd00;
  --white-bg: #ffffff;
  --white-text: #ffffff;
}

.carousel-inner {
  height: 100%;
}
.carousel-inner img {
  height: 100%;
  object-fit: cover;
}
.carousel-indicators,
.carousel-caption {
  bottom: 100px !important;
}
</style>

<style lang="sass">
// Default Settings
// *
//   font-family: 'Open Sans', sans-serif, 'ubuntu'
//   padding: 0
//   margin: 0
//   box-sizing: border-box
//   line-height: 1.5
//   transition: all 150ms ease-in-out

// :root
//   --base-color: #1149b6
//   --base-green: #3dbd00
//   --white-bg: #ffffff
//   --white-text: #ffffff

// .carousel-inner
//   height: 100%
//   img
//     height: 100%
//     object-fit: cover
// .carousel-indicators,.carousel-caption
//   bottom: 100px
</style>
