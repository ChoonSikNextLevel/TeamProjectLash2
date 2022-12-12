
// 화면 첫 이미지 스크롤 시 축소 이벤트 

const scrollImg = document.querySelector(".lookbook-detail-top img");
const content = document.querySelector(".lookbook-detail-content");

const fixTitle = document.querySelector(".lookbook-title");

window.onscroll = function() {
     
    let value = 1 - window.pageYOffset / content.offsetTop;

    if(value > 0.7){
        scrollImg.style.transform = `scale(${value})`;
    }
  };