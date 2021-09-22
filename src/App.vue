<template lang='pug'>
#nav
  router-link(
    v-for="(nav, index) in navList"
    :to="nav.path"
    :class="tw(\
      'px-5',\
      'mx-2',\
      index + 1 !== navList.length && 'border(r-1 gray-500)',\
    )"
  ) {{ nav.name }}
<router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
export default {
  name: 'app',
  setup () {
    const navList = [
      {
        name: 'Home',
        path: '/'
      },
      {
        name: 'About',
        path: '/About'
      },
      {
        name: 'Jest',
        path: '/Jest'
      }
    ]
    return {
      navList
    }
  }
}
</script>
