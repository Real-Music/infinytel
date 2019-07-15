<template>
  <div id="baseIndex">
    <nav>
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
    </nav>
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
      dialog: false,
      nav: []
    };
  }
};
</script>
