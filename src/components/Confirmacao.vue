<template>
  <div>
    <!-- ================ start banner area ================= -->
    <section class="blog-banner-area" id="category">
      <div class="container h-100">
        <div class="blog-banner">
          <div class="text-center">
            <h1>Confirmação</h1>
            <nav aria-label="breadcrumb" class="banner-breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a>{{servico.name}}</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">{{servico.category}}</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
    <!-- ================ end banner area ================= -->

    <!--================Order Details Area =================-->
    <section class="order_details section-margin--small">
      <div class="container">
        <p class="text-center billing-alert">Muito obrigado, seu serviço foi confirmado!</p>
        <div class="row mb-5">
          <div class="col-md-6 col-xl-6 mb-6 mb-xl-0">
            <div class="confirmation-card">
              <h3 class="billing-title">Serviço</h3>
              <table class="order-rable">
                <tr>
                  <td>Prestador</td>
                  <td>: {{servico.name}}</td>
                </tr>
                <tr>
                  <td>Data</td>
                  <td>: {{new Date().toDateString()}}</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>: R$ {{servico.cost}}</td>
                </tr>
                <tr>
                  <td>Pagamento</td>
                  <td>: {{payment}}</td>
                </tr>
              </table>
            </div>
          </div>
          <div class="col-md-6 col-xl-6 mb-6 mb-xl-0">
            <div class="confirmation-card">
              <h3 class="billing-title">Contratante</h3>
              <table class="order-rable">
                <tr>
                  <td>Nome</td>
                  <td>: {{contratante.name}} {{contratante.lastname}}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>: {{contratante.email}}</td>
                </tr>
                <tr>
                  <td>Endereço</td>
                  <td>: {{contratante.address}}</td>
                </tr>
                <tr>
                  <td>CEP</td>
                  <td>: {{contratante.cep}}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div class="order_details_table">
          <h2>Detalhes do Serviço</h2>
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Serviço</th>
                  <th scope="col">Quantidade</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p>{{servico.name}} - {{servico.category}}</p>
                  </td>
                  <td>
                    <h5>x 01</h5>
                  </td>
                  <td>
                    <p>R$ {{servico.cost}}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Subtotal</h4>
                  </td>
                  <td>
                    <h5></h5>
                  </td>
                  <td>
                    <p>R$ {{servico.cost}}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Taxa EasyTrampo</h4>
                  </td>
                  <td>
                    <h5></h5>
                  </td>
                  <td>
                    <p>R$ {{servico.cost * 0.1}}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Total</h4>
                  </td>
                  <td>
                    <h5></h5>
                  </td>
                  <td>
                    <h4>R$ {{servico.cost * 1.1}}</h4>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
    <!--================End Order Details Area =================-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      servico: {},
      contratante: {}
    };
  },
  computed: {
    payment() {
      return this.contratante.payment === "mp"
        ? "Mercado Pago"
        : "Cartão de Crédito";
    }
  },
  created() {
    this.servico = this.$route.params.servico;
    this.contratante = this.$route.params.contratante;
  }
};
</script>

<style scoped>
</style>