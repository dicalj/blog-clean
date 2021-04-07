<template>
  <div class="posts">
    <h1>Posts detail</h1>
    <button @click="handleRefreshButtonClick">refresh</button>
    <div style="text-align: left; width: 600px; margin: auto;">
      <h3>#{{ post.id }} <small>{{ post.title }}</small></h3>
      <p>{{ post.body }}</p>
      <h5>Comments</h5>
      <template v-for="(comment, index) in post.comments">
        <div :key="index" class="comment">
          <h6>{{ comment.name }} | <small>{{ comment.email }}</small></h6>
          <small>{{ comment.body }}</small>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import GPostDetail from '@/presenters/General/GPostDetail'
  export default {
    data() {
      return {
        post: new GPostDetail(),
      }
    },
    methods: {
      handleRefreshButtonClick() {
        this.post.get(this.$route.params.id)
      },
    },
    mounted() {
      this.handleRefreshButtonClick()
    },
  }
</script>