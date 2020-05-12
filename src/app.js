import Vue from "vue";

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      currencies: [],
      amount: 0,
      currencyFromEuro: 0,
      currencyToEuro: 0,
    },
    computed: {
      convertFromEuro: function () {
        return this.amount * 100.0;
      },
      convertToEuro: function () {
        return this.amount / 100.0;
      },
    },
    mounted() {
      this.getCurrencies();
    },
    methods: {
      getCurrencies: function () {
        fetch("https://api.exchangeratesapi.io/latest")
          .then((res) => res.json())
          .then((currencies) => (this.currencies = currencies.rates));
      },
    },
  });
});
