<template>
  <section class="checkout_area section-margin--small">
    <div class="container">
      <div class="billing_details">
        <div class="row">
          <div class="col-lg-8">
            <h3>Seus Dados</h3>
            <form class="row contact_form" action="#" method="post" novalidate="novalidate">
              <div class="col-md-6 form-group p_star">
                <input
                  v-model="user.name"
                  type="text"
                  class="form-control"
                  id="first"
                  name="name"
                  placeholder="Nome"
                />
              </div>
              <div class="col-md-6 form-group p_star">
                <input
                  v-model="user.lastname"
                  type="text"
                  class="form-control"
                  id="last"
                  name="lastname"
                  placeholder="Sobrenome"
                />
              </div>
              <div class="col-md-12 form-group">
                <input
                  v-model="user.email"
                  type="text"
                  class="form-control"
                  id="company"
                  name="company"
                  placeholder="Email"
                />
              </div>
              <div class="col-md-6 form-group p_star">
                <input
                  v-model="user.rg"
                  type="text"
                  class="form-control"
                  id="number"
                  name="number"
                  placeholder="RG"
                />
              </div>
              <div class="col-md-6 form-group p_star">
                <input
                  v-model="user.cpf"
                  type="text"
                  class="form-control"
                  id="email"
                  name="compemailany"
                  placeholder="CPF"
                />
              </div>
              <div class="col-md-4 form-group">
                <input
                  v-model="user.cep"
                  type="text"
                  class="form-control"
                  id="zip"
                  name="zip"
                  placeholder="CEP"
                />
              </div>
              <div class="col-md-8 form-group p_star">
                <input
                  v-model="user.address"
                  type="text"
                  class="form-control"
                  id="add1"
                  name="add1"
                  placeholder="Endereço"
                />
              </div>
            </form>
          </div>
          <div class="col-lg-4">
            <div class="order_box">
              <h2>Custo</h2>
              <ul class="list list_2">
                <li>
                  <a>
                    {{servico.category}}
                    <span>R$ {{servico.cost}}</span>
                  </a>
                </li>
              </ul>
              <div class="payment_item">
                <div class="radion_btn">
                  <input v-model="user.payment" value="mp" type="radio" id="f-option5" name="selector" />
                  <label for="f-option5">Mercado Pago</label>
                  <div class="check"></div>
                </div>
                <p>Você será redirecionado para a sua conta do Mercado Pago, onde poderá realizar o pagamento deste serviço</p>
              </div>
              <div class="payment_item active">
                <div class="radion_btn">
                  <input v-model="user.payment" value="cc" type="radio" id="f-option6" name="selector" />
                  <label for="f-option6">Meu Cartão</label>
                  <img src="img/product/card.jpg" alt />
                  <div class="check"></div>
                </div>
                <p>Adicione seu cartão de crédito e utilize-o para realizar o pagamento deste serviço</p>
              </div>
              <div class="creat_account">
                <input type="checkbox" id="f-option4" name="selector" />
                <label for="f-option4">
                  Eu li e aceito os
                  <a>termos e condições*</a>
                </label>
              </div>
              <div class="text-center">
                <a @click.prevent="confirma()" class="button button-paypal" href="#">Continuar para o pagamento</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import listaServicos from "../data.json";

export default {
  data() {
    return {
      servico: {},
      user: {
        name: "",
        lastname: "",
        email: "",
        rg: "",
        cpf: "",
        cep: "",
        address: "",
        payment: "mp"
      }
    };
  },
  methods: {
      confirma() {
          this.$router.push({
              name: 'confirmacao',
              params: {
                  servico: this.servico,
                  contratante: this.user
              }
          });
      }
  },
  created() {
    console.log("pega " + this.$route.params.id);
    this.servico = listaServicos[this.$route.params.id];
  }
};
</script>

<style scoped>
</style>