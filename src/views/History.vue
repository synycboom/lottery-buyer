<template>
  <div>
    <br/>
    <div><h1>ประวัติการซื้อ</h1></div>
    <div class="row">
      <div class="col">
        <b-table striped hover :items="historyItem"></b-table>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'History',
  data() {
    return {
      text: '',
      historyItem: [
        {
          period: '16-01-2019',
          number: '100000',
          price: '80',
        },
        {
          period: '16-01-2019',
          number: '103210',
          price: '800',
        },
        {
          period: '16-01-2019',
          number: '123320',
          price: '400',
        },
        {
          period: '31-01-2019',
          number: '102120',
          price: '400',
        },
        {
          period: '16-02-2019',
          number: '100021',
          price: '400',
        },
      ],
    };
  },
};

</script>
