<template>
  <div>
    <b-sidebar
      id="sidebar-no-header"
      aria-labelledby="sidebar-no-header-title"
      no-header
      shadow
      backdrop
      bg-variant="warning"
    >
      <div class="p-3 text-light">
        <h4>Menu</h4>

        <hr class="p-1" />

        <div class="d-grid gap-2">
          <router-link to="/" class="btn btn-outline-light"
            >Home</router-link
          >
          <router-link to="/crud/home" class="btn btn-outline-light"
            >CRUD</router-link
          >
          <router-link to="/card/home" class="btn btn-outline-light"
            >View Card</router-link
          >
          <router-link to="/infinite/home" class="btn btn-outline-light"
            >Infinite Scroll</router-link
          >
          <router-link to="/api/home" class="btn btn-outline-light"
            >API Quotes</router-link
          >
        </div>
      </div>
    </b-sidebar>
  </div>
</template>