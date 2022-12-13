package com.lash.lashClone.controller.admin;


import lombok.RequiredArgsConstructor;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RequestMapping("/admin")
@Controller
public class AdminPageController {

    @GetMapping("/product/registration")
    public String registration() {
        return "admin/managerpage/product_registration";
    }

    @GetMapping("/products")
    public String productList() {
        return "admin/managerpage/product_list";
    }

    @GetMapping("/product/update")
    public String productUpdate() {
        return "admin/managerpage/product_update";

    }

    @GetMapping("/order/managerpage")
    public String orderManagerPage(Model model, @RequestParam @Nullable String order_status,
                                                @RequestParam @Nullable String history_start_date,
                                                @RequestParam @Nullable String history_end_date) {
        System.out.println(order_status + history_start_date + history_end_date);
        model.addAttribute("order_status", order_status);
        model.addAttribute("history_start_date", history_start_date);
        model.addAttribute("history_end_date", history_end_date);
        return "admin/order_management";
    }

}
