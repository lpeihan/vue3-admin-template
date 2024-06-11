<template>
  <a-menu
    v-model:openKeys="state.openKeys"
    v-model:selectedKeys="state.selectedKeys"
    mode="inline"
    theme="dark"
    :inline-collapsed="state.collapsed"
    :items="items"
  />
</template>
<script setup>
import {
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined,
} from '@ant-design/icons-vue';
import { reactive, watch, h, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { check } from '../utils/auth';
const state = reactive({
  collapsed: false,
  selectedKeys: ['1'],
  openKeys: ['sub1'],
  preOpenKeys: ['sub1'],
});

const items = reactive([
  {
    key: '1',
    icon: () => h(PieChartOutlined),
    label: 'Option 1',
    title: 'Option 1',
  },
  {
    key: '2',
    icon: () => h(DesktopOutlined),
    label: 'Option 2',
    title: 'Option 2',
  },
  {
    key: '3',
    icon: () => h(InboxOutlined),
    label: 'Option 3',
    title: 'Option 3',
  },
  {
    key: 'sub1',
    icon: () => h(MailOutlined),
    label: 'Navigation One',
    title: 'Navigation One',
    children: [
      {
        key: '5',
        label: 'Option 5',
        title: 'Option 5',
      },
      {
        key: '6',
        label: 'Option 6',
        title: 'Option 6',
      },
      {
        key: '7',
        label: 'Option 7',
        title: 'Option 7',
      },
      {
        key: '8',
        label: 'Option 8',
        title: 'Option 8',
      },
    ],
  },
  {
    key: 'sub2',
    icon: () => h(AppstoreOutlined),
    label: 'Navigation Two',
    title: 'Navigation Two',
    children: [
      {
        key: '9',
        label: 'Option 9',
        title: 'Option 9',
      },
      {
        key: '10',
        label: 'Option 10',
        title: 'Option 10',
      },
      {
        key: 'sub3',
        label: 'Submenu',
        title: 'Submenu',
        children: [
          {
            key: '11',
            label: 'Option 11',
            title: 'Option 11',
          },
          {
            key: '12',
            label: 'Option 12',
            title: 'Option 12',
          },
        ],
      },
    ],
  },
]);
watch(
  () => state.openKeys,
  (_val, oldVal) => {
    state.preOpenKeys = oldVal;
  },
);
const route = useRoute();

const getMenuData = (routes = [], parentKeys = [], selectedKey) => {
  const menuData = [];
  for (let item of routes) {
    if (item.meta && item.meta.authority && !check(item.meta.authority)) {
      continue;
    }
    if (item.name && !item.hideInMenu) {
      // this.openKeysMap[item.path] = parentKeys;
      // this.selectedKeysMap[item.path] = [selectedKey || item.path];
      const newItem = { ...item };
      delete newItem.children;
      if (item.children && !item.hideChildrenInMenu) {
        newItem.children = getMenuData(item.children, [
          ...parentKeys,
          item.path,
        ]);
      } else {
        getMenuData(
          item.children,
          selectedKey ? parentKeys : [...parentKeys, item.path],
          selectedKey || item.path,
        );
      }
      menuData.push(newItem);
    } else if (!item.hideInMenu && !item.hideChildrenInMenu && item.children) {
      menuData.push(...getMenuData(item.children, [...parentKeys, item.path]));
    }
  }

  return menuData;
};

const router = useRouter();

onMounted(() => {
  const menuData = getMenuData(router.options.routes);
  console.log(menuData, route, router);
});
</script>
