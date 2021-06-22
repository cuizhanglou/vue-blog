<template>
  <div id="show-blogs">
 <h1>博客总览</h1>
<input type="text" placeholder="search" v-model="search"/>

 <div class="single-blog" v-for="blog in filteredBlogs" v-bind:key='blog.id'>
    <router-link v-bind:to="'/blog/'+blog.id"> <h2 v-rainbow>{{blog.title | to-uppercase}}</h2></router-link>
     <article>{{blog.content | snippet}}</article>
 </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'show-blog',
  data(){
      return{
          blogs:[],
          search:''
      }
  },
  created(){
     // this.$http.get("https://damaerguo-221806-default-rtdb.asia-southeast1.firebasedatabase.app/post.json")
     axios.get("/post.json")
      .then(function(data){

          //this.blogs=data.body.slice(0,10);
          //return data.json()
          return data.data;
      }).then((data)=>{
          var blogArray=[]
          for(let key in data){
             // console.log(data[key]);
              data[key].id=key;
              blogArray.push(data[key])
          }
          this.blogs=blogArray;
      })
  },
  computed:{
      filteredBlogs:function(){
          return this.blogs.filter((blog)=>{
              return blog.title.match(this.search);
          })
      }
  },
  filters:{
      demo(value){
          return value.toUpperCase();
      }
  },

  }
</script>

<style>
#show-blogs{
    max-width: 800px;
    margin: 0 auto;
}
.single-blog{
    padding: 20px;
    margin: 20px;
    box-sizing: border-box;
    background: #eee;
}
</style>