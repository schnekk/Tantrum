<template>
  <v-app>
    <bar/>
    <router-view/>
  </v-app>
</template>

<script>
import bar from './components/Bar'

export default {
  name: 'App',
  components: {
    bar
  },
  data: () => ({
  }),
};
</script>
