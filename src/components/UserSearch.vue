<template>
  <div class="search-page">
    <h1>Search GitHub Users</h1>
    <input
      class="search-input"
      type="text"
      v-model="searchQuery"
      placeholder="Enter username"
    />
    <button class="search-btn" @click="handleSearch">
      <span class="search-text">search</span>
    </button>
    <ul class="search-list">
      <li v-for="user in searchResults" :key="user.id">
        <a :href="user.html_url" target="_blank" rel="noopener noreferrer" class="search-result">
          {{ user.login }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from 'axios'

export default defineComponent({
  name: 'UserSearch',
  setup() {
    const searchQuery = ref<string>('');
    const searchResults = ref<any[]>([]);

    const handleSearch = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/search/users?q=${searchQuery.value}`
        );
        searchResults.value = response.data.items;
      } catch (error) {
        console.error('Error searching users:', error);
      }
    };

    return {
      searchQuery,
      searchResults,
      handleSearch
    };
  }
});
</script>

