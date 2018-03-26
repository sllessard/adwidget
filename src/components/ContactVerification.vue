<template>
  <div id="verificationForm">
    <p class="verificationForm__error" v-if="verificationError">
      Code entered does not match. Please try again or update contact information
    </p>
    <p>We sent a code to: {{ clientContact }}</p>
    <form @submit.prevent="checkVerificationCode">
      <input type="text" placeholder="Verification Code" v-model.lazy.trim="userVerificationString">
      <input type="submit" value="See Quote">
    </form>
    <button @click="returnToEntryForm">Change Contact Information</button>
    <p id="forTest">Code for test purposes: {{ verificationCode }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userVerificationString: '',
        verificationCode: 'aq12',
        verificationError: false
      }
    },
    props: {
      clientContact: String
    },
    methods: {
      checkVerificationCode() {
        if(this.verificationCode === this.userVerificationString){
          this.$emit('formVerified', true);
        } else {
          this.verificationError = true;
        }
      },
      returnToEntryForm() {;
        this.$emit('updateContact', false);
      }
    }
  }  
</script>

<style lang="scss" scoped>

  .verificationForm__error {
    color: red;
  }

   #forTest {
    display: block;
    font-size: 12px;
    margin: 0;
  }

  .leaderboard {
    .verificationForm__error {
      display: block;
    }

    form {
      display: inline;
    }

  }

  .medium {
    button, input {
      margin: auto;
      display: block;
    }

    input[type="submit"] {
      margin: 10% auto 0 auto;
    }

    #forTest {
      margin: auto;
    }

  }  
</style>