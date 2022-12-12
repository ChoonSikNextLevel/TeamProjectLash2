let data = null;

function getCart() {
  $.ajax({
    async: false,
    type: "get",
    url: "/api/shopping-basket",
    dataType: "json",
    success: (response) => {
      // alert("성공");
      responseData = response.data;
      console.log(responseData);
      loadCart(responseData);
      data = responseData;
    },
    error: (error) => {
      console.log(error);
      // alert("실패");
    },
  });
}
let addtotalPrice = 0;

function loadCart(responseData) {
  const productTableTbody = document.querySelector(".product-table-tbody");
  const totalPrice = document.querySelector(".total-price");

  // console.log(productTableTbody);
  productTableTbody.innerHTML = "";
  responseData.forEach((cart, index) => {
    console.log(index);

    addtotalPrice += cart.price * cart.product_count;

    if (cart.product_id != 0) {
      productTableTbody.innerHTML += `
        <tr>
                            <th class="none"></th>
                            <td class="cart-image">
                                <a href="/products/product/${cart.name}/${cart.color_code}">
                                    <img src="/image/product/${cart.img_name}"
                                        alt="" style="width: 80px; height: 90px; border-radius: 5px;">
                                </a>
                            </td>
                            <td class="cart-info">
                                <strong style="font-size:16px; font-weight:500; color:#000;">
                                    <a href="/products/product/${cart.name}/${cart.color_code}">
                                        ${cart.name} ${cart.color_code}
                                    </a>
                                </strong>
                                <div style="margin-top: 10px;">
                                    <strong style="font-size:14px; font-weight:400; color:#000;">KRW
                                        <span>${cart.price}</span></strong>
                                </div>
                            </td>
                            <td class="cart-count">
                                <span>
                                    <span>
                                        <button class="minus-button" style="background-color: #fff;">
                                            <img src="https://lash1.cafe24.com/web/upload/free_design/ico_quantity_down1.png"
                                                alt="" style="width: 33px; height: 29px;">
                                        </button>
                                        <input class="product-count-input-${index}" type="text" size="2" value="${cart.product_count}">
                                        <button class="plus-button" style="background-color: #fff;">
                                            <img src="
                                            https://lash1.cafe24.com/web/upload/free_design/ico_quantity_up1.png"
                                                alt="" style="width: 33px; height: 29px;">
                                        </button>
                                    </span>
                                </span>
                            </td>
                            <td class="cart-delete" align="right">
                                <button class="delete-button" style="background-color: #fff;">
                                    <img src="https://lash1.cafe24.com/web/upload/free_design/ico_close_black.png"
                                        alt="" style="width: 17px;height: 17px;">
                                </button>
                            </td>
                        </tr>
        
        `;
    } else {
      const empty = document.querySelector(".empty");
      empty.innerHTML = `
                <span>장바구니가 비어있음</span>
        `;
    }
  });
  totalPrice.innerHTML = `
        KRW <span>${addtotalPrice}</span>
        `;
  console.log("총 금액" + addtotalPrice);

  deleteCartItem(responseData);
  updateCount(responseData);
}

// 카트 업데이트
function updateCount(data) {
  const plusButton = document.querySelectorAll(".plus-button");
  const minusButton = document.querySelectorAll(".minus-button");

  plusButton.forEach((plusBtn, index) => {
    plusBtn.onclick = () => {
      $.ajax({
        async: false,
        type: "post",
        url: "/api/shopping-basket/plus/" + data[index].name + "/" + data[index].color_code + "/" + data[index].product_count,
        data: data[index],
        dataType: "json",
        success: (response) => {
          alert("성공");
          console.log(response.data);
          location.reload();
        },
        error: (error) => {
          alert("실패");
          console.log(error);
        },
      });
    };
  });

  minusButton.forEach((minusBtn, index) => {
    if (data[index].product_count > 1) {
      minusBtn.onclick = () => {
        $.ajax({
          async: false,
          type: "post",
          url: "/api/shopping-basket/minus/" + data[index].name + "/" + data[index].color_code + "/" + data[index].product_count,
          data: data[index],
          dataType: "json",
          success: (response) => {
            alert("성공");
            console.log(response.data);
            location.reload();
          },
          error: (error) => {
            alert("실패");
            console.log(error);
          },
        });
      };
    }
  });
}

// 삭제
function deleteCartItem(data) {
  const deleteButton = document.querySelectorAll(".delete-button");

  deleteButton.forEach((deleteBtn, index) => {
    deleteBtn.onclick = () => {
      console.log(deleteBtn);

      $.ajax({
        async: false,
        type: "delete",
        url: "/api/shopping-basket/delete/" + data[index].name + "/" + data[index].color_code,
        dataType: "json",
        success: (response) => {
          alert("성공");
          console.log(response);
          location.reload();
        },
        error: (error) => {
          alert("실패");
          // console.log(error);
        },
      });
    };
  });
}

window.onload = () => {
  localStorage.clear();
  getCart();
};
