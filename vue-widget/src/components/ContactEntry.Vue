<template>
  <div>
    <form id="ireloWidgetForm" method="post" @submit.prevent="checkSubmission" v-if="!formSubmitted"> 
      <p id="form__directions" :class="{formIncomplete: formIncomplete}" style="font-size: 12px;"> 
        Enter your email or telephone to receive your quotes 
      </p> 
      <label for="form__email">Email:</label> 
      <input id="form__email" type="email" placeholder="name@example.com" v-model.lazy.trim="emailAddress"> 
      <label for="form__telephone">Telephone:</label> 
      <input id="form__telephone" type="tel" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" v-model.lazy.trim="phoneNumber"> 
      <input type="submit" value="Request quotes"> 
    </form>
    <contact-verification :clientContact="toVerify" v-else @updateContact="formSubmitted = $event" @formVerified="formVerified = $event"></contact-verification>
  </div>
</template>

<script>
  import verification from './EntryVerification.vue';
  export default {
    data() {
      return {
        toVerify: '',
        emailAddress: '',
        formIncomplete: false,
        formSubmitted: false,
        formVerified: false,
        phoneNumber: '',
        submission: {}
      }
    },
    components: {
      'contact-verification': verification
    },
    watch: {
      formVerified() {
         if(this.formVerified) {
            this.submitForm();
          }
      }
    },
    methods: {
      submitForm(){
        const $accessUrl = 'https://valet.irelo.com/api/widget/auto/coop-embed';
        const $authKey = '4d69e62f60ab-slessard';

        fetch($accessUrl, {
          method: 'post',
          headers: {
            'Content-Type': "application/json; charset=UTF-8",
            'Authorization': $authKey
          },
          body: JSON.stringify(this.submission)
        })
        .then(response => response.json())
        .then(response => {
          if(response.success = 1) {
            console.log(response);
            this.$emit('submissionSuccess', 3);
          }
        })
        .catch(function(error){
          console.log('Request Failed', error)
        });
      },
      checkSubmission() {
        if(this.phoneNumber) {
          this.toVerify = this.phoneNumber;
          let phoneSubmission = this.phoneNumber.replace(/-/g, "");
          this.submission.verify = phoneSubmission;
          this.formSubmitted = true;
        } else if (this.emailAddress) {
          this.toVerify = this.emailAddress;
          this.submission.verify = this.emailAddress;
          this.formSubmitted = true;
        } else {
          this.formIncomplete = true;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

.leaderboard{

}
.medium {
  label, input {
    display: block;
    margin: 2.5% 0;
  }

  input[type="submit"] {
    margin: auto;
  }
}
  .formIncomplete {
    color: red;
    animation-name: shake;
    animation-duration: .5s;
    position: relative;
  }

 @keyframes shake{
   0% {left: -5px;}
   50% {left: 5px;}
   100% {left: 0;}
 }
</style>