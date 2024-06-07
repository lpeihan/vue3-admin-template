<template>
  <div class="basic-layout">
    <a-layout style="min-height: 100vh">
      <a-layout-sider
        v-model="state.collapsed"
        width="256px"
        collapsible
      ></a-layout-sider>

      <a-layout>
        <a-layout-header class="basic-header">
          <div class="fold-menu" @click="state.collapsed = !state.collapsed">
            <menu-unfold-outlined v-if="state.collapsed" />
            <menu-fold-outlined v-else />
          </div>
        </a-layout-header>
      </a-layout>
    </a-layout>
  </div>
</template>

<script setup>
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue';
import { reactive } from 'vue';

const state = reactive({
  collapsed: false,
});
</script>

<style lang="less" scoped>
.basic-layout {
  .basic-header {
    background: white;
    padding: 0;
  }

  .fold-menu {
    padding: 20px;
  }
}
</style>
