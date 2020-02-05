<template>
  <div>
    <div class="product_image_area">
      <div class="container">
        <div class="row s_product_inner">
          <div class="col-lg-6">
            <div class="owl-carousel owl-theme s_Product_carousel">
              <div class="single-prd-item">
                <img class="img-fluid" :src="getPic(servico.pic)" />
              </div>
            </div>
          </div>
          <div class="col-lg-5 offset-lg-1">
            <div class="s_product_text">
              <h3>{{ servico.name }}</h3>
              <h2>R$ {{ servico.cost }}</h2>
              <ul class="list">
                <li>
                  <span>{{ servico.category }}</span>
                </li>
              </ul>
              <p>{{ servico.description }}</p>
              <div style="margin-top: 10px;" class="product_count">
                <router-link 
                    class="button primary-btn" 
                    :to="{name: 'contrato', params: {id: servico.id}}"
                >
                    Contratar
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import listaServicos from "../data.json";

export default {
  data() {
    return {
      servico: {}
    };
  },
  methods: {
    getPic(pic) {
      return require(`@/assets/img/news/${pic}`);
    }
  },
  created() {
    console.log("pega " + this.$route.params.id);
    this.servico = listaServicos[this.$route.params.id];
    this.$nextTick(function() {
      window.$(".s_Product_carousel").owlCarousel({
        items: 1,
        autoplay: false,
        autoplayTimeout: 5000,
        loop: true,
        nav: false,
        dots: false
      });
    });
  }
};
</script>

<style scoped>
</style>