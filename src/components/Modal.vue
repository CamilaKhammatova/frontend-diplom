<template>
  <div v-show="showModal">
    <div class="custom-modal">
      <div class="page-title">
        <h3>Курсы</h3>
      </div>
      <table class="striped centered" v-if="!isTeacher">
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
            <td>
              <p>
                <label>
                  <input type="checkbox" />
                  <span></span>
                </label>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      
      <ul class="collapsible" ref="collapsible" v-else>
        <li v-for="day in days" :key="day">
          <div class="collapsible-header"><i class="material-icons">filter_drama</i>{{ day }}</div>
          <!-- <div class="collapsible-body"><span>{{ day }}</span></div> -->
          <div class="collapsible-body" v-for="time in times" :key="time">
            <span>{{ time }}</span>
            <p>
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </p>
          </div>
        </li>
      </ul>
      <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect waves-green btn-flat" @click="closeModal">Сохранить</a>
      </div>
    </div>
    <div class="custom-modal-overlay"></div>
  </div>
</template>

<script>
export default {
  props: {
    showModal: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    headers: [
      'Предмет',
      'Преподаватель',
    ],
    tableData: [
      {
        subject: 'Мат.Анал',
        name: 'Иванов Василий',
      },
      {
        subject: 'Дис.Мат',
        name: 'Иванов Василий',
      },
      {
        subject: 'Лин.Алгебра',
        name: 'Иванов Василий',
      },
      {
        subject: 'Основы програм.',
        name: 'Иванов Василий',
      },
      {
        subject: 'Архитектура приложений',
        name: 'Иванов Василий',
      },
      {
        subject: 'Мат.Анал',
        name: 'Иванов Василий',
      },
    ],
    days: [
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница',
      'Суббота',
    ],
    times: [
      '8:30-10:00',
      '10:10-11:40',
      '12:10-13:40',
      '13:50-15:20',
      '15:50-17:20',
      '17:30-19:00',
      '19:10-20:40'
    ]
  }),
  computed: {
    isTeacher() {
      return localStorage.email == 'teacher@kpfu.ru';
    }
  },
  methods: {
    closeModal() {
      this.$emit('closeModal');
    }
  },
  mounted() {
    M.Collapsible.init(this.$refs.collapsible);
  }
}
</script>

<style lang="scss" scoped>
  .custom-modal {
    z-index: 1000;
    position: fixed;
    left: 0;
    right: 0;
    background-color: #fafafa;
    padding: 0;
    max-height: 80%;
    width: 55%;
    margin: auto;
    overflow-y: auto;
    border-radius: 2px;
    will-change: top, opacity;
    box-shadow: 0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.2);
    top: 15%;
    padding: 20px 0;
    .page-title {
      // padding-bottom: 1rem;
      padding: 0 20px 1rem 20px;
    }
  }
  .custom-modal-overlay {
    position: fixed;
    z-index: 999;
    top: -25%;
    left: 0;
    bottom: 0;
    right: 0;
    height: 125%;
    width: 100%;
    background: #000;
    will-change: opacity;
    opacity: 0.5;
  }
  .modal-footer {
    display: flex;
    justify-content: flex-end;
    padding: 0 20px;
  }
  .collapsible {
    .active {
      .collapsible-body {
        display: flex !important;
        padding: 0 10px;
        justify-content: space-evenly;
        align-items: center;
        p {
          margin-bottom: 0.5em;
        }
      }
    }
  }
</style>
