<template>
  <div>
    <h2 class="title">Добавление товара</h2>
    <form
      class="formAdding"
    >
      <label for="name"
             class="importantRow">
        Наименование товара
      </label>
      <input
        v-model="name"
        name="name"
        id="name"
        type="text"
        placeholder="Введите наименование товара"
        @blur="validateName"
      />
      <p v-if="errorName"
        class="errorText">Поле является обязательным</p>

      <label for="descr">Описание товара</label>
      <textarea
        v-model="descr"
        name="descr"
        id="descr"
        placeholder="Введите описание товара"
        rows="6"
      > </textarea>

      <label for="imgUrl"
             class="importantRow">
        Ссылка на изображение товара
      </label>
      <input
        v-model="imgUrl"
        name="imgUrl"
        id="imgUrl"
        placeholder="Введите ссылку"
        @blur="validateImgUrl"
      >
      <p v-if="errorImgUrl"
        class="errorText">Поле является обязательным</p>

      <label for="price"
             class="importantRow">
        Цена товара
      </label>
      <input
        v-model="maskPrice"
        name="price"
        id="price"
        type="text"
        placeholder="Введите цену"
        @blur="validatePrice"
      >

      <p v-if="errorPrice"
        class="errorText">Поле является обязательным</p>

      <input
        @click="createNewItem"
        :disabled='isDisabledBtn'
        type="submit"
        value="Добавить товар"
        id="btnSubmit"
      >
    </form>

  </div>
</template>

<script>
import Index from '~/pages'
import Api from '@/services/api'

export default {
  name: 'FormAddProduct',
  components: { Index },
  mounted () {},
  data() {
    return {
      name: '',
      descr: '',
      imgUrl: null,
      price: "123213123134",

      errorName: false,
      errorImgUrl: false,
      errorPrice: false,
      // isDisabledBtn: true,
    }
  },
  computed: {
    isDisabledBtn: function() {
      return !this.name || !this.imgUrl || !this.price;
    },
    maskPrice: {
      get: function () {
        // console.log('this.price', this.price)
        return this.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      },
      set: function (newValue) {
        // console.log('newValue', newValue)
        this.price = newValue.replace(/\s/g, '');
      }
    }
  },
  methods: {
    checkForm(e) {
      // e.preventDefault();
      // console.log('checkForm')
    },
    validateName() {
      // console.log('validateName')
      this.errorName = !this.name;
    },
    validateImgUrl() {
      this.errorImgUrl = !this.imgUrl;
    },
    validatePrice() {
      this.errorPrice = !this.price;
    },
    validateForm() {
      this.validateName()
      this.validateImgUrl()
      this.validatePrice()
    },
    createNewItem (e) {
      e.preventDefault()
      this.validateForm()
      const newItem =  {
        name: this.name,
        descr: this.descr,
        imgUrl: this.imgUrl,
        price: this.price,
      }
      Api.createItem(newItem)

    }

  },
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
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02)
  border-radius: 4px
  font-style: normal
  font-weight: normal
  font-size: 10px
  line-height: 13px
  letter-spacing: -0.02em

  /* todo Temp / Darks / Lesser */
  color: #49485E
  label
    margin-bottom: 5px
    margin-top: 16px
    position: relative
    &:first-child
      margin-top: 0
    &.importantRow::after
      position: absolute
      background-image: url("~@/assets/images/dot-important.png")
      content: ''
      width: 4px
      height: 4px
      top: 1px
      border-radius: 50%
    &[for='name']::after
      left: 95px
    &[for='imgUrl']::after
      left: 135px
    &[for='price']::after
      left: 55px
  input, textarea
    font-size: 12px
    line-height: 15px
    padding: 10px 16px

    color: #B4B4B4 /* Greys / 500 */
    outline: none
    background-color: transparent
    border-radius: 4px
    cursor: pointer
    border: none
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1)
  input
    height: 36px
    position: relative

#btnSubmit
  //background: #EEEEEE
  background: #a52c2c
  border-radius: 10px
  box-shadow: none
  margin-top: 25px
  height: 36px
#btnSubmit:disabled
  background: #EEEEEE

.errorText
  font-size: 8px
  line-height: 10px
  letter-spacing: -0.02em
  color: #FF8484
</style>
