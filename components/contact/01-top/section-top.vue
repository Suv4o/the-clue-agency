<template>
  <section v-view="isVisibleGrow" id="sectionTop">
    <div class="w3-display-container">
      <!-- Large Screen -->
      <div class="w3-white the-clue-hide-md the-clue-title-section-size">
        <p
          class="moving-text the-clue-absolute"
          :class="classMovingText"
          :style="scrollObjectMovingText"
        >
          CONTACT
        </p>
      </div>
      <!-- Small Screen -->
      <div
        class="w3-white w3-hide the-clue-show-md the-clue-title-section-size"
      >
        <p
          class="moving-text the-clue-absolute"
          :class="classMovingTextSmall"
          :style="scrollObjectMovingTextSmall"
        >
          CONTACT
        </p>
      </div>
      <div class="capture-text-position" :class="classTextAnimation">
          <div class="select-buttons animated pulseHover"><nuxt-link to="/contact/new-project" class="w3-text-black px-4 the-clue-text-hover-dark-gray the-clue-hover-underline-text-yellow">{{textLink1}}</nuxt-link></div>
          <div class="select-buttons animated pulseHover"><nuxt-link to="/contact/career-application" class="w3-text-black px-4 the-clue-text-hover-dark-gray the-clue-hover-underline-text-yellow">{{textLink2}}</nuxt-link></div>
          <div class="select-buttons animated pulseHover"><nuxt-link to="/contact/new-enquiry" class="w3-text-black px-4 the-clue-text-hover-dark-gray the-clue-hover-underline-text-yellow">{{textLink3}}</nuxt-link></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      textLink1: " New Project Enquiry",
      textLink2: " Career Application",
      textLink3: " General Enquiry",
      classMovingText: "",
      classMovingTextSmall: "",
      classTextAnimation: "animated slow fadeInLeftModified-10",
      scrollObjectMovingText: {
        top: "60%",
        left: "0%"
      },
      scrollObjectMovingTextValue: {
        top: 60,
        left: 0
      },
      scrollObjectMovingTextSmall: {
        top: "60%",
        left: "0%"
      },
      scrollObjectMovingTextValueSmall: {
        top: 60,
        left: 0
      },
      scrollPercentTop: "",
      scrollSubstractor: true,
      scrollSubstractorNumber: ""
    };
  },
  created() {
    if (process.client) {
      window.addEventListener("scroll", this.onScroll);
    }
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener("scroll", this.onScroll);
    }
  },
  methods: {
    isVisibleGrow(e) {
      this.scrollPercentTop = e.percentTop;
      if (e.percentTop < 0.2) {
        // this.classTextAnimation = "animated slow fadeOutRight";
      }
      if (e.percentTop > 0.2) {
        this.classTextAnimation = "animated slow fadeInLeftModified-10";
      }
    },
    onScroll() {
      var winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      var height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;

      var div = document.getElementById("sectionTop");
      var rect = div.getBoundingClientRect();
      var yTop = rect.top;
      var yBottom = rect.bottom;

      if (this.scrollPercentTop < 1 && this.scrollPercentTop > 0) {
        if (this.scrollSubstractor) {
          this.scrollSubstractorNumber = scrolled;
          this.scrollSubstractor = false;
        }
        var increaseRate = scrolled - this.scrollSubstractorNumber;
        //Large Screen
        this.scrollObjectMovingTextValue = 0 + increaseRate * 1;
        this.scrollObjectMovingText.left =
          this.scrollObjectMovingTextValue + "%";
        // //Small Screen
        this.scrollObjectMovingTextValueSmall = 0 + increaseRate * 1;
        this.scrollObjectMovingTextSmall.left =
          this.scrollObjectMovingTextValueSmall + "%";
      }
    }
  }
};
</script>

<style scoped>
.moving-text {
  width: 966px;
  height: 217px;
  font-family: Montserrat;
  font-size: 300px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.27;
  letter-spacing: -18px;
  text-align: right;
  color: #e5e5e5;
}

.the-clue-title-section-size {
  height: 450px;
}

.capture-text-position {
  position: absolute;
  top: 36%;
  left: 20%;
}

.select-buttons {
  font-family: Montserrat;
  font-size: 40px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: 1px;
  text-align: left;
  color: #343434;
}

.nuxt-link-exact-active {
  font-weight: 800;
}

.nuxt-link-exact-active::before {
  position: absolute;
  left: -30px;
  content: "—";
}

@media only screen and (max-width: 1400px) {
  /* - 20% */

  .moving-text {
    width: 773px;
    height: 174px;
    font-family: Montserrat;
    font-size: 240px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.27;
    letter-spacing: -13px;
    text-align: right;
    color: #e5e5e5;
  }

  .the-clue-title-section-size {
    height: 360px;
  }

  .select-buttons {
    font-family: Montserrat;
    font-size: 32px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 1px;
    text-align: left;
    color: #343434;
  }

  .nuxt-link-exact-active::before {
    position: absolute;
    left: -24px;
    content: "—";
  }
}

/* @media only screen and (max-width: 992px) {
} */

@media only screen and (max-width: 1100px) {
  /* - 20% */

  .moving-text {
    width: 618px;
    height: 139px;
    font-family: Montserrat;
    font-size: 192px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.27;
    letter-spacing: -10px;
    text-align: right;
    color: #e5e5e5;
  }

  .the-clue-title-section-size {
    height: 288px;
  }

  .select-buttons {
    font-family: Montserrat;
    font-size: 26px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 1px;
    text-align: left;
    color: #343434;
  }

  .nuxt-link-exact-active::before {
    position: absolute;
    left: -19px;
    content: "—";
  }
}

@media only screen and (max-width: 880px) {
  /* - 20% */

  .moving-text {
    width: 494px;
    height: 111px;
    font-family: Montserrat;
    font-size: 154px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.27;
    letter-spacing: -6px;
    text-align: right;
    color: #e5e5e5;
  }

  .the-clue-title-section-size {
    height: 230px;
  }

  .select-buttons {
    font-family: Montserrat;
    font-size: 21px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 1px;
    text-align: left;
    color: #343434;
  }

  .nuxt-link-exact-active::before {
    position: absolute;
    left: -8px;
    content: "—";
  }
}

@media only screen and (max-width: 710px) {
  /* - 30% */
  .moving-text {
    width: 346px;
    height: 78px;
    font-family: Montserrat;
    font-size: 108px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.27;
    letter-spacing: -5px;
    text-align: right;
    color: #e5e5e5;
  }

  .the-clue-title-section-size {
    height: 161px;
  }

  .select-buttons {
    font-family: Montserrat;
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 1px;
    text-align: left;
    color: #343434;
  }

  .nuxt-link-exact-active::before {
    position: absolute;
    left: -8px;
    content: "—";
  }
}

@media only screen and (max-width: 540px) {
  .moving-text {
    width: 277px;
    height: 62px;
    font-family: Montserrat;
    font-size: 73px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.27;
    letter-spacing: -3px;
    text-align: right;
    color: #e5e5e5;
  }

  .select-buttons {
    font-family: Montserrat;
    font-size: 11px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 1px;
    text-align: left;
    color: #343434;
  }

  .capture-text-position {
    position: absolute;
    top: 36%;
    left: 15%;
  }

  .nuxt-link-exact-active::before {
    position: absolute;
    left: 8px;
    content: "—";
  }
}

@media only screen and (max-width: 350px) {
  .capture-text-position {
    position: absolute;
    top: 36%;
    left: 15%;
  }
}
</style>
