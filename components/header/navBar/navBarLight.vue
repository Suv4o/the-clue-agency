<template>
  <b-navbar toggleable="lg" type="light" class="w3-white">
    <b-navbar-brand class="the-clue-margine-left-90 the-clue-margine-x-30">
      <nuxt-link to="/">
        <img src="~assets/logos/theClueLogoGray.svg" />
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
        <b-nav-item
          class="animated pulseHover"
        >
          <nuxt-link
            class="w3-text-black the-clue-font-16 the-clue-line-height the-clue-underline-text-non-hover the-clue-text-hover-gray mr-4"
            to="/work"
          >
            WORK</nuxt-link
          >
        </b-nav-item>
        <b-nav-item
          class="animated pulseHover"
        >
          <nuxt-link
            class="w3-text-black the-clue-font-16 the-clue-line-height the-clue-underline-text-non-hover the-clue-text-hover-gray mr-4"
            to="/services"
          >
            SERVICES</nuxt-link
          >
        </b-nav-item>
        <b-nav-item
          class="animated pulseHover"
        >
          <nuxt-link
            class="w3-text-black the-clue-font-16 the-clue-line-height the-clue-underline-text-non-hover the-clue-text-hover-gray mr-4"
            to="/within"
          >
            WITHIN</nuxt-link
          >
        </b-nav-item>
        <b-nav-item
          class="animated pulseHover"
        >
          <nuxt-link
            class="w3-text-black the-clue-font-16 the-clue-line-height the-clue-underline-text-non-hover the-clue-text-hover-gray mr-4"
            to="/insights"
          >
            INSIGHTS</nuxt-link
          >
        </b-nav-item>
        <b-nav-item
          class="animated pulseHover"
        >
          <nuxt-link
            class="w3-text-black the-clue-font-16 the-clue-line-height the-clue-underline-text-non-hover the-clue-text-hover-gray mr-4"
            to="/contact"
          >
            CONTACT</nuxt-link
          >
        </b-nav-item>
        <b-nav-item href="https://calendly.com/theclueagency" target="_blank"
          class="animated pulseHover"
        >
          <span
            class="borderNavTop-gray w3-text-black the-clue-font-16 the-clue-line-height the-clue-underline-text-non-hover the-clue-border-gray"
            to="/freeconsultation"
          >
            FREE CONSULTATION</span
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
.navbar-brand .nuxt-link-active::before {
  content: "";
}

.navbar-brand .nuxt-link-exact-active::before {
  content: "";
}

.nuxt-link-exact-active {
  font-weight: bold;
}

.nuxt-link-exact-active::before {
  content: "— ";
}

.nuxt-link-active {
  font-weight: bold;
}

.nuxt-link-active::before {
  content: "— ";
}

.activeLine::before {
  content: "— ";
}
.borderNavTop {
  position: relative;
}

.borderNavTop:hover:after {
  padding: 0;
  margin: 0;
  display: block;
  height: 1px;
  content: "";
  width: 45%;
  background: #fff000;
  position: absolute;
  right: 52%;
  top: -1px;
}

.borderNavTop:after {
  padding: 0;
  margin: 0;
  display: block;
  height: 1px;
  content: "";
  width: 45%;
  background: transparent;
  position: absolute;
  right: 52%;
  top: -1px;
}

.borderNavTop:hover:before {
  padding: 0;
  margin: 0;
  display: block;
  content: "";
  width: 45%;
  height: 1px;
  background: #fff000;
  position: absolute;
  left: 52%;
  bottom: -1px;
}

.borderNavTop:before {
  padding: 0;
  margin: 0;
  display: block;
  content: "";
  width: 45%;
  height: 1px;
  background: transparent;
  position: absolute;
  left: 52%;
  bottom: -1px;
}

.the-clue-border {
  padding: 3px;
  border: 1px solid #fff000;
}

.the-clue-border:hover {
  padding: 3px;
  border: 1px solid transparent;
}

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
    height: 100vh !important;
    overflow-y: scroll !important;
  }

  .activeLine::before {
    content: "— ";
  }
}
</style>
