/*----------- date picker ---------------*/

$(document).ready(function () {
  $.datepicker.setDefaults({
    closeText: "닫기",
    currentText: "오늘",
    prevText: "이전 달",
    nextText: "다음 달",
    monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    dayNames: ["일", "월", "화", "수", "목", "금", "토"],
    dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
    dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
    weekHeader: "주",
    yearSuffix: "년",
  });
});

$(function () {
  $("#history_start_date, #history_end_date").datepicker({
    dateFormat: "yy-mm-dd",
    showOn: "button",
    buttonImage: "/static/images/btn_img/ico_cal.gif",
    buttonImageOnly: true,
    showButtonPanel: true,
    maxDate: "today",
    minDate: "-2y",
  });

  $("#history_start_date, #history_end_date").datepicker("setDate", "today");
});

$(function () {
  $(".btnNormal1").on("click", function (e) {
    $("#history_start_date, #history_end_date").datepicker("setDate", "$('a').attr('days')");
  });

  $(".btnNormal2").on("click", function (e) {
    $("#history_start_date").datepicker("setDate", "-7D");
    $("#history_end_date").datepicker("setDate", "today");
  });

  $(".btnNormal3").on("click", function (e) {
    $("#history_start_date").datepicker("setDate", "-1M");
    $("#history_end_date").datepicker("setDate", "today");
  });

  $(".btnNormal4").on("click", function (e) {
    $("#history_start_date").datepicker("setDate", "-3M");
    $("#history_end_date").datepicker("setDate", "today");
  });

  $(".btnNormal5").on("click", function (e) {
    $("#history_start_date").datepicker("setDate", "-6M");
    $("#history_end_date").datepicker("setDate", "today");
  });
});

/*----------- paging --------------*/

// let nowPageUrl = window.location.href;

// let nowPage = 1; // 현재 페이지
// let productTotalCount = 106; // 제품 106개가 등록되어 있음

// const paginationLimit = 1; // 한 페이지에 15 개의 데이터 띄워줄 것
// let endPage = Math.ceil(productTotalCount / paginationLimit);

// const pageButtons = document.querySelector(".page-buttons"); // 만든 page numbers 넣어줄 ol 영역
// pageButtons.innerHTML = "";

const orderList = document.querySelector(".order-list"); // 가져온 데이터 넣어줄 테이블
// const trItems = document.querySelector(".tr"); // table에 가져온 items 들

// function createNumButtons(nowPage, productTotalCount) {
//   // 3페이지 면 1 ~ 5 / 6페이지면 6 ~ 10 버튼을 보여줘야함
//   // nowPage 가 5의 배수가 아닐 때는 나머지가 생김
//   // 나머지를 빼주면(-) 5의 배수 -> 거기서 + 1 을 해서 start index 구해줌
//   let startIndex = nowPage % 5 == 0 ? nowPage - 4 : nowPage - (nowPage % 5) + 1; // 6
//   let endIndex = startIndex + 4 <= endPage ? startIndex + 4 : endPage; // 10

//   for (let i = startIndex; i <= endIndex; i++) {
//     if (i == nowPage) {
//       pageButtons.innerHTML += `<li class="now-page"><a href="javascript:void(0)" class="this">${i}</a></li>`;
//     } else {
//       pageButtons.innerHTML += `<li><a href="javascript:void(0)">${i}</a></li>`;
//     }
//   }
// }

// const firstBtn = document.querySelector("first");
// const prevBtn = document.querySelector("prev");
// const nextBtn = document.querySelector("next");
// const lastBtn = document.querySelector("last");

/**-----------------------------------------*/

let data = null;



function getOrder() {
  $.ajax({
    async: false,
    type: "get",
    url: "/api/admin/orderManagement",
    data: param,
    dataType: "json",
    success: (response) => {
      responseData = response.data;
      console.log(responseData);
      loadOrder(responseData);
      data = responseData;
    },
    error: (error) => {
      console.log(error);
    }
  });
}

let order_status = document.querySelector(".order-status-hidden").value;
let start_date = document.querySelector("#history_start_date_hidden").value;
let end_date = document.querySelector("#history_end_date_hidden").value;


console.log(order_status);
console.log(start_date);
console.log(end_date);

let param = {
  status: order_status,
  history_start_date: start_date,
  history_end_date: end_date
};

function setParam() {
  // if ((param.status != "shipped_before") && (param.status != "shipped_begin") && (param.status != "shipped_complete")) {
  //   param.status = "all";
  // }
  if (param.status == '') {
    param.status = "all";
  }
}


const orderStatus = document.querySelector("#order-status");
orderStatus.onchange = () => {
  param.status = orderStatus.value;
  console.log(param.status);
}

