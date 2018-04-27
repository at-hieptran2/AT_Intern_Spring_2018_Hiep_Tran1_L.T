const productList = [
  {
    id: 1,
    image: 'https://vn-test-11.slatic.net/p/tai-nghe-chup-tai-kem-mic-ovan-x1-xanh-la-den-3393-3246072-e0da2b7707bedd5c741725bf6eb03c02-catalog_233.jpg',
    title: 'Tai nghe chụp tai kèm mic Ovan X1 (Item 1)'
  },
  {
    id: 2,
    image: 'https://vn-test-11.slatic.net/p/2/tai-nghe-cb1-chi-49k-7866-75116122-349d2784c45af2a43cc948ac8c4a0b8b-catalog_233.jpg',
    title: 'Tai nghe chụp tai kèm mic Ovan X1 (Item 2)'
  },
  {
    id: 3,
    image: 'https://vn-test-11.slatic.net/p/tai-nghe-bluetooth-chup-tai-tm010s-den-5606-9711542-32aefd2da9609efe4d71da7fdc1de2c2-catalog_233.jpg',
    title: 'Tai nghe chụp tai kèm mic Ovan X1 (Item 3)'
  },
  {
    id: 4,
    image: 'https://vn-test-11.slatic.net/p/2/tai-nghe-microlab-k310-8647-29047662-d2a4516d4ded136a3be22c349c514d18-catalog_233.jpg',
    title: 'Tai nghe chụp tai kèm mic Ovan X1 (Item 4)'
  },
  {
    id: 5,
    image: 'https://vn-test-11.slatic.net/p/2/tai-nghe-chup-tai-f10-mau-trang-co-the-gap-gon-va-dieu-chinh-kich-co-6614-2843379-f586973117c5ffe61504941ee01f7f78-catalog_233.jpg',
    title: 'Tai nghe chụp tai kèm mic Ovan X1 (Item 5)'
  },
  {
    id: 6,
    image: 'https://vn-test-11.slatic.net/p/2/tai-nghe-chup-tai-stereo-headset-do-2879-0002878-0af10b1d6c20f91bc12bf01912253c8f-catalog_233.jpg',
    title: 'Tai nghe chụp tai kèm mic Ovan X1 (Item 6)'
  },
  {
    id: 7,
    image: 'https://vn-live-01.slatic.net/original/44bb678881256f06794a439280ad724f.jpg',
    title: 'Tai nghe chụp tai kèm mic Ovan X1 (Item 7)'
  },
  {
    id: 8,
    image: 'https://vn-test-11.slatic.net/p/2/tai-nghe-chup-dau-extrabass-giao-hang-mau-ngau-nhien-8407-93486192-61148acd28caf5e56c25573a810707d8-catalog_233.jpg',
    title: 'Tai nghe chụp tai kèm mic Ovan X1 (Item 8)'
  },
  {
    id: 9,
    image: 'https://vn-test-11.slatic.net/p/2/tai-nghe-chup-tai-cao-cap-co-khe-the-nho-bluetooth-p47-den-hang-nhap-khau-4281-78774571-051cb8ee5fb817fb52657d13e58de0ab-catalog_233.jpg',
    title: 'Tai nghe chụp tai kèm mic Ovan X1 (Item 9)'
  },
  {
    id: 10,
    image: 'https://vn-test-11.slatic.net/p/2/tai-nghe-bluetooth-clip-on-remax-rb-t12-7028-6513426-df04ac3f7ec7944f2b74298254ae6753-catalog_233.jpg',
    title: 'Tai nghe chụp tai kèm mic Ovan X1 (Item 10)'
  },
  {
    id: 11,
    image: 'https://vn-test-11.slatic.net/p/2/tai-nghe-jbl-t450-bt-1633-95768401-fb1494b859269332e77ef8ac3d3396ac-catalog_233.jpg',
    title: 'Tai nghe chụp tai kèm mic Ovan X1 (Item 11)'
  },

  {
    id: 12,
    image: 'https://vn-live-01.slatic.net/original/8ceeaa01f5945d1baf49576b96428c0e.jpg',
    title: 'Tai nghe chụp tai kèm mic Ovan X1 (Item 12)'
  },
]

