<template>
  <div class="loader-page">
    <div class="loader text-center">
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <br>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <br>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <br>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <br>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "loader"
};
</script>

<style lang="scss" scoped>
.loader-page {
  position: fixed;
  top: 50px;
  left: 0;
  bottom: 0px;
  right: 0;
  z-index: 1050;
  display: block;
  background-color: #00000087;
}
.loader {
  position: relative;
  top:50%; 
  transform: translateY(-50%);
}
.box {
  background: #fff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  margin: 0.1em;
  height: 2em;
  width: 2em;
  display: inline-block;
  position: relative;
  padding: 0;
}
.box:after {
  content: "";
  background: #f00;
  height: 100%;
  width: 100%;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}
.box:nth-of-type(1):after {
  -webkit-animation: 3s 0s block-animation linear infinite;
  animation: 3s 0s block-animation linear infinite;
}
@-webkit-keyframes block-animation {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
    background: #b81b9e;
  }
  20% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes block-animation {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
    background: #b81b9e;
  }
  20% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
.box:nth-of-type(2):after {
  -webkit-animation: 3s 0.1s block-animation linear infinite;
  animation: 3s 0.1s block-animation linear infinite;
}
@keyframes block-animation {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
    background: #4e16ba;
  }
  20% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
.box:nth-of-type(3):after {
  -webkit-animation: 3s 0.2s block-animation linear infinite;
  animation: 3s 0.2s block-animation linear infinite;
}
@keyframes block-animation {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
    background: #6f9bfc;
  }
  20% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
.box:nth-of-type(4):after {
  -webkit-animation: 3s 0.3s block-animation linear infinite;
  animation: 3s 0.3s block-animation linear infinite;
}
@keyframes block-animation {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
    background: #460a5b;
  }
  20% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
.box:nth-of-type(5):after {
  -webkit-animation: 3s 0.4s block-animation linear infinite;
  animation: 3s 0.4s block-animation linear infinite;
}
@keyframes block-animation {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
    background: #b27872;
  }
  20% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
.box:nth-of-type(10):after {
  -webkit-animation: 3s 0.5s block-animation linear infinite;
  animation: 3s 0.5s block-animation linear infinite;
}
@keyframes block-animation {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
    background: #1c3900;
  }
  20% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
.box:nth-of-type(15):after {
  -webkit-animation: 3s 0.6s block-animation linear infinite;
  animation: 3s 0.6s block-animation linear infinite;
}
@keyframes block-animation {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
    background: #6fd566;
  }
  20% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
.box:nth-of-type(20):after {
  -webkit-animation: 3s 0.7s block-animation linear infinite;
  animation: 3s 0.7s block-animation linear infinite;
}
@keyframes block-animation {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
    background: #fa234;
  }
  20% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
.box:nth-of-type(25):after {
  -webkit-animation: 3s 0.8s block-animation linear infinite;
  animation: 3s 0.8s block-animation linear infinite;
}
@keyframes block-animation {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
    background: #32ecb0;
  }
  20% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
.box:nth-of-type(24):after {
  -webkit-animation: 3s 0.9s block-animation linear infinite;
  animation: 3s 0.9s block-animation linear infinite;
}
@keyframes block-animation {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
    background: #6f5dd5;
  }
  20% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
.box:nth-of-type(23):after {
  -webkit-animation: 3s 1s block-animation linear infinite;
  animation: 3s 1s block-animation linear infinite;
}
@keyframes block-animation {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
    background: #cf3211;
  }
  20% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
.box:nth-of-type(22):after {
  -webkit-animation: 3s 1.1s block-animation linear infinite;
  animation: 3s 1.1s block-animation linear infinite;
}
@keyframes block-animation {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
    background: #33a7e3;
  }
  20% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
.box:nth-of-type(21):after {
  -webkit-animation: 3s 1.2s block-animation linear infinite;
  animation: 3s 1.2s block-animation linear infinite;
}
@keyframes block-animation {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
    background: #347ea8;
  }
  20% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
.box:nth-of-type(16):after {
  -webkit-animation: 3s 1.3s block-animation linear infinite;
  animation: 3s 1.3s block-animation linear infinite;
}
@keyframes block-animation {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
    background: #b3c8bc;
  }
  20% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
.box:nth-of-type(11):after {
  -webkit-animation: 3s 1.4s block-animation linear infinite;
  animation: 3s 1.4s block-animation linear infinite;
}
@keyframes block-animation {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
    background: #b09bf5;
  }
  20% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
.box:nth-of-type(6):after {
  -webkit-animation: 3s 1.5s block-animation linear infinite;
  animation: 3s 1.5s block-animation linear infinite;
}
@keyframes block-animation {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
    background: #63de37;
  }
  20% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
.box:nth-of-type(7):after {
  -webkit-animation: 3s 1.6s block-animation linear infinite;
  animation: 3s 1.6s block-animation linear infinite;
}
@keyframes block-animation {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
    background: #577203;
  }
  20% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
.box:nth-of-type(8):after {
  -webkit-animation: 3s 1.7s block-animation linear infinite;
  animation: 3s 1.7s block-animation linear infinite;
}
@keyframes block-animation {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
    background: #f7f134;
  }
  20% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
.box:nth-of-type(9):after {
  -webkit-animation: 3s 1.8s block-animation linear infinite;
  animation: 3s 1.8s block-animation linear infinite;
}
@keyframes block-animation {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
    background: #80fa75;
  }
  20% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
.box:nth-of-type(14):after {
  -webkit-animation: 3s 1.9s block-animation linear infinite;
  animation: 3s 1.9s block-animation linear infinite;
}
@keyframes block-animation {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
    background: #3e8793;
  }
  20% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
.box:nth-of-type(19):after {
  -webkit-animation: 3s 2s block-animation linear infinite;
  animation: 3s 2s block-animation linear infinite;
}
@keyframes block-animation {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
    background: #e94322;
  }
  20% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
.box:nth-of-type(18):after {
  -webkit-animation: 3s 2.1s block-animation linear infinite;
  animation: 3s 2.1s block-animation linear infinite;
}
@keyframes block-animation {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
    background: #50e411;
  }
  20% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
.box:nth-of-type(17):after {
  -webkit-animation: 3s 2.2s block-animation linear infinite;
  animation: 3s 2.2s block-animation linear infinite;
}
@keyframes block-animation {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
    background: #4803ac;
  }
  20% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
.box:nth-of-type(12):after {
  -webkit-animation: 3s 2.3s block-animation linear infinite;
  animation: 3s 2.3s block-animation linear infinite;
}
@keyframes block-animation {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
    background: #5d756b;
  }
  20% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
.box:nth-of-type(13):after {
  -webkit-animation: 3s 2.4s block-animation linear infinite;
  animation: 3s 2.4s block-animation linear infinite;
}
@keyframes block-animation {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
    background: #c38d47;
  }
  20% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
</style>
