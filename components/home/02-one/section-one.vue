<template>
  <section v-view="isVisible" id="sectionOne">
    <div class="w3-display-container w3-text-white">
      <!-- Large Bacground -->
      <div
        class="the-clue-light-gray the-clue-hide-md the-clue-one-section-size"
      >
        <p
          class="one the-clue-rotate-minuse-90 the-clue-absolute"
          :class="classOne"
          :style="scrollObject"
        >
          one
        </p>
        <p
          class="two the-clue-rotate-minuse-90 the-clue-absolute"
          :class="classTwo"
          :style="scrollObject"
        >
          two
        </p>
        <p
          class="thr the-clue-rotate-minuse-90 the-clue-absolute"
          :class="classThr"
          :style="scrollObjectThr"
        >
          three
        </p>
      </div>
      <!-- Small Bacground -->
      <div
        class="the-clue-light-gray the-clue-hide-md w3-hide the-clue-show-md the-clue-one-section-size-small"
      >
        <p
          class="one-small the-clue-rotate-minuse-90 the-clue-absolute"
          :class="classOneSmall"
          :style="scrollObjectSmall"
        >
          one
        </p>
        <p
          class="two-small the-clue-rotate-minuse-90 the-clue-absolute"
          :class="classTwoSmall"
          :style="scrollObjectSmall"
        >
          two
        </p>
        <p
          class="thr-small the-clue-rotate-minuse-90 the-clue-absolute"
          :class="classThrSmall"
          :style="scrollObjectSmallThr"
        >
          three
        </p>
      </div>

      <!-- Content Large -->
      <!-- Image One -->
      <div class="the-clue-hide-md">
        <div :class="classImg1" id="sectionOneScroll">
          <img
            src="/slider-1/01.jpg"
            class="the-clue-width-50vw"
            alt="Portfolio Image1"
          />
          <div class="the-clue-hide-small" :class="classButtons1">
            <div class="d-flex flex-column">
              <button
                @click="NxtCount"
                class="w3-button PRV-NXT-Button PRV-NXT-Text the-clue-hover-dark-gray w3-hover-text-white"
              >
                NXT
              </button>
              <button
                @click="PrvCount"
                class="w3-button PRV-NXT-Button PRV-NXT-Text the-clue-hover-dark-gray w3-hover-text-white mt-1"
              >
                PRV
              </button>
            </div>
          </div>
          <div :class="classTitle1">
            <div class="capture-slider1-light">
              Inspiration Within.
              <div class="capture-slider1-light capture-slider1-bold">
                Dvino
              </div>
            </div>
          </div>
        </div>
        <div class="the-clue-division-slider-1-left" :class="classOneOverThree">
          <div class="d-flex flex-column">
            <div class="w3-center division-slider1 p-2">0{{ frameNumber }}</div>
            <div class="the-clue-line-slider1 the-clue-yellow"></div>
            <div class="w3-center division-slider1 p-2">03</div>
          </div>
        </div>
        <div :class="classText1">
          <div class="slider1-text-each-frame">
            The core for making this concept was authenticity,with a
            free-spirited and artistic note. Creating a contemporary and unique
            identity was a great challenge.
          </div>
          <div class="animated pulseHover">
            <nuxt-link
              class="slider-1-see-more-work the-clue-underline-text-gray-yellow the-clue-text-hover-dark-gray"
              to="/work"
              >see more work</nuxt-link
            >
          </div>
        </div>
        <!-- Image Two -->
        <div :class="classImg2">
          <img
            src="/slider-1/02.jpg"
            class="the-clue-width-50vw"
            alt="Portfolio Image2"
          />
          <div class="the-clue-hide-small" :class="classButtons2">
            <div class="d-flex flex-column">
            <button
                @click="NxtCount"
                class="w3-button PRV-NXT-Button PRV-NXT-Text the-clue-hover-dark-gray w3-hover-text-white"
              >
                NXT
              </button>
              <button
                @click="PrvCount"
                class="w3-button PRV-NXT-Button PRV-NXT-Text the-clue-hover-dark-gray w3-hover-text-white mt-1"
              >
                PRV
              </button>
            </div>
          </div>
          <div :class="classTitle2">
            <div class="capture-slider1-light">
              Refined minimalism.
              <div class="capture-slider1-light capture-slider1-bold">
                Mr.Antonio
              </div>
            </div>
          </div>
        </div>
        <div :class="classText2">
          <div class="slider1-text-each-frame">
            This concept follows the current design trends - fashionable,
            minimal and refined, depicted with a monogram in gold. Swiss-style
            is all about using less, so it is preferred to remove as much as
            possible.
          </div>
          <div class="animated pulseHover">
            <nuxt-link
              class="slider-1-see-more-work the-clue-underline-text-gray-yellow the-clue-text-hover-dark-gray"
              to="/work"
              >see more work</nuxt-link
            >
          </div>
        </div>
        <!-- Image Three -->
        <div :class="classImg3">
          <img
            src="/slider-1/03.jpg"
            class="the-clue-width-50vw"
            alt="Portfolio Image3"
          />
          <div class="the-clue-hide-small" :class="classButtons3">
            <div class="d-flex flex-column">
              <button
                @click="NxtCount"
                class="w3-button PRV-NXT-Button PRV-NXT-Text the-clue-hover-dark-gray w3-hover-text-white"
              >
                NXT
              </button>
              <button
                @click="PrvCount"
                class="w3-button PRV-NXT-Button PRV-NXT-Text the-clue-hover-dark-gray w3-hover-text-white mt-1"
              >
                PRV
              </button>
            </div>
          </div>
          <div :class="classTitle3">
            <div class="capture-slider1-light">
              Timeless sophistication.
              <div class="capture-slider1-light capture-slider1-bold">
                Belini
              </div>
            </div>
          </div>
        </div>
        <div :class="classText3">
          <div class="slider1-text-each-frame">
            Presenting an exclusive fine-dining restaurant in a comprehensive,
            elegant and stylish manner. Clean lines and traditional elements
            signal the timelessness and sophistication that this brand wants to
            achieve.
          </div>
          <div class="animated pulseHover">
            <nuxt-link
              class="slider-1-see-more-work the-clue-underline-text-gray-yellow the-clue-text-hover-dark-gray"
              to="/work"
              >see more work</nuxt-link
            >
          </div>
        </div>
      </div>

      <!-- Content Small -->
      <!-- Image One Small -->
      <div class="w3-hide the-clue-show-md">
        <div :class="classImgSmall1">
          <img
            src="/slider-1/01.jpg"
            class="the-clue-width-75vw"
            alt="Portfolio Image1"
          />
          <div :class="classButtonsSmall1">
            <div class="d-flex flex-column">
              <button
                @click="NxtCount"
                class="w3-button PRV-NXT-Button PRV-NXT-Text the-clue-hover-dark-gray w3-hover-text-white"
              >
                NXT
              </button>
              <button
                @click="PrvCount"
                class="w3-button PRV-NXT-Button PRV-NXT-Text the-clue-hover-dark-gray w3-hover-text-white mt-1"
              >
                PRV
              </button>
            </div>
          </div>
          <div :class="classTitleSmall1">
            <div class="capture-slider1-light">
              Inspiration Within.
              <div class="capture-slider1-light capture-slider1-bold">
                Dvino
              </div>
            </div>
          </div>
        </div>
        <div
          class="the-clue-division-slider-1-left-small"
          :class="classOneOverThree"
        >
          <div class="d-flex flex-column">
            <div class="w3-center division-slider1 p-2">0{{ frameNumber }}</div>
            <div class="the-clue-line-slider1 the-clue-yellow"></div>
            <div class="w3-center division-slider1 p-2">03</div>
          </div>
        </div>
        <div :class="classTextSmall1">
          <div class="slider1-text-each-frame">
            The core for making this concept was authenticity,with a
            free-spirited and artistic note. Creating a contemporary and unique
            identity was a great challenge.
          </div>
          <div class="animated pulseHover">
            <nuxt-link
              class="slider-1-see-more-work the-clue-underline-text-gray-yellow the-clue-text-hover-dark-gray"
              to="/work"
              >see more work</nuxt-link
            >
          </div>
        </div>
        <!-- Image Two Small -->
        <div :class="classImgSmall2">
          <img
            src="/slider-1/02.jpg"
            class="the-clue-width-75vw"
            alt="Portfolio Image2"
          />
          <div :class="classButtonsSmall2">
            <div class="d-flex flex-column">
              <button
                @click="NxtCount"
                class="w3-button PRV-NXT-Button PRV-NXT-Text the-clue-hover-dark-gray w3-hover-text-white"
              >
                NXT
              </button>
              <button
                @click="PrvCount"
                class="w3-button PRV-NXT-Button PRV-NXT-Text the-clue-hover-dark-gray w3-hover-text-white mt-1"
              >
                PRV
              </button>
            </div>
          </div>
          <div :class="classTitleSmall2">
            <div class="capture-slider1-light">
              Refined minimalism.
              <div class="capture-slider1-light capture-slider1-bold">
                Mr.Antonio
              </div>
            </div>
          </div>
        </div>
        <div :class="classTextSmall2">
          <div class="slider1-text-each-frame">
            This concept follows the current design trends - fashionable,
            minimal and refined, depicted with a monogram in gold. Swiss-style
            is all about using less, so it is preferred to remove as much as
            possible.
          </div>
          <div class="animated pulseHover">
            <nuxt-link
              class="slider-1-see-more-work the-clue-underline-text-gray-yellow the-clue-text-hover-dark-gray"
              to="/work"
              >see more work</nuxt-link
            >
          </div>
        </div>
        <!-- Image Three Small -->
        <div :class="classImgSmall3">
          <img
            src="/slider-1/03.jpg"
            class="the-clue-width-75vw"
            alt="Portfolio Image3"
          />
          <div :class="classButtonsSmall3">
            <div class="d-flex flex-column">
              <button
                @click="NxtCount"
                class="w3-button PRV-NXT-Button PRV-NXT-Text the-clue-hover-dark-gray w3-hover-text-white"
              >
                NXT
              </button>
              <button
                @click="PrvCount"
                class="w3-button PRV-NXT-Button PRV-NXT-Text the-clue-hover-dark-gray w3-hover-text-white mt-1"
              >
                PRV
              </button>
            </div>
          </div>
          <div :class="classTitleSmall3">
            <div class="capture-slider1-light">
              Timeless sophistication.
              <div class="capture-slider1-light capture-slider1-bold">
                Belini
              </div>
            </div>
          </div>
        </div>
        <div :class="classTextSmall3">
          <div class="slider1-text-each-frame">
            Presenting an exclusive fine-dining restaurant in a comprehensive,
            elegant and stylish manner. Clean lines and traditional elements
            signal the timelessness and sophistication that this brand wants to
            achieve.
          </div>
          <div class="animated pulseHover">
            <nuxt-link
              class="slider-1-see-more-work the-clue-underline-text-gray-yellow the-clue-text-hover-dark-gray"
              to="/work"
              >see more work</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      classImg1: "the-clue-slider1-img-left",
      classImgSmall1: "the-clue-slider1-img-left-small",
      classImg2: "the-clue-slider1-img-off-left",
      classImgSmall2: "the-clue-slider1-img-off-left-small",
      classImg3: "the-clue-slider1-img-off-left",
      classImgSmall3: "the-clue-slider1-img-off-left-small",
      classTitle1: "the-clue-capture-slider1 w3-hide",
      classTitleSmall1: "the-clue-capture-slider1-small w3-hide",
      classTitle2: "the-clue-capture-slider1-off-left",
      classTitleSmall2: "the-clue-capture-slider1-off-left-small",
      classTitle3: "the-clue-capture-slider1-off-left",
      classTitleSmall3: "the-clue-capture-slider1-off-left-small",
      classButtons1: "the-clue-prv-nxt-buttons-left",
      classButtonsSmall1: "the-clue-prv-nxt-buttons-left-small",
      classButtons2: "the-clue-prv-nxt-buttons-off-left",
      classButtonsSmall2: "the-clue-prv-nxt-buttons-off-left-small",
      classButtons3: "the-clue-prv-nxt-buttons-off-left",
      classButtonsSmall3: "the-clue-prv-nxt-buttons-off-left-small",
      classText1: "text-slider1-slightly-left w3-hide",
      classTextSmall1: "text-slider1-slightly-left-small w3-hide",
      classText2: "text-slider1-slightly-left w3-hide",
      classTextSmall2: "text-slider1-slightly-left-small w3-hide",
      classText3: "text-slider1-slightly-left w3-hide",
      classTextSmall3: "text-slider1-slightly-left-small w3-hide",
      classOneOverThree: "",
      classOne: "",
      classTwo: "w3-hide",
      classThr: "w3-hide",
      classOneSmall: "",
      classTwoSmall: "w3-hide",
      classThrSmall: "w3-hide",
      frameNumber: 1,
      scrollPercentTop: 2,
      scrollSubstractor: true,
      scrollSubstractorNumber: "",
      isLoaded: false,
      scrollObject: {
        top: "80%",
        right: "18vw"
      },
      scrollObjectValue: {
        top: 80,
        right: 18
      },
      scrollObjectThr: {
        top: "80%",
        right: "10vw"
      },
      scrollObjectValueThr: {
        top: 80,
        right: 10
      },
      scrollObjectSmall: {
        top: "70%",
        left: "-15vw"
      },
      scrollObjectSmallValue: {
        top: 70,
        right: -15
      },
      scrollObjectSmallThr: {
        top: "70%",
        left: "-20vw"
      },
      scrollObjectSmallValueThr: {
        top: 70,
        right: -20
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
    isVisible(e) {
      this.scrollPercentTop = e.percentTop;
      var calPercent = 1 - this.scrollPercentTop;
      var increaseRate = 60 * calPercent;

      if (e.percentTop < 0.6) {
        if (!this.isLoaded) {
          this.classText1 =
            "text-slider1-slightly-left animated slow fadeInRightModified-30";
        }
      }

      if (e.percentTop < 0.7) {
        if (!this.isLoaded) {
          this.classOneOverThree = "animated slow fadeInRightModified-30";
        }
      }

      if (e.percentTop < 0.8) {
        if (!this.isLoaded) {
          this.classTitle1 =
            "the-clue-capture-slider1 animated slow fadeInRightModified-30";
        }
      }

      if (e.percentTop < 0.6) {
        if (!this.isLoaded) {
          this.classTextSmall1 =
            "text-slider1-slightly-left-small animated slow fadeInRightModified-30";
          this.isLoaded = true;
        }
      }

      if (e.percentTop < 0.8) {
        if (!this.isLoaded) {
          this.classTitleSmall1 =
            "the-clue-capture-slider1-small animated slow fadeInRightModified-30";
        }
      }
    },
    onScroll() {
      var winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      var height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      // console.log("winScroll " + winScroll);
      ///////////
      var div = document.getElementById("sectionOne");
      var rect = div.getBoundingClientRect();
      var yTop = rect.top;
      var yBottom = rect.bottom;

      // console.log("yTop " + yTop);
      // console.log("yBottom " + yBottom);

      if (this.scrollPercentTop < 1 && this.scrollPercentTop > 0) {
        if (this.scrollSubstractor) {
          this.scrollSubstractorNumber = scrolled;
          this.scrollSubstractor = false;
        }
        var increaseRate = scrolled - this.scrollSubstractorNumber;
        // console.log(scrolled - this.scrollSubstractorNumber);
        //Large Screen
        this.scrollObjectValue.top = 65 - increaseRate * 1.5;
        this.scrollObject.top = this.scrollObjectValue.top + "%";
        //Large Screen Thr
        this.scrollObjectValueThr.top = 65 - increaseRate * 1.5;
        this.scrollObjectThr.top = this.scrollObjectValueThr.top + "%";
        //Small Screen
        this.scrollObjectSmallValue.top = 65 - increaseRate * 1.5;
        this.scrollObjectSmall.top = this.scrollObjectSmallValue.top + "%";
        //Small Screen Thr
        this.scrollObjectSmallValueThr.top = 65 - increaseRate * 1.5;
        this.scrollObjectSmallThr.top =
          this.scrollObjectSmallValueThr.top + "%";
      }
    },
    NxtCount() {
      this.frameNumber++;
      if (this.frameNumber == 4) {
        this.frameNumber = 1;
      }
      this.CheckForFrameNxt();
    },
    PrvCount() {
      this.frameNumber--;
      if (this.frameNumber == 0) {
        this.frameNumber = 3;
      }
      this.CheckForFramePvr();
    },
    CheckForFrameNxt() {
      if (this.frameNumber == 1) {
        this.classImg1 =
          "the-clue-slider1-img-left animation-slider1-img-in-right animation-cubic-bezier-slider-1-img";
        this.classImgSmall1 =
          "the-clue-slider1-img-left-small animation-slider1-img-in-right-small animation-cubic-bezier-slider-1-img";
        this.classImg2 = "the-clue-slider1-img-off-left";
        this.classImgSmall2 = "the-clue-slider1-img-off-left-small";
        this.classImg3 =
          "the-clue-slider1-img-off-left animation-slider1-img-left animation-cubic-bezier-slider-1-img";
        this.classImgSmall3 =
          "the-clue-slider1-img-off-left-small animation-slider1-img-left-small animation-cubic-bezier-slider-1-img";
        this.classTitle1 =
          "the-clue-capture-slider1 animation-slider1-text-in-right animation-cubic-bezier-slider-1-text";
        this.classTitleSmall1 =
          "the-clue-capture-slider1-small animation-slider1-text-in-right-small animation-cubic-bezier-slider-1-text";
        this.classTitle2 = "the-clue-capture-slider1-off-left";
        this.classTitleSmall2 = "the-clue-capture-slider1-off-left-small";
        this.classTitle3 =
          "the-clue-capture-slider1-off-left animation-slider1-text-left animation-cubic-bezier-slider-1-text";
        this.classTitleSmall3 =
          "the-clue-capture-slider1-off-left-small animation-slider1-text-left-small animation-cubic-bezier-slider-1-text";
        this.classButtons1 =
          "the-clue-prv-nxt-buttons-left animation-buttons-in-right animation-cubic-bezier-slider-1-img";
        this.classButtonsSmall1 =
          "the-clue-prv-nxt-buttons-left-small animation-buttons-in-right animation-cubic-bezier-slider-1-img";
        this.classButtons2 = "the-clue-prv-nxt-buttons-off-left";
        this.classButtonsSmall2 = "the-clue-prv-nxt-buttons-off-left-small";
        this.classButtons3 =
          "the-clue-prv-nxt-buttons-off-left animation-buttons-left animation-cubic-bezier-slider-1-img";
        this.classButtonsSmall3 =
          "the-clue-prv-nxt-buttons-off-left-small animation-buttons-left animation-cubic-bezier-slider-1-img";
        this.classText1 = "text-slider1-slightly-left animated slow fadeIn";
        this.classText2 = "text-slider1-slightly-left w3-hide";
        this.classText3 = "text-slider1-slightly-left w3-hide";
        this.classTextSmall1 =
          "text-slider1-slightly-left-small animated slow fadeIn";
        this.classTextSmall2 = "text-slider1-slightly-left-small w3-hide";
        this.classTextSmall3 = "text-slider1-slightly-left-small w3-hide";
        this.classOne = "animated slow fadeIn";
        this.classTwo = "w3-hide";
        this.classThr = "w3-hide";
        this.classOneSmall = "animated slow fadeIn";
        this.classTwoSmall = "w3-hide";
        this.classThrSmall = "w3-hide";
      }
      if (this.frameNumber == 2) {
        this.classImg1 =
          "the-clue-slider1-img-off-left animation-slider1-img-left animation-cubic-bezier-slider-1-img";
        this.classImgSmall1 =
          "the-clue-slider1-img-off-left-small animation-slider1-img-left-small animation-cubic-bezier-slider-1-img";
        this.classImg2 =
          "the-clue-slider1-img-left animation-slider1-img-in-right animation-cubic-bezier-slider-1-img";
        this.classImgSmall2 =
          "the-clue-slider1-img-left-small animation-slider1-img-in-right-small animation-cubic-bezier-slider-1-img";
        this.classImg3 = "the-clue-slider1-img-off-left";
        this.classImgSmall3 = "the-clue-slider1-img-off-left-small";
        this.classTitle1 =
          "the-clue-capture-slider1-off-left animation-slider1-text-left animation-cubic-bezier-slider-1-text";
        this.classTitleSmall1 =
          "the-clue-capture-slider1-off-left-small animation-slider1-text-left-small animation-cubic-bezier-slider-1-text";
        this.classTitle2 =
          "the-clue-capture-slider1 animation-slider1-text-in-right animation-cubic-bezier-slider-1-text";
        this.classTitleSmall2 =
          "the-clue-capture-slider1-small animation-slider1-text-in-right-small animation-cubic-bezier-slider-1-text";
        this.classTitle3 = "the-clue-capture-slider1-off-left";
        this.classTitleSmall3 = "the-clue-capture-slider1-off-left-small";
        this.classButtons1 =
          "the-clue-prv-nxt-buttons-off-left animation-buttons-left animation-cubic-bezier-slider-1-img";
        this.classButtonsSmall1 =
          "the-clue-prv-nxt-buttons-off-left-small animation-buttons-left animation-cubic-bezier-slider-1-img";
        this.classButtons2 =
          "the-clue-prv-nxt-buttons-left animation-buttons-in-right animation-cubic-bezier-slider-1-img";
        this.classButtonsSmall2 =
          "the-clue-prv-nxt-buttons-left-small animation-buttons-in-right animation-cubic-bezier-slider-1-img";
        this.classButtons3 = "the-clue-prv-nxt-buttons-off-left";
        this.classButtonsSmall3 = "the-clue-prv-nxt-buttons-off-left-small";
        this.classText1 = "text-slider1-slightly-left w3-hide";
        this.classText2 = "text-slider1-slightly-left animated slow fadeIn";
        this.classText3 = "text-slider1-slightly-left w3-hide";
        this.classTextSmall1 = "text-slider1-slightly-left-small w3-hide";
        this.classTextSmall2 =
          "text-slider1-slightly-left-small animated slow fadeIn";
        this.classTextSmall3 = "text-slider1-slightly-left-small w3-hide";
        this.classOne = "w3-hide";
        this.classTwo = "animated slow fadeIn";
        this.classThr = "w3-hide";
        this.classOneSmall = "w3-hide";
        this.classTwoSmall = "animated slow fadeIn";
        this.classThrSmall = "w3-hide";
      }
      if (this.frameNumber == 3) {
        this.classImg1 = "the-clue-slider1-img-off-left";
        this.classImgSmall1 = "the-clue-slider1-img-off-left-small";
        this.classImg2 =
          "the-clue-slider1-img-off-left animation-slider1-img-left animation-cubic-bezier-slider-1-img";
        this.classImgSmall2 =
          "the-clue-slider1-img-off-left-small animation-slider1-img-left-small animation-cubic-bezier-slider-1-img";
        this.classImg3 =
          "the-clue-slider1-img-left animation-slider1-img-in-right animation-cubic-bezier-slider-1-img";
        this.classImgSmall3 =
          "the-clue-slider1-img-left-small animation-slider1-img-in-right-small animation-cubic-bezier-slider-1-img";
        this.classTitle1 = "the-clue-capture-slider1-off-left";
        this.classTitleSmall1 = "the-clue-capture-slider1-off-left-small";
        this.classTitle2 =
          "the-clue-capture-slider1-off-left animation-slider1-text-left animation-cubic-bezier-slider-1-text";
        this.classTitleSmall2 =
          "the-clue-capture-slider1-off-left-small animation-slider1-text-left-small animation-cubic-bezier-slider-1-text";
        this.classTitle3 =
          "the-clue-capture-slider1 animation-slider1-text-in-right animation-cubic-bezier-slider-1-text";
        this.classTitleSmall3 =
          "the-clue-capture-slider1-small animation-slider1-text-in-right-small animation-cubic-bezier-slider-1-text";
        this.classButtons1 = "the-clue-prv-nxt-buttons-off-left";
        this.classButtonsSmall1 = "the-clue-prv-nxt-buttons-off-left-small";
        this.classButtons2 =
          "the-clue-prv-nxt-buttons-off-left animation-buttons-left animation-cubic-bezier-slider-1-img";
        this.classButtonsSmall2 =
          "the-clue-prv-nxt-buttons-off-left-small animation-buttons-left animation-cubic-bezier-slider-1-img";
        this.classButtons3 =
          "the-clue-prv-nxt-buttons-left animation-buttons-in-right animation-cubic-bezier-slider-1-img";
        this.classButtonsSmall3 =
          "the-clue-prv-nxt-buttons-left-small animation-buttons-in-right animation-cubic-bezier-slider-1-img";
        this.classText1 = "text-slider1-slightly-left w3-hide";
        this.classText2 = "text-slider1-slightly-left w3-hide";
        this.classText3 = "text-slider1-slightly-left animated slow fadeIn";
        this.classTextSmall1 = "text-slider1-slightly-left-small w3-hide";
        this.classTextSmall2 = "text-slider1-slightly-left-small w3-hide";
        this.classTextSmall3 =
          "text-slider1-slightly-left-small animated slow fadeIn";
        this.classOne = "w3-hide";
        this.classTwo = "w3-hide";
        this.classThr = "animated slow fadeIn";
        this.classOneSmall = "w3-hide";
        this.classTwoSmall = "w3-hide";
        this.classThrSmall = "animated slow fadeIn";
      }
    },
    CheckForFramePvr() {
      if (this.frameNumber == 1) {
        this.classImg1 =
          "the-clue-slider1-img-left animation-slider1-img-in-left animation-cubic-bezier-slider-1-img";
        this.classImgSmall1 =
          "the-clue-slider1-img-left-small animation-slider1-img-in-left-small animation-cubic-bezier-slider-1-img";
        this.classImg2 =
          "the-clue-slider1-img-off-right animation-slider1-img-right animation-cubic-bezier-slider-1-img";
        this.classImgSmall2 =
          "the-clue-slider1-img-off-right-small animation-slider1-img-right-small animation-cubic-bezier-slider-1-img";
        this.classImg3 = "the-clue-slider1-img-off-right";
        this.classImgSmall3 = "the-clue-slider1-img-off-right-small";
        this.classTitle1 =
          "the-clue-capture-slider1 animation-slider1-text-in-left animation-cubic-bezier-slider-1-text";
        this.classTitleSmall1 =
          "the-clue-capture-slider1-small animation-slider1-text-in-left-small animation-cubic-bezier-slider-1-text";
        this.classTitle2 =
          "the-clue-capture-slider1-off-right animation-slider1-text-right animation-cubic-bezier-slider-1-text";
        this.classTitleSmall2 =
          "the-clue-capture-slider1-off-right-small animation-slider1-text-right-small animation-cubic-bezier-slider-1-text";
        this.classTitle3 = "the-clue-capture-slider1-off-right";
        this.classTitleSmall3 = "the-clue-capture-slider1-off-right-small";
        this.classButtons1 =
          "the-clue-prv-nxt-buttons-left animation-buttons-in-left animation-cubic-bezier-slider-1-img";
        this.classButtonsSmall1 =
          "the-clue-prv-nxt-buttons-left-small animation-buttons-in-left animation-cubic-bezier-slider-1-img";
        this.classButtons2 =
          "the-clue-prv-nxt-buttons-off-left animation-buttons-right animation-cubic-bezier-slider-1-img";
        this.classButtonsSmall2 =
          "the-clue-prv-nxt-buttons-off-left-small animation-buttons-right animation-cubic-bezier-slider-1-img";
        this.classButtons3 = "the-clue-prv-nxt-buttons-off-left";
        this.classButtonsSmall3 = "the-clue-prv-nxt-buttons-off-left-small";
        this.classText1 = "text-slider1-slightly-left animated slow fadeIn";
        this.classText2 = "text-slider1-slightly-left w3-hide";
        this.classText3 = "text-slider1-slightly-left w3-hide";
        this.classTextSmall1 =
          "text-slider1-slightly-left-small animated slow fadeIn";
        this.classTextSmall2 = "text-slider1-slightly-left-small w3-hide";
        this.classTextSmall3 = "text-slider1-slightly-left-small w3-hide";
        this.classOne = "animated slow fadeIn";
        this.classTwo = "w3-hide";
        this.classThr = "w3-hide";
        this.classOneSmall = "animated slow fadeIn";
        this.classTwoSmall = "w3-hide";
        this.classThrSmall = "w3-hide";
      }
      if (this.frameNumber == 2) {
        this.classImg1 = "the-clue-slider1-img-off-right";
        this.classImgSmall1 = "the-clue-slider1-img-off-right-small";
        this.classImg2 =
          "the-clue-slider1-img-left animation-slider1-img-in-left animation-cubic-bezier-slider-1-img";
        this.classImgSmall2 =
          "the-clue-slider1-img-left-small animation-slider1-img-in-left-small animation-cubic-bezier-slider-1-img";
        this.classImg3 =
          "the-clue-slider1-img-off-right animation-slider1-img-right animation-cubic-bezier-slider-1-img";
        this.classImgSmall3 =
          "the-clue-slider1-img-off-right-small animation-slider1-img-right-small animation-cubic-bezier-slider-1-img";
        this.classTitle1 = "the-clue-capture-slider1-off-right";
        this.classTitleSmall1 = "the-clue-capture-slider1-off-right-small";
        this.classTitle2 =
          "the-clue-capture-slider1 animation-slider1-text-in-left animation-cubic-bezier-slider-1-text";
        this.classTitleSmall2 =
          "the-clue-capture-slider1-small animation-slider1-text-in-left-small animation-cubic-bezier-slider-1-text";
        this.classTitle3 =
          "the-clue-capture-slider1-off-right animation-slider1-text-right animation-cubic-bezier-slider-1-text";
        this.classTitleSmall3 =
          "the-clue-capture-slider1-off-right-small animation-slider1-text-right-small animation-cubic-bezier-slider-1-text";
        this.classButtons1 = "the-clue-prv-nxt-buttons-off-left";
        this.classButtonsSmall1 = "the-clue-prv-nxt-buttons-off-left-small";
        this.classButtons2 =
          "the-clue-prv-nxt-buttons-left animation-buttons-in-left animation-cubic-bezier-slider-1-img";
        this.classButtonsSmall2 =
          "the-clue-prv-nxt-buttons-left-small animation-buttons-in-left animation-cubic-bezier-slider-1-img";
        this.classButtons3 =
          "the-clue-prv-nxt-buttons-off-left animation-buttons-right animation-cubic-bezier-slider-1-img";
        this.classButtonsSmall3 =
          "the-clue-prv-nxt-buttons-off-left-small animation-buttons-right animation-cubic-bezier-slider-1-img";
        this.classText1 = "text-slider1-slightly-left w3-hide";
        this.classText2 = "text-slider1-slightly-left animated slow fadeIn";
        this.classText3 = "text-slider1-slightly-left w3-hide";
        this.classTextSmall1 = "text-slider1-slightly-left-small w3-hide";
        this.classTextSmall2 =
          "text-slider1-slightly-left-small animated slow fadeIn";
        this.classTextSmall3 = "text-slider1-slightly-left-small w3-hide";
        this.classOne = "w3-hide";
        this.classTwo = "animated slow fadeIn";
        this.classThr = "w3-hide";
        this.classOneSmall = "w3-hide";
        this.classTwoSmall = "animated slow fadeIn";
        this.classThrSmall = "w3-hide";
      }
      if (this.frameNumber == 3) {
        this.classImg1 =
          "the-clue-slider1-img-off-right animation-slider1-img-right animation-cubic-bezier-slider-1-img";
        this.classImgSmall1 =
          "the-clue-slider1-img-off-right-small animation-slider1-img-right-small animation-cubic-bezier-slider-1-img";
        this.classImg2 = "the-clue-slider1-img-off-right";
        this.classImgSmall2 = "the-clue-slider1-img-off-right-small";
        this.classImg3 =
          "the-clue-slider1-img-left animation-slider1-img-in-left animation-cubic-bezier-slider-1-img";
        this.classImgSmall3 =
          "the-clue-slider1-img-left-small animation-slider1-img-in-left-small animation-cubic-bezier-slider-1-img";
        this.classTitle1 =
          "the-clue-capture-slider1-off-right animation-slider1-text-right animation-cubic-bezier-slider-1-text";
        this.classTitleSmall1 =
          "the-clue-capture-slider1-off-right-small animation-slider1-text-right-small animation-cubic-bezier-slider-1-text";
        this.classTitle2 = "the-clue-capture-slider1-off-right";
        this.classTitleSmall2 = "the-clue-capture-slider1-off-right-small";
        this.classTitle3 =
          "the-clue-capture-slider1 animation-slider1-text-in-left animation-cubic-bezier-slider-1-text";
        this.classTitleSmall3 =
          "the-clue-capture-slider1-small animation-slider1-text-in-left-small animation-cubic-bezier-slider-1-text";
        this.classButtons1 =
          "the-clue-prv-nxt-buttons-off-left animation-buttons-right animation-cubic-bezier-slider-1-img";
        this.classButtonsSmall1 =
          "the-clue-prv-nxt-buttons-off-left-small animation-buttons-right animation-cubic-bezier-slider-1-img";
        this.classButtons2 = "the-clue-prv-nxt-buttons-off-left";
        this.classButtonsSmall2 = "the-clue-prv-nxt-buttons-off-left-small";
        this.classButtons3 =
          "the-clue-prv-nxt-buttons-left animation-buttons-in-left animation-cubic-bezier-slider-1-img";
        this.classButtonsSmall3 =
          "the-clue-prv-nxt-buttons-left-small animation-buttons-in-left animation-cubic-bezier-slider-1-img";
        this.classText1 = "text-slider1-slightly-left w3-hide";
        this.classText2 = "text-slider1-slightly-left w3-hide";
        this.classText3 = "text-slider1-slightly-left animated slow fadeIn";
        this.classTextSmall1 = "text-slider1-slightly-left-small w3-hide";
        this.classTextSmall2 = "text-slider1-slightly-left-small w3-hide";
        this.classTextSmall3 =
          "text-slider1-slightly-left-small animated slow fadeIn";
        this.classOne = "w3-hide";
        this.classTwo = "w3-hide";
        this.classThr = "animated slow fadeIn";
        this.classOneSmall = "w3-hide";
        this.classTwoSmall = "w3-hide";
        this.classThrSmall = "animated slow fadeIn";
      }
    },
    ResetNxtFrames() {
      let self = this;
      self
        .FirstNxtFrame()
        .then(function() {
          self.frameNumber = 2;
          self.classImg1 = "the-clue-slider1-img-off-right";
          self.classImgSmall1 = "the-clue-slider1-img-off-right-small";
          self.classImg2 =
            "the-clue-slider1-img-left animation-slider1-img-in-left animation-cubic-bezier-slider-1-img";
          self.classImgSmall2 =
            "the-clue-slider1-img-left-small animation-slider1-img-in-left-small animation-cubic-bezier-slider-1-img";
          self.classImg3 =
            "the-clue-slider1-img-off-right animation-slider1-img-right animation-cubic-bezier-slider-1-img";
          self.classImgSmall3 =
            "the-clue-slider1-img-off-right-small animation-slider1-img-right-small animation-cubic-bezier-slider-1-img";
          self.classTitle1 = "the-clue-capture-slider1-off-right";
          self.classTitleSmall1 = "the-clue-capture-slider1-off-right-small";
          self.classTitle2 =
            "the-clue-capture-slider1 animation-slider1-text-in-left animation-cubic-bezier-slider-1-text";
          self.classTitleSmall2 =
            "the-clue-capture-slider1-small animation-slider1-text-in-left-small animation-cubic-bezier-slider-1-text";
          self.classTitle3 =
            "the-clue-capture-slider1-off-right animation-slider1-text-right animation-cubic-bezier-slider-1-text";
          self.classTitleSmall3 =
            "the-clue-capture-slider1-off-right-small animation-slider1-text-right-small animation-cubic-bezier-slider-1-text";
          self.classButtons1 = "the-clue-prv-nxt-buttons-off-left";
          self.classButtonsSmall1 = "the-clue-prv-nxt-buttons-off-left-small";
          self.classButtons2 =
            "the-clue-prv-nxt-buttons-left animation-buttons-in-left animation-cubic-bezier-slider-1-img";
          self.classButtonsSmall2 =
            "the-clue-prv-nxt-buttons-left-small animation-buttons-in-left animation-cubic-bezier-slider-1-img";
          self.classButtons3 =
            "the-clue-prv-nxt-buttons-off-left animation-buttons-right animation-cubic-bezier-slider-1-img";
          self.classButtonsSmall3 =
            "the-clue-prv-nxt-buttons-off-left-small animation-buttons-right animation-cubic-bezier-slider-1-img";
          self.classText1 = "text-slider1-slightly-left w3-hide";
          self.classText2 = "text-slider1-slightly-left animated slow fadeIn";
          self.classText3 = "text-slider1-slightly-left w3-hide";
          self.classTextSmall1 = "text-slider1-slightly-left-small w3-hide";
          self.classTextSmall2 =
            "text-slider1-slightly-left-small animated slow fadeIn";
          self.classTextSmall3 = "text-slider1-slightly-left-small w3-hide";
          self.classOne = "w3-hide";
          self.classTwo = "animated slow fadeIn";
          self.classThr = "w3-hide";
          self.classOneSmall = "w3-hide";
          self.classTwoSmall = "animated slow fadeIn";
          self.classThrSmall = "w3-hide";
        })
        .then(function() {
          self.SecondNxtFrame().then(function() {
            self.frameNumber = 1;
            self.classImg1 =
              "the-clue-slider1-img-left animation-slider1-img-in-left animation-cubic-bezier-slider-1-img";
            self.classImgSmall1 =
              "the-clue-slider1-img-left-small animation-slider1-img-in-left-small animation-cubic-bezier-slider-1-img";
            self.classImg2 =
              "the-clue-slider1-img-off-right animation-slider1-img-right animation-cubic-bezier-slider-1-img";
            self.classImgSmall2 =
              "the-clue-slider1-img-off-right-small animation-slider1-img-right-small animation-cubic-bezier-slider-1-img";
            self.classImg3 = "the-clue-slider1-img-off-right";
            self.classImgSmall3 = "the-clue-slider1-img-off-right-small";
            self.classTitle1 =
              "the-clue-capture-slider1 animation-slider1-text-in-left animation-cubic-bezier-slider-1-text";
            self.classTitleSmall1 =
              "the-clue-capture-slider1-small animation-slider1-text-in-left-small animation-cubic-bezier-slider-1-text";
            self.classTitle2 =
              "the-clue-capture-slider1-off-right animation-slider1-text-right animation-cubic-bezier-slider-1-text";
            self.classTitleSmall2 =
              "the-clue-capture-slider1-off-right-small animation-slider1-text-right-small animation-cubic-bezier-slider-1-text";
            self.classTitle3 = "the-clue-capture-slider1-off-right";
            self.classTitleSmall3 = "the-clue-capture-slider1-off-right-small";
            self.classButtons1 =
              "the-clue-prv-nxt-buttons-left animation-buttons-in-left animation-cubic-bezier-slider-1-img";
            self.classButtonsSmall1 =
              "the-clue-prv-nxt-buttons-left-small animation-buttons-in-left animation-cubic-bezier-slider-1-img";
            self.classButtons2 =
              "the-clue-prv-nxt-buttons-off-left animation-buttons-right animation-cubic-bezier-slider-1-img";
            self.classButtonsSmall2 =
              "the-clue-prv-nxt-buttons-off-left-small animation-buttons-right animation-cubic-bezier-slider-1-img";
            self.classButtons3 = "the-clue-prv-nxt-buttons-off-left";
            self.classButtonsSmall3 = "the-clue-prv-nxt-buttons-off-left-samll";
            self.classText1 = "text-slider1-slightly-left animated slow fadeIn";
            self.classText2 = "text-slider1-slightly-left w3-hide";
            self.classText3 = "text-slider1-slightly-left w3-hide";
            self.classTextSmall1 =
              "text-slider1-slightly-left-small animated slow fadeIn";
            self.classTextSmall2 = "text-slider1-slightly-left-small w3-hide";
            self.classTextSmall3 = "text-slider1-slightly-left-small w3-hide";
            self.classOne = "animated slow fadeIn";
            self.classTwo = "w3-hide";
            self.classThr = "w3-hide";
            self.classOneSmall = "animated slow fadeIn";
            self.classTwoSmall = "w3-hide";
            self.classThrSmall = "w3-hide";
          });
        });
    },
    ResetPrvFrames() {
      let self = this;
      self
        .FirstPrvFrame()
        .then(function() {
          self.frameNumber = 2;
          self.classImg1 =
            "the-clue-slider1-img-off-left animation-slider1-img-left animation-cubic-bezier-slider-1-img";
          self.classImgSmall1 =
            "the-clue-slider1-img-off-left-small animation-slider1-img-left-small animation-cubic-bezier-slider-1-img";
          self.classImg2 =
            "the-clue-slider1-img-left animation-slider1-img-in-right animation-cubic-bezier-slider-1-img";
          self.classImgSmall2 =
            "the-clue-slider1-img-left-small animation-slider1-img-in-right-small animation-cubic-bezier-slider-1-img";
          self.classImg3 = "the-clue-slider1-img-off-left";
          self.classImgSmall3 = "the-clue-slider1-img-off-left-small";
          self.classTitle1 =
            "the-clue-capture-slider1-off-left animation-slider1-text-left animation-cubic-bezier-slider-1-text";
          self.classTitleSmall1 =
            "the-clue-capture-slider1-off-left-small animation-slider1-text-left-small animation-cubic-bezier-slider-1-text";
          self.classTitle2 =
            "the-clue-capture-slider1 animation-slider1-text-in-right animation-cubic-bezier-slider-1-text";
          self.classTitleSmall2 =
            "the-clue-capture-slider1-small animation-slider1-text-in-right-small animation-cubic-bezier-slider-1-text";
          self.classTitle3 = "the-clue-capture-slider1-off-left";
          self.classTitleSmall3 = "the-clue-capture-slider1-off-left-small";
          self.classButtons1 =
            "the-clue-prv-nxt-buttons-off-left animation-buttons-left animation-cubic-bezier-slider-1-img";
          self.classButtonsSmall1 =
            "the-clue-prv-nxt-buttons-off-left-small animation-buttons-left animation-cubic-bezier-slider-1-img";
          self.classButtons2 =
            "the-clue-prv-nxt-buttons-left animation-buttons-in-right animation-cubic-bezier-slider-1-img";
          self.classButtonsSmall2 =
            "the-clue-prv-nxt-buttons-left-small animation-buttons-in-right animation-cubic-bezier-slider-1-img";
          self.classButtons3 = "the-clue-prv-nxt-buttons-off-left";
          self.classButtonsSmall3 = "the-clue-prv-nxt-buttons-off-left-small";
          self.classText1 = "text-slider1-slightly-left w3-hide";
          self.classText2 = "text-slider1-slightly-left animated slow fadeIn";
          self.classText3 = "text-slider1-slightly-left w3-hide";
          self.classTextSmall1 = "text-slider1-slightly-left-small w3-hide";
          self.classTextSmall2 =
            "text-slider1-slightly-left-small animated slow fadeIn";
          self.classTextSmall3 = "text-slider1-slightly-left-small w3-hide";
          self.classOne = "w3-hide";
          self.classTwo = "animated slow fadeIn";
          self.classThr = "w3-hide";
          self.classOneSmall = "w3-hide";
          self.classTwoSmall = "animated slow fadeIn";
          self.classThrSmall = "w3-hide";
        })
        .then(function() {
          self.SecondPrvFrame().then(function() {
            self.frameNumber = 3;
            self.classImg1 = "the-clue-slider1-img-off-left";
            self.classImgSmall1 = "the-clue-slider1-img-off-left-small";
            self.classImg2 =
              "the-clue-slider1-img-off-left animation-slider1-img-left animation-cubic-bezier-slider-1-img";
            self.classImgSmall2 =
              "the-clue-slider1-img-off-left-small animation-slider1-img-left-small animation-cubic-bezier-slider-1-img";
            self.classImg3 =
              "the-clue-slider1-img-left animation-slider1-img-in-right animation-cubic-bezier-slider-1-img";
            self.classImgSmall3 =
              "the-clue-slider1-img-left-small animation-slider1-img-in-right-small animation-cubic-bezier-slider-1-img";
            self.classTitle1 = "the-clue-capture-slider1-off-left";
            self.classTitleSmall1 = "the-clue-capture-slider1-off-left-small";
            self.classTitle2 =
              "the-clue-capture-slider1-off-left animation-slider1-text-left animation-cubic-bezier-slider-1-text";
            self.classTitleSmall2 =
              "the-clue-capture-slider1-off-left-small animation-slider1-text-left-small animation-cubic-bezier-slider-1-text";
            self.classTitle3 =
              "the-clue-capture-slider1 animation-slider1-text-in-right animation-cubic-bezier-slider-1-text";
            self.classTitleSmall3 =
              "the-clue-capture-slider1-small animation-slider1-text-in-right-small animation-cubic-bezier-slider-1-text";
            self.classButtons1 = "the-clue-prv-nxt-buttons-off-left";
            self.classButtonsSmall1 = "the-clue-prv-nxt-buttons-off-left-small";
            self.classButtons2 =
              "the-clue-prv-nxt-buttons-off-left animation-buttons-left animation-cubic-bezier-slider-1-img";
            self.classButtonsSmall2 =
              "the-clue-prv-nxt-buttons-off-left-small animation-buttons-left animation-cubic-bezier-slider-1-img";
            self.classButtons3 =
              "the-clue-prv-nxt-buttons-left animation-buttons-in-right animation-cubic-bezier-slider-1-img";
            self.classButtonsSmall3 =
              "the-clue-prv-nxt-buttons-left-small animation-buttons-in-right animation-cubic-bezier-slider-1-img";
            self.classText1 = "text-slider1-slightly-left w3-hide";
            self.classText2 = "text-slider1-slightly-left w3-hide";
            self.classText3 = "text-slider1-slightly-left animated slow fadeIn";
            self.classTextSmall1 = "text-slider1-slightly-left-small w3-hide";
            self.classTextSmall2 = "text-slider1-slightly-left-small w3-hide";
            self.classTextSmall3 =
              "text-slider1-slightly-left-small animated slow fadeIn";
            self.classOne = "w3-hide";
            self.classTwo = "w3-hide";
            self.classThr = "animated slow fadeIn";
            self.classOneSmall = "w3-hide";
            self.classTwoSmall = "w3-hide";
            self.classThrSmall = "animated slow fadeIn";
          });
        });
    },
    FirstNxtFrame() {
      let self = this;
      return new Promise(function(resolve, reject) {
        resolve("Done");
      });
    },
    SecondNxtFrame() {
      let self = this;
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          resolve("Done");
        }, 1000);
      });
    },
    FirstPrvFrame() {
      let self = this;
      return new Promise(function(resolve, reject) {
        resolve("Done");
      });
    },
    SecondPrvFrame() {
      let self = this;
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          resolve("Done");
        }, 1000);
      });
    }
  }
};
</script>

