<template>
  <div class="item-wrapper">
    <button class="btn-delete">
      <img src="@/assets/images/btn-delete.png">
    </button>
    <img src="@/assets/images/item-img.png">
    <div class="infoProduct">
      <a>Наименование товара</a>
      <p>Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк</p>
    </div>
    <div class="price">
      10 000 руб.
    </div>
  </div>
</template>

<script>
export default {
  name: 'itemCatalog',
}
</script>

<style lang="sass" scoped>
.item-wrapper
  //width: 33%
  width: 332px
  height: 423px
  background: #FFFEFB
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02)
  border-radius: 4px
  display: flex
  flex-direction: column
  color: #3F3F3F
  position: relative
  margin-bottom: 16px
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
    p
      font-size: 16px
      line-height: 20px
  .price
    font-weight: 600
    font-size: 24px
    line-height: 30px
    padding: 16px 16px 24px

.item-wrapper>.btn-delete
  display: none
  width: 32px
  height: 32px
  position: absolute
  left: 315px
  top: -10px
  background: #FF8484
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1)
  border-radius: 10px
  border: none
.item-wrapper:hover>.btn-delete
  display: block



</style>
