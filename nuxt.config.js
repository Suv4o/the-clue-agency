export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "The Clue - Creating Brands That Stand Out And Grow.",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Start, run and grow your Brand with us. Think long-term, branding results are never immediate. Is your brand as strong as it could be? Brand Identity Design, Product Identity Design, Brand Strategy, Branding Campaigns, Online Brand Experience, Brand Photography",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700&display=swap",
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff000", height: "5px" },
  /*
   ** Global CSS
   */
  css: [
    "@/assets/css/w3.css",
    "@/assets/css/main.css",
    "@/assets/css/animate.css",
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~/plugins/vue-check-view" },
    { src: "~/plugins/vue-moment" },
  ],

  pageTransition: {
    // name: "fade",
    // mode: "out-in"
    name: "slide-fade",
    mode: "out-in",
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    "bootstrap-vue/nuxt",
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "vue-scrollto/nuxt",
    "nuxt-validate",
    [
      "nuxt-facebook-pixel-module",
      {
        track: "PageView",
        pixelId: "563177370943447",
        disabled: false,
      },
    ],
    [
      "nuxt-fire",
      {
        config: {
          apiKey: "YOUR FIREBASE API KEY",
          authDomain: "YOUR FIREBASE AUTH DOMAIN",
          databaseURL: "YOUR FIREBASE DATABASE URL",
          projectId: "YOUR FIREBASE PROJECT ID",
          storageBucket: "YOUR FIREBASE STORAGE BUCKET",
          messagingSenderId: "YOUR FIREBASE MESSAGING SENDER ID",
          appId: "YOUR FIREBASE APP ID",
          measurementId: "YOUR FIREBASE MEASUREMENT ID",
        },
        services: {
          auth: true,
          firestore: true,
          functions: true,
          storage: true,
          analytics: true,
        },
      },
    ],
  ],

  generate: {
    routes: [
      "/insights/what-to-look-for-in-a-branding-agency",
      "/insights/content-marketing-trends-to-keep-an-eye-on-in-2020",
      "/insights/rebranding-mistakes-you-need-to-avoid",
      "/insights/5-things-to-consider-before-creating-a-logo",
      "/insights/how-to-build-a-memorable-brand-experience",
    ],
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};
