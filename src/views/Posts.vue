<template>
  <div class="posts">
    <h1>Posts list</h1>
    <button @click="handleRefreshButtonClick">refresh</button> | 
    <button @click="handleCleanButtonClick">clean</button>
    <template v-for="(post, index) in posts">
      <div :key="index" style="text-align: left; width: 600px; margin: auto;">
        <h3>#{{ post.id }} <small>{{ post.title }}</small></h3>
        <p>{{ post.body }}</p>
        <router-link :to="getPostDetailRoute(post)">leer mas</router-link>
      </div>
    </template>
  </div>
</template>

<script>
  import GPostList from '@/presenters/General/GPostList'
  export default {
    data() {
      return {
        posts: new GPostList(),
      }
    },
    methods: {
      getPostDetailRoute(post) {
        return `/posts/${ post.id }`
      },
      handleCleanButtonClick() {
        this.posts.clean()
      },
      handleRefreshButtonClick() {
        this.posts.getAll()
      },
    },
    mounted() {
      this.handleRefreshButtonClick()
    },
  }
</script>