const addButton = document.querySelector(".add-button");
addButton.onclick = () => {
  const textInputs = document.querySelectorAll(".inputTypeText");
  console.log(textInputs);
  let addInfo = {
    address_name: textInputs[0].value,
    recipient: textInputs[1].value,
    address_number: textInputs[2].value,
    address: textInputs[3].value,
    address_detail: textInputs[4].value,
    first_land_phone: textInputs[5].value,
    middle_land_phone: textInputs[6].value,
    last_land_phone: textInputs[7].value,
    first_mobile_phone: textInputs[8].value,
    middle_mobile_phone: textInputs[9].value,
    last_mobile_phone: textInputs[10].value,
  };
  console.log(addInfo);
  addAddress(addInfo);
};
function addAddress(addInfo) {
  $.ajax({
    async: false,
    type: "post",
    url: "/api/account/shippingAddressRegistration",

    data: addInfo,
    dataType: "json",
    success: (response) => {
      alert("배송지 등록 완료");
      location.replace("/account/mypage/address");
    },
    error: (error) => {
      alert("배송지 등록 실패");
      console.log(error);
    },
  });
}
