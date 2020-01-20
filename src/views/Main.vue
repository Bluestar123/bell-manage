<template>
  <el-container>
    <el-aside width="200px">
      <el-menu
        style='height:100vh;'
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        router>
        <NavMenu :navMenus="$router.options.routes[0].children"></NavMenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <h3>后台管理界面</h3>
      </el-header>
      <el-main height>
        <router-view :key="$route.path"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import NavMenu from '@/components/NavMenu'
export default {
  name: 'MAIN',
  components: { NavMenu },
  data () {
    return {
    }
  },
  mounted () {
    console.log(this.$router.options.routes)
  }
}
</script>

<style>

</style>
