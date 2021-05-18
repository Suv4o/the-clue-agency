<template>
  <section v-view="isVisibleGrow" id="sectionGrow">
    <div class="w3-display-container">
      <!-- Large Bacground -->
      <div class="the-clue-gray the-clue-hide-md grow-section-size">
        <p
          class="grow the-clue-absolute"
          :class="classGrow"
          :style="scrollObjectGrow"
        >
          grow.
        </p>
      </div>
      <!-- Small Bacground -->
      <div
        class="the-clue-gray the-clue-hide-md w3-hide the-clue-show-md the-clue-grow-section-size-small"
      >
        <p
          class="grow the-clue-absolute"
          :class="classGrow"
          :style="scrollObjectGrow"
        >
          grow.
        </p>
      </div>
      <div class="the-clue-grow-text-top-middle">
        <div class="heading-grow-section the-clue-hide-md" :class="classTitle">
          TheClue is a branding agency <br />
          evolving industries from strategy to experience
        </div>
        <div class="heading-grow-section w3-hide the-clue-show-md" :class="classTitle">
          TheClue is a branding agency
          evolving industries from strategy to experience
        </div>
        <div class="main-text-grow-section the-clue-margine-top-glow-1" :class="classText">
          We are a small team of creative enthusiasts who are obsessively passionate about design. This passion drives us to create innovative designs and bring the best to the table. Founded in 2014 the first office officially opened in Melbourne. The Clue Agency has come a long way from its beginnings, and today we have an office in Bitola, Macedonia also.
        </div>
        <div class="the-clue-margine-top-glow-2 animated pulseModifiedHover">
          <nuxt-link
            class="learn-more-about-us the-clue-underline-text-white-yellow w3-hover-text-white"
            :class="classLink"
            to="/within"
            >learn more about us</nuxt-link
          >
        </div>
      <div class="grow-video-top-middle" :class="classImg">
        <img src="/video/video-replacement.jpg" class="video-plaer-size" alt="The Team" />
      </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      scrollPercentTop: "",
      scrollSubstractor: true,
      scrollSubstractorNumber: "",
      classTitle: "w3-hide",
      classText: "w3-hide",
      classImg: "w3-hide",
      classLink: "w3-hide",
      playerOptions: {
        muted: true,
        language: "en",
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        height: "360",
        sources: [
          {
            type: "video/mp4",
            src: "/video/Sliding_Wardrobe_wAnimation_Final.mp4"
          }
        ],
        poster: "/video/videoPoster.jpg"
      },
      classGrow: "",
      scrollObjectGrow: {
        top: "10%",
        left: "55vw"
      },
      scrollObjectGrowValue: {
        top: 10,
        left: 55
      }
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

      // if (e.percentTop < 0.2) {
      //   this.classTitle = "animated fadeOutRight";
      //   this.classText = "animated fadeOutLeft";
      //   this.classImg = "animated fadeOutRight";
      // }

      // if (e.percentTop > 0.2 && e.percentTop < 0.9) {
      //   this.classTitle = "animated slow fadeInLeftModified-30";
      //   this.classText = "animated slow animated.delay-07 fadeInLeftModified-30";
      //   // this.classImg = "animated slow fadeInLeftModified-30";
      // }

      // if (e.percentTop > 0.2 && e.percentTop < 0.7) {
      //   this.classImg = "animated slow fadeInLeftModified-30";
      // }

      if (e.percentTop > 0.2 && e.percentTop < 0.9) {
        this.classTitle = "animated slow fadeInLeftModified-30";
        this.classText =
          "animated slow animated delay-07 fadeInLeftModified-30";
        this.classImg = "animated slow delay-07 fadeIn";
        this.classLink = "animated slow delay-07 fadeIn";
      }

      // if (e.percentTop > 0.4 && e.percentTop < 0.7) {
      //   this.classImg = "animated slow fadeInLeftModified-30";
      // }

      // if (e.percentTop > 1) {
      //   this.classTitle = "animated fadeOutRight";
      //   this.classText = "animated fadeOutLeft";
      //   this.classImg = "animated fadeOutRight";
      // }
    },
    onScroll() {
      var winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      var height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;

      var div = document.getElementById("sectionGrow");
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
        this.scrollObjectGrowValue = 55 - increaseRate * 1.5;
        this.scrollObjectGrow.left = this.scrollObjectGrowValue + "%";
        // //Small Screen
        // this.scrollObjectSmallValue.top = 90 - increaseRate;
        // this.scrollObjectSmall.top = this.scrollObjectSmallValue.top + "%";
      }
    }
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    }
  }
};
</script>

