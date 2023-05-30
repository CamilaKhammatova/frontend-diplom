<template>
  <div>
    <div class="page-title">
      <h3>Расписание</h3>
    </div>
    <table class="striped centered">
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
</template>

<script>
export default {
  data: () => ({
    headers: [
      'Предмет',
      'Преподаватель',
      'Время начала',
      'Адрес',
      'Номер аудитории',
    ],
    tableData: [
      {
        subject: 'Мат.Анал',
        name: 'Иванов Василий',
        time: '10:00',
        adress: 'Кузнецова 3а',
        audience: 103
      },
      {
        subject: 'Дис.Мат',
        name: 'Иванов Василий',
        time: '11:50',
        adress: 'Кузнецова 3а',
        audience: 111
      },
      {
        subject: 'Лин.Алгебра',
        name: 'Иванов Василий',
        time: '13:30',
        adress: 'Кузнецова 3а',
        audience: 201
      },
      {
        subject: 'Основы програм.',
        name: 'Иванов Василий',
        time: '15:10',
        adress: 'Кузнецова 3а',
        audience: 103
      },
      {
        subject: 'Архитектура приложений',
        name: 'Иванов Василий',
        time: '17:00',
        adress: 'Кузнецова 3а',
        audience: 513
      },
      {
        subject: 'Мат.Анал',
        name: 'Иванов Василий',
        time: '18:40',
        adress: 'Кузнецова 3а',
        audience: 201
      },
    ],
  }),
  methods: {
    checkUser() {
      if (localStorage.email == 'teacher@kpfu.ru') {
        this.tableData.map(el => {
          delete el.name
        })
        this.headers.splice(1, 1)
      }
    }
  },
  mounted() {
    this.checkUser();
  }
}
</script>
