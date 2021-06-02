<h1 align="center">TheClue Branding Agency</h1>
<p align="center">
Website: <a href="https://theclue.agency/">https://theclue.agency/</a>
</p>

<p align="center">
<img src="https://res.cloudinary.com/suv4o/image/upload/c_scale,q_10,w_400/v1621429955/github/the-clue-agency_nckd3e.gif"/>
</p>

<p align="center">
The Clue Agency website was custom-built with HTML, CSS and JavaScript, utilising <a href="https://nuxtjs.org/">Nuxt JS</a>, a framework based on <a href="https://vuejs.org/">Vue.js</a>. In using the latest technology, <a href="https://nuxtjs.org/">Nuxt JS</a> further creates a blazingly fast static website that is optimised for performance. The interactivity of the website is enhanced through dynamic text animations as one scrolls through the webpage — one of the latest trends that is prominent in current-day websites. The blog space was implemented using a Headless CMS, linked via an external API. The CMS places the user at the center, in enabling the easy uploading and maintenance of blog posts by users. Feel free to jump on the link above to engage with the website.
</p>

<h2 align="center">Getting Started is Simple</h2>

#### Install dependencies

```
npm install
```

#### Configure your Firebase

Add your Firebase configuration in `nuxt.config.js`

```js
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
```

#### Serve at localhost:3000

```
npm run dev
```

#### Generate static project

```
npm run generate
```