<style scoped>
@media (max-height: 700px) and (min-width: 1335px) {
  /* - 20% */

  .the-clue-width-50vw {
    width: 40vw;
  }
  .PRV-NXT-Button {
    width: 200px;
    height: 56px;
    background-color: #202020;
  }

  .PRV-NXT-Text {
    font-family: Montserrat;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: 2px;
    color: #ffffff;
  }

  .capture-slider1-light {
    width: 400px;
    height: 82px;
    font-family: Montserrat;
    font-size: 32px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: 1px;
    text-align: left;
    color: #000000;
  }

  .capture-slider1-light .capture-slider1-bold {
    font-size: 40px;
    font-weight: bold;
    letter-spacing: 1.25px;
  }

  .division-slider1 {
    font-family: Montserrat;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: 0.4px;
    color: #000000;
  }

  .the-clue-line-slider1 {
    width: 38px;
    height: 1px;
    background-color: #000000;
  }

  .slider1-text-each-frame {
    width: 320px;
    height: 136px;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: 1.35px;
    text-align: left;
    color: #000000;
  }

  .slider-1-see-more-work {
    width: 160px;
    height: 22px;
    font-family: Montserrat;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.27;
    letter-spacing: 1.65px;
    text-align: left;
    color: #000000;
  }
}

