let product = JSON.parse(localStorage.getItem("product"));
localStorage.removeItem("product")
let productId = product.productId;

const productImgInput = document.querySelector("#product-imgs");
const fileUl = document.querySelector(".cvf_uploaded_files");
const inFileUl = document.querySelector(".update-files");

let inputFlag = true;
let deleteFlag = false;

let productImgs = document.getElementById("product-imgs");
let addFiles = productImgs.files;

let addImgFiles = new Array();
let deleteImgFiles = new Array();

productImgInput.onchange = () => {
  if (inputFlag) {
    imgReader();
  } else {
    addImg();
  }
};

// 항목별로 등록되어 있는 value 값 불러오기
function getOriginValues(product) {
  const updateInput = document.querySelectorAll(".update-input");

  //  select value 값 불러오기
  const updateSelect = document.querySelector("#update-select");
  const selectLength = updateSelect.options.length;
  let optionValue = product.category;

  // 기존 select 값과 일치하는 value에 seleted 옵션을 줘라
  for (let i = 0; i < selectLength; i++) {
    if (updateSelect.options[i].value == optionValue) {
      updateSelect.options[i].selected = true;
    }
  }

  updateInput[1].innerHTML = `
    <input id="member_id" class="product-input" name="member_id" type="text" value="${product.name}"></input>
    `;

  updateInput[2].innerHTML = `
    <input id="member_id" class="product-input" name="member_id" type="text" value="${product.colorCode}"></input>
    `;

  updateInput[3].innerHTML = `
    <input id="member_id" class="product-input" name="member_id" type="text" value="${product.color}"></input>
    `;

  updateInput[4].innerHTML = `
    <input id="member_id" class="product-input" name="member_id" type="text" value="${product.price}"></input>
    `;

  updateInput[5].innerHTML = `
    <textarea class="product-features-ex product-input" placeholder="">${product.productFeatures}</textarea>
    `;

  updateInput[6].innerHTML = `
    <textarea class="product-features-ex product-input" placeholder="">${product.description}</textarea>
    `;

  const productImgsArray = product.productImgs;
  loadImg(productImgsArray);
}

function loadImg(productImgsArray) {
  fileUl.innerHTML = ``;

  productImgsArray.forEach((img, index) => {
    fileUl.innerHTML += `
            <li>
                <img class="product-img" src="/image/product/${productImgsArray[index].img_name}" style="width: 140px; height: 140px;">
                <i class="fa-solid fa-circle-minus delete-btn"></i>
            </li>
        `;

    deleteOriginImg(productImgsArray);
  });
}

function deleteOriginImg(imgArray) {
  const deleteBtns = document.querySelectorAll(".delete-btn");

  deleteBtns.forEach((deleteBtn, index) => {
    deleteBtn.onclick = () => {
      //console.log(imgArray[index].img_name);
      deleteImgFiles.push(imgArray[index].img_name);
      //console.log(deleteImgFiles);

      imgArray.splice(index, 1);

      loadImg(imgArray);
    };
  });
}

function imgReader() {
  let productImgs = document.getElementById("product-imgs");
  let addFiles = productImgs.files;

  if (!deleteFlag) {
    let imgArray = Array.from(addFiles);
    //console.log(imgArray);

    addImgFiles = addImgFiles.concat(imgArray);
    console.log(addImgFiles);
  }

  inFileUl.innerHTML = ``;

  for (let i = 0; i < addFiles.length; i++) {
    const reader = new FileReader();

    reader.onload = (e) => {
      inFileUl.innerHTML += `
                    <li class = "new-img">
                        <img class="product-img" src="${e.target.result}" style="width: 140px; height: 140px;">
                        <i class="fa-solid fa-circle-minus delete-btn2"></i>
                    </li>
                `;

      deleteImg(addImgFiles);
    };

    setTimeout(() => {
      reader.readAsDataURL(addFiles[i]);
    }, i * 100);
  }

  inputFlag = false;
  console.log(addImgFiles);
}

function deleteImg(imgArray) {
  //let imgArray = Array.from(files);
  //console.log("삭제할때..");
  //console.log(imgArray);

  const deleteBtns = document.querySelectorAll(".delete-btn2");
  const dataTransfer = new DataTransfer();

  deleteBtns.forEach((deleteBtn, index) => {
    deleteBtn.onclick = () => {
      imgArray.splice(index, 1);

      imgArray.forEach((file) => {
        dataTransfer.items.add(file);
      });

      document.getElementById("product-imgs").files = dataTransfer.files;

      imgReader();
    };
  });

  deleteFlag = true;
  addImgFiles = imgArray;
  //console.log(addImgFiles);
}

function addImg() {
  const productImgs = document.getElementById("product-imgs");
  const addFiles = productImgs.files;

  let imgArray = Array.from(addFiles);
  //console.log(imgArray);

  addImgFiles = addImgFiles.concat(imgArray);
  console.log(addImgFiles);

  for (let i = 0; i < addFiles.length; i++) {
    const reader = new FileReader();

    reader.onload = (e) => {
      inFileUl.innerHTML += `
                    <li class="added-img">
                        <img class="product-img" src="${e.target.result}" style="width: 140px; height: 140px;">
                        <i class="fa-solid fa-circle-minus delete-btn2"></i>
                    </li>
                `;

      deleteImg(addImgFiles);
    };

    setTimeout(() => {
      reader.readAsDataURL(addFiles[i]);
    }, i * 100);
  }
}

// 수정 후 등록 시 아래 데이터 전송(post)

const updateButton = document.querySelector(".registration-button");

updateButton.onclick = () => {
  updateProduct();
};

function updateProduct() {
  const productInput = document.querySelectorAll(".product-input");
  const productForm = new FormData();
  // let productImgs = document.getElementById("product-imgs");

  productForm.append("productId", productId);
  productForm.append("category", productInput[0].value);
  productForm.append("name", productInput[1].value);
  productForm.append("colorCode", productInput[2].value); // color_code 로 쓰면 못 알아 봄 !! dto에 있는 이름 대로 . .
  productForm.append("color", productInput[3].value);
  productForm.append("price", productInput[4].value);
  productForm.append("productFeatures", productInput[5].value);
  productForm.append("description", productInput[6].value);

  console.log(deleteImgFiles);
  console.log(addImgFiles);

  // deleteImgFiles.forEach((dimg, index) => {
  //   productForm.append("deleteImgFiles",dimg[index]);
  // })

  for (let i = 0; i < deleteImgFiles.length; i++) {
    productForm.append("deleteImgFiles", deleteImgFiles[i]);
  }

  const dataTransfer = new DataTransfer();

  addImgFiles.forEach((file) => {
    dataTransfer.items.add(file);
  });

  const addImgFiles0 = dataTransfer.files;

  // addImgFiles0.forEach((aimg, index) => {
  //   productForm.append("addImgFiles",aimg[index]);
  // })

  for (let i = 0; i < addImgFiles0.length; i++) {
    productForm.append("addImgFiles", addImgFiles0[i]);
  }

  $.ajax({
    async: false,
    type: "post",
    url: "/api/admin/product/update",
    enctype: "multipart/form-data",
    contentType: false,
    processData: false,
    data: productForm,
    dataType: "json",
    success: (response) => {
      alert("상품 수정 완료");
      history.back();
    },
    error: (error) => {
      alert("상품 수정 실패");
      console.log(error);
    },
  });
}

window.onload = () => {
  // let product = JSON.parse(localStorage.getItem("product"));
  // let productId = product.productId;
  console.log(product);
  getOriginValues(product);
};
