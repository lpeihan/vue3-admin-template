<template>
  <van-popup v-model:show="show" :close-on-click-overlay="false">
    <div class="share-code-body">
      <div class="share-code-box">
        <div class="title">填写邀请码</div>
        <van-field placeholder="请填写邀请码" v-model="data.value" />
      </div>
      <div class="share-code-btn" @click="confirm">确认</div>

      <div class="close">
        <img src="./images/ico_close.png" @click="close" />
      </div>
    </div>
  </van-popup>
</template>

<script setup>
import { showToast } from 'vant';
import { reactive } from 'vue';

import { usePopup } from './helper';

const emits = defineEmits(['success']);

const data = reactive({
  value: undefined,
});
const { show, open, close } = usePopup();

const confirm = async () => {
  if (!data.value) {
    showToast('请输入正确的邀请码');
    return;
  }

  emits('success', data.value);
  close();
};

defineExpose({
  open,
});
</script>

<style lang="less" scoped>
.van-popup {
  background: transparent;
}

.share-code-body {
  width: 320px;

  .share-code-box {
    height: 200px;
    background: url('./images/share_bg.png');
    background-size: 100% 100%;
    padding: 50px 54px;
    text-align: center;
    .title {
      color: var(--white);
      font-size: 16px;
      font-weight: bold;
    }

    :deep(.van-field) {
      border-radius: 4px;
      margin-top: 16px;
      .van-field__control {
        text-align: center;
      }
    }
  }

  .share-code-btn {
    height: 48px;
    line-height: 44px;
    font-weight: bold;
    font-size: 15px;
    margin: 16px 40px;
    text-align: center;
    background: url('./images/btn_bg.png');
    background-size: 100% 100%;
  }

  .close {
    text-align: center;

    img {
      width: 40px;
    }
  }
}
</style>
