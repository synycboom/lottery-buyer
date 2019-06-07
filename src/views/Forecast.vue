<template>
  <div>
    <br/>
    <br/>
    <h1 class="text-primary">เลขเด็ดฝันเห็นทํานายฝัน</h1>
    <div class="row">
      <div class="col-10">
        <b-form-input v-model="text" placeholder="เมื่อคืนคุณฝันเห็นอะไร"></b-form-input>
      </div>
      <div class="col">
        <b-button @click="displaySearch()">หาเลย</b-button>
      </div>
    </div>
    <br/>
    <div class="row">
      <div class="col" v-if="items.length>0">
        เลขที่เกี่ยวข้องกับ {{ text }}
        <b-table striped hover :items="items"></b-table>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Forecast',
  data() {
    return {
      text: '',
      items: [],
    };
  },
  methods: {
    displaySearch() {
      this.items = [
        { match_number: 10 },
        { match_number: 11 },
        { match_number: 12 },
        { match_number: 13 },
      ];
    },
  },
};
</script>