<style scoped>
.grow-section-size {
  height: 80vw;
}

.grow-video-top-middle {
  margin-top: 7vw;
  width: 77vw;
}

@media (max-height: 800px) and (min-width: 1335px) {
  /* -30% */
  .heading-grow-section {
    font-family: Montserrat;
    font-size: 34px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.19;
    letter-spacing: 2.1px;
    text-align: left;
    color: #fcfcfc;
  }

  .main-text-grow-section {
    width: 1000px;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: 1.35px;
    text-align: left;
    color: #ffffff;
  }
  .the-clue-margine-top-glow-1 {
    margin-top: 1.7rem;
  }

  .the-clue-margine-top-glow-2 {
    margin-top: 1rem;
  }

  .learn-more-about-us {
    height: 15px;
    font-family: Montserrat;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.27;
    letter-spacing: 1.65px;
    text-align: left;
    color: #ffffff;
  }

  .the-clue-grow-video-top-middle {
    position: absolute;
    top: 43%;
    padding-left: 25%;
    padding-right: 25%;
  }
}

@media only screen and (max-width: 1335px) {
  /* -20% */

  .the-clue-grow-section-size {
    height: 110vh;
    min-height: 1000px;
  }

  .heading-grow-section {
    font-family: Montserrat;
    font-size: 34px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.19;
    letter-spacing: 2.1px;
    text-align: left;
    color: #fcfcfc;
  }

  .main-text-grow-section {
    width: 658px;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: 1.35px;
    text-align: left;
    color: #ffffff;
  }

  .the-clue-margine-top-glow-1 {
    margin-top: 2.4rem;
  }

  .the-clue-margine-top-glow-2 {
    margin-top: 1.4rem;
  }

  .learn-more-about-us {
    height: 22px;
    font-family: Montserrat;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.27;
    letter-spacing: 1.65px;
    text-align: left;
    color: #ffffff;
  }
}

@media only screen and (max-width: 1050px) {
  .heading-grow-section {
    font-family: Montserrat;
    font-size: 28px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.19;
    letter-spacing: 2.1px;
    text-align: left;
    color: #fcfcfc;
  }

  .the-clue-grow-section-size {
    height: 100vh;
    min-height: 1000px;
  }
}

@media (min-height: 1000px) and (max-width: 1400px) and (min-width: 1200px) {
  .the-clue-grow-section-size {
    height: 120vh;
  }
}

@media only screen and (max-width: 992px) {
  /* -20% */
  .heading-grow-section {
    font-family: Montserrat;
    font-size: 34px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.19;
    letter-spacing: 2.1px;
    text-align: left;
    color: #fcfcfc;
  }

  .main-text-grow-section {
    width: 658px;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: 1.35px;
    text-align: left;
    color: #ffffff;
  }

  .the-clue-margine-top-glow-1 {
    margin-top: 2.4rem;
  }

  .the-clue-margine-top-glow-2 {
    margin-top: 1.4rem;
  }

  .learn-more-about-us {
    height: 22px;
    font-family: Montserrat;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.27;
    letter-spacing: 1.65px;
    text-align: left;
    color: #ffffff;
  }

  .grow-video-top-middle {
    margin-top: 10vw;
  }
}

