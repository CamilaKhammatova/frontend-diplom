<template>
  <div class="app-main-layout">
    
    <Navbar />
  
    <Sidebar />

    <main class="app-content">
      <div class="app-page">
        <router-view />
      </div>
    </main>

    <div class="fixed-action-btn">
      <button class="waves-effect btn-floating btn-large blue" @click="showModal">
        <i class="large material-icons">create</i>
      </button>
    </div>
    <Modal :showModal="showedModal" @closeModal="closeModal"/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Modal from "@/components/Modal"
export default {
  components: {
    Navbar,
    Sidebar,
    Modal
  },
  data: () => ({
    showedModal: false
  }),
  methods: {
    addCourse() {
      console.log(this.$route);
    },
    showModal() {
      this.showedModal = true;
    },
    closeModal() {
      this.showedModal = false;
    },
  },
}
</script>
