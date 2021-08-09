<template>
  <el-menu
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="1">
      <template #title>工作台</template>
    </el-menu-item>
    <el-submenu index="2">
      <template #title>
        <span>系统管理</span>
      </template>
      <el-menu-item index="2-1">
        <template #title>属性管理</template>
      </el-menu-item>
      <el-menu-item index="2-2">
        <template #title>元素管理</template>
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>