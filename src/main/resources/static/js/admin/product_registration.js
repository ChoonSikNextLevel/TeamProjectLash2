const registButton = document.querySelector(".registration-button");
const productImgInput = document.querySelector("#product-imgs");
const productInput = document.querySelectorAll(".product-input");

const nameUl = document.querySelector(".uploaded_files_name");
const fileUl = document.querySelector(".cvf_uploaded_files");

const addFile = document.querySelector(".col-md-6");

let inputFlag = true;

productImgInput.onchange = () => {
  if (inputFlag) {
    imgReader();
  } else {
    addImg();
  }
};

function imgReader() {
  const productImgs = document.getElementById("product-imgs");
  const files = productImgs.files;

  // nameUl.innerHTML = ``;
  fileUl.innerHTML = ``;

  for (let i = 0; i < files.length; i++) {
    // nameUl.innerHTML += `
    //                 <li style="background-color: #b7d5bb; border: 1px solid gray; margin: 2px 0; border-radius: 2px; width: 50%; font-size: 12px;">
    //                     선택된 파일[${i}]: ${files[i].name}
    //                 </li>
    //         `;

    /* img 불러오기 */
    const reader = new FileReader();

    reader.onload = (e) => {
      fileUl.innerHTML += `
                    <li>
                        <img class="product-img" src="${e.target.result}" style="width: 140px; height: 140px;">
                        <i class="fa-solid fa-circle-minus delete-btn"></i>
                    </li>
                `;

      deleteImg(files);
    };

    setTimeout(() => {
      reader.readAsDataURL(files[i]);
    }, i * 100);
  }

  inputFlag = false;
}

function deleteImg(files) {
  let imgArray = Array.from(files);
  const deleteBtns = document.querySelectorAll(".delete-btn");
  const dataTransfer = new DataTransfer();

  deleteBtns.forEach((deleteBtn, index) => {
    deleteBtn.onclick = () => {
      imgArray.splice(index, 1);

      imgArray.forEach((file) => {
        dataTransfer.items.add(file);
      });

      document.querySelector("#product-imgs").files = dataTransfer.files;

      imgReader();
    };
  });
}

function addImg() {
  const productImgs = document.getElementById("product-imgs");
  const addFiles = productImgs.files;

  for (let i = 0; i < addFiles.length; i++) {
    const reader = new FileReader();

    reader.onload = (e) => {
      fileUl.innerHTML += `
                    <li>
                        <img class="product-img" src="${e.target.result}" style="width: 140px; height: 140px;">
                        <i class="fa-solid fa-circle-minus delete-btn"></i>
                    </li>
                `;

      deleteImg(addFiles);
    };

    setTimeout(() => {
      reader.readAsDataURL(addFiles[i]);
    }, i * 100);
  }
}

registButton.onclick = () => {
  const formData = new FormData(document.querySelector("form"));

  let productForm = new FormData();
  let productImgs = document.getElementById("product-imgs");

  productForm.append("category", productInput[0].value);
  productForm.append("name", productInput[1].value);
  productForm.append("colorCode", productInput[2].value); // color_code 로 쓰면 못 알아 봄 !! dto에 있는 이름 대로 . .
  productForm.append("color", productInput[3].value);
  productForm.append("price", productInput[4].value);
  productForm.append("productFeatures", productInput[5].value);
  productForm.append("description", productInput[6].value);
  //productForm.append("returnPolicy", productInput[7].value);

  /* =============== 이미지 form append ==================== */

  let files = productImgs.files;

  for (let i = 0; i < files.length; i++) {
    productForm.append("productImgs", productImgs.files[i]);
  }

  addProduct(productForm);
};

function addProduct(productForm) {
  $.ajax({
    async: false,
    type: "post",
    url: "/api/admin/product/registration",

    enctype: "multipart/form-data",
    contentType: false,
    processData: false,

    data: productForm,
    dataType: "json",
    success: (response) => {
      alert("상품 등록 완료");
      location.reload();
    },
    error: (error) => {
      alert("상품 등록 실패");
      console.log(error);
    },
  });
}
