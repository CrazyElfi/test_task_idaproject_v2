<template>
  <div>
    <h2 class="title">Добавление товара</h2>
    <form
      class="formAdding"
      action="">
      <label for="nameProduct">
        Наименование товара
      </label>
      <input
        class=""
        name="nameProduct"
        id="nameProduct"
        placeholder="Введите наименование товара"
      />

      <label for="descrProduct">Описание товара</label>
      <textarea
        name="descr"
        id="descrProduct"
        placeholder="Введите описание товара"
        rows="6"
      > </textarea>

      <label for="linkAtImg">
        Ссылка на изображение товара
      </label>
      <input
        name="linkAtImg"
        id="linkAtImg"
        placeholder="Введите ссылку"
      >

      <label for="priceProduct">
        Цена товара
      </label>
      <input
        name="priceProduct"
        id="priceProduct"
        placeholder="Введите цену"
      >
      <input
        type="submit"
        value="Добавить товар"
        id="btnSubmit"
      >
    </form>
  </div>
</template>

<script>
import Index from '~/pages'
export default {
  name: 'FormAddProduct',
  components: { Index },
}
</script>

<style lang="sass" scoped>
.formAdding
  display: flex
  flex-direction: column
  background-color: #FFFEFB
  padding: 24px
  margin: 15px 0 15px
  width: 332px
  min-height: 440px
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02)
  border-radius: 4px
  font-style: normal
  font-weight: normal
  font-size: 10px
  line-height: 13px
  letter-spacing: -0.02em

  /* todo Temp / Darks / Lesser */
  color: #49485E
  label
    margin-bottom: 4px
    margin-top: 16px
    &:first-child
      margin-top: 0
  input, textarea
    font-size: 12px
    line-height: 15px
    padding: 10px 16px

    color: #B4B4B4 /* Greys / 500 */

    background-color: transparent
    border-radius: 4px
    cursor: pointer
    border: none
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1)
  input
    height: 36px

#btnSubmit
  background: #EEEEEE
  border-radius: 10px
  box-shadow: none
  margin-top: 25px
  height: 36px
</style>
