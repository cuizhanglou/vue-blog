<template>
  <div class="edit-blog">
   <h2>编辑博客</h2>
   <form  v-if="!submmited">
       <label>博客标题</label>
       <input type="text" v-model="blog.title" required/><br/>
        <label>博客内容</label>
       <textarea v-model="blog.content"  >

       </textarea>
       <div id="checkboxes">
           <label for="">vue.js</label>
           <input type="checkbox" value="vue.js" v-model="blog.categories"/>
            <label for="">node.js</label>
           <input type="checkbox" value="node.js"  v-model="blog.categories"/>
            <label for="">react.js</label>
           <input type="checkbox" value="react.js"  v-model="blog.categories"/>
       </div>
       <label>作者：</label>
       <select v-model="blog.author">
           <option v-for="author in authors" :key='author'>{{author}}</option>
       </select>
<button v-on:click.prevent="post">编辑博客</button>
         </form>

         <div v-if="submmited"><h3>您的博客发布成功！</h3></div>
       <div id="preview">
<h3>博客总览</h3>
<p>博客标题:{{blog.title}}</p>

<p>博客内容:</p>
<p>{{blog.content}}</p>
<p>博客分类:</p>
<ul>

    <li v-for="category in blog.categories" :key='category'>
        {{category}}
    </li>
</ul>
<p>作者:</p>
<p>{{blog.author}}</p>
       </div>
 
  </div>
</template>

<script>
export default {
  name: 'edit-blog',
  props: {
   
  },
  data(){
       return {
        id:this.$route.params.id,
        blog:{},
        authors:['hemiah','json','erica'],
        submmited:false
       }
  },
    created(){
            this.$http.get('https://damaerguo-221806-default-rtdb.asia-southeast1.firebasedatabase.app/post/'+this.id+'.json').then(function(data){
                //this.blog=data.body;  
                return data.json()              
            }).then(function(data){
                //console.log(data);
                this.blog=data;
            })
        },
  methods:{
      post:function(){
          this.$http.put('https://damaerguo-221806-default-rtdb.asia-southeast1.firebasedatabase.app/post/'+this.id+'.json',this.blog)

          .then(function(data){
              console.log(data);
              this.submmited=true;
          })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 600px;
    padding: 20px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type='text'],textarea,select{
    display: block;
    width:100%;
    padding:8px;
}
</style>
