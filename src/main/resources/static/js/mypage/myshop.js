function addMyshop() {
  $.ajax({
    async: false,
    type: "get",
    url: "/api/account/mypage",
    dataType: "json",
    success: (response) => {
      responseData = response.data;
      loadList(responseData);
      // console.log(response.data[0].name)
    },
    error: (error) => {
      alert("이름 가져오기 실패");
      console.log(error);
    },
  });
}

function loadList(responseData) {
  console.log(responseData);
  const myPageBody = document.querySelector(".memberMent");
  myPageBody.innerHTML += `
    <p class="welcome">
        <span class="member-var-name">${responseData.name}</span> 고객님, 환영합니다. <br>
    </p>
    
    `;
}

let data = null;

function loadOrder() {
  $.ajax({
    async: false,
    type: "get",
    url: "/api/account/mypage/count",
    dataType: "json",
    success: (response) => {
      console.log(response.data);
      data = response.data;
      getOrderCount(data);
    },
    error: (error) => {
      console.log(error);
    },
  });
}

const orderStatus = document.querySelectorAll(".order_status");

let orderCount = {
  shipped_before: 0,
  shipped_begin: 0,
  shipped_complete: 0,
  order_cancel: 0,
};

function getOrderCount(responseData) {
  responseData.forEach((data) => {
    if (data.status == "shipped_before") {
      orderCount.shipped_before = data.order_count;
    } else if (data.status == "shipped_begin") {
      orderCount.shipped_begin = data.order_count;
    } else if (data.status == "shipped_complete") {
      orderCount.shipped_complete = data.order_count;
    } else if (data.status == "order_cancel") {
      orderCount.order_cancel = data.order_count;
    }
  });

  console.log("aa : ", orderCount);

  orderStatus[0].innerHTML = `${orderCount.shipped_before}`;
  orderStatus[1].innerHTML = `${orderCount.shipped_begin}`;
  orderStatus[2].innerHTML = `${orderCount.shipped_complete}`;
  orderStatus[3].innerHTML = `${orderCount.order_cancel}`;
}

window.onload = () => {
  addMyshop();
  loadOrder();
};
