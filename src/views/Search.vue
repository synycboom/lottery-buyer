<template>
  <div><h1>ค้นหา </h1>
    <div class="row">
      <div class="col-10">
        <b-form-input v-model="text" placeholder="ใส่เลขที่คุณต้องการค้นหา"></b-form-input>
      </div>
      <div class="col">
        <b-button @click="displaySearch()">Search</b-button>
      </div>
    </div>
    <br/>
    <div class="row">
      <div class="col">
        <b-table striped hover :items="items"></b-table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        text: '',
        items: []
      };
    },
    methods: {
      displaySearch() {
        this.items = [
          {match_number:110110},
          {match_number:110111},
          {match_number:110112},
          {match_number:110113},
        ];
      }
    }
  };
</script>
