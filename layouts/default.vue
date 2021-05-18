<template>
  <div>
    <header>
      <NavBarDark />
    </header>

    <main>
      <nuxt />
    </main>

    <footer>
      <FooterDefault />
    </footer>
  </div>
</template>

<script>
import NavBarDark from "@/components/header/navBar/navBarDark";
import FooterDefault from "@/components/footer/footerDefault/footerDefault";
export default {
  components: {
    NavBarDark,
    FooterDefault
  }
};
</script>

<style></style>
