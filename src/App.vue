<template>
  <div id="app">
  
  <blog-header></blog-header>
    <router-view>

    </router-view>
  </div>
</template>

<script>
import BlogHeader from './components/Header.vue'
//import AddBlog from './components/AddBlog.vue'
//import ShowBlogs from './components/ShowBlogs.vue'
//import HelloWorld from './components/HelloWorld.vue'
// <add-blog></add-blog>  <show-blogs></show-blogs>
export default {
  name: 'App',
  components: {
    BlogHeader
//    BlogHeader,AddBlog,ShowBlogs
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
