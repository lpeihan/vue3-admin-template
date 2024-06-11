<template>
  <div class="basic-layout">
    <a-layout style="min-height: 100vh">
      <a-layout-sider
        v-model:collapsed="state.collapsed"
        width="256px"
        collapsible
        :trigger="null"
      >
        <div class="logo-wrapper">
          <img src="@/assets/logo.png" />
          <h1 class="title">Ant Design Vue</h1>
        </div>
        <SiderMenu
          :collapsed="collapsed"
          :onChangeCollapsed="handleChangeCollapsed"
        />
      </a-layout-sider>

      <a-layout>
        <a-layout-header class="basic-header">
          <div class="fold-menu" @click="state.collapsed = !state.collapsed">
            <MenuUnfoldOutlined v-if="state.collapsed" />
            <MenuFoldOutlined v-else />
          </div>
        </a-layout-header>
        <a-layout-content style="margin: 24px 24px 0">
          <router-view></router-view>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          <Footer />
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script setup>
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue';
import { reactive } from 'vue';

import Footer from './Footer.vue';
import SiderMenu from './SiderMenu';

const state = reactive({
  collapsed: false,
});

const handleChangeCollapsed = (value) => {
  state.collapsed = value;
};
</script>

<style lang="less" scoped>
.basic-layout {
  .logo-wrapper {
    position: relative;
    height: 64px;
    padding-left: 24px;
    overflow: hidden;
    line-height: 64px;
    background: #002140;

    img {
      width: 32px;
      height: 32px;
      display: inline-block;
      vertical-align: middle;
    }

    h1 {
      display: inline-block;
      vertical-align: middle;
      margin-left: 12px;
      font-size: 18px;
      font-family: Avenir, 'Helvetica Neue', Arial, Helvetica, sans-serif;
      font-weight: bold;
      color: white;
    }
  }

  .basic-header {
    background: white;
    padding: 0;

    .fold-menu {
      padding: 0 20px;
      line-height: 64px;
      font-size: 20px;
      display: inline-block;
      cursor: pointer;

      &:hover {
        background: #eeeeee;
      }
    }
  }
}
</style>
