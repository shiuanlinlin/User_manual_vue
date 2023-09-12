<template>
  <div>
    <Headert/>
      <div class="d-flex">
        <div class="left_menu">
          <Navbars/>
        </div>
      <div class="right_content">
        <!-- 轉跳後所載入的 component 最後會顯示在此 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script setup>
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
  import Headert from './components/templates/header_t.vue'
  import Navbars from './components/templates/nav_t.vue'
</script>


