<template>
  <div>
    <header class="header_area">
      <div class="main_menu">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container">
            <a class="navbar-brand logo_h" href>
              <img src="../assets/img/logo.jpeg" alt />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
              <ul class="nav navbar-nav menu_nav ml-auto mr-auto">
                <li class="nav-item" :class="{active: activeRoute === 'index'}">
                  <a class="nav-link" href>Home</a>
                </li>
                <li class="nav-item submenu dropdown" :class="{active: activeRoute === 'servicos'}">
                  <router-link
                    to="/servicos"
                    class="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >Serviços</router-link>
                </li>
                <li class="nav-item" :class="{active: activeRoute === 'contato'}">
                  <a class="nav-link" href>Contato</a>
                </li>
              </ul>

              <!-- <ul class="nav-shop">
                <li class="nav-item">
                  <button>
                    <i class="ti-shopping-cart"></i>
                    <span class="nav-shop__circle">3</span>
                  </button>
                </li>
              </ul> -->
            </div>
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
export default {
    computed: {
        activeRoute() {
            return this.$route.name;
        }
    }
};
</script>

<style scoped>
</style>>