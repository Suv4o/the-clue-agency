<template>
  <section>
    <section
      class="footer-section-1 d-flex align-items-center justify-content-center w3-container"
      v-view="isVisibleSection1"
    >
      <div>
        <div class="d-flex justify-content-center">
          <p
            class="Start-run-and-grow-your-Brand-with-us"
            :class="classSection11"
          >Start, run and grow your Brand with us</p>
        </div>
        <div class="d-flex justify-content-center">
          <p
            class="Think-long-term-branding-results-are-never-immediate-Is-your"
            :class="classSection12"
          >
            Think long-term, branding results are never immediate. Is your brand
            as strong as it could be?
          </p>
        </div>
      </div>
    </section>
    <section
      class="footerSection2 d-flex align-items-center justify-content-center"
      v-view="isVisibleSection2"
    >
      <div class="animated pulseHover">
        <div :class="classSection2">
          <a
            href="https://calendly.com/theclueagency"
            target="_blank"
            class="free-30-minute-consultation the-clue-underline-text-gray-yellow the-clue-text-hover-dark-gray"
          >free 30-minute consultation</a>
        </div>
      </div>
    </section>
    <section
      class="footerSection3 d-flex align-items-center justify-content-center"
      v-view="isVisibleSection3"
    >
      <div class="d-lg-flex flex-lg-row align-items-center justify-content-center">
        <div class="d-flex justify-content-center mr-lg-5">
          <div class="d-flex flex-column" :class="classSection31">
            <a
              class="infotheclueagency the-clue-text-hover-dark-gray the-clue-hover-underline-text-yellow"
              href="mailto:aleks@theclue.agency?Subject=Hello%20there!"
              target="_top"
            >aleks@theclue.agency</a>
            <div class="d-flex mt-4">
              <a href="https://www.facebook.com/theclueagency/" target="_blank">
                <img
                  src="~assets/logos/socialFacebook.svg"
                  class="the-clue-pointer-hover w3-hover-opacity animated infinite pulseHover mt-1 size-icon"
                  alt="fb"
                />
              </a>
              <a href="https://www.instagram.com/theclueagency/" target="_blank">
                <img
                  src="~assets/logos/socialInstagram.svg"
                  class="the-clue-pointer-hover w3-hover-opacity animated infinite pulseHover mt-1 ml-5 size-icon"
                  alt="in"
                />
              </a>
              <a href="https://www.linkedin.com/company/clueaba/" target="_blank">
                <img
                  src="~assets/logos/socialLinkedIn.svg"
                  class="the-clue-pointer-hover w3-hover-opacity animated infinite pulseHover mt-1 ml-5 size-icon"
                  alt="li"
                />
              </a>
              <a href="https://www.behance.net/theclueagency" target="_blank">
                <img
                  src="~assets/logos/socialBH.svg"
                  class="the-clue-pointer-hover w3-hover-opacity animated infinite pulseHover mt-1 ml-5 size-icon"
                  alt="be"
                />
              </a>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center ml-lg-5 the-clue-margine-top-footer1">
          <p
            class="Suite-1-Level-2-902-Mt-Alexander-Rd-Essendon-VIC-3040-Austr"
            :class="classSection32"
          >
            <a
              class="the-clue-text-dark-gray the-clue-hover-underline-text-yellow"
              href="https://www.google.com/maps/place/Suite+1,+Level+2%2F902+Mt+Alexander+Rd,+Essendon+VIC+3040/@-37.7551345,144.9170855,17.56z/data=!4m5!3m4!1s0x6ad65c8a18876749:0x4b9db4aeef56ad56!8m2!3d-37.7558135!4d144.91849"
              target="_blank"
            >
              Suite 1, Level 2, 902 Mt Alexander Rd
              <br />Essendon, VIC 3040
              <br />Australia
            </a>
          </p>
        </div>
      </div>
    </section>
    <section
      class="footerSection4 d-flex align-items-center justify-content-center"
      v-view="isVisibleSection4"
    >
      <div
        class="d-lg-flex flex-lg-row align-items-center justify-content-center the-clue-margine-top-footer2"
        :class="classSection4"
      >
        <div
          class="copy-right-footer"
        >© {{ currnetYear }} TheClue Agency . Crafting High-Impact Brand Design</div>
        <div
          class="copy-right-footer-hiden"
        >© 2020 TheClue Agency . Crafting High-Impact Brand Design</div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      currnetYear: "",
      classSection11: "w3-hide",
      isclassSection11On: true,
      classSection12: "w3-hide",
      isclassSection12On: false,
      timer1: "",
      classSection2: "w3-hide",
      isclassSection21On: true,
      isclassSection22On: false,
      timer2: "",
      classSection31: "w3-hide",
      isclassSection31On: true,
      classSection32: "w3-hide",
      isclassSection32On: false,
      timer3: "",
      classSection4: "w3-hide",
      isclassSection41On: true,
      isclassSection42On: false,
      timer4: "",
    };
  },
  mounted() {
    this.currnetYear = new Date().getFullYear();
  },
  methods: {
    isVisibleSection1(e) {
      if (e.percentTop > 1) {
      } else {
        if (this.isclassSection11On) {
          if (e.percentTop < 0.9) {
            this.classSection11 = "animated slow fadeInDown";
            this.classSection12 = "animated slow animated delay-07 fadeInUp";
            // this.isclassSection11On = false;
            // this.isclassSection12On = true;
            // clearTimeout(this.timer1);
          }
        }
        if (this.isclassSection12On) {
          if (e.percentTop > 0.9) {
            let self = this;
            // this.classSection11 = "animated fadeOutUp";
            // this.classSection12 = "animated fadeOutDown";
            // this.isclassSection11On = true;
            // this.isclassSection12On = false;
            // this.timer1 = setTimeout(function() {
            //   self.classSection11 = "w3-hide";
            //   self.classSection12 = "w3-hide";
            // }, 1000);
          }
        }
      }
    },
    isVisibleSection2(e) {
      if (e.percentTop > 1) {
      } else {
        if (e.percentTop < 0.9) {
          this.classSection2 = "animated slow fadeIn";
          this.isclassSection21On = false;
          this.isclassSection22On = true;
          clearTimeout(this.timer2);
        }
        // if (this.isclassSection21On) {
        //   if (e.percentTop < 0.9) {
        //     this.classSection2 = "animated slow fadeIn";
        //     this.isclassSection21On = false;
        //     this.isclassSection22On = true;
        //     clearTimeout(this.timer2);
        //   }
        // }
        // if (this.isclassSection22On) {
        //   if (e.percentTop > 0.9) {
        //     let self = this;
        //     this.classSection2 = "animated fadeOut";
        //     this.isclassSection21On = true;
        //     this.isclassSection22On = false;
        //     this.timer2 = setTimeout(function() {
        //       self.classSection2 = "w3-hide";
        //     }, 1000);
        //   }
        // }
      }
    },
    isVisibleSection3(e) {
      if (e.percentTop > 1) {
      } else {
        if (e.percentTop < 0.9) {
          this.classSection31 = "animated slow fadeIn";
          this.classSection32 = "animated slow fadeIn";
          this.classSection4 = "animated slow fadeIn";
          this.isclassSection31On = false;
          this.isclassSection32On = true;
          clearTimeout(this.timer3);
        }
        // if (this.isclassSection31On) {
        //   if (e.percentTop < 0.9) {
        //     this.classSection31 = "animated fadeIn";
        //     this.classSection32 = "animated fadeIn";
        //     this.classSection4 = "animated fadeIn";
        //     this.isclassSection31On = false;
        //     this.isclassSection32On = true;
        //     clearTimeout(this.timer3);
        //   }
        // }
        // if (this.isclassSection32On) {
        //   if (e.percentTop > 0.9) {
        //     let self = this;
        //     this.classSection31 = "animated fadeOut";
        //     this.classSection32 = "animated fadeOut";
        //     this.classSection4 = "animated fadeOut";
        //     this.isclassSection31On = true;
        //     this.isclassSection32On = false;
        //     this.timer3 = setTimeout(function() {
        //       self.classSection31 = "w3-hide";
        //       self.classSection32 = "w3-hide";
        //       self.classSection4 = "w3-hide";
        //     }, 1000);
        //   }
        // }
      }
    },
    isVisibleSection4(e) {
      // if (e.percentTop > 1) {
      // } else {
      //   if (this.isclassSection41On) {
      //     if (e.percentTop < 1) {
      //       this.classSection4 = "animated fadeIn";
      //       this.isclassSection41On = false;
      //       this.isclassSection42On = true;
      //       clearTimeout(this.timer4);
      //     }
      //   }
      //   if (this.isclassSection22On) {
      //     if (e.percentTop > 1) {
      //       let self = this;
      //       this.classSection4 = "animated fadeOut";
      //       this.isclassSection41On = true;
      //       this.isclassSection42On = false;
      //       this.timer4 = setTimeout(function() {
      //         self.classSection4 = "w3-hide";
      //       }, 1000);
      //     }
      //   }
      // }
    },
  },
};
</script>

<style scoped>
@media only screen and (max-width: 1335px) {
  /* - 20% */
  .Start-run-and-grow-your-Brand-with-us {
    font-family: Montserrat;
    font-size: 50px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.13;
    letter-spacing: 0.62px;
    text-align: center;
    color: #c1c1c1;
  }

  .Think-long-term-branding-results-are-never-immediate-Is-your {
    width: 752px;
    height: 58px;
    font-family: Montserrat;
    font-size: 26px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.31;
    letter-spacing: 0.32px;
    text-align: center;
    color: #c1c1c1;
  }

  .free-30-minute-consultation {
    width: 483px;
    height: 33px;
    font-family: Montserrat;
    font-size: 34px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: 0.42px;
    text-align: center;
    color: #343434;
  }

  .infotheclueagency {
    width: 446px;
    height: 40px;
    font-family: Montserrat;
    font-size: 34px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.38;
    letter-spacing: 0.52px;
    text-align: left;
    color: #343434;
  }

  .Suite-1-Level-2-902-Mt-Alexander-Rd-Essendon-VIC-3040-Austr {
    height: 74px;
    font-family: Montserrat;
    font-size: 26px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.06;
    letter-spacing: 0.32px;
    text-align: left;
    color: #343434;
  }

  .copy-right-footer {
    height: 15px;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.95;
    letter-spacing: 0.5px;
    text-align: left;
    color: #c1c1c1;
  }

  .copy-right-footer-hiden {
    height: 15px;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.95;
    letter-spacing: 0.5px;
    text-align: left;
    color: transparent;
  }
}

@media only screen and (max-width: 1100px) {
  /* 20% */
  .Start-run-and-grow-your-Brand-with-us {
    font-family: Montserrat;
    font-size: 40px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.13;
    letter-spacing: 0.62px;
    text-align: center;
    color: #c1c1c1;
  }

  .Think-long-term-branding-results-are-never-immediate-Is-your {
    width: 602px;
    height: 46px;
    font-family: Montserrat;
    font-size: 21px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.31;
    letter-spacing: 0.32px;
    text-align: center;
    color: #c1c1c1;
  }

  .free-30-minute-consultation {
    width: 386px;
    height: 33px;
    font-family: Montserrat;
    font-size: 26px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: 0.42px;
    text-align: center;
    color: #343434;
  }

  .infotheclueagency {
    width: 357px;
    height: 32px;
    font-family: Montserrat;
    font-size: 26px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.38;
    letter-spacing: 0.52px;
    text-align: left;
    color: #343434;
  }

  .Suite-1-Level-2-902-Mt-Alexander-Rd-Essendon-VIC-3040-Austr {
    height: 59px;
    font-family: Montserrat;
    font-size: 21px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.06;
    letter-spacing: 0.32px;
    text-align: left;
    color: #343434;
  }

  .copy-right-footer {
    height: 12px;
    font-family: Montserrat;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.95;
    letter-spacing: 0.5px;
    text-align: left;
    color: #c1c1c1;
  }

  .copy-right-footer-hiden {
    height: 12px;
    font-family: Montserrat;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.95;
    letter-spacing: 0.5px;
    text-align: left;
    color: transparent;
  }
}

@media only screen and (max-width: 992px) {
  .the-clue-margine-top-footer1 {
    margin-top: 3rem;
  }
  .the-clue-margine-top-footer2 {
    margin-top: 1rem;
  }

  .footerSection3 {
    height: 300px;
    background-color: #ffffff;
  }
}

@media only screen and (max-width: 860px) {
  /* - 20% */
  .footer-section-1 {
    height: 272px;
  }

  .footerSection2 {
    height: 154px;
  }

  /* For footerSection3 Doen't Applt 20% off rule */

  .footerSection3 {
    height: 250px;
    background-color: #ffffff;
  }

  .footerSection4 {
    height: 68px;
  }

  .Start-run-and-grow-your-Brand-with-us {
    font-family: Montserrat;
    font-size: 32px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.13;
    letter-spacing: 0.62px;
    text-align: center;
    color: #c1c1c1;
  }

  .Think-long-term-branding-results-are-never-immediate-Is-your {
    width: 482px;
    height: 37px;
    font-family: Montserrat;
    font-size: 17px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.31;
    letter-spacing: 0.32px;
    text-align: center;
    color: #c1c1c1;
  }

  .free-30-minute-consultation {
    width: 309px;
    height: 26px;
    font-family: Montserrat;
    font-size: 21px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: 0.42px;
    text-align: center;
    color: #343434;
  }

  .infotheclueagency {
    width: 256px;
    height: 26px;
    font-family: Montserrat;
    font-size: 21px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.38;
    letter-spacing: 0.52px;
    text-align: left;
    color: #343434;
  }

  .Suite-1-Level-2-902-Mt-Alexander-Rd-Essendon-VIC-3040-Austr {
    height: 47px;
    font-family: Montserrat;
    font-size: 17px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.06;
    letter-spacing: 0.32px;
    text-align: left;
    color: #343434;
  }

  .copy-right-footer {
    height: 10px;
    font-family: Montserrat;
    font-size: 10px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.95;
    letter-spacing: 0.5px;
    text-align: left;
    color: #c1c1c1;
  }

  .copy-right-footer-hiden {
    height: 10px;
    font-family: Montserrat;
    font-size: 10px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.95;
    letter-spacing: 0.5px;
    text-align: left;
    color: transparent;
  }
}

@media only screen and (max-width: 685px) {
  /* - 20% */
  .footer-section-1 {
    height: 218px;
  }

  .footerSection2 {
    height: 123px;
  }

  /* For footerSection3 Doen't Applt 20% off rule */

  .footerSection3 {
    height: 200px;
    background-color: #ffffff;
  }

  .the-clue-margine-top-footer1 {
    margin-top: 2rem;
  }

  .footerSection4 {
    height: 54px;
  }

  .Start-run-and-grow-your-Brand-with-us {
    font-family: Montserrat;
    font-size: 26px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.13;
    letter-spacing: 0.62px;
    text-align: center;
    color: #c1c1c1;
  }

  .Think-long-term-branding-results-are-never-immediate-Is-your {
    width: 386px;
    height: 30px;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.31;
    letter-spacing: 0.32px;
    text-align: center;
    color: #c1c1c1;
  }

  .free-30-minute-consultation {
    width: 247px;
    height: 21px;
    font-family: Montserrat;
    font-size: 17px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: 0.42px;
    text-align: center;
    color: #343434;
  }

  .infotheclueagency {
    width: 205px;
    height: 21px;
    font-family: Montserrat;
    font-size: 17px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.38;
    letter-spacing: 0.52px;
    text-align: left;
    color: #343434;
  }

  .Suite-1-Level-2-902-Mt-Alexander-Rd-Essendon-VIC-3040-Austr {
    height: 38px;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.06;
    letter-spacing: 0.32px;
    text-align: left;
    color: #343434;
  }

  .copy-right-footer {
    height: 8px;
    font-family: Montserrat;
    font-size: 8px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.95;
    letter-spacing: 0.5px;
    text-align: left;
    color: #c1c1c1;
  }

  .copy-right-footer-hiden {
    height: 8px;
    font-family: Montserrat;
    font-size: 8px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.95;
    letter-spacing: 0.5px;
    text-align: left;
    color: transparent;
  }

  .size-icon {
    width: 25px;
    height: 25px;
  }
}

@media only screen and (max-width: 560px) {
  /* - 20% */
  .footer-section-1 {
    height: 174px;
  }

  .footerSection2 {
    height: 98px;
  }

  /* For footerSection3 Doen't Applt 20% off rule */

  .footerSection3 {
    height: 170px;
    background-color: #ffffff;
  }

  .the-clue-margine-top-footer1 {
    margin-top: 1.5rem;
  }

  .the-clue-margine-top-footer2 {
    margin-top: 0.7rem;
  }

  .footerSection4 {
    height: 43px;
  }

  .Start-run-and-grow-your-Brand-with-us {
    font-family: Montserrat;
    font-size: 21px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.13;
    letter-spacing: 0.62px;
    text-align: center;
    color: #c1c1c1;
  }

  .Think-long-term-branding-results-are-never-immediate-Is-your {
    width: 309px;
    height: 24px;
    font-family: Montserrat;
    font-size: 11px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.31;
    letter-spacing: 0.32px;
    text-align: center;
    color: #c1c1c1;
  }

  .free-30-minute-consultation {
    width: 198px;
    height: 17px;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: 0.42px;
    text-align: center;
    color: #343434;
  }

  .infotheclueagency {
    width: 164px;
    height: 17px;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.38;
    letter-spacing: 0.52px;
    text-align: left;
    color: #343434;
  }

  .Suite-1-Level-2-902-Mt-Alexander-Rd-Essendon-VIC-3040-Austr {
    height: 30px;
    font-family: Montserrat;
    font-size: 11px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.06;
    letter-spacing: 0.32px;
    text-align: left;
    color: #343434;
  }

  .copy-right-footer {
    height: 6px;
    font-family: Montserrat;
    font-size: 6px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.95;
    letter-spacing: 0.5px;
    text-align: left;
    color: #c1c1c1;
  }

  .copy-right-footer-hiden {
    height: 6px;
    font-family: Montserrat;
    font-size: 6px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.95;
    letter-spacing: 0.5px;
    text-align: left;
    color: transparent;
  }

  .size-icon {
    width: 18px;
    height: 18px;
  }
}

@media only screen and (max-width: 500px) {
  .Start-run-and-grow-your-Brand-with-us {
    font-family: Montserrat;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.13;
    letter-spacing: 0.62px;
    text-align: center;
    color: #c1c1c1;
  }
}
</style>