@media only screen and (max-width: 1335px) {
  /* - 20% */

  .the-clue-one-section-size {
    height: 80vh;
    min-height: 700px;
  }

  .PRV-NXT-Button {
    width: 200px;
    height: 56px;
    background-color: #202020;
  }

  .PRV-NXT-Text {
    font-family: Montserrat;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: 2px;
    color: #ffffff;
  }

  .capture-slider1-light {
    width: 400px;
    height: 82px;
    font-family: Montserrat;
    font-size: 32px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: 1px;
    text-align: left;
    color: #000000;
  }

  .capture-slider1-light .capture-slider1-bold {
    font-size: 40px;
    font-weight: bold;
    letter-spacing: 1.25px;
  }

  .division-slider1 {
    font-family: Montserrat;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: 0.4px;
    color: #000000;
  }

  .the-clue-line-slider1 {
    width: 38px;
    height: 1px;
    background-color: #000000;
  }

  .slider1-text-each-frame {
    width: 320px;
    height: 176px;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: 1.35px;
    text-align: left;
    color: #000000;
  }

  .slider-1-see-more-work {
    width: 160px;
    height: 22px;
    font-family: Montserrat;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.27;
    letter-spacing: 1.65px;
    text-align: left;
    color: #000000;
  }
}

@media only screen and (max-width: 992px) {
  .slider1-text-each-frame {
    margin-top: 30px;
    width: 350px;
    height: 110px;
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: 1.35px;
    text-align: left;
    color: #000000;
  }

  .slider-1-see-more-work {
    width: 160px;
    height: 22px;
    font-family: Montserrat;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.27;
    letter-spacing: 1.65px;
    text-align: left;
    color: #000000;
  }

  .the-clue-division-slider-1-left-small {
    position: absolute;
    top: 85%;
    left: 75%;
  }
}

@media (max-height: 800px) and (max-width: 992px) and (min-width: 801px) {
  .the-clue-one-section-size-small {
    height: 920px;
  }

  .the-clue-width-75vw {
    width: 70vw;
  }
}

@media (max-height: 550px) and (max-width: 800px) {
  .the-clue-one-section-size-small {
    height: 920px;
  }

  .the-clue-width-75vw {
    width: 70vw;
  }
}

@media only screen and (max-width: 860px) {
  /* - 20% */
  .slider1-text-each-frame {
    margin-top: 0px;
    width: 320px;
    height: 110px;
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: 1.35px;
    text-align: left;
    color: #000000;
  }

  .slider-1-see-more-work {
    width: 160px;
    height: 22px;
    font-family: Montserrat;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.27;
    letter-spacing: 1.65px;
    text-align: left;
    color: #000000;
  }

  .the-clue-division-slider-1-left-small {
    position: absolute;
    top: 80%;
    left: 80%;
  }

  .the-clue-capture-slider1-small {
    position: absolute;
    top: -25%;
    left: 25%;
  }

  .the-clue-capture-slider1-off-left-small {
    position: absolute;
    top: -25%;
    left: -55%;
  }

  .the-clue-capture-slider1-off-right-small {
    position: absolute;
    top: -25%;
    left: -150%;
  }

  .animation-slider1-text-left-small {
    animation: slider1-text-left-small 1s;
  }

  .animation-slider1-text-right-small {
    animation: slider1-text-right-small 1s;
  }

  .animation-slider1-text-in-left-small {
    animation: slider1-text-in-left-small 1s;
  }

  .animation-slider1-text-in-right-small {
    animation: slider1-text-in-right-small 1s;
  }

  .animation-cubic-bezier-slider-1-text {
    animation-timing-function: cubic-bezier(1, 0.13, 0, 1);
  }

  @keyframes slider1-text-left-small {
    from {
      top: -25%;
      left: 25%;
    }
    to {
      top: -25%;
      left: -55%;
    }
  }

  @keyframes slider1-text-right-small {
    from {
      top: -25%;
      left: 25%;
    }
    to {
      top: -25%;
      left: 150%;
    }
  }

  @keyframes slider1-text-in-left-small {
    from {
      top: -25%;
      left: -55%;
    }
    to {
      top: -25%;
      left: 25%;
    }
  }

  @keyframes slider1-text-in-right-small {
    from {
      top: -25%;
      left: 150%;
    }
    to {
      top: -25%;
      left: 25%;
    }
  }
}

@media only screen and (max-width: 640px) {
  /* - 20% */

  .capture-slider1-light {
    width: 400px;
    height: 66px;
    font-family: Montserrat;
    font-size: 26px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: 1px;
    text-align: left;
    color: #000000;
  }

  .capture-slider1-light .capture-slider1-bold {
    font-size: 32px;
    font-weight: bold;
    letter-spacing: 1.25px;
  }

  .PRV-NXT-Button {
    width: 160px;
    height: 45px;
    background-color: #202020;
  }

  .PRV-NXT-Text {
    font-family: Montserrat;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: 2px;
    color: #ffffff;
  }

  .slider1-text-each-frame {
    margin-top: -5vh;
    margin-left: -10vw;
    width: 340px;
    height: 110px;
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: 1.35px;
    text-align: left;
    color: #000000;
  }

  .slider-1-see-more-work {
    margin-left: -10vw;
    width: 160px;
    height: 22px;
    font-family: Montserrat;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.27;
    letter-spacing: 1.65px;
    text-align: left;
    color: #000000;
  }

  .the-clue-division-slider-1-left-small {
    position: absolute;
    top: 80%;
    left: 80%;
  }

  .the-clue-capture-slider1-small {
    position: absolute;
    top: -25%;
    left: 25%;
  }

  .the-clue-capture-slider1-off-left-small {
    position: absolute;
    top: -25%;
    left: -55%;
  }

  .the-clue-capture-slider1-off-right-small {
    position: absolute;
    top: -25%;
    left: -150%;
  }

  .animation-slider1-text-left-small {
    animation: slider1-text-left-small 1s;
  }

  .animation-slider1-text-right-small {
    animation: slider1-text-right-small 1s;
  }

  .animation-slider1-text-in-left-small {
    animation: slider1-text-in-left-small 1s;
  }

  .animation-slider1-text-in-right-small {
    animation: slider1-text-in-right-small 1s;
  }

  .animation-cubic-bezier-slider-1-text {
    animation-timing-function: cubic-bezier(1, 0.13, 0, 1);
  }

  @keyframes slider1-text-left-small {
    from {
      top: -25%;
      left: 25%;
    }
    to {
      top: -25%;
      left: -55%;
    }
  }

  @keyframes slider1-text-right-small {
    from {
      top: -25%;
      left: 25%;
    }
    to {
      top: -25%;
      left: 150%;
    }
  }

  @keyframes slider1-text-in-left-small {
    from {
      top: -25%;
      left: -55%;
    }
    to {
      top: -25%;
      left: 25%;
    }
  }

  @keyframes slider1-text-in-right-small {
    from {
      top: -25%;
      left: 150%;
    }
    to {
      top: -25%;
      left: 25%;
    }
  }
}

