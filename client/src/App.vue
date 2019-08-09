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
  font-family: "Open Sans", sans-serif, "ubuntu" !important;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  line-height: 1.5;
  transition: all 150ms ease-in-out;
}

body {
  all: unset !important;
}
:root {
  --base-color: #1149b6;
  --base-green: #3dbd00;
  --white-bg: #ffffff;
  --white-text: #ffffff;
}

h3 {
  color: var(--base-color);
  font-weight: bolder !important;
  letter-spacing: -1.5px;
}

section a {
  text-decoration: none;
  padding: 7px 10px;
  color: white;
  background: var(--base-green);
  border-radius: 5px;
}

button {
  padding: 7px 20px;
  color: white;
  background: var(--base-green);
  outline: none;
  border: none;
  border-radius: 5px !important;
}

.carousel-control-next,
.carousel-control-prev {
  z-index: 10;
}

.carousel-inner {
  height: 100%;
}
.carousel-inner img {
  height: 100%;
  object-fit: cover;
}
.carousel-indicators,
.carousel-caption,
.carousel-caption h5,
.carousel-caption p {
  bottom: 100px !important;
  z-index: 10 !important;
}
</style>
