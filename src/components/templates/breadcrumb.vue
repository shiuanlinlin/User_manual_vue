<template>
    <nav class="crumbbox" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">{{ title }}</li>
      </ol>
    </nav>
</template>
<script>
  export default {
    props: ['exampleProp'],
    data()
    {
      return {
        title: this.exampleProp
      }
    }
  }
</script>