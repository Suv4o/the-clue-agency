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
          WITHIN
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
          WITHIN
        </p>
      </div>
      <p class="capture-text-position capture-text" :class="classTextAnimation">
        YOUR BRAND MATTERS.
      </p>
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
      if (e.percentTop < 0.15) {
        // this.classTextAnimation = "animated slow fadeOutRight";
      }
      if (e.percentTop > 0.15) {
        // this.classTextAnimation = "animated slow fadeInLeft";
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
        this.scrollObjectMovingTextValue = 0 + increaseRate * 2;
        this.scrollObjectMovingText.left =
          this.scrollObjectMovingTextValue + "%";
        // //Small Screen
        this.scrollObjectMovingTextValueSmall = 0 + increaseRate * 3;
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

.capture-text {
  width: 890px;
  height: 126px;
  font-family: Montserrat;
  font-size: 40px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.1;
  letter-spacing: 1px;
  text-align: left;
  color: #343434;
}

.capture-text-position {
  position: absolute;
  top: 55%;
  left: 20%;
}

@media only screen and (max-width: 1335px) {
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
    letter-spacing: -14px;
    text-align: right;
    color: #e5e5e5;
  }

  .the-clue-title-section-size {
    height: 360px;
  }

  .capture-text {
    width: 712px;
    height: 101px;
    font-family: Montserrat;
    font-size: 32px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.1;
    letter-spacing: 1px;
    text-align: left;
    color: #343434;
  }

  .capture-text-position {
    position: absolute;
    top: 55%;
    left: 16%;
  }
}

@media only screen and (max-width: 992px) {
}

@media only screen and (max-width: 860px) {
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
    letter-spacing: -12px;
    text-align: right;
    color: #e5e5e5;
  }

  .the-clue-title-section-size {
    height: 288px;
  }

  .capture-text {
    width: 590px;
    height: 81px;
    font-family: Montserrat;
    font-size: 26px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.1;
    letter-spacing: 1px;
    text-align: left;
    color: #343434;
  }

  .capture-text-position {
    position: absolute;
    top: 55%;
    left: 13%;
  }
}

@media only screen and (max-width: 640px) {
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
    letter-spacing: -8px;
    text-align: right;
    color: #e5e5e5;
  }

  .the-clue-title-section-size {
    height: 230px;
  }

  .capture-text {
    width: 490px;
    height: 65px;
    font-family: Montserrat;
    font-size: 21px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.1;
    letter-spacing: 1px;
    text-align: left;
    color: #343434;
  }

  .capture-text-position {
    position: absolute;
    top: 55%;
    left: 13%;
  }
}

@media only screen and (max-width: 540px) {
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

  .capture-text {
    width: 319px;
    height: 45px;
    font-family: Montserrat;
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.1;
    letter-spacing: 1px;
    text-align: left;
    color: #343434;
  }

  .capture-text-position {
    position: absolute;
    top: 55%;
    left: 13%;
  }
}

@media only screen and (max-width: 540px) {
  .capture-text {
    width: 345px;
    height: 45px;
    font-family: Montserrat;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.1;
    letter-spacing: 1px;
    text-align: left;
    color: #343434;
  }

  .capture-text-position {
    position: absolute;
    top: 55%;
    left: 13%;
  }
}

@media only screen and (max-width: 350px) {
  .capture-text-position {
    position: absolute;
    top: 55%;
    left: 7%;
  }
}
</style>
