<template>
  <div>
    <br/>
    <h1 class="text-primary">เพิ่มแจ้งเตือนเลขที่คุณชอบ!! </h1>
    <div class="row">
      <div class="col-10">
        <b-form-input v-model="text" placeholder="ใส่เลขที่คุณชื่นชอบ"></b-form-input>
      </div>
      <div class="col">
        <b-button @click="addWishList()">เพิ่มเลขที่คุณชอบ</b-button>
      </div>
    </div>
    <br/>
    <div class="row">
      <div class="col">
        <b-table striped hover :items="withItems"></b-table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WishList',
  data() {
    return {
      text: '',
      withItems: [],
    };
  },
  methods: {
    addWishList() {
      console.log(this.text);
      this.withItems.push({ wish_number: this.text });
      this.text = '';
    },
  },
};
</script>
