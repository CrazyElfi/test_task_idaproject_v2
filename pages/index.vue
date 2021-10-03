<template>
  <div class="container">
    <FormAddProduct />
    <ContentBlock />
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'IdaProject'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'viewport',
          content: 'width=device-width,initial-scale=1.0'
        }
      ]
    }
  }
}
</script>
