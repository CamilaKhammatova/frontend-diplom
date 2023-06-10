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
import axios from "axios";

export default {
  data: () => ({
    headers: [
      'Предмет',
      'Преподаватель',
      'Дата',
      'Время',
      'Адрес и номер аудитории',
    ],
    tableData: [],
  }),
  methods: {
    getStudentData() {
      var studentId = this.$route.params.id

      axios.get(`http://localhost:8080/api/v1/lessons/student/${studentId}`)
        .then(response => {
          this.tableData = response.data
          this.sortTable()
        });
    },
    sortTable() {
      this.tableData.sort((a, b) => {
        let aDate = new Date(a.date).getTime()
        let bDate = new Date(b.date).getTime()

        if (aDate === bDate) {
          return a.time.localeCompare(b.time)
        }

        return aDate > bDate ? 1 : -1
      })
    },
    getTeacherData() {
      var teacherId = this.$route.params.id

      axios.get(`http://localhost:8080/api/v1/lessons/teacher/${teacherId}`)
        .then(response => {
          this.tableData = response.data
          this.sortTable()
        });
    },
    getData() {
      if (this.$route.name === 'teacher_schedule') {
        this.getTeacherData();
      } else {
        this.getStudentData();
      }
    }
  },
  mounted() {
    this.getData();
  }
}
</script>
