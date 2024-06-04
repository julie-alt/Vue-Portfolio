
<template>
  <section>
    <div >
    <MainContainer />
    </div>
    
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import MainContainer from '@/assets/MainContainer.vue';


export default defineComponent({
  name: 'HomePage',
  components:{
    MainContainer,
  },

  setup() {
    const user = ref<Array<{ id: number; name: string; language: string | null; visibility: string }>>([]);

    const fetchRepos = async () => {
      const response = await fetch(`https://api.github.com/users/julie-alt/repos`);
      const data = await response.json();
      user.value = data;
    };

    onMounted(() => {
      fetchRepos();
    });

    return {
      user
    };
  }
});
</script>

