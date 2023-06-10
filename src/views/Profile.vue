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
import axios from "axios";

export default {
  data: () => ({
    name: '',
    faculty: '',
    department: '',
    email: '',
    headers: [
      'Предмет',
    ],
    tableData: [],
  }),
  computed: {

  },
  directory() {
    const module = this.$siteMap.find(route => route.name === this.$route.params.id);
    return {
      title: module.meta?.label,
      items: module.children,
    };
  },
  methods: {
    getStudentData() {
      this.headers.push('Преподаватель')

      var studentId = this.$route.params.id

      axios.get('http://localhost:8080/api/v1/students/' + studentId)
        .then(response => {
          this.name = response.data.fio
          this.email = response.data.email
          this.faculty = 'Программная инженерия'
        });

      axios.get('http://localhost:8080/api/v1/teachers')
        .then(response => {
          response.data.forEach(teacher => {
            this.tableData.push({
              subject: teacher.subjectName,
              name: teacher.fio
            })
          })
        });
    },
    getTeacherData() {
      this.headers.push('Количество студентов')

      var teacherId = this.$route.params.id

      axios.get(`http://localhost:8080/api/v1/teachers/${teacherId}`)
        .then(response => {
          this.name = response.data.fio
          this.email = response.data.email
          this.faculty = 'Программная инженерия'
        });

      axios.get(`http://localhost:8080/api/v1/lessons/teacher/${teacherId}/count`)
        .then(response => {
          response.data.forEach(data => {
            this.tableData.push({
              subject: data.subject,
              name: data.count
            })
          })
        });
    },
    getData() {
      if (this.$route.name === "teacher_profile") {
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

<style lang="scss" scoped>
  .custom-table {
    margin-top: 60px;
  }
</style>
