import Vue from "vue";

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      currencies: [],
      amount: 0,
      currencyFromEuro: null,
      currencyToEuro: null,
    },
    computed: {},
    mounted() {
      this.getCurrencies();
    },
    methods: {
      getCurrencies: function () {
        fetch("https://api.exchangeratesapi.io/latest")
          .then((res) => res.json())
          .then((currencies) => (this.currencies = currencies.rates));
      },
      convertToEuro: function () {},
    },
  });
});
