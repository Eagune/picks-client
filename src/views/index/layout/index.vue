<template>
  <el-container>
    <el-header><Header/></el-header>
    <el-container>
      <el-aside width="200px"><Menu/></el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import Menu from "@/components/menu";
import Header from "./header.vue";

export default {
  components: {
    Menu,
    Header,
  },
};
</script>

<style lang="scss" scoped>
.el-header {
  padding: 0;
}
</style>