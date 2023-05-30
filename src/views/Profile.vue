<template>
  <div>
    <div class="page-title">
      <h3>Профиль</h3>
    </div>

    <div class="profile">
      <form class="form">
        <div class="input-field">
          <input
              id="description"
              type="text"
              disabled
              :value="name"
          >
          <label v-if="!name" for="description">ФИО</label>
          <!-- <span
                class="helper-text invalid">name</span> -->
        </div>
        <div class="input-field" v-if="!department">
          <input
              id="description"
              type="text"
              disabled
              :value="faculty"
          >
          <label v-if="!faculty" for="description">Факультет</label>
          <!-- <span
                class="helper-text invalid">name</span> -->
        </div>
        <div class="input-field" v-if="!faculty">
          <input
              id="description"
              type="text"
              disabled
              :value="department"
          >
          <label v-if="!department" for="description">Кафедра</label>
          <!-- <span
                class="helper-text invalid">name</span> -->
        </div>
        <div class="input-field">
          <input
              id="description"
              type="text"
              disabled
              :value="email"
          >
          <label v-if="!email" for="description">email</label>
          <!-- <span
                class="helper-text invalid">name</span> -->
        </div>

        <button class="btn waves-effect waves-light" type="submit">
          Изменить
          <i class="material-icons right">send</i>
        </button>
      </form>
      <table class="striped centered custom-table">
        <thead>
          <tr>
              <th v-for="(header, index) in headers"
                  :key=index>
                {{ header }}
              </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="row, index in tableData" :key="index">
            <td v-for="item, index in row" :key="index">{{ item }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: '',
    faculty: '',
    department: '',
    headers: [
      'Предмет',
    ],
    tableData: [
      {
        subject: 'Мат.Анал',
      },
      {
        subject: 'Дис.Мат',
      },
      {
        subject: 'Лин.Алгебра',
      },
      {
        subject: 'Основы програм.',
      },
      {
        subject: 'Архитектура приложений',
      },
      {
        subject: 'Мат.Анал',
      },
      {
        subject: 'Мат.Анал',
      },
    ],
  }),
  computed: {
    email() {
      return localStorage.email;
    }
  },
  methods: {
    checkData() {
      if (localStorage.email == 'teacher@kpfu.ru') {
        this.name = 'Геннадьев Василий Иванович',
        this.department = 'ИТИС',
        this.headers.push('Количество записавшихся на курс'),
        this.tableData.map(el => {
          el.count = Math.floor(Math.random() * 60)
        })
      } else {
        this.name = 'Васильев Иван Геннадьевич',
        this.faculty = 'Программная инженерия',
        this.headers.push('Преподаватель'),
        this.tableData.map(el => {
          el.name = 'Иванов Василий'
        })
      }
      const fio = this.name.split(' ')
      this.$store.state.userName = fio[0]+' '+fio[1][0]+'.'+fio[2][0];
    }
  },
  mounted() {
    this.checkData();
  }
}
</script>

<style lang="scss" scoped>
  .custom-table {
    margin-top: 60px;
  }
</style>
