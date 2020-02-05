<template>
  <div>
    <!-- ================ start banner area ================= -->
    <section class="blog-banner-area" id="category">
      <div class="container h-100">
        <div class="blog-banner">
          <div class="text-center">
            <h1>Serviços</h1>
          </div>
        </div>
      </div>
    </section>
    <!-- ================ end banner area ================= -->

    <!-- ================ category section start ================= -->
    <section class="section-margin--small mb-5">
      <div class="container">
        <div class="row">
          <div class="col-xl-12 col-lg-8 col-md-7">
            <!-- Start Best Seller -->
            <section class="lattest-product-area pb-40 category-list">
              <div class="row">
                <div class="col-md-6 col-lg-4" v-bind:key="servico.id" v-for="servico in servicos">
                  <div class="card text-center card-product">
                    <div class="card-product__img">
                      <img class="card-img" :src="getPic(servico.pic)" />
                      <ul class="card-product__imgOverlay">
                        <li>
                          <router-link 
                            :to="{name: 'servico', params: {id: servico.id}}"
                          >
                            <button><i class="ti-search"></i></button>
                          </router-link>
                        </li>
                      </ul>
                    </div>
                    <div class="card-body">
                      <p>{{servico.category}}</p>
                      <h4 class="card-product__title">
                        <router-link :to="{name: 'servico', params: {id: servico.id}}">
                            {{servico.name}}
                        </router-link>
                      </h4>
                      <p class="card-product__price">R$ {{servico.cost}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <!-- End Best Seller -->
          </div>
        </div>
      </div>
    </section>
    <!-- ================ category section end ================= -->
  </div>
</template>

<script>
import listaServicos from "../data.json";

export default {
  created() {
    this.servicos = listaServicos;
  },
  data() {
    return {
      servicos: []
    };
  },
  methods: {
      getPic(pic) {
          return require(`@/assets/img/news/${pic}`);
      },
  }
};
</script>

<style scoped>
</style>