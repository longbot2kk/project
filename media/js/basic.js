const main = document.getElementById('main')
function showlist(products) {
  for (let item of products) {
    let id = item.id;
    let name = item.name;
    let gender;
    if (item.gender.length == 2) {
      gender = 'unisex'
    } else {
      gender = `${item.gender[0]}'s`;
    };
    let proType = item.productType;
    let price = item.price;
    let img = item.img[0];
    product(id, name, gender, proType, price, img);
  }
}
showlist(products);
function product(id, name, gender, proType, price, img) {
  main.insertAdjacentHTML('beforeend',
    `
  <div class="main__item">
  <div class="main__pic">
    <img src="${img}" alt="${name}">
  </div>
  <div class="main__title">
    <h3 class="btn_detailPro" onclick="detailPro(${id})" >${name}</h3>
    <strong>${gender} ${proType}</strong>
    <p>$${price}</p>
  </div>
  <button class="btn" onclick="AddProduct(${id})">Add to bags</button>
  </div>`
  )
}
//
let list_product = [];
let carts = document.querySelectorAll('.btn');
for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener('click', () => {
    // cartNumber();
    console.log(carts[i]);
  })
}

// function cartNumber() {
//   let pro = localStorage.getItem('cartNumber');
//   localStorage.setItem('cartNumber', 1);
//   console.log(pro);
// }

function AddProduct(id) {
  for (item of products) {
    if (item.id == id) {
      if (!list_product.includes(item)) {
        list_product.push(item);
        list_product[list_product.indexOf(item)].amount = 1;
      } else {
        list_product[list_product.indexOf(item)].amount++;
      }
    }
  }
  console.log(list_product);
  document.getElementById("totalCardProduct").innerHTML = list_product.length;
  let tableCart = document.getElementById('table_cart');
  tableCart.innerHTML = ''
  let TotalPrice = 0;
  let idd, name, gender, category, productType, price, amount = 0;
  alert('Add to cart successfully!');
  for (let item of list_product) {
    idd = item.id;
    name = item.name;
    gender = item.gender;
    if (item.gender.length == 2) {
      gender = 'unisex';
    } else {
      gender = item.gender;
    }
    amount = list_product[list_product.indexOf(item)].amount;
    category = item.category;
    productType = item.productType;
    price = item.price;
    TotalPrice += item.price * amount;
    addTable(idd, name, gender, category, productType, price, TotalPrice, amount);

  }
}
// amount = Arrcheck.filter(function (x) { return x == item[0].id }).length + 1;

function addTable(idd, name, gender, category, productType, price, TotalPrice, amount) {
  let total = document.getElementById('total')
  let tableCart = document.getElementById('table_cart');
  tableCart.insertAdjacentHTML('beforeend', `
  <tr>
      <td>${idd}</td>
      <td>${name}</td>
      <td>${amount}</td>
      <td>${gender}</td>
      <td>${category}</td>
      <td>${productType}</td>
      <td align="right">$${price}</td>
  </tr>
  `)
  total.innerHTML = '$' + TotalPrice;
};


//detail Product
let show_detail = document.getElementById('show_detail')
function detailPro(id) {
  let found = products.find(x => x.id == id)
  console.log(found);
  show_detail.innerHTML = '';
  show_detail.insertAdjacentHTML('beforeend', `
  <div class="detail_Pro">
    <div class="detail_pic"> 
      <img src="${found.img[0]}" alt="img1"/>
      <img src="${found.img[1]}" alt="img2"/>
    </div>
    <div class="detail_all">
      <h1>${found.name}</h1>
      <p>${found.brand}</h1>
      <div class="select_size">
        <span>
          <input class="size" type="radio" value="${found.size[0]}">
          <label>${found.size[0]}
        </span>
        <span>
          <input class="size" type="radio" value="${found.size[1]}">
          <label>${found.size[1]}
        </span>
        <span>
          <input class="size" type="radio" value="${found.size[2]}">
          <label>${found.size[2]}
        </span>
        <span>
          <input class="size" type="radio" value="${found.size[3]}">
          <label>${found.size[3]}
        </span>
        <span>
          <input class="size" type="radio" value="${found.size[4]}">
          <label>${found.size[4]}
        </span>
         <span>
          <input class="size" type="radio" value="${found.size[5]}">
          <label>${found.size[5]}
        </span>
        <span>
          <input class="size" type="radio" value="${found.size[6]}">
          <label>${found.size[6]}
        </span>
        <span>
          <input class="size" type="radio" value="${found.size[7]}">
          <label>${found.size[7]}
        </span>
        <span>
          <input class="size" type="radio" value="${found.size[8]}">
          <label>${found.size[8]}
        </span>
        <span>
          <input class="size" type="radio" value="${found.size[9]}">
          <label>${found.size[9]}
        </span>
        <span>
          <input class="size" type="radio" value="${found.size[10]}">
          <label>${found.size[10]}
        </span>
        <span>
          <input class="size" type="radio" value="${found.size[11]}">
        <label>${found.size[11]}
        </span>
      </div>
      <div>$${found.price}</div>
      <div>${found.description}</div>
    </div>
  </div>
  `)
}
let nike= document.getElementById("nike")
nike.addEventListener("click", () =>
{
  main.innerHTML="";
  for(let i=0;i<products.length;i++)
  {
    if(products[i].brand=="Nike")
    {
      product(products[i].id, products[i].name, products[i].gender, products[i].proType, products[i].price, products[i].img);
    }
  }
})