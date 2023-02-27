const app = Vue.createApp({
  data() {
    return {
      total: 0
    }
  },
  methods: {
    key: function(num) {
      if (this.total == 0) {
        return this.total = num.toString();
      }
      else {
        return this.total += num.toString();
      }      
    },
    clear: function() {
      return this.total = 0;
    },
    equal: function() {
      let equal = this.total;
      return this.total = eval(equal);
    }
  },
});

app.mount('#app');