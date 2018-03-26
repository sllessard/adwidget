<template>
  <div class="container">
    <slot name="promotedBrands"></slot>
    <button type="button" class="btn" @click="quotesRequested">Get More Quotes</button>
  </div>
</template>

<script>
  export default {
    methods: {
      quotesRequested() {
        let nextStep = 2;
        this.$emit('userRequestQuotes', 'quote-request-form');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .leaderboard {
    button {
      display: block; 
      position: relative; 
      top: 50%; 
      transform: translateY(-50%); 
      cursor: pointer;
    }
    .description {
      display: none;
    }

    .logo {
      display: block; 
      width: 75%; 
      margin: 0 2.5% 0 0; 
      height: auto; 
      position: relative; 
      top: 50%; 
      left: 50%; 
      transform: translate(-50%, -50%);
    }

  }

  .medium {

    button {
      display: block; 
      margin: auto; 
      cursor: pointer;
    }

    .description {
      display: inline-block; 
      width: 63%; 
      font: normal 12px sans-serif;
    }

    .logo {
      display: block; 
      float: left; 
      width: 30%; 
      margin: 0 2.5% 0 0; 
      height: auto;
    }

  }
</style>