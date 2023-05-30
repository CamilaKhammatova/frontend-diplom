<template>
  <ul class="sidenav app-sidenav open">
    <router-link
      v-for="link in links"
      :key="link.url"
      tag="li"
      active-class="active"
      :to="link.url"
      :exact="link.exact"
    >
      <a href="#" class="waves-effect pointer">{{link.title}}</a>
    </router-link>
  </ul>
</template>

<script>
export default {
  data: () => ({
    links: [
      {title: 'Профиль', url: '/profile', exact: true},
      {title: 'Расписание', url: '/schedule'},
    ]
  })
}
</script>
