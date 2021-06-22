<template>
   <div id="single-blog">
       <h1>{{blog.title}}</h1>
       <article>{{blog.content}}</article>
      <button @click="deleteBlog()">del</button>
      <router-link :to="'/edit/'+id">edit</router-link>
   </div>
</template>
<script>
export default{
    name: 'single-blog',
    data(){
        return{
            id:this.$route.params.id,
            blog:{}
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
            deleteBlog(){
                this.$http.delete('https://damaerguo-221806-default-rtdb.asia-southeast1.firebasedatabase.app/post/'+this.id+'.json').then(function(){
                   this.$router.push({path:'/'})
                })
                
            }
        }

}
</script>
<style scoped>
#single-blog{
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background: #eee;

}
</style>