let orderPropduct = 'arrOrder';
let getDataFromStore = function(keyItem) {
  if (JSON.parse(localStorage.getItem(keyItem))) {
    return JSON.parse(localStorage.getItem(keyItem));
  }
  return [];
}

function changeNumber() {
  let arr = getDataFromStore(orderPropduct);
  if (arr) {
    return arr.length;
  }
  return 0;
}

function onloadProduct() {
  let listProduct = document.getElementById('product-list');
  productList.map(function(item) {
    let boxProduct = document.createElement('div');
    let productItem = document.createElement('li');
    let img = document.createElement('img');
    let txt = document.createElement('p');
    let btnProduct = document.createElement('button');
    let thumb = document.createElement('div');
    let infor = document.createElement('div');

    boxProduct.className = ('box-product');
    thumb.className = ('thumb');
    productItem.className = ('item-product');
    infor.className = ('infor-product');
    img.setAttribute('src', item.image);
    txt.innerHTML = item.title;
    txt.className = ('title-product');
    btnProduct.className = ('btn-shopping');
    btnProduct.id = ('btn-' + item.id);
    btnProduct.innerHTML = 'Add Product';

    btnProduct.onclick = function() { 
      btnproduct(item); 
    };

    // Html appendChilds
    productItem.appendChild(boxProduct);
    boxProduct.appendChild(thumb);
    boxProduct.appendChild(infor);
    thumb.appendChild(img);
    infor.appendChild(txt);
    infor.appendChild(btnProduct);
    listProduct.appendChild(productItem); 
  })

  let index = 0;
  if (localStorage.getItem(orderPropduct)) {
    tempArr = getDataFromStore(orderPropduct);
  }

  changeNumber();
  

  document.getElementById('icon-shopping').innerHTML = changeNumber();
  function checkDisabledBtn() {
    let tempArr = [];
    if(getDataFromStore(orderPropduct)) {
      getDataFromStore(orderPropduct).map(function(item) {
        tempArr.push(item.id);
      })
    }
    
    for (let item of productList) {
      if (tempArr.includes(item.id)) {
        document.getElementById('btn-' + item.id).setAttribute('disabled', '');
      }
    }
  }

  checkDisabledBtn();
  function btnproduct(item) {
    let arr = [];
    arr = getDataFromStore(orderPropduct);
    let confirmAdd = confirm('you want to add this product to cart cart ?');
    if (confirmAdd === true) {
      arr.push(item);
      localStorage.setItem(orderPropduct, JSON.stringify(arr));
      document.getElementById('icon-shopping').innerHTML = changeNumber();
      checkDisabledBtn();
    }
  }

}

function hanldeCart() {
  document.getElementById('icon-shopping').addEventListener('click',
    function changePageLocation() {
      location.href = '../cart.html';
    }
  );
}

function onloadCart() {
  let number = 0;
  let arrCart = getDataFromStore(orderPropduct);
  changeNumber();
  hanldeCart();
  let tbody = document.getElementById('tb-content');
  arrCart.map(function(item) {
    let tr = document.createElement('tr');
    let tdID = document.createElement('td');
    let tdTitle = document.createElement('td');
    let tdQuantity = document.createElement('td');
    let tdAction = document.createElement('td');
    let deleteBtn = document.createElement('button');

    deleteBtn.onclick = function() { 
      doicaikhac(item); 
    };

    tdID.innerHTML = number += 1;
    tdTitle.innerHTML = item.title;
    tdQuantity.innerHTML = 1;
    deleteBtn.className = ('btn-delete');
    deleteBtn.setAttribute('id', "del-btn-" + item.id);
    deleteBtn.innerHTML = "Delete";

    tbody.appendChild(tr);
    tr.appendChild(tdID);
    tr.appendChild(tdTitle);
    tr.appendChild(tdQuantity);
    tdAction.appendChild(deleteBtn);
    tr.appendChild(tdAction);
  })
  document.getElementById('icon-shopping').innerHTML = changeNumber();
  
  function doicaikhac(item) {
    let index = arrCart.indexOf(item);
    let confirmAdd = confirm('Do you want to delete the product ?');
    if (confirmAdd === true) {
      arrCart.splice(index, 1);
      localStorage.setItem(orderPropduct, JSON.stringify(arrCart));
      document.getElementById('icon-shopping').innerHTML = changeNumber();
      location.reload();
    }
  }
}