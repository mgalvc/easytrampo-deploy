<template>
  <main class="site-main">
    <!--================ Hero banner start =================-->
    <section class="hero-banner">
      <div class="container">
        <div class="row no-gutters align-items-center pt-60px">
          <div class="col-5 d-none d-sm-block"></div>
          <div class="col-sm-7 col-lg-6 offset-lg-1 pl-4 pl-md-5 pl-lg-0">
            <div class="hero-banner__content">
              <h4>Procurando um serviço?</h4>
              <h1>A EasyTrampo encontra pra você</h1>
              <p>Nossa plataforma te apresenta diversos prestadores de serviços que podem suprir as suas necessidades. O processo é muito simples: basta procurar o serviço que você deseja, visualizar os detalhes e, se aquilo for o que você procura, contratar!</p>
              <router-link
                to="/servicos"
                style="margin-bottom: 60px;"
                class="button button-hero"
              >Ver os Serviços agora</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--================ Hero banner start =================-->

    <!-- ================ Subscribe section start ================= -->
    <section class="subscribe-position">
      <div class="container">
        <div class="subscribe text-center">
          <h3 class="subscribe__title">Fique por dentro das novidades</h3>
          <p>Se inscreva em nossa newsletter e fique sabendo de todos os lançamentos da EasyTrampo</p>
          <div id="mc_embed_signup">
            <form
              target="_blank"
              action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
              method="get"
              class="subscribe-form form-inline mt-5 pt-1"
            >
              <div class="form-group ml-sm-auto">
                <input
                  class="form-control mb-1"
                  type="email"
                  name="EMAIL"
                  placeholder="Seu email"
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Your Email Address '"
                />
                <div class="info"></div>
              </div>
              <button class="button button-subscribe mr-auto mb-1" type="submit">Me Inscrever</button>
              <div style="position: absolute; left: -5000px;">
                <input
                  name="b_36c4fd991d266f23781ded980_aefe40901a"
                  tabindex="-1"
                  value
                  type="text"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!-- ================ Subscribe section end ================= -->
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
</style>