@media only screen and (max-width: 860px) {
  /* -20% */
  .heading-grow-section {
    font-family: Montserrat;
    font-size: 35px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.19;
    letter-spacing: 2.1px;
    text-align: left;
    color: #fcfcfc;
  }

  .main-text-grow-section {
    width: 526px;
    font-family: Montserrat;
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: 1.35px;
    text-align: left;
    color: #ffffff;
  }

  .the-clue-margine-top-glow-1 {
    margin-top: 1.9rem;
  }

  .the-clue-margine-top-glow-2 {
    margin-top: 1.12rem;
  }

  .learn-more-about-us {
    height: 18px;
    font-family: Montserrat;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.27;
    letter-spacing: 1.65px;
    text-align: left;
    color: #ffffff;
  }
}

@media only screen and (max-width: 685px) {
  /* -20% */
  .heading-grow-section {
    font-family: Montserrat;
    font-size: 35px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.19;
    letter-spacing: 2.1px;
    text-align: left;
    color: #fcfcfc;
  }

  .main-text-grow-section {
    width: 515px;
    font-family: Montserrat;
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: 1.35px;
    text-align: left;
    color: #ffffff;
  }

  .the-clue-margine-top-glow-1 {
    margin-top: 1.5rem;
  }

  .the-clue-margine-top-glow-2 {
    margin-top: 0.9rem;
  }

  .learn-more-about-us {
    height: 14px;
    font-family: Montserrat;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.27;
    letter-spacing: 1.65px;
    text-align: left;
    color: #ffffff;
  }
}

@media only screen and (max-width: 560px) {
  /* - 20% */

  .the-clue-grow-text-top-middle {
    position: absolute;
    left: 12%;
    top: 25%;
  }

  .heading-grow-section {
    font-family: Montserrat;
    font-size: 30px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.19;
    letter-spacing: 2.1px;
    text-align: left;
    color: #fcfcfc;
  }

  .main-text-grow-section {
    width: 421px;
    font-family: Montserrat;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: 1.35px;
    text-align: left;
    color: #ffffff;
  }

  .the-clue-margine-top-glow-1 {
    margin-top: 1.2rem;
  }

  .the-clue-margine-top-glow-2 {
    margin-top: 0.72rem;
  }

  .learn-more-about-us {
    height: 11px;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.27;
    letter-spacing: 1.65px;
    text-align: left;
    color: #ffffff;
  }
}

@media only screen and (max-width: 500px) {
  /* - 30% */
  .heading-grow-section {
    font-family: Montserrat;
    font-size: 25px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.19;
    letter-spacing: 2.1px;
    text-align: left;
    color: #fcfcfc;
  }

  .main-text-grow-section {
    width: 295px;
    font-family: Montserrat;
    font-size: 11px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: 1.35px;
    text-align: left;
    color: #ffffff;
  }

  .the-clue-margine-top-glow-1 {
    margin-top: 0.84rem;
  }

  .the-clue-margine-top-glow-2 {
    margin-top: 0.5rem;
  }

  .learn-more-about-us {
    height: 8px;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.27;
    letter-spacing: 1.65px;
    text-align: left;
    color: #ffffff;
  }
}

@media only screen and (max-width: 350px) {
  .heading-grow-section {
    font-family: Montserrat;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.19;
    letter-spacing: 2.1px;
    text-align: left;
    color: #fcfcfc;
  }

  .main-text-grow-section {
    width: 250px;
    font-family: Montserrat;
    font-size: 8px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: 1.35px;
    text-align: left;
    color: #ffffff;
  }

  .learn-more-about-us {
    height: 8px;
    font-family: Montserrat;
    font-size: 10px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.27;
    letter-spacing: 1.65px;
    text-align: left;
    color: #ffffff;
  }
}

@media (max-height: 800px) and (max-width: 992px) and (min-width: 801px) {
  .the-clue-grow-section-size-small {
    height: 920px;
  }
}

@media (max-height: 550px) and (max-width: 800px) {
  .the-clue-grow-section-size-small {
    height: 920px;
  }

  .main-text-grow-section {
    width: 490px;
    font-family: Montserrat;
    font-size: 11px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: 1.35px;
    text-align: left;
    color: #ffffff;
  }
}
</style>
