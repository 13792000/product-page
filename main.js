const brandsItems = document.querySelectorAll('.brands')
const divItems = document.getElementById('items')
const divBrands = document.getElementById('brands')
const from = document.getElementById('from')
const to = document.getElementById('to')
const fitering = document.getElementById('custumBtn')
fitering.addEventListener('click',filtering)
const searchBox = document.getElementById('searchBox')

const items = [
  { id: 1, title: ' میهن شیر کم چرب', price: 8200, imgUrl: './img/mihan.jpg', brandId: 1, off: 15 },
  { id: 2, title: ' میهن شیر کم چرب', price: 3900, imgUrl: './img/1.jpg', brandId: 1, off: 4 },
  { id: 3, title: 'پنیر سفید پگاه', price: 9000, imgUrl: './img/x.jpg', brandId: 4, off: 6 },
  { id: 4, title: ' ماست موسیرپرچرب صباح 100 گرمی', price: 4300, imgUrl: './img/2.jpg', brandId: 3, off: 23 },
  { id: 5, title: ' کره گیاهی میهن 100 گرمی', price: 7500, imgUrl: './img/6.jpg', brandId: 1, off: 12 },
  { id: 6, title: ' شیر بطری پرچرب میهن 235 سی سی ', price: 4000, imgUrl: './img/3.jpg', brandId: 1, off: 67 },
  { id: 7, title: ' شیر پرچرب ساده میهن 200 سی سی ', price: 7600, imgUrl: './img/4.jpg', brandId: 1, off: 2 },
  { id: 8, title: ' شیر کم چرب  پگاه 200 سی سی', price: 3200, imgUrl: './img/1.jpg', brandId: 4, off: 0 },
  { id: 9, title: ' شیر بطری  کم چرب دنت 235 سی سی', price: 4500, imgUrl: './img/5.jpg', brandId: 2, off: 4 },
  { id: 10, title: ' شیر طعم دار توت فرنگی دنت 125 میلی گرمی', price: 9800, imgUrl: './img/1.jpg', brandId: 2, off: 34 },
  { id: 17, title: ' شیر توت فرنگی استریل پگاه 200 سی سی ', price: 4900, imgUrl: './img/1.jpg', brandId: 4, off: 23 },
  { id: 11, title: ' شیر طعم دار شکلاتی دنت 125 میلی گرمی', price: 5800, imgUrl: './img/5.jpg', brandId: 2, off: 20 },
  { id: 13, title: ' شیر عسل استریل پگاه 200 سی سی', price: 3400, imgUrl: './img/x.jpg', brandId: 4, off: 44 },
  { id: 14, title: ' شیر کاکائو استریل پگاه 200 سی سی', price: 7050, imgUrl: './img/4.jpg', brandId: 4, off: 12 },
  { id: 15, title: ' شیر قهوه میهن 200 سی سی', price: 8200, imgUrl: './img/6.jpg', brandId: 1, off: 8 },
  { id: 16, title: ' پنیر سفیدصباح 100 گرمی ', price: 9000, imgUrl: './img/3.jpg', brandId: 3, off: 34 },
  { id: 12, title: ' شیر موز دنت 125 میلی گرمی', price: 7650, imgUrl: './img/1.jpg', brandId: 2, off: 15 },
  { id: 18, title: ' شیر کاکائو میهن 200 سی سی ', price: 3500, imgUrl: './img/5.jpg', brandId: 1, off: 12 },
]
const brands = [
  { brandName: 'میهن', id: 1 },
  { brandName: 'دنت', id: 2 },
  { brandName: 'صباح', id: 3 },
  { brandName: 'پگاه', id: 4 }
]
let filteredItems = items
var brandsGroup = ''
var myCart = ''
createItems();
function createItems(){
  filteredItems.forEach(item =>{
    myCart += `
      <!-- cart-start -->
      <div class="product col-md-6 col-xs-12 col-sm-6 col-lg-4 p-0">
        <div class="d-flex flex-column">
          <div class="d-flex flex-column px-2">
            <a>
              <div>
                <img class="w-100 my-2"  height="250" src=${item.imgUrl} alt="">
              </div>
              <div class="mb-3 px-2"> ${item.title}</div>
            </a>
          </div>
              
          <div class="px-2 w-100 mt-auto ">
            <div class="mt-auto">
              <div class="row align-items-center mt-auto"> 
                <div class="mb-2 col ">
                  <div class="d-flex flex-column mb-0">
                    <h5 class="text-left">
                      <span class="badge badge-pill badge-danger">${item.off}%</span>
                      <span id="price">${item.price.toLocaleString("ar-SA")}</span>
                    </h5>
                    <div class="text-left font-weight-bold mt-0">
                      <span>${calculatePrice(item.off,item.price).toLocaleString("ar-SA")}</span>
                      <span class="text-left">تومان</span>
                    </div>
                  </div>
                </div>
                <div class="mb-2 col">
                  <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-basket" fill="currentColor" xmlns="http://www.w3.org/2000/svg" id="icon">
                    <path fill-rule="evenodd" d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- cart-end -->`
    })
    divItems.innerHTML = myCart
}
function filtering(){
  filteredItems = items
  let fromValue = from.value
  let toValue = to.value
  let temp = []
  brandsItems.forEach(i=>{ 
    if(i.checked) {
      const items = filteredItems.filter(item => item.brandId == i.value )
      temp.push(...items)
    }
  })
  if (temp.length) {
    filteredItems = temp
  }
  if (fromValue) {
    filteredItems = filteredItems.filter(item => item.price >= fromValue)
  }
  if (toValue) {
    filteredItems = filteredItems.filter(item => item.price <= toValue)
  }
  if (searchBox) {
    filteredItems = filteredItems.filter(item => item.title.includes(searchBox.value))
  }
  myCart = ''
  createItems();
  window.scrollTo(0, 0);  
}
function reset(){
  filteredItems = items
  from.value = ''
  to.value = ''
  brandsItems.forEach(i => i.checked = false)
  searchBox.value = ''
  myCart = ''
  createItems();
  window.scrollTo(0, 0);
}
function calculatePrice(off, price){
  return (price - ((off / 100) * price))
}
