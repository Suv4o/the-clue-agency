<template>
  <section v-view="isVisibleGrow" id="sectionTop">
    <div class="w3-display-container">

      <div class="w3-white the-clue-title-section-size">
        <p
          class="moving-text the-clue-absolute"
          :class="classMovingText"
          :style="scrollObjectMovingText"
        >
          INSIGHTS
        </p>
      </div>

      <div class="d-flex justify-content-center flex-size padding-top-bottom post-position">
          <div>
            <div class="blog-title img-size padding-top-bottom-title" :class="classTitle">Why Customer Engagement Should Be Every Business’s Top Priority in 2020</div>
            <img v-view="isVisibleImgTitle" class="img-size" src="/insights-imgs/test-insights.jpg" :class="classImage" alt="blog post image" />
            <div v-view="isVisibleImgText" class="capture-text margin-top-bottom-capture" :class="classText">
                Everyone’s talking about customer engagement — but why is it so important, and what does it really mean? How does customer engagement look in action, when you’re a business trying to connect with your customers today?<br/><br/>

                We already know a lot about the customer journey — how it’s made up of numerous touch points, from search to purchase to post-purchase support. And we know that providing a good customer experience at each of those touch points is critical to building and maintaining a solid reputation for your brand. But customer engagement is often overlooked, even though it’s critical to nudging customers along their journey. <br/><br/>

                Customer Engagement Impacts Profitability. Customer engagement is about inspiring your customers to interact with your brand and willingly take part in the experiences you’re creating for them. If you do it right, you’ll grow your brand and build customer loyalty — and, in turn, drive revenue.<br/><br/>

                In fact, there’s a direct and proven correlation between the level of customer engagement and business profitability. A study by Constellation Research reported that companies who improve engagement can increase cross-sell revenue by 22 percent, up-sell revenue by 38 percent and order size by 5 to 85 percent. Reputation.com research backs up these findings — a high rate of customer engagement, including Automotive and Healthcare.
            </div>
            <div class="w3-border-bottom w3-border-black img-size" :class="classText"></div>
            <div class="d-flex justify-content-between img-size" :class="classText">
              <div class="padding-top-bottom-date-share blog-post-date">Friday  ·  23/04/2020  ·  14:28</div>
              <div class="padding-top-bottom-date-share blog-post-date">
                share: <a href="https://www.facebook.com/sharer.php?u=https://the-clue-portfolio.firebaseapp.com/" target="_blank" class="the-clue-text-black the-clue-text-hover-dark-gray">Facebook</a> — 
                <a href="https://twitter.com/intent/tweet?url=https://the-clue-portfolio.firebaseapp.com/" target="_blank" class="the-clue-text-black the-clue-text-hover-dark-gray">Twitter</a> — 
                <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://the-clue-portfolio.firebaseapp.com/" target="_blank" class="the-clue-text-black the-clue-text-hover-dark-gray">Linkedin</a>
              </div>
            </div>
            <div v-view="isVisibleSeeAll" class="d-flex justify-content-center margin-top-bottom-see-all-insights img-size" :class="classSeeAll">
                <nuxt-link to="/insights" class="the-clue-underline-text the-clue-text-hover-dark-gray w3-text-black animated infinite pulseHover"><div class="see-all-insights">see all insights</div></nuxt-link>
            </div>
            <div v-view="isVisibleSeeMore" class="d-flex justify-content-center img-size" :class="classMoreInsights">
                <div class="more-insights">MORE INSIGHTS</div>
            </div>
            <SectionRelatedPosts url="/insights/post1" img="/insights-imgs/test-insights.jpg">
                <template v-slot:title>
                    Building trust, one of the key factors.
                </template>
                <template v-slot:capture>
                    Customer engagement is about inspiring your customers to interact with your brand and willingly take part in the experiences you’re creating for them.
                </template>
            </SectionRelatedPosts>
            <SectionRelatedPosts url="/insights/post2" img="/insights-imgs/test-insights.jpg">
                <template v-slot:title>
                    Building trust, one of the key factors.
                </template>
                <template v-slot:capture>
                    Customer engagement is about inspiring your customers to interact with your brand and willingly take part in the experiences you’re creating for them.
                </template>
            </SectionRelatedPosts>
            <SectionRelatedPosts url="/insights/post2" img="/insights-imgs/test-insights.jpg">
                <template v-slot:title>
                    Building trust, one of the key factors.
                </template>
                <template v-slot:capture>
                    Customer engagement is about inspiring your customers to interact with your brand and willingly take part in the experiences you’re creating for them.
                </template>
            </SectionRelatedPosts>
          </div>
      </div>

      </p>
    </div>
  </section>
</template>

<script>
import SectionRelatedPosts from "@/components/insights/individual/section-related-posts";
export default {
  components: {
    SectionRelatedPosts
  },
  data() {
    return {
      classTitle: "animated fadeInLeft",
      classImage: "animated fadeInRight",
      classText: "animated fadeIn",
      classSeeAll: "fadeInLeft",
      classMoreInsights: "fadeInRight",
      classMovingText: "",
      classTextAnimation: "animated bounceInRight",
      scrollObjectMovingText: {
        top: "5%",
        left: "0%"
      },
      scrollObjectMovingTextValue: {
        top: 5,
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
    isVisibleSeeMore(e) {
      if (e.percentTop < 0.1) {
        this.classMoreInsights = "animated fadeOutLeft";
      }
      if (e.percentTop > 0.1 && e.percentTop < 0.9) {
        this.classMoreInsights = "animated fadeInRight";
      }

      if (e.percentTop > 1) {
        this.classMoreInsights = "animated fadeOutLeft";
      }
    },

    isVisibleSeeAll(e) {
      if (e.percentTop < 0.1) {
        this.classSeeAll = "animated fadeOutRight";
      }
      if (e.percentTop > 0.1 && e.percentTop < 0.9) {
        this.classSeeAll = "animated fadeInLeft";
      }

      if (e.percentTop > 1) {
        this.classSeeAll = "animated fadeOutRight";
      }
    },

    isVisibleImgTitle(e) {
      if (e.percentTop < 0.05) {
        this.classTitle = "animated fadeOutRight";
        this.classImage = "animated fadeOutLeft";
      }
      if (e.percentTop > 0.05 && e.percentTop < 0.9) {
        this.classTitle = "animated fadeInLeft";
        this.classImage = "animated fadeInRight";
      }

      if (e.percentTop > 1) {
        this.classTitle = "animated fadeOutRight";
        this.classImage = "animated fadeOutLeft";
      }
    },
    isVisibleImgText(e) {
      console.log(e.percentTop);
      if (e.percentTop < 0.1) {
        this.classText = "animated fadeOut";
      }
      if (e.percentTop > 0.1 && e.percentTop < 0.9) {
        this.classText = "animated fadeIn";
      }

      if (e.percentTop > 1) {
        this.classText = "animated fadeOut";
      }
    },
    isVisibleGrow(e) {
      this.scrollPercentTop = e.percentTop;
      if (e.percentTop < 0.2) {
        this.classTextAnimation = "animated bounceOutRight";
      }
      if (e.percentTop > 0.2) {
        this.classTextAnimation = "animated bounceInRight";
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

        this.scrollObjectMovingTextValue = 0 + increaseRate * 3;
        this.scrollObjectMovingText.left =
          this.scrollObjectMovingTextValue + "%";
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
  height: 240vw;
}

.flex-size {
  width: 100%;
}

.post-position {
  position: absolute;
  top: 6vw;
  left: 0vw;
}

.padding-top-bottom {
  padding-top: 5vw;
  padding-bottom: 5vw;
}

.img-size {
  width: 60vw;
}

.blog-title {
  width: 54vw;
  font-family: Montserrat;
  font-size: 2.26vw;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.11;
  letter-spacing: normal;
  text-align: justify;
  color: #161616;
}

.padding-top-bottom-title {
  padding-top: 0vw;
  padding-bottom: 1vw;
}

.capture-text {
  width: 60vw;
  font-family: Montserrat;
  font-size: 1.37vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.65;
  letter-spacing: normal;
  text-align: justify;
  color: #161616;
}

.margin-top-bottom-capture {
  margin-top: 3vw;
  margin-bottom: 3vw;
}

.blog-post-date {
  font-family: Montserrat;
  font-size: 0.9vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.25;
  letter-spacing: 0.8px;
  text-align: justify;
  color: #161616;
}

.padding-top-bottom-date-share {
  padding-top: 0.7vw;
  padding-bottom: 0.7vw;
}

.see-all-insights {
  font-family: Montserrat;
  font-size: 2.5vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: 1.05px;
  text-align: left;
  color: #000000;
}

.margin-top-bottom-see-all-insights {
  margin-top: 6vw;
  margin-bottom: 10vw;
}

.more-insights {
  font-family: Montserrat;
  font-size: 2.4vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: 1px;
  text-align: left;
  color: #000000;
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
}

@media only screen and (max-width: 992px) {
  /* +40% */
  .the-clue-title-section-size {
    height: 336vw;
  }

  .post-position {
    position: absolute;
    top: 8.4vw;
    left: 0vw;
  }

  .padding-top-bottom {
    padding-top: 7vw;
    padding-bottom: 7vw;
  }

  .img-size {
    width: 84vw;
  }

  .blog-title {
    width: 76vw;
    font-family: Montserrat;
    font-size: 3.16vw;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.11;
    letter-spacing: normal;
    text-align: justify;
    color: #161616;
  }

  .padding-top-bottom-title {
    padding-top: 0vw;
    padding-bottom: 1.4vw;
  }

  .capture-text {
    width: 84vw;
    font-family: Montserrat;
    font-size: 1.92vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.65;
    letter-spacing: normal;
    text-align: justify;
    color: #161616;
  }

  .margin-top-bottom-capture {
    margin-top: 4.2vw;
    margin-bottom: 4.2vw;
  }

  .blog-post-date {
    font-family: Montserrat;
    font-size: 1.26vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.25;
    letter-spacing: 0.8px;
    text-align: justify;
    color: #161616;
  }

  .padding-top-bottom-date-share {
    padding-top: 1vw;
    padding-bottom: 1vw;
  }

  .see-all-insights {
    font-family: Montserrat;
    font-size: 3.5vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.19;
    letter-spacing: 1.05px;
    text-align: left;
    color: #000000;
  }

  .margin-top-bottom-see-all-insights {
    margin-top: 8.4vw;
    margin-bottom: 14vw;
  }

  .more-insights {
    font-family: Montserrat;
    font-size: 3.36vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: 1px;
    text-align: left;
    color: #000000;
  }
}

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
}

@media only screen and (max-width: 350px) {
}
</style>