@media only screen and (max-width: 540px) {
  /* - 30% */
  .capture-slider1-light {
    width: 256px;
    height: 46px;
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: 1px;
    text-align: left;
    color: #000000;
  }

  .capture-slider1-light .capture-slider1-bold {
    font-size: 22px;
    font-weight: bold;
    letter-spacing: 1.25px;
  }

  .PRV-NXT-Button {
    width: 112px;
    height: 32px;
    background-color: #202020;
  }

  .PRV-NXT-Text {
    font-family: Montserrat;
    font-size: 9px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: 2px;
    color: #ffffff;
  }

  .slider1-text-each-frame {
    margin-top: -1vh;
    margin-left: -10vw;
    width: 300px;
    height: 95px;
    font-family: Montserrat;
    font-size: 10px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: 1.35px;
    text-align: left;
    color: #000000;
  }

  .slider-1-see-more-work {
    margin-left: -10vw;
    width: 112px;
    height: 15px;
    font-family: Montserrat;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.27;
    letter-spacing: 1.65px;
    text-align: left;
    color: #000000;
  }

  .division-slider1 {
    font-family: Montserrat;
    font-size: 11px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: 0.4px;
    color: #000000;
  }

  .the-clue-line-slider1 {
    width: 34px;
    height: 1px;
    background-color: #000000;
  }

  .the-clue-division-slider-1-left-small {
    position: absolute;
    top: 68%;
    left: 78%;
  }

  .the-clue-capture-slider1-small {
    position: absolute;
    top: -25%;
    left: 18%;
  }

  .the-clue-capture-slider1-off-left-small {
    position: absolute;
    top: -25%;
    left: -55%;
  }

  .the-clue-capture-slider1-off-right-small {
    position: absolute;
    top: -25%;
    left: -150%;
  }

  .animation-slider1-text-left-small {
    animation: slider1-text-left-small 1s;
  }

  .animation-slider1-text-right-small {
    animation: slider1-text-right-small 1s;
  }

  .animation-slider1-text-in-left-small {
    animation: slider1-text-in-left-small 1s;
  }

  .animation-slider1-text-in-right-small {
    animation: slider1-text-in-right-small 1s;
  }

  .animation-cubic-bezier-slider-1-text {
    animation-timing-function: cubic-bezier(1, 0.13, 0, 1);
  }

  @keyframes slider1-text-left-small {
    from {
      top: -25%;
      left: 18%;
    }
    to {
      top: -25%;
      left: -55%;
    }
  }

  @keyframes slider1-text-right-small {
    from {
      top: -25%;
      left: 18%;
    }
    to {
      top: -25%;
      left: 150%;
    }
  }

  @keyframes slider1-text-in-left-small {
    from {
      top: -25%;
      left: -55%;
    }
    to {
      top: -25%;
      left: 18%;
    }
  }

  @keyframes slider1-text-in-right-small {
    from {
      top: -25%;
      left: 150%;
    }
    to {
      top: -25%;
      left: 18%;
    }
  }
}

