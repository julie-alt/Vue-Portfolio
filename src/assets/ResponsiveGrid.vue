<template>
  <div class="repo-container">
    <v-container>
      <div>
        <div class="repo-item" v-for="(repo, index) in repos" :key="index">
          <v-card class="repo-card">
            <v-card-title>
              <router-link :to="`/repo/${repo.name}`" class="link-style">
                {{ repo.name }}
              </router-link>
            </v-card-title>
            <v-card-text>
              <p class="profile">{{ repo.description }}</p>
              <p class="profile">Stars: {{ repo.stargazers_count }}</p>
              <p class="profile">Language: {{ repo.language === null ? 'none' : repo.language }}</p>
              <p class="profile">Visibility: {{ repo.visibility }}</p>
              <p class="profile">Forks: {{ repo.forks }}</p>
            </v-card-text>
          </v-card>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'ResponsiveGrid',
  props: {
    repos: {
      type: Array,
      required: true
    }
  }
}
</script>
