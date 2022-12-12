package com.lash.lashClone.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

// 쇼핑백, 결제창
// shopping-basket

@Controller
public class PaymentPageController {

    @GetMapping("/shopping-basket")
    public String loadShoppingBasketPage() {
        return "shop_basket/MyShoppingBasket";
    }

    @GetMapping("/payment")
    public String loadPaymentPage() {
        return "shop_basket/pay";
    }
}
