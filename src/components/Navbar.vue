<template>
  <nav class="navbar blue ">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <span class="black-text">КФУ</span>
      </div>

      <ul class="right hide-on-small-and-down">
        <li>
          <a
              class="dropdown-trigger black-text"
              href="#"
              data-target="dropdown"
              ref="dropdown"
          >
            {{ userName }}
            <i class="material-icons right">arrow_drop_down</i>
          </a>

          <ul id='dropdown' class='dropdown-content'>
            <li>
              <router-link to="/profile" class="black-text">
                <i class="material-icons">account_circle</i>Профиль
              </router-link>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li>
              <a href="#" class="black-text" @click.prevent="logout">
                <i class="material-icons">assignment_return</i>Выйти
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data: ()=> ({
    date: new Date(),
  }),
  computed: {
    userName() {
      return this.$store.state.userName;
    }
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push('/login?message=logout');
    }
  },
  mounted() {
    M.Dropdown.init(this.$refs.dropdown, {
      constrainWidth: false
    })
  }
}
</script>

<style lang="scss" scoped>
  .navbar-left {
    min-width: 100px;
    display: flex;
    justify-content: space-between;
    .black-text {
      font-weight: 800;
    }
  }
</style>
