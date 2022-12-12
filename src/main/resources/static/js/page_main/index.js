const siteNavParent = document.querySelector(".site-nav-parent");
const nav = document.querySelector("nav");
const menuProduct = document.querySelector(".menu-product");

const metalButton = document.querySelector(".metal-button");
const metalImage = document.querySelector(".metal-image");

const acetateButton = document.querySelector(".acetate-button");
const acetateImage = document.querySelector(".acetate-image");

const combinationButton = document.querySelector(".combination-button");
const combinationImage = document.querySelector(".combination-image");

const refinedButton = document.querySelector(".refined-button");
const refinedImage = document.querySelector(".refined-image");

const vintageButton = document.querySelector(".vintage-button");
const vintageImage = document.querySelector(".vintage-image");

const sunglassesButton = document.querySelector(".sunglasses-button");
const sunglassesImage = document.querySelector(".sunglasses-image");

const accButton = document.querySelector(".acc-button");
const accImage = document.querySelector(".acc-image");

menuProduct.onmouseover = () => {
    nav.classList.remove("nav-invisible");
}
menuProduct.onmouseout = () => {
    nav.classList.add("nav-invisible");
}
nav.onmouseover = () => {
    nav.classList.remove("nav-invisible");
}
nav.onmouseout = () => {
    nav.classList.add("nav-invisible");
}

$(function () {
    $(".site-nav-parent").mouseover(function () {
        $(".overlay").show();
    });
});
$(function () {
    $(".site-nav-parent").mouseout(function () {
        $(".overlay").hide();
    });
});

$(function () {
    $(".nav-invisible").mouseover(function () {
        $(".overlay").show();
    });
});

$(function () {
    $(".nav-invisible").mouseout(function () {
        $(".overlay").hide();
    });
});

metalButton.onmouseover = () => {
    metalImage.classList.remove("image-display");
}
metalImage.onmouseout = () => {
    metalImage.classList.add("image-display");
}


acetateButton.onmouseover = () => {
    acetateImage.classList.remove("image-display");
}
acetateImage.onmouseout = () => {
    acetateImage.classList.add("image-display");
}


combinationButton.onmouseover = () => {
    combinationImage.classList.remove("image-display");
}
combinationImage.onmouseout = () => {
    combinationImage.classList.add("image-display");
}


refinedButton.onmouseover = () => {
    refinedImage.classList.remove("image-display");
}
refinedImage.onmouseout = () => {
    refinedImage.classList.add("image-display");
}


vintageButton.onmouseover = () => {
    vintageImage.classList.remove("image-display");
}
vintageImage.onmouseout = () => {
    vintageImage.classList.add("image-display");
}


sunglassesButton.onmouseover = () => {
    sunglassesImage.classList.remove("image-display");
}
sunglassesImage.onmouseout = () => {
    sunglassesImage.classList.add("image-display");
}


accButton.onmouseover = () => {
    accImage.classList.remove("image-display");
}
accImage.onmouseout = () => {
    accImage.classList.add("image-display");
}


// 검색
const searchButton = document.querySelector(".search-button");
const searchText = document.querySelector(".search-text")

searchButton.onmousedown = () => {
    searchText.classList.remove("search-display")
}
