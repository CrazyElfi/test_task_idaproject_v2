<template>
  <div class="item-wrapper">
    <button
      class="btn-delete"
      @click="deleteItem(item.id)"
    >
      <img src="@/assets/images/btn-delete.png">
    </button>
    <img :src="item.imgUrl">
    <div class="infoProduct">
      <a>{{ item.name }}</a>
      <p>{{ item.descr }}</p>
    </div>
    <div
      class="price"
    >
      {{ maskPrice }} руб.
    </div>
  </div>
</template>

<script>
import Api from '@/services/api'
export default {
  name: 'ItemCatalog',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    maskPrice: function () {
      return this.item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    }
  },
  methods: {
    deleteItem (id) {
      Api.deleteItem(id)
    }
  }
}
</script>

<style lang="sass" scoped>
.item-wrapper
  //width: 33%
  width: 332px
  height: 423px
  margin-bottom: 16px
  background: #FFFEFB
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02)
  border-radius: 4px
  display: flex
  flex-direction: column
  color: #3F3F3F
  position: relative
  //&:last-child
  //  margin-right: 0

  .infoProduct
    padding: 16px 16px 0
    display: flex
    flex-direction: column
    justify-content: space-between

    a
      font-weight: 600
      font-size: 20px
      line-height: 25px
      cursor: pointer
      margin-bottom: 16px

    p
      font-size: 16px
      line-height: 20px

  .price
    font-weight: 600
    font-size: 24px
    line-height: 30px
    padding: 16px 16px 24px
    position: absolute
    bottom: 0

.btn-delete
  display: none
  width: 32px
  height: 32px
  position: absolute
  left: 310px
  top: -8px
  background: #FF8484
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1)
  border-radius: 10px
  border: none
  &:hover
    background: #ff5a5a
  &:focus
    background: #ff2222

.item-wrapper:hover > .btn-delete
  display: flex
  justify-content: center
  align-items: center</style>
