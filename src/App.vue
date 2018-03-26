<template>
  <div id="app" :class="config.adDimensions">
    <advertisement  v-if="quoteStep === 'advertisers-display'" 
                    @userRequestQuotes="quoteStep = $event">
      <div  class="transporter" 
            slot="promotedBrands" 
            v-for="transporter in transporters" >
        <img class="logo" v-bind:src="transporter.src">
        <p class="description">{{ transporter.description }}</p>
      </div>
    </advertisement>
    <user-input-form  v-if="quoteStep === 'quote-request-form'" 
                      @submissionSuccess="quoteStep = $event">              
    </user-input-form>
    <p v-if="quoteStep === 'confirmation-of-submission'">{{ config.thankYouMessage }}</p>
  </div>
</template>

<script>
  import advertisement from './components/Advertisement.vue';
  import companies from './data/companies.js';
  import config from './config.js';
  import contactForm from './components/RequestForm.vue';

  export default {
    data () {
      return {
        config: config,
        quoteStep: 'advertisers-display',
        transporters: companies,
      }
    },
    components: {
      'advertisement': advertisement,
      'user-input-form': contactForm
    }
  }
</script>

<style lang="scss">
$backgroundColor: lightblue;
#app {
  background: $backgroundColor;
  border: 1px solid black; 
  color: black;
  margin: 0 auto; 
  overflow: auto; 
  position: relative; 
  padding: 1.25%;

  .container {
    height: 100%;
    width: 100%;
  }

  button, input {
    padding: 4px;
    border: 1px solid black;
  }
}
.leaderboard {
  width: 728px; 
  height: 90px;

  .transporter {
    width: 25%; 
    display: block; 
    float: left; 
    height: 100%;
  }
}
.medium {
  width: 300px; 
  height: 250px;

  .transporter {
    padding: 2.5%;
  }
}
</style>
