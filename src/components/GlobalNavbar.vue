<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">Sports site</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link active">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link active">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link active">Log in</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
