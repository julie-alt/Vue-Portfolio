<template>
  <nav>
    <img src="@/assets/git2.png" alt="logo" class="logo" />
    <ul class="nav-box">
      <li class="nav-bar">
        <img src="@/assets/home2.png" alt="home" />
        <router-link class="link-style" to="/">Home</router-link>
      </li>
      <li class="nav-bar">
        <img src="@/assets/search.png" alt="search" />
        <router-link class="link-style" to="/search">Search</router-link>
      </li>
      <li class="nav-bar">
        <img src="@/assets/more.png" alt="more" />
        <router-link class="link-style" to="/MorePage">More</router-link>
      </li>
    </ul>
  </nav>
</template>



