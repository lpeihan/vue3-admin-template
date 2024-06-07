<template>
  <van-popup v-model:show="show" class="qrcode-popup" :lazy-render="false">
    <qrcode :value="'12'" />
    <div class="text">扫二维码，邀请好友</div>

    <div class="close">
      <img src="./images/ico_close.png" @click="close" />
    </div>
  </van-popup>
</template>

<script setup>
import { usePopup } from './helper';

const { show, close, open } = usePopup();

defineExpose({
  open,
  close,
});
</script>

<style lang="less" scoped>
.qrcode-popup {
  width: 250px;
  text-align: center;
  padding: 40px 20px;
  border-radius: 8px;

  .qrcode {
    width: 160px;
    border-radius: 8px;
  }

  .text {
    font-size: 13px;
    margin-top: 16px;
  }

  .close {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -60px;

    img {
      width: 32px;
    }
  }
}
</style>
