<script setup>
import { ref } from 'vue'

defineProps({
  merrges: String
})

const count = ref(0)
</script>
<template>
  <div>
    <!-- <h2 class="mb-5">{{ merrges }}</h2>
    <el-button type="success">成功按钮</el-button> -->
    <nav class="navbar navbar-dark glay_bg_Menu">
      <div class="px-3 py-2">
        <div class="navbar-brand">
          <font-awesome-icon icon="bars" />
          <a :href="link">
            <img src="/vite.svg" class="logo ms-3" alt="Vite logo" />
            簡易工具
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
    export default {
        data: function() {
            return {
              link: '/'
            }
        }
    }
</script>