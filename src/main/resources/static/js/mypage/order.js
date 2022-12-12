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
const orderList = document.querySelector(".order-list");
let data = null;


function getOrder() {
    $.ajax({
        async: false,
        type: "get",
        url: "/api/account/mypage/order",
        data: param,
        dataType: "json",
        success: (response) => {
            // alert("상품 불러오기성공");
            responseData = response.data;
            console.log(responseData);
            loadOrder(responseData);
            data = responseData;
        },
        error: (error) => {
            alert("오류 발생!");
            console.log(error);
        },
    });
}
  
let order_status = document.querySelector(".order-status-hidden").value;
let start_date = new Date(document.querySelector("#history_start_date_hidden").value);
let end_date = new Date(document.querySelector("#history_end_date_hidden").value);

console.log(order_status);
console.log(start_date);
console.log(end_date);

let param = {
  status: order_status,
  history_start_date: start_date,
  history_end_date: end_date
};

function setParam() {
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
    
    // const shippingStatus = null;

    // if(order.status== 'shipped_before'){
    //     shippingStatus = "결제완료";
    // }else if (order.status == 'shipped_begin') {
    //     shippingStatus = "배송중";
    // }else {
    //     shippingStatus = "배송완료";
    // }
    

    
    orderList.innerHTML = "";
  
    responseData.forEach((order, index) => {




        let orderDate = new Date(order.order_date);
        let orderStatus2 = order.status;
        if (param.status != "all" ? orderStatus2 == param.status : true) {
            console.log(orderStatus2);
            console.log(param.status);
            if ((orderDate >= param.history_start_date && orderDate <= param.history_end_date) || (param.history_start_date == "Invalid Date" && param.history_end_date == "Invalid Date")) {
            // const orderImgsArray = order.img_name;

            // console.log("aaa : ", order.status);
            
            let orStatus = order.status;
            let statusText = null;
            
            if(orStatus == "shipped_before") {
                statusText = "결제완료";

            }else if(orStatus == "shipped_begin") {
                statusText = "배송중";

            }else if(orStatus == "shipped_complete") {
                statusText = "배송완료";
                
            }else if(orStatus == "order_cancel") {
                statusText = "취소∙교환∙반품";
            }

            orderList.innerHTML += `
                            <tr>
                                    <td>${order.order_date}
                                    <br>[${order.order_id}]
                                    </td>
                                    <td style="padding:0;"><img style = "width:100%; padding:10px;" src="/image/product/${order.img_name}"></td>
                                    <td style = "text-align: center;">${order.name} ${order.color_code}</td> 
                                    <td style = "text-align: center;">${order.product_count}</td>
                                    <td style = "text-align: center;">${order.price} 원</td>

                                    <td>${statusText}</td>

                                </tr>
            `;
            }
            
        }

    });

    // setStatus(responseData);

    const updateSelects = document.querySelectorAll(".order-status2");
      // 기존 select 값과 일치하는 value에 seleted 옵션을 줘라
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

}


// function setStatus(responseData) {
//     const shipping = document.querySelectorAll(".status11");
//     console.log(shipping);

//     shipping.forEach((s, index) => {
//         console.log("s" + s);
//         console.log(s.value);
//         console.log("ddd" + responseData[index].status);

//         if(shipping[index].value == 'shipped_before') {
//             s.innerHTML = `결제완료`;
//         } else if(shipping[index].value == 'shipped_begin') {
//             s.innerHTML = `배송중`;
//         } else if(shipping[index].value == 'shipped_complete') {
//             s.innerHTML == '배송완료';
//         }
//     })
// }

// // status 업데이트 버튼
// function updateStatus(data) {
//     const updateButtons = document.querySelectorAll(".status-update");
  
//     const orderStatus2 = document.querySelectorAll(".order-status2");
  
  
//     updateButtons.forEach((updateBtn, index) => {
  
  
  
  
//       updateBtn.onclick = () => {
//         let updateData = {};
  
//         updateData.status = orderStatus2[index].value;
//         updateData.order_id = responseData[index].order_id;
//         updateData.product_id = responseData[index].product_id;
  
//         console.log(updateData);
  
//         $.ajax({
//           async: false,
//           type: "post",
//           url: "/api/admin/orderManagement/updateStatus",
//           data: updateData,
//           dataType: "json",
//           success: (response) => {
//             alert("수정 완료");
//             console.log(response);
//             location.reload();
//           },
//           error: (error) => {
//             alert("수정 실패");
//             console.log(error);
//           }
//         });
  
//       };
  
//     });
  
//   }

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


// function loadByStatus() {
//     const statusSelect = document.querySelector("#order-status");

//     statusSelect.onchange = () => {
//         param.status = statusSelect.value;
//         console.log("status : ", param.status);
//         getOrder();
//     };
// }

// ---------------------------onload------------------------ //
window.onload = () => {
    setParam();
    getOrder();
    // updateStatus();
    setModel();
};
                                    // <td style = "text-align: center;" value="shipped_before">결제완료</td>
                                    // <td style = "text-align: center;" value="shipped_begin">배송중</td>
                                    // <td style = "text-align: center;" value="shipped_complete">배송완료</td>