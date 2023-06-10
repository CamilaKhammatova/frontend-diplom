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
      <a href="#" class="waves-effect pointer">{{ link.title }}</a>
    </router-link>
  </ul>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    links: [

    ]
  }),
  methods: {
    getData() {
      var id = this.$route.params.id
      var name = this.$route.name

      if (name === 'teacher_profile' || name === 'teacher_schedule') {
        this.links = [
          {title: 'Профиль', url: `/teacher/profile/${id}`, exact: true},
          {title: 'Расписание', url: `/teacher/schedule/${id}`},
        ]
      } else {
        this.links = [
          {title: 'Профиль', url: `/profile/${id}`, exact: true},
          {title: 'Расписание', url: `/schedule/${id}`},
        ]
      }
    }
  },
  mounted() {
    this.getData();
  }
}
</script>
