<template>
  <section v-view="isVisible">
    <div class="w3-display-container w3-text-white">
      <!-- Large Screen -->
      <div class="the-clue-light-gray the-clue-top-section-size">
        <video
          autoplay
          muted
          loop
          class="margine-top-video width-video transform-video-on-small-screen"
        >
          <source src="/video/header-loop video.mp4" type="video/mp4" />
        </video>
      </div>

      <!-- Main Body -->

      <div
        class="the-clue-display-middle-slightly-left"
        :class="captureHideShow"
      >
        <div :class="classTextAnimation">
          <p class="We-create-brands-that-stand-out-grow">
            Creating brands that stand out & grow.
          </p>
          <div
            class="the-clue-strategy-height"
            :class="brandStrategyOpacity0"
            style="opacity: 0;"
          >
            <div class="the-clue-line-1 the-clue-absolute mt-4-"></div>
            <p class="BRAND-STRATEGY ml-10">BRAND STRATEGY</p>
          </div>
          <div
            class="the-clue-strategy-height"
            :class="brandStrategy"
            style="overflow: hidden;"
            id="brandStrategy"
          >
            <div class="the-clue-line-1 the-clue-absolute mt-4-"></div>
            <p class="BRAND-STRATEGY ml-10" :class="animationSlideInOut1">
              Brand Identity Design
            </p>
            <div class="the-clue-line-1 the-clue-absolute mt-4-"></div>
            <p class="BRAND-STRATEGY ml-10" :class="animationSlideInOut2">
              Product Identity Design
            </p>
            <div class="the-clue-line-1 the-clue-absolute mt-4-"></div>
            <p class="BRAND-STRATEGY ml-10" :class="animationSlideInOut3">
              Branding Campaigns
            </p>
            <div class="the-clue-line-1 the-clue-absolute mt-4-"></div>
            <p class="BRAND-STRATEGY ml-10" :class="animationSlideInOut1">
              Brand Identity Design
            </p>
          </div>
        </div>
      </div>
      <div
        class="the-clue-display-bottom-kind-of-right animated infinite pulseHover"
        style="z-index: 100000;"
      >
        <div class="hoverMovement">
          <div
            class="the-clue-absolute the-clue-line-2 mt-5-explore ml-100 movement"
          ></div>
          <button
            @click="scrollToSectionOne(sectionTopPosition, Number(1))"
            class="w3-button pl-8 the-clue-hover-dark-gray the-clue-text-hover-gray Explore-Button EXPLORE"
            id="exploreId"
          >
            <span
              class="w3-text-white the-clue-underline-text-non-hover the-clue-hover-dark-gray the-clue-text-hover-gray"
              >EXPLORE</span
            >
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      animationSlideInOut1: "",
      animationSlideInOut2: "",
      animationSlideInOut3: "",
      brandstrategyIndex: 0,
      timerBrandstrategy: "",
      isTimerStrategyStart: false,
      classTextAnimation: "animated slow fadeInLeftModified-30",
      brandStrategy: "animated slow animated delay-07 fadeInLeftModified-30",
      brandStrategyOpacity0: "w3-hide",
      captureHideShow: "w3-hide",
      isSmallScreen: false,
      isTimerOn1: false,
      isTimerOn2: true,
      timerVar: "",
      nuxtLinkExplore: "/",
      sectionTopPosition: 0,
      scrollRotation: {
        transform: "rotate(0deg)",
        width: "25%"
      },
      scrollRotationSmall: {
        transform: "rotate(0deg)",
        width: "55%"
      },
      scrollRotationValue: {
        transform: 0,
        width: 25
      },
      scrollRotationValueSmall: {
        transform: 0,
        width: 55
      }
    };
  },
  mounted() {
    let self = this;
    setTimeout(function() {
      var element = document.getElementById("sectionOneScroll");
      var rect = element.getBoundingClientRect();
      if (window.innerWidth <= 992) {
        self.sectionTopPosition = 700;
      } else {
        self.sectionTopPosition = rect.top - 50;
      }
    }, 500);
  },
  destroyed() {
    this.removeTheTimerStrategy();
  },
  methods: {
    isVisible(e) {
      if (e.percentTop < 0.3) {
        let self = this;
        this.isTimerStrategyStart = false;
        this.removeTheTimerStrategy();
        clearTimeout(self.timerVar);
        // this.classTextAnimation = "animated bounceOutRight";
        if (!this.isTimerOn1) {
          setTimeout(function() {
            // self.captureHideShow = "w3-hide";
            // self.brandStrategy = "w3-hide";
            // self.brandStrategyOpacity0 = "w3-show";
          }, 600);
          this.isTimerOn2 = true;
          this.isTimerOn1 = true;
        }
      }
      if (e.percentTop > 0.3) {
        let self = this;
        if (!this.isTimerStrategyStart) {
          this.setTheTimerStrategy();
          this.isTimerStrategyStart = true;
        }
        this.isTimerOn1 = false;
        this.captureHideShow = "";
        // this.classTextAnimation = "animated bounceInLeft";
        if (this.isTimerOn2) {
          self.timerVar = setTimeout(function() {
            // self.brandStrategy = "animated bounceInRightDelay";
            // self.brandStrategy = "animated Faster delay-1s fadeInLeft";
            self.brandStrategyOpacity0 = "w3-hide";
          }, 500);
          this.isTimerOn2 = false;
        }
      }
      // Circle Rotation

      this.scrollRotationValue.transform = 40 - e.percentTop * 85;
      this.scrollRotation.transform = `rotate(${this.scrollRotationValue.transform}deg)`;
      this.scrollRotation.width = `${this.scrollRotationValue.width}%`;

      this.scrollRotationValueSmall.transform = 40 - e.percentTop * 85;
      this.scrollRotationSmall.transform = `rotate(${this.scrollRotationValueSmall.transform}deg)`;
      this.scrollRotationSmall.width = `${this.scrollRotationValueSmall.width}%`;
    },
    setTheTimerStrategy() {
      let self = this;

      this.timerBrandstrategy = setInterval(function() {
        if (window.innerWidth > 1335) {
          var strategy1 = 113;
          var strategy2 = 226;
          var strategy3 = 339;
        }

        if (window.innerWidth <= 1335) {
          var strategy1 = 94;
          var strategy2 = 188;
          var strategy3 = 282;
        }

        if (window.innerWidth <= 860) {
          var strategy1 = 78;
          var strategy2 = 156;
          var strategy3 = 234;
        }

        if (window.innerWidth <= 685) {
          var strategy1 = 66;
          var strategy2 = 132;
          var strategy3 = 198;
        }

        if (window.innerWidth <= 560) {
          var strategy1 = 56;
          var strategy2 = 112;
          var strategy3 = 168;
        }

        if (window.innerWidth <= 500) {
          var strategy1 = 44;
          var strategy2 = 88;
          var strategy3 = 132;
        }

        if (window.innerWidth <= 350) {
          var strategy1 = 44;
          var strategy2 = 88;
          var strategy3 = 132;
        }

        self.brandstrategyIndex++;
        if (self.brandstrategyIndex == 1) {
          document.getElementById("brandStrategy").scroll({
            top: strategy1
          });
          self.animationSlideInOut1 = "animated slideInUp";
          self.animationSlideInOut2 = "animated slideInUp";
          self.animationSlideInOut3 = "animated slideInUp";
          setTimeout(function() {
            self.animationSlideInOut1 = "";
            self.animationSlideInOut2 = "";
            self.animationSlideInOut3 = "";
          }, 1000);
        }
        if (self.brandstrategyIndex == 2) {
          document.getElementById("brandStrategy").scroll({
            top: strategy2
          });
          self.animationSlideInOut1 = "animated slideInUp";
          self.animationSlideInOut2 = "animated slideInUp";
          self.animationSlideInOut3 = "animated slideInUp";
          setTimeout(function() {
            self.animationSlideInOut1 = "";
            self.animationSlideInOut2 = "";
            self.animationSlideInOut3 = "";
          }, 1000);
        }
        if (self.brandstrategyIndex == 3) {
          document.getElementById("brandStrategy").scroll({
            top: strategy3
          });
          self.animationSlideInOut1 = "animated slideInUp";
          self.animationSlideInOut2 = "animated slideInUp";
          self.animationSlideInOut3 = "animated slideInUp";
          setTimeout(function() {
            self.animationSlideInOut1 = "";
            self.animationSlideInOut2 = "";
            self.animationSlideInOut3 = "";
          }, 1000);
          self.brandstrategyIndex = 0;
        }
      }, 3500);
    },
    removeTheTimerStrategy() {
      clearInterval(this.timerBrandstrategy);
    },
    scrollToSectionOne() {
      this.$scrollTo("#sectionOne", 1500);
    }
  }
};
</script>