@media only screen and (max-width: 380px) {
  /* - 20% */
  .capture-slider1-light {
    width: 200px;
    height: 37px;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: 1px;
    text-align: left;
    color: #000000;
  }

  .capture-slider1-light .capture-slider1-bold {
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 1.25px;
  }

  .PRV-NXT-Button {
    width: 90px;
    height: 26px;
    background-color: #202020;
  }

  .PRV-NXT-Text {
    font-family: Montserrat;
    font-size: 7px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: 2px;
    color: #ffffff;
  }

  .slider1-text-each-frame {
    margin-top: -1vh;
    margin-left: -10vw;
    width: 230px;
    height: 76px;
    font-family: Montserrat;
    font-size: 8px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: 1.35px;
    text-align: left;
    color: #000000;
  }

  .slider-1-see-more-work {
    margin-left: -10vw;
    width: 90px;
    height: 12px;
    font-family: Montserrat;
    font-size: 10px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.27;
    letter-spacing: 1.65px;
    text-align: left;
    color: #000000;
  }

  .division-slider1 {
    font-family: Montserrat;
    font-size: 9px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: 0.4px;
    color: #000000;
  }

  .the-clue-line-slider1 {
    width: 27px;
    height: 1px;
    background-color: #000000;
  }

  .the-clue-division-slider-1-left-small {
    position: absolute;
    top: 68%;
    left: 78%;
  }

  .the-clue-capture-slider1-small {
    position: absolute;
    top: -25%;
    left: 18%;
  }

  .the-clue-capture-slider1-off-left-small {
    position: absolute;
    top: -25%;
    left: -55%;
  }

  .the-clue-capture-slider1-off-right-small {
    position: absolute;
    top: -25%;
    left: -150%;
  }

  .animation-slider1-text-left-small {
    animation: slider1-text-left-small 1s;
  }

  .animation-slider1-text-right-small {
    animation: slider1-text-right-small 1s;
  }

  .animation-slider1-text-in-left-small {
    animation: slider1-text-in-left-small 1s;
  }

  .animation-slider1-text-in-right-small {
    animation: slider1-text-in-right-small 1s;
  }

  .animation-cubic-bezier-slider-1-text {
    animation-timing-function: cubic-bezier(1, 0.13, 0, 1);
  }

  @keyframes slider1-text-left-small {
    from {
      top: -25%;
      left: 18%;
    }
    to {
      top: -25%;
      left: -55%;
    }
  }

  @keyframes slider1-text-right-small {
    from {
      top: -25%;
      left: 18%;
    }
    to {
      top: -25%;
      left: 150%;
    }
  }

  @keyframes slider1-text-in-left-small {
    from {
      top: -25%;
      left: -55%;
    }
    to {
      top: -25%;
      left: 18%;
    }
  }

  @keyframes slider1-text-in-right-small {
    from {
      top: -25%;
      left: 150%;
    }
    to {
      top: -25%;
      left: 18%;
    }
  }
}
</style>
