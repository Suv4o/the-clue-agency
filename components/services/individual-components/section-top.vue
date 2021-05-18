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
          SERVICES
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
          SERVICES
        </p>
      </div>
      <p class="title-text-position title-style" :class="classTextAnimation">
        <slot name="title"></slot>
      </p>
      <p class="text-style text-position" :class="classMainTextAnimation"><slot name="text"></slot></p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      classMovingText: "",
      classMovingTextSmall: "",
      classTextAnimation: "animated slow fadeInLeftModified-10",
      classMainTextAnimation: "animated slow fadeInLeftModified-10",
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
        // this.classTextAnimation = "animated slow fadeOutLeft";
        // this.classMainTextAnimation = "animated slow fadeOutLeft";
      }
      if (e.percentTop > 0.2) {
        // this.classTextAnimation = "animated slow fadeInLeft";
        // this.classMainTextAnimation = "animated slow delay-1s fadeInLeft";
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
        this.scrollObjectMovingTextValue = 0 + increaseRate * 1.5;
        this.scrollObjectMovingText.left =
          this.scrollObjectMovingTextValue + "%";
        // //Small Screen
        this.scrollObjectMovingTextValueSmall = 0 + increaseRate * 2;
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

.title-style {
  height: 76px;
  font-family: Montserrat;
  font-size: 80px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.55;
  letter-spacing: 2px;
  text-align: left;
  color: #343434;
}

.text-style {
  width: 897px;
  height: 141px;
  font-family: Montserrat;
  font-size: 28px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: 2.8px;
  text-align: left;
  color: #000000;
}

.title-text-position {
  position: absolute;
  top: 47%;
  left: 17%;
}

.text-position {
  position: absolute;
  top: 65%;
  left: 17%;
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

  .title-style {
    height: 61px;
    font-family: Montserrat;
    font-size: 64px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.55;
    letter-spacing: 2px;
    text-align: left;
    color: #343434;
  }

  .text-style {
    width: 718px;
    height: 113px;
    font-family: Montserrat;
    font-size: 22px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.36;
    letter-spacing: 2.8px;
    text-align: left;
    color: #000000;
  }

  .title-text-position {
    position: absolute;
    top: 48%;
    left: 17%;
  }

  .text-position {
    position: absolute;
    top: 65%;
    left: 17%;
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

  .title-style {
    height: 49px;
    font-family: Montserrat;
    font-size: 51px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.55;
    letter-spacing: 2px;
    text-align: left;
    color: #343434;
  }

  .text-style {
    width: 620px;
    height: 90px;
    font-family: Montserrat;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.36;
    letter-spacing: 2.8px;
    text-align: left;
    color: #000000;
  }

  .title-text-position {
    position: absolute;
    top: 48%;
    left: 17%;
  }

  .text-position {
    position: absolute;
    top: 65%;
    left: 17%;
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

  .title-style {
    height: 39px;
    font-family: Montserrat;
    font-size: 41px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.55;
    letter-spacing: 2px;
    text-align: left;
    color: #343434;
  }

  .text-style {
    width: 510px;
    height: 72px;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.36;
    letter-spacing: 2.8px;
    text-align: left;
    color: #000000;
  }

  .title-text-position {
    position: absolute;
    top: 47%;
    left: 17%;
  }

  .text-position {
    position: absolute;
    top: 64%;
    left: 17%;
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

  .title-style {
    height: 27px;
    font-family: Montserrat;
    font-size: 29px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.55;
    letter-spacing: 1px;
    text-align: left;
    color: #343434;
  }

  .text-style {
    width: 357px;
    height: 50px;
    font-family: Montserrat;
    font-size: 10px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.36;
    letter-spacing: 1.8px;
    text-align: left;
    color: #000000;
  }

  .title-text-position {
    position: absolute;
    top: 47%;
    left: 17%;
  }

  .text-position {
    position: absolute;
    top: 64%;
    left: 17%;
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

  .title-style {
    height: 27px;
    font-family: Montserrat;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.55;
    letter-spacing: 1px;
    text-align: left;
    color: #343434;
  }

  .text-style {
    width: 300px;
    height: 50px;
    font-family: Montserrat;
    font-size: 10px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.36;
    letter-spacing: 1.8px;
    text-align: left;
    color: #000000;
  }

  .title-text-position {
    position: absolute;
    top: 27%;
    left: 10%;
  }

  .text-position {
    position: absolute;
    top: 44%;
    left: 10%;
  }
}

@media only screen and (max-width: 350px) {
  .title-text-position {
    position: absolute;
    top: 27%;
    left: 5%;
  }

  .text-position {
    position: absolute;
    top: 44%;
    left: 5%;
  }
}
</style>