<style scoped>
/* Animate the Captute Text */

.bounceInRightDelay {
  -webkit-animation-name: bounceInRight;
  animation-name: bounceInRight;
}

.fadeInRightDelay {
  -webkit-animation-name: fadeInRight;
  animation-name: fadeInRight;
}

@-webkit-keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-in {
  0% {
    top: -300px;
    opacity: 0;
  }
  100% {
    top: 0px;
    opacity: 1;
  }
}

@-webkit-keyframes fadeInRight {
  from {
    display: none;
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }

  to {
    display: block;
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

/* Basic Set ups for this component */

.the-clue-strategy-height {
  height: 110px;
}

.margine-top-video {
  margin-top: -8% !important;
}

.width-video {
  width: 100%;
}

@media only screen and (max-width: 1335px) {
  /* - 20% */

  .margine-top-video {
    margin-top: -9.6% !important;
  }

  .the-clue-strategy-height {
    height: 88px;
  }

  .section1-cercles-positions {
    top: 20vh;
    left: 25vw;
  }

  .We-create-brands-that-stand-out-grow {
    width: 768px;
    height: 142px;
    font-family: Montserrat;
    font-size: 64px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: 0.8px;
    text-align: left;
    color: #484848;
  }

  .BRAND-STRATEGY {
    height: 78px;
    font-family: Montserrat;
    font-size: 30px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.53;
    letter-spacing: 0.38px;
    text-align: left;
    color: #484848;
  }

  .the-clue-line-1 {
    width: 56px;
    height: 2px;
    background-color: #484848;
  }

  .mt-4- {
    margin-top: 2.3rem !important;
  }

  .ml-10 {
    margin-left: 5rem !important;
  }

  .pl-8 {
    padding-left: 4rem !important;
  }

  .the-clue-line-2 {
    width: 90px;
    height: 1px;
    background-color: #ffffff;
  }

  .EXPLORE {
    width: 137px;
    height: 17px;
    font-family: Montserrat;
    font-size: 25px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.9;
    letter-spacing: 0.81px;
    text-align: left;
    color: #ffffff;
  }

  .Explore-Button {
    width: 340px;
    height: 61px;
    background-color: #484848;
  }

  .mt-5-explore {
    margin-top: 1.92rem !important;
  }

  .ml-100 {
    margin-left: 17.6rem !important;
  }

  .the-clue-display-bottom-kind-of-right {
    position: absolute;
    right: 200px;
    bottom: -16px;
  }

  .hoverMovement:hover {
    --left: 16px;
  }
}

@media only screen and (max-width: 1145px) {
  .margine-top-video {
    margin-top: -15% !important;
  }

  .section1-cercles-positions {
    top: 22vh;
    left: 25vw;
  }
}

@media (min-height: 1300px) and (max-width: 1100px) and (min-width: 1000px) {
  .section1-cercles-positions {
    top: 28vh;
    left: 25vw;
  }
}

@media (min-height: 1000px) and (max-width: 1400px) and (min-width: 1200px) {
  .section1-cercles-positions {
    top: 20vh;
    left: 25vw;
  }
}

@media only screen and (max-width: 992px) {
  .the-clue-display-middle-slightly-left {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
  }

  .width-video {
    margin-left: -38%;
    width: 170%;
  }
}

@media only screen and (max-width: 860px) {
  /* - 20% */

  /* .margine-top-video {
    margin-top: -15% !important;
  } */

  .width-video {
    margin-left: -45%;
    width: 190%;
  }

  .the-clue-strategy-height {
    height: 70px;
  }

  .section1-cercles-positions-small {
    top: 15vh;
    left: 15vw;
  }

  .We-create-brands-that-stand-out-grow {
    width: 614px;
    height: 114px;
    font-family: Montserrat;
    font-size: 51px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: 0.64px;
    text-align: left;
    color: #484848;
  }

  .BRAND-STRATEGY {
    height: 62px;
    font-family: Montserrat;
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.53;
    letter-spacing: 0.38px;
    text-align: left;
    color: #484848;
  }

  .the-clue-line-1 {
    width: 45px;
    height: 2px;
    background-color: #484848;
  }

  .mt-4- {
    margin-top: 1.9rem !important;
  }

  .ml-10 {
    margin-left: 4rem !important;
  }

  .pl-8 {
    padding-left: 3.2rem !important;
  }

  .the-clue-line-2 {
    width: 72px;
    height: 1px;
    background-color: #ffffff;
  }

  .EXPLORE {
    width: 110px;
    height: 14px;
    font-family: Montserrat;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.52;
    letter-spacing: 0.81px;
    text-align: left;
    color: #ffffff;
  }

  .Explore-Button {
    width: 272px;
    height: 49px;
    background-color: #484848;
  }

  .mt-5-explore {
    margin-top: 1.5rem !important;
  }

  .ml-100 {
    margin-left: 14rem !important;
  }

  .the-clue-display-bottom-kind-of-right {
    position: absolute;
    right: 160px;
    bottom: -13px;
  }

  .hoverMovement:hover {
    --left: 13px;
  }
}

@media only screen and (max-width: 685px) {
  /* - 20% */

  .margine-top-video {
    margin-top: -21% !important;
  }

  .width-video {
    margin-left: -60%;
    width: 225%;
  }

  .the-clue-strategy-height {
    height: 56px;
  }

  .section1-cercles-positions-small {
    top: 18vh;
    left: 15vw;
  }
  .We-create-brands-that-stand-out-grow {
    width: 500px;
    height: 91px;
    font-family: Montserrat;
    font-size: 41px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: 0.64px;
    text-align: left;
    color: #484848;
  }

  .BRAND-STRATEGY {
    height: 50px;
    font-family: Montserrat;
    font-size: 19px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.53;
    letter-spacing: 0.38px;
    text-align: left;
    color: #484848;
  }

  .the-clue-line-1 {
    width: 36px;
    height: 1px;
    background-color: #484848;
  }

  .mt-4- {
    margin-top: 1.5rem !important;
  }

  .ml-10 {
    margin-left: 3rem !important;
  }

  .pl-8 {
    padding-left: 2.56rem !important;
  }

  .the-clue-line-2 {
    width: 58px;
    height: 1px;
    background-color: #ffffff;
  }

  .EXPLORE {
    width: 88px;
    height: 11px;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 0.81px;
    text-align: left;
    color: #ffffff;
  }

  .Explore-Button {
    width: 218px;
    height: 39px;
    background-color: #484848;
  }

  .mt-5-explore {
    margin-top: 1.25rem !important;
  }

  .ml-100 {
    margin-left: 11.2rem !important;
  }

  .the-clue-display-bottom-kind-of-right {
    position: absolute;
    right: 128px;
    bottom: -10px;
  }

  .hoverMovement:hover {
    --left: 10px;
  }
}

@media only screen and (max-width: 560px) {
  /* - 20% */

  .margine-top-video {
    margin-top: -30% !important;
  }

  .width-video {
    margin-left: -100%;
    width: 300%;
  }

  .the-clue-strategy-height {
    height: 45px;
  }

  .section1-cercles-positions-small {
    top: 20vh;
    left: 15vw;
  }
  .We-create-brands-that-stand-out-grow {
    width: 450px;
    height: 73px;
    font-family: Montserrat;
    font-size: 33px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: 0.64px;
    text-align: left;
    color: #484848;
  }

  .BRAND-STRATEGY {
    height: 40px;
    font-family: Montserrat;
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.53;
    letter-spacing: 0.38px;
    text-align: left;
    color: #484848;
  }

  .the-clue-line-1 {
    width: 29px;
    height: 1px;
    background-color: #484848;
  }

  .mt-4- {
    margin-top: 1.2rem !important;
  }

  .ml-10 {
    margin-left: 2.5rem !important;
  }

  .pl-8 {
    padding-left: 2rem !important;
  }

  .the-clue-line-2 {
    width: 46px;
    height: 1px;
    background-color: #ffffff;
  }

  .EXPLORE {
    width: 70px;
    height: 9px;
    font-family: Montserrat;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.3;
    letter-spacing: 0.81px;
    text-align: left;
    color: #ffffff;
  }

  .Explore-Button {
    width: 174px;
    height: 31px;
    background-color: #484848;
  }

  .mt-5-explore {
    margin-top: 1rem !important;
  }

  .ml-100 {
    margin-left: 9rem !important;
  }

  .the-clue-display-bottom-kind-of-right {
    position: absolute;
    right: 102px;
    bottom: -8px;
  }

  .hoverMovement:hover {
    --left: 6px;
  }
}

@media only screen and (max-width: 500px) {
  /* - 30% */

  .width-video {
    margin-left: -75%;
    width: 250%;
  }

  .the-clue-strategy-height {
    height: 32px;
  }

  .section1-cercles-positions-small {
    top: 23vh;
    left: 15vw;
  }
  .We-create-brands-that-stand-out-grow {
    width: 315px;
    height: 50px;
    font-family: Montserrat;
    font-size: 23px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: 0.64px;
    text-align: left;
    color: #484848;
  }

  .BRAND-STRATEGY {
    height: 28px;
    font-family: Montserrat;
    font-size: 10px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.53;
    letter-spacing: 0.38px;
    text-align: left;
    color: #484848;
  }

  .the-clue-line-1 {
    width: 20px;
    height: 1px;
    background-color: #484848;
  }

  .mt-4- {
    margin-top: 0.8rem !important;
  }

  .ml-10 {
    margin-left: 2rem !important;
  }

  .pl-8 {
    padding-left: 1.4rem !important;
  }

  /* .the-clue-line-2 {
    width: 32px;
    height: 1px;
    background-color: #ffffff;
  } */

  /* .EXPLORE {
    width: 49px;
    height: 6px;
    font-family: Montserrat;
    font-size: 8px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.9;
    letter-spacing: 0.81px;
    text-align: left;
    color: #ffffff;
  } */

  /* .Explore-Button {
    width: 122px;
    height: 22px;
    background-color: #484848;
  } */

  /* .mt-5-explore {
    margin-top: 0.75rem !important;
  } */

  /* .ml-100 {
    margin-left: 6.3rem !important;
  } */

  .the-clue-display-bottom-kind-of-right {
    position: absolute;
    right: 71px;
    bottom: -6px;
  }

  /* .hoverMovement:hover {
    --left: 4px;
  } */
}

@media only screen and (max-width: 350px) {
  .the-clue-strategy-height {
    height: 32px;
  }

  .We-create-brands-that-stand-out-grow {
    width: 250px;
    height: 50px;
    font-family: Montserrat;
    font-size: 20px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: 0.64px;
    text-align: left;
    color: #484848;
  }

  /* .BRAND-STRATEGY {
    width: 128px;
    height: 28px;
    font-family: Montserrat;
    font-size: 10px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.53;
    letter-spacing: 0.38px;
    text-align: left;
    color: #484848;
  }

  .the-clue-line-1 {
    width: 20px;
    height: 1px;
    background-color: #484848;
  }

  .mt-4- {
    margin-top: 0.8rem !important;
  }

  .ml-10 {
    margin-left: 2rem !important;
  } */

  .pl-8 {
    padding-left: 1.4rem !important;
  }

  /* .the-clue-line-2 {
    width: 32px;
    height: 1px;
    background-color: #ffffff;
  } */

  /* .mt-5-explore {
    margin-top: 0.75rem !important;
  } */

  /* .EXPLORE {
    width: 49px;
    height: 6px;
    font-family: Montserrat;
    font-size: 8px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.9;
    letter-spacing: 0.81px;
    text-align: left;
    color: #ffffff;
  }

  .Explore-Button {
    width: 122px;
    height: 22px;
    background-color: #484848;
  } */

  /* .mt-5-explore {
    margin-top: 0.75rem !important;
  } */

  /* .ml-100 {
    margin-left: 6.3rem !important;
  } */

  .the-clue-display-bottom-kind-of-right {
    position: absolute;
    right: 71px;
    bottom: -5px;
  }

  /* .hoverMovement:hover {
    --left: 4px;
  } */
}
</style>