function loadOrder(responseData) {
  orderList.innerHTML = "";
  // if (param.status == '') {
  //   param.status = "all"
  // }
  responseData.forEach((order, index) => {
    let orderDate = new Date(order.order_date);
    let orderStatus2 = order.status;
    // console.log(orderStatus2);
    if (param.status != "all" ? orderStatus2 == param.status : true) {
      // console.log("1");
      console.log(orderStatus2);
      console.log(param.status);

      let start = new Date(param.history_start_date);
      let end = new Date(param.history_end_date);



      if ((orderDate >= start && orderDate <= end) || (start == "Invalid Date" || end == "Invalid Date")) {
        // console.log("2");

        orderList.innerHTML += `
                        <tr>
                            <td><p class="order-date" style="margin: 0;">${order.order_date}</p>
                            <p style="margin: 0;">[${order.order_id}]</p>
                            </td>
                            <td>${order.name} ${order.color_code}</td>
                            <td>${order.product_count}</td>
                            <td>${order.price} 원</td>
                            <td>${order.re_address} ${order.re_address_detail}</td>
                            <td>
                                <select class="order-status2">
                                    <option value="shipped_before">결제완료</option>
                                    <option value="shipped_begin">배송중</option>
                                    <option value="shipped_complete">배송완료</option>
                                    <option value="order_cancel">취소∙교환∙반품</option>
                                </select>
                            </td>
                            <td><button class="status-update"><i class="fa-solid fa-arrow-up"></i></button></td>
                        </tr>
    `;
      }
    }
  });


  // 

  const updateSelects = document.querySelectorAll(".order-status2");

  updateSelects.forEach((updateSelect, index) => {
    const selectLength = updateSelect.options.length;
    const optionValue = responseData[index].status;

    // console.log(selectLength);
    // console.log(optionValue);

    for (let i = 0; i < selectLength; i++) {
      if (optionValue == updateSelect.options[i].value) {
        updateSelect.options[i].selected = true;
      }
    }

  })
  // 




}



// status 업데이트 버튼
function updateStatus(data) {
  const updateButtons = document.querySelectorAll(".status-update");

  const orderStatus2 = document.querySelectorAll(".order-status2");


  updateButtons.forEach((updateBtn, index) => {




    updateBtn.onclick = () => {
      let updateData = {};

      updateData.status = orderStatus2[index].value;
      updateData.order_id = responseData[index].order_id;
      updateData.product_id = responseData[index].product_id;

      console.log(updateData);

      $.ajax({
        async: false,
        type: "post",
        url: "/api/admin/orderManagement/updateStatus",
        data: updateData,
        dataType: "json",
        success: (response) => {
          alert("수정 완료");
          console.log(response);
          location.reload();
        },
        error: (error) => {
          alert("수정 실패");
          console.log(error);
        }
      });

    };

  });

}


function setModel() {
  const statusSelect = document.querySelector("#order-status");
  for (let i = 0; i < 4; i++) {
    if (statusSelect.options[i].value == testValue1) {
      statusSelect.options[i].selected = true;
    }
  }

  const startDate = document.querySelector("#history_start_date");
  startDate.value = testValue2;

  const endDate = document.querySelector("#history_end_date");
  endDate.value = testValue3;
}



// 






// function loadByDate() {

// const orderStatus = document.querySelector("#order-status").value;
// param.status = orderStatus;

//   console.log(param);

// const orderDate = document.querySelectorAll(".order-date");
// const orderStatus2 = document.querySelectorAll(".order-status2");


//   const orderSearchButton = document.querySelector("#order-search-btn");

//   orderSearchButton.onclick = () => {


//     responseData.forEach((order, index) => {
//       let orderDate = new Date(order.order_date);
//       let orderStatus2 = order.status;
//       console.log(orderStatus2);
//       if (orderStatus2 == param.status) {
//         console.log("1");
//         if (orderDate >= param.history_start_date && orderDate <= param.history_end_date) {
//           console.log("2");
//           orderList.innerHTML = ``;

//           //       orderList.innerHTML += `
//           //                     <tr>
//           //                         <td><p class="order-date" style="margin: 0;">${order.order_date}</p>
//           //                         <p style="margin: 0;">[${order.order_id}]</p>
//           //                         </td>
//           //                         <td>${order.name} ${order.color_code}</td>
//           //                         <td>${order.product_count}</td>
//           //                         <td>${order.price} 원</td>
//           //                         <td>${order.re_address} ${order.re_address_detail}</td>
//           //                         <td>
//           //                             <select class="order-status2">
//           //                                 <option value="shipped_before">결제완료</option>
//           //                                 <option value="shipped_begin">배송중</option>
//           //                                 <option value="shipped_complete">배송완료</option>
//           //                             </select>
//           //                         </td>
//           //                         <td><button class="status-update"><i class="fa-solid fa-arrow-up"></i></button></td>
//           //                     </tr>
//           // `;
//         }
//       }


//     })


//   }


// }









// ---------------------------onload------------------------ //
window.onload = () => {
  setParam();
  getOrder();
  updateStatus();
  setModel();
  // loadByDate();
};
