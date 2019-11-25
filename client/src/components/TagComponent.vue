<template>
  <div class="Container">
    <h1>Tag list</h1>
    <div v-for="item in tagList" :key="item._id">
      <a>{{item.name}}</a>
      <b>{{item.description}}</b>
      </div>
  </div>
</template>

<script>
const url = 'http://localhost:5000/tag'

export default {
  name: 'TagComponent',
  data(){
    return{
      tagList: []
    }
  },
  created(){
    this.$http.get(url).then(response => (this.tagList = response.data))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*h1 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}*/
a {
  color: #42b983;
}

b {
  color: #65D;
}

</style>
