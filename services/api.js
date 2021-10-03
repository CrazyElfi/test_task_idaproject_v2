let items = [
  {
    id: 1,
    name: 'Наименование товара',
    descr: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
    imgUrl: '/item-img.png',
    price: 10000
  },
  {
    id: 2,
    name: 'Звание товара',
    descr: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
    imgUrl: '/item-img.png',
    price: 12000
  },
  {
    id: 3,
    name: 'Название товара',
    descr: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
    imgUrl: '/item-img.png',
    price: 13000
  },
  {
    id: 4,
    name: 'Именование товара',
    descr: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
    imgUrl: '/item-img.png',
    price: 5000
  }
]

function sortArrByKey (key, array, typeOfSort) {
  // TODO dummy IF condition , sry, fix later

  if (typeOfSort === 'ASC') {
    items.sort(function (a, b) {
      if (a[key] > b[key]) {
        return 1
      }
      if (a[key] < b[key]) {
        return -1
      }
      return 0
    })
  }
  if (typeOfSort === 'DESC') {
    console.log('typeOfSort', typeOfSort)
    array.sort((a, b) => {
      if (a[key] < b[key]) {
        return 1
      }
      if (a[key] > b[key]) {
        return -1
      }
      return 0
    })
  }
  return array
}

function saveInLocalStorage () {
  localStorage.items = JSON.stringify(items)
}
function randomIntFromInterval (min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const API = {
  getItems (filter) {
    if (localStorage.getItem('items')) { items = JSON.parse(localStorage.getItem('items')) }

    if (filter) sortArrByKey(filter.key, items, filter.condition)

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(items)
      }, 5000)
    })
  },
  createItem (item) {
    const newItem = {
      id: randomIntFromInterval(5, 100000000),
      name: item.name,
      descr: item.descr,
      imgUrl: item.imgUrl,
      price: Number(item.price)
    }
    items.push(newItem)
    saveInLocalStorage()
  },
  deleteItem (itemId) {
    items.forEach((item, index) => {
      if (Number(itemId) === item.id) {
        items.splice(index, 1)
      }
    })
    saveInLocalStorage()
  }
}

export default API
