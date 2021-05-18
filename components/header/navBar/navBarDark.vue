<template>
  <b-navbar toggleable="lg" type="light" class="the-clue-transparent-background" style="z-index: 100000;">
    <b-navbar-brand class="the-clue-margine-left-90 the-clue-margine-x-30">
      <nuxt-link to="/">
        <img src="~assets/logos/theClueLogoGray.svg" class="" />
      </nuxt-link>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse
      class="the-clue-margine-right-nav w3-center"
      id="nav-collapse"
      is-nav
    >
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto the-clue-nav-bar-height">
        <b-nav-item class="animated pulseHover">
          <nuxt-link
            class="the-clue-text-dark-gray the-clue-font-16 the-clue-line-height the-clue-underline-text-non-hover mr-4"
            to="/work"
            >WORK</nuxt-link
          >
        </b-nav-item>
        <b-nav-item class="animated pulseHover">
          <nuxt-link
            class="the-clue-text-dark-gray the-clue-font-16 the-clue-line-height the-clue-underline-text-non-hover mr-4"
            to="/services"
            >SERVICES</nuxt-link
          >
        </b-nav-item>
        <b-nav-item class="animated pulseHover">
          <nuxt-link
            class="the-clue-text-dark-gray the-clue-font-16 the-clue-line-height the-clue-underline-text-non-hover mr-4"
            to="/within"
          >
            WITHIN</nuxt-link
          >
        </b-nav-item>
        <b-nav-item class="animated pulseHover">
          <nuxt-link
            class="the-clue-text-dark-gray the-clue-font-16 the-clue-line-height the-clue-underline-text-non-hover mr-4"
            to="/insights"
            >INSIGHTS</nuxt-link
          >
        </b-nav-item>
        <b-nav-item class="animated pulseHover">
          <nuxt-link
            class="the-clue-text-dark-gray the-clue-font-16 the-clue-line-height the-clue-underline-text-non-hover mr-4"
            to="/contact"
            >CONTACT</nuxt-link
          >
        </b-nav-item>
        <b-nav-item class="animated pulseHover" href="https://calendly.com/theclueagency" target="_blank">
          <span href="https://calendly.com/theclueagency" target="_blank"
            class="borderNavTop-gray the-clue-text-dark-gray the-clue-font-16 the-clue-line-height the-clue-underline-text-non-hover the-clue-border-gray"
            >FREE CONSULTATION</span
          >
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style scoped>
@media only screen and (max-width: 1460px) {
  .the-clue-margine-right-nav {
    margin-right: 60px;
  }

  .the-clue-margine-left-90 {
    margin-left: 45px;
  }
}

@media only screen and (max-width: 1280px) {
  .the-clue-margine-right-nav {
    margin-right: 10px;
  }

  .the-clue-margine-left-90 {
    margin-left: 10px;
  }

  .the-clue-font-16 {
    font-size: 14px;
  }
}

@media only screen and (max-width: 991px) {
  .the-clue-font-16 {
    font-size: 16px;
  }

  .the-clue-nav-bar-height {
    height: 110vh !important;
    overflow-y: scroll !important;
  }
}
</style>
