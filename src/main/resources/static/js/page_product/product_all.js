// 상품 리스트에서 아래 color spec 마우스 오버 시 해당 상품 보여주기

// $(function () {
//   $(".hunter-color > p").mouseover(function () {
//     let i = $(this).index();

//     // $('.product-info-color > img').mouseover(function(){
//     //     let i = $(this).index();

//     $(".product-list-img .product-hunter").hide();
//     $(".product-list-img .product-hunter").eq(i).show();
//   });
// });

//=========== collection 불러오기 =============//

const uri = location.href;
const category = uri.substring(uri.lastIndexOf("/") + 1);
console.log(category);

function getCollection() {
  $.ajax({
    async: false,
    type: "get",
    url: "/api/collection/" + category,
    dataType: "json",
    success: (response) => {
      // alert("COLLECTION 불러오기 성공");
      console.log("응답 : ", response.data);
      // loadCollection(response.data);

      loadCollectionByName(groupByName(response.data));
    },
    error: (error) => {
      alert("COLLECTION 불러오기 실패");
      console.log(error);
    },
  });
}

// 이름으로 그룹 묶기
function groupByName(responseData) {
  const nameArray = responseData.reduce((array, curV) => {
    const { name } = curV;

    if (array[name]) {
      array[name].push(curV);
    } else {
      array[name] = [curV];
    }
    return array;
  }, {});

  console.log(nameArray);
  return nameArray;
}

const productContainer = document.querySelector(".product-container");

function loadCollectionByName(data) {
  for (var productbyname in data) {
    console.log("object => ", productbyname, "value => ", data[productbyname]);

    data[productbyname].forEach((product, index) => {
      const productName = product.name;

      console.log("이름 : ", productName);
      // console.log("제품 : ", product);
      console.log("카테고리 : ", product.category);
      console.log("이미지 : ", product.img_name);

      if (index == 0) {
        productContainer.innerHTML += `
                    <div class="product-list">
                        <div class="product-list-img ${product.name}" style="position: relative;">

                        </div>
                        <div class="product-info-box">
                            <div class="product-info-text">
                                <p class="product-name">${product.name}</p>
                                <p class="product-price">KRW ${product.price}</p>
                            </div>
                            <div class="product-info-color hunter-color ${product.name}-p">

                            </div>
                        </div>
                    </div>
                `;
      }

      const productHunter = document.querySelectorAll(".product-list-img");
      const productInfoColor = document.querySelectorAll(".product-info-color");
   
      if (index == 0) {
        productHunter[productHunter.length - 1].innerHTML = ``;
        productHunter[productHunter.length - 1].innerHTML = `
            <div class="product-hunter img${product.name} img-visible" style="z-index: 100;">
                <a href="/products/product/${product.name}/${product.color_code}">  
                            <img src="/image/product/${product.img_name}">
                </a>
            </div>
            `;

        productInfoColor[productInfoColor.length - 1].innerHTML += `
            <p class="other-color color${product.name}" style="margin-right:6px" onclick="colorSelector('${product.name}')"> ${index + 1} </p>
        `;
      } else {
        // productHunter[productHunter.length - 1].innerHTML = ``;
        productHunter[productHunter.length - 1].innerHTML += `
            <div class="product-hunter img${product.name} img-invisible" style="z-index: 100;">
                <a href="/products/product/${product.name}/${product.color_code}">
                                 <img src="/image/product/${product.img_name}">
                </a>
            </div>
         `;

        // let num = index + 1;
        productInfoColor[productInfoColor.length - 1].innerHTML += `
            <p class="other-color color${product.name}" style="margin-right:6px" onmouseover="colorSelector('${product.name}')"> ${index + 1} </p>
        `;
             
      }
    });
  }
}

// color spec 클릭 시 색상 변경 함수
function colorSelector(name) {
  const selectColor = document.querySelectorAll(".color" + name);
  const imgList = document.querySelectorAll(".img" + name);

  selectColor.forEach((color, i) => {
    color.onclick = () => {

      imgList[0].classList.remove("img-visible");
      
      imgList.forEach(img => {
        img.classList.add("img-invisible");
      });
   
      imgList[i].classList.remove("img-invisible");
      
    }
  });
}

window.onload = () => {
  getCollection();
};
