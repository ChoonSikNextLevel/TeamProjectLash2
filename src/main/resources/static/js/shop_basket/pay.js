// 결제내역 체크박스 일괄선택,해제
function selectAll(selectAll) {
  const checkboxes = document.getElementsByName("product-list-select");

  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAll.checked;
  });
}
// 결제수단 선택시 각각 다른 div 보이게하기
function payMethod(element) {
  let de = document.getElementsByName("pay-detail");
  let fi = document.getElementsByClassName("pay-method-box-right");

  for (var i = 0; i < de.length; i++) {
    if (de[i].classList.contains(element.id)) {
      de[i].classList.remove("none");
      fi[i].classList.remove("none");
    } else {
      de[i].classList.add("none");
      fi[i].classList.add("none");
    }
  }
}

/* top 버튼 */

$(function () {
  $("#top").hide();

  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 900) {
        $("#top").fadeIn();
      } else {
        $("#top").fadeOut();
      }
    });

    $("#top a").click(function () {
      $("body,html").animate(
        {
          scrollTop: 0,
        },
        500,
      );
      return false;
    });
  });
});

const productListBody = document.querySelector(".product-list-tbody");
const productListFoot = document.querySelector("tfoot");
const paymentTotalPrice = document.querySelector(".payment-total-price");
const afterDiscount = document.querySelector(".after-discount");
const paymentTotal = document.querySelectorAll(".payment-total");

let cartList = [];
let productTotalPrice = 0;

function buynowOrder(cartList) {
  productListBody.innerHTML = ``;

  cartList.forEach((product) => {
    productListBody.innerHTML += `
                    <tr style="height: 112px;">
                        <td class="product-list-table-input">
                            <input type="checkbox" name="product-list-select" class="check-boxes">
                        </td>
                        <td class="product-list-table-image inner-img">

                        </td>
                        <td class="product-list-table-product-info">
                            <a href="/products/product/${product.name}/${product.color_code}">
                                <strong>
                                    ${product.name} ${product.color_code}
                                </strong>
                            </a>
                        </td>
                        <td class="product-list-table-price">
                            <div>
                                <strong>KRW ${product.price}</strong>
                            </div>
                        </td>
                        <td class="product-list-table-count"> ${product.product_count}</td>
                        <td class="product-list-table-reserves">
                            <span class="product-list-table-reserves-text">-</span>
                        </td>
                        <td class="product-list-table-shipping-category">
                            <div class="product-list-table-shipping-category-text">
                                기본배송
                                <div>(해외배송불가)</div>
                            </div>
                        </td>
                        <td class="product-list-table-shipping-price">[무료]</td>
                        <td class="product-list-table-total-price">
                            <strong>KRW ${product.price}</strong>
                        </td>
                    </tr>
    `;

    imgLoad(product);

    productTotalPrice += product.price;

    productListFoot.innerHTML = `
                    <tr>
                        <td class="product-list-table-input"></td>
                        <td colspan="8">
                            <span>[기본배송]</span>
                            상품구매금액
                            <strong>
                            ${productTotalPrice}
                            </strong>
                            + 배송비
                            <span>0 (무료)</span>
                            = 합계 :
                            <strong>
                                KRW
                                <span>${productTotalPrice}</span>
                            </strong>
                        </td>
                    </tr>
    `;

    paymentTotalPrice.innerHTML = `${productTotalPrice}`;
    afterDiscount.innerHTML = `${productTotalPrice}`;

    orderData(product);
  });

  paymentTotal.forEach((p) => {
    p.value = productTotalPrice;
  });
}

/** 상품 이미지 삽입 */
function imgLoad(product) {
  const tableImgs = document.querySelectorAll(".inner-img");

  if (localStorage.getItem("buy-now-product")) {
    tableImgs[tableImgs.length - 1].innerHTML = `
          <a href="/products/product/${product.name}/${product.color_code}">
            <img src="/image/product/${product.product_imgs[0].img_name}">
          </a>
        `;
  } else {
    tableImgs[tableImgs.length - 1].innerHTML = `
        <a href="/products/product/${product.name}/${product.color_code}">
          <img src="/image/product/${product.img_name}">
        </a>
      `;
  }
}

/** 결제할 상품, 수량, 가격 */
let orderItems = [];

function orderData(product) {
  if (product.length != undefined) {
    product.forEach((p) => {
      orderItems.push(p);
    });
  } else {
    orderItems.push(product);
  }

  console.log("orderItems");
  console.log(orderItems);
  return orderItems;
}

function getTotalPrice(items) {
  let totalPrice = 0;

  items.forEach((item) => {
    totalPrice = totalPrice + item.price;
  });

  console.log(totalPrice);
  return totalPrice;
}

let deleteItems = [];

/**  삭제하기 -> 쇼핑카트에서도 지워짐 */
function deleteCartItem(data) {
  console.log(data);
  const deleteBtn = document.querySelector(".delete-button");

  deleteBtn.onclick = () => {
    const checkboxes = document.querySelectorAll(".check-boxes");

    deleteItems = [];
    checkboxes.forEach((checkbox, index) => {
      if (checkbox.checked) {
        console.log(data[index]);
        deleteItems.push(data[index]);
      }
    });

    console.log(deleteItems);

    deleteItems.forEach((item) => {
      $.ajax({
        async: false,
        type: "delete",
        url: "/api/shopping-basket/delete/" + item.name + "/" + item.color_code,
        dataType: "json",
        success: (response) => {
          console.log(response);
        },
        error: (error) => {
          console.log(error);
        },
      });
    });
    location.reload();
  };
}

/** 결제 */

var IMP = window.IMP;
IMP.init("imp75586747");

function getMemberInfo() {
  $.ajax({
    async: false,
    type: "get",
    url: "/api/order/member/info",
    dataType: "json",
    success: (response) => {
      let buyer_id = responseData.member_id;
      console.log(buyer_id);
    },
    error: (error) => {
      alert("회원 로그인 후 구매하실 수 있습니다.");
      location.href = "/account/login";
    },
  });
}

/** 주문자 정보 */
function orderer() {
  const bname = document.querySelector(".input-name").value;

  const btel1 = document.querySelector(".select-phone").value;
  const btel2 = document.querySelector(".input-phone2").value;
  const btel3 = document.querySelector(".input-phone3").value;

  const badd1 = document.querySelector(".input-address1").value; // postcode

  const badd2 = document.querySelector(".input-address2").value;
  const badd3 = document.querySelector(".input-address3").value;

  const bmail = document.querySelector(".input-email").value;
  const bmails = document.querySelector(".select-email").value;

  const orderer = {
    orderer: bname,
    or_mobile_phone: btel1 + btel2 + btel3,
    or_address: badd2,
    or_address_detail: badd3,
    or_address_number: badd1,
    or_email: bmail + "@" + bmails,
  };

  return orderer;
}

/** 배송자 정보 */
function recipient() {
  const rname = document.querySelector(".receiver-name-input").value;

  const rtel1 = document.querySelector(".select-phone").value;
  const rtel2 = document.querySelector(".input-phone2").value;
  const rtel3 = document.querySelector(".input-phone3").value;

  const radd1 = document.querySelector(".input-address1").value; // postcode

  const radd2 = document.querySelector(".input-address2").value;
  const radd3 = document.querySelector(".input-address3").value;

  const shipping_msg = document.querySelector(".input-email").value;

  const recipient = {
    recipient: rname,
    re_mobile_phone: rtel1 + rtel2 + rtel3,
    re_address: radd2,
    re_address_detail: radd3,
    re_address_number: radd1,
    message: shipping_msg,
  };

  return recipient;
}

const payMethodN = document.getElementById("pay-method-normal");
const payMethodK = document.getElementById("pay-method-kakao");
const payMethodT = document.getElementById("pay-method-toss");
const payBtn = document.querySelectorAll(".pay-button");

payBtn.forEach((pbtn, index) => {
  orderer();
  let uid = new Date().getTime();

  pbtn.onclick = () => {
    if (index == 0) {
      //alert("일반결제");

      IMP.request_pay(
        {
          pg: "html5_inicis.INIpayTest", //테스트 시 html5_inicis.INIpayTest 기재
          pay_method: "card",
          merchant_uid: uid, //상점에서 생성한 고유 주문번호
          name: "주문명:" + uid,
          amount: getTotalPrice(orderItems),
          buyer_email: orderer.or_email,
          buyer_name: orderer.orderer,
          buyer_tel: orderer.or_mobile_phone,
          buyer_addr: orderer.or_address + " " + orderer.or_address_detail,
          buyer_postcode: orderer.or_address_number,
          m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
          escrow: true, //에스크로 결제인 경우 설
          bypass: {
            acceptmethod: "noeasypay", // 간편결제 버튼을 통합결제창에서 제외(PC)
            P_RESERVED: "noeasypay=Y", // 간편결제 버튼을 통합결제창에서 제외(모바일)
            acceptmethod: "cardpoint", // 카드포인트 사용시 설정(PC)
            P_RESERVED: "cp_yn=Y", // 카드포인트 사용시 설정(모바일)
          },
          period: {
            from: "20220101", //YYYYMMDD
            to: "20221231", //YYYYMMDD
          },
        },
        function (rsp) {
          // callback 로직
          if (rsp.success) {
            paySuccess(uid);
            alert("구매되었습니다. 감사합니다.");
            location.href = "/account/mypage";
          } else {
            alert("결제 실패하였습니다. 다시 한 번 시도해 주세요. ");
          }
        },
      );
    } else if (index == 1) {
      //alert("카카오결제");

      IMP.request_pay(
        {
          pg: "kakaopay.TC0ONETIME", //테스트인경우 kcp.T000
          pay_method: "card",
          merchant_uid: uid, //상점에서 생성한 고유 주문번호
          name: "주문명:" + uid,
          amount: getTotalPrice(orderItems),
          company: "lash", //해당 파라미터 설정시 통합결제창에 해당 상호명이 노출됩니다.
          buyer_email: orderer.or_email,
          buyer_name: orderer.orderer,
          buyer_tel: orderer.or_mobile_phone,
          buyer_addr: orderer.or_address + " " + orderer.or_address_detail,
          buyer_postcode: orderer.or_address_number,
          language: "ko", // en 설정시 영문으로 출력되면 해당 파라미터 생략시 한국어 default
          m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
        },
        function (rsp) {
          // callback 로직
          if (rsp.success) {
            paySuccess(uid);
            alert("구매되었습니다. 감사합니다.");
            location.href = "/account/mypage";
          } else {
            alert("결제 실패하였습니다. 다시 한 번 시도해 주세요. ");
          }
        },
      );
    } else if (index == 2) {
      alert("토스결제는 현재 사용하실 수 없습니다. 죄송합니다.");

      IMP.request_pay(
        {
          pg: "uplus.tosstest",
          pay_method: "card",
          merchant_uid: uid, //상점에서 생성한 고유 주문번호
          name: "주문명:" + uid,
          amount: getTotalPrice(orderItems),
          buyer_email: orderer.or_email,
          buyer_name: orderer.orderer,
          buyer_tel: orderer.or_mobile_phone,
          buyer_addr: orderer.or_address + " " + orderer.or_address_detail,
          buyer_postcode: orderer.or_address_number,
          m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
          appCard: true, // 설정시 신용카드 결제모듈에서 앱카드 결제만 활성화됩니다.
        },
        function (rsp) {
          // callback 로직
          if (rsp.success) {
            paySuccess(uid);
            alert("구매되었습니다. 감사합니다.");
            location.href = "/account/mypage";
            // db insert
          } else {
            alert("결제 실패하였습니다. 다시 한 번 시도해 주세요.");
          }
        },
      );
    }
  };
});

window.onload = () => {
  if (localStorage.getItem("buy-now-product")) {
    let product = JSON.parse(localStorage.getItem("buy-now-product"));
    cartList.push(product);
    buynowOrder(cartList);
    deleteCartItem(cartList);
    localStorage.clear();
    // 결제
  } else {
    // 쇼핑 카트에서 결제 페이지로 넘어왔을 때
    getCartItems();
    if (cartList[0].name != null) {
      buynowOrder(cartList);
      deleteCartItem(cartList);
    } else {
      alert("장바구니가 비어 있습니다.");
      location.href = "/index";
    }
  }
};

// cart_mst 가져오기
function getCartItems() {
  $.ajax({
    async: false,
    type: "get",
    url: "/api/shopping-basket",
    dataType: "json",
    success: (response) => {
      console.log(response.data);
      response.data.forEach((item) => {
        cartList.push(item);
      });
    },
    error: (error) => {
      console.log(error);
    },
  });
}

// 성공시 주문정보 db insert

function getOrderProductInfo(uid) {
  let orderProductInfo = {
    order_id: uid,
    orderItems: JSON.stringify(orderItems),
  };

  return orderProductInfo;
}

function paySuccess(uid) {
  $.ajax({
    async: false,
    type: "post",
    url: "/api/order/success",
    data: Object.assign(getOrderProductInfo(uid), orderer(), recipient()),
    dataType: "json",
    success: (response) => {
      alert("주문이 완료되었습니다.");
      console.log(response);
    },
    error: (error) => {
      console.log(error);
    },
  });
}

// order_id, orderItems(name, color_code, product_count, member_id) , orderer , recipient, message
