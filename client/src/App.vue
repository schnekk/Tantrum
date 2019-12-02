<template>
  <v-app>
<bar/>
  
   
   
    <router-view/>
  </v-app>
</template>

<script>
import bar from './components/Bar'
//import userbar from './components/UserBar'

export default {
  name: 'App',
  components: {
    bar,
  //  userbar
  },
  data: () => ({
    local:null
  }),
  methods:{

  }
};
</script>
