<template>
  <div class="wrapper">

    <side-bar type="sidebar" :sidebar-links="links">
      <form class="navbar-form navbar-left navbar-search-form navbar-search-form-mobile" role="search">
        <div class="input-group">
          <span class="input-group-addon"><i class="fa fa-search"></i></span>
          <input type="text" value="" class="form-control" placeholder="Search...">
        </div>
      </form>
      <mobile-menu></mobile-menu>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  import MovingArrow from '@/components/UIComponents/SidebarPlugin/MovingArrow.vue'
  import MobileMenu from '@/components/UIComponents/SidebarPlugin/MobileMenu.vue'

  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent,
      MovingArrow,
      MobileMenu
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      }
    },
    computed: {
      links () {
        return this.$store.state.Pages
      }
    }
  }
</script>
