<template>
  <div class="reset-password">
    <Modal v-if="modalActive" :modalMessage="modalMessage" v-on:close-modal="closeModal" />
    <Loading v-if="loading" />
    <div class="form-wrap">
      <form class="reset">
        <p class="login-register">
          Back to
          <router-link class="router-link" :to="{ name: 'Login' }">Login</router-link>
        </p>
        <h2>Reset Password</h2>
        <p> Forgot your password? Enter your email below</p>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="Email" v-model="email">
            <Email class="icon"/>
          </div>
        </div>
        <button @click.prevent="resetPassword">Reset Password</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
import Email from '../assets/Icons/envelope-regular.svg';
import Modal from '../components/Modal';
import Loading from '../components/Loading';
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
name: "ForgotPassword",
data() {
  return {
    email: null,
    modalActive: false,
    modalMessage: '',
    loading: null,
  }
},
components: {
  Email,
  Modal,
  Loading,
},
methods: {
  resetPassword() {
    this.loading = true;
    firebase.auth().sendPasswordResetEmail(this.email)
      .then(() => {
        this.loading = false;
        this.modalMessage = 'Password reset email sent!';
        this.modalActive = true;
      })
      .catch((error) => {
        this.loading = false;
        this.modalMessage = error.message;
        this.modalActive = true;
      });
  },
  closeModal() {
    this.modalActive = !this.modalActive;
    this.email = "";
  }
}
}
</script>

<style lang="scss" scoped>

.reset-password {
  position: relative;
  .form-wrap {
    .reset {
      h2 {
        margin-bottom: 8px;
      }
      p {
        text-align: center;
        margin-bottom: 32px;
      }
    }
  }
}

</style>
