<template>
  <div class="third-part">
    <div class="profile-logo">
      <button id="avatar-btn" @click="showLoginModal">
        <img src="../../assets/icons/322263374_938225290479267_5589811720654077421_n.jpg" alt="YouTube Logo">
      </button>
    </div>
    <div v-if="showModal" class="modal">
      <form>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li v-if="!isLoggedIn"><a href="Log In" @click="showLogin()">Log In</a></li>
            <li v-if="!isLoggedIn"><a href="Sign Up" @click="showSignup()">Sign Up</a></li>
            <li v-if="isLoggedIn"><a href="Log Out" @click="logout()">Log Out</a></li>
          </ul>
        </nav>
      </form>
    </div>
  </div>
</template>
  
<script>

export default {
  data() {
    return {
      showModal: false,
      isLoggedIn: false
    };
  },
  methods: {
    showLoginModal() {
      this.showModal = true;
    },
  }
}
</script>
  
<style>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
</style>
  

<style scope>
.third-part {
  margin-left: 395px;
  display: flex;
  align-items: center;
}

.profile-logo {
  width: 100px;
}

.profile-logo img {
  margin-left: 39px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
}

.modal {
  width: 340px;
  height: 340px;
  background: #0079a5;
  display: flex;
  border: 1px;
  border-radius: 30px;
  align-items: center;

}

.modal nav ul {
  display: flex;
  list-style: none;
  margin-left: 40px;
}  

.modal nav li {
  margin-right: 20px;
}

.modal nav li a {
  color: #fff;
  text-decoration: none;
  font-size: 18px;
}

.moda nav li a:hover{
  text-decoration: underline;
}




</style>