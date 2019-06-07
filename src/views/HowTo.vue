<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="102"
      img-height="48"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >

      <!-- Slides with image only -->
      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="102"
          height="48"
          src="https://scontent.fbkk8-3.fna.fbcdn.net/v/t1.15752-9/62415962_401584840445960_7710385612594872320_n.jpg?_nc_cat=100&_nc_oc=AQlshWJu2ZURtH9ieUgivvOKnmVJ2mMEG6878OdrRgfFZuRZpfkm6Aomp3_dciuf0n8&_nc_ht=scontent.fbkk8-3.fna&oh=e48b3ca5e0c34043f9d12244521c9d7d&oe=5D54B184">
        <h1>เลขที่เราแนะนำ</h1>
      </b-carousel-slide>
      <!-- Slides with image only -->
      <b-carousel-slide >
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="102"
          height="48"
          src="https://scontent.fbkk9-2.fna.fbcdn.net/v/t1.15752-9/62246674_450494505743670_3622867251331334144_n.jpg?_nc_cat=109&_nc_oc=AQkfB7EmsLzRCayzzoHUUB4ZY79pkqW_lIGrnE08_aK4p2A99YtxS5UOTkBlQ9G5OlM&_nc_ht=scontent.fbkk9-2.fna&oh=34d501cb196fe793a34825b0b3c16464&oe=5D88FB82">
        <h1>ค้นหาเลขจากฝัน</h1>
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide >
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="102"
          height="48"
          src="https://scontent.fbkk12-3.fna.fbcdn.net/v/t1.15752-9/61946217_470385680373864_7078230705104224256_n.jpg?_nc_cat=110&_nc_oc=AQml9M5fIKIxGOjE0JzhIOzTOAE6bNkR6t6Bz6cAQb4FtI_2HSh_kDnf4FCPO6NuJ58&_nc_ht=scontent.fbkk12-3.fna&oh=8963725b1db29a2c20d4d6a7471bac05&oe=5D570A5E5">
        <h1>เพ่ิมเลขที่คุณต้องการ</h1>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide >
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="102"
          height="48"
          src="https://scontent.fbkk12-3.fna.fbcdn.net/v/t1.15752-9/62164552_2671001506305687_7416189282055880704_n.jpg?_nc_cat=102&_nc_oc=AQmz00XCBuwkSMLq8jzW5kOhPBAv1UjfCdh-V02hDQXO-44VQuPVXsvsx57G8V4x0CY&_nc_ht=scontent.fbkk12-3.fna&oh=d6ed4ded7dd847259c96753af0b25d3b&oe=5D95B983">
        <h1>ค้นหาเลขที่ชอบจากคนขาย</h1>
      </b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide >
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="102"
          height="48"
          src="https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.15752-9/61845656_1203607286479532_7776092766773182464_n.jpg?_nc_cat=106&_nc_oc=AQm3XeM5b4sVgOFVXaBjoAyoTt1kiP5bLBd6D2drXmbsD2Iwyz8c5srfCvy-UZkZURU&_nc_ht=scontent.fbkk12-1.fna&oh=89b68933438cb26ffc8e9562d8ca8378&oe=5D9674C4">
        <h1>หน้าจอประวัติการสั่งซื้อ</h1>
      </b-carousel-slide>

    </b-carousel>
  </div>
</template>

<script>

export default {
  name: 'HowTo',
};
</script>
