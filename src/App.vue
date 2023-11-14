<script>
export default {
  methods: {
    login(){
      const requestOptions = {
        method: 'POST',
        headers: {
          // 'Content-Type': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Access-Control-Allow-Origin': 'http://localhost:8000',
          'Access-Control-Allow-Methods': '*',
          'Access-Control-Allow-Credentials': 'true',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        },
        body: JSON.stringify({grant_type: '', username: '', password: '', scope: '', client_id: '', client_secret: ''})
      };

      fetch('http://127.0.0.1:8000/token', requestOptions)
          .then(response => console.log(response))
    }
  },
}
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-4 m-3">
        <form>
          <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

          <div class="form-floating">
            <input type="text" class="form-control" id="floatingInput" placeholder="username">
            <label for="floatingInput">Username</label>
          </div>

          <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Password</label>
          </div>

          <button class="btn btn-primary w-100 py-2">Sign in</button>
          <p class="mt-5 mb-3 text-body-secondary">&copy; 2023</p>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>