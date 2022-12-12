package com.lash.lashClone.controller.api;

import com.lash.lashClone.domain.Cart;
import com.lash.lashClone.dto.CMRespDto;
import com.lash.lashClone.dto.shop.OrderReqDto;
import com.lash.lashClone.repository.CartRepository;
import com.lash.lashClone.service.CartService;
import com.lash.lashClone.service.CartServiceImpl;
import com.lash.lashClone.service.auth.PrincipalDetails;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class CartApi {

    private final CartServiceImpl cartService;

    @GetMapping("/shopping-basket")
    public ResponseEntity<?> loadCart(@AuthenticationPrincipal PrincipalDetails principalDetails) throws Exception{

        System.out.println("memberId : " + principalDetails.getMember().getUsername());
        return ResponseEntity.ok(new CMRespDto<>(1,"success", cartService.getCart(principalDetails.getMember().getUsername())));
    }

    @PostMapping("/shopping-basket/plus/{name}/{colorCode}/{productCount}")
    public ResponseEntity<?> plusCount(@AuthenticationPrincipal PrincipalDetails principalDetails,@PathVariable String name,@PathVariable String colorCode, @PathVariable int productCount) throws Exception{

        String username = principalDetails.getMember().getUsername();

        return ResponseEntity.ok(new CMRespDto<>(1,"success", cartService.plusCount(username,name,colorCode,productCount)));
    }

    @PostMapping("/shopping-basket/minus/{name}/{colorCode}/{productCount}")
    public ResponseEntity<?> minusCount(@AuthenticationPrincipal PrincipalDetails principalDetails,@PathVariable String name,@PathVariable String colorCode, @PathVariable int productCount) throws Exception{

        String username = principalDetails.getMember().getUsername();

        return ResponseEntity.ok(new CMRespDto<>(1,"success", cartService.minusCount(username, name, colorCode, productCount)));

    }

    @DeleteMapping("/shopping-basket/delete/{name}/{colorCode}")
    public ResponseEntity<?> deleteCartItem(@AuthenticationPrincipal PrincipalDetails principalDetails,@PathVariable String name,@PathVariable String colorCode) throws Exception {

        String username = principalDetails.getMember().getUsername();

        return ResponseEntity.ok(new CMRespDto<>(1, "success", cartService.deleteCart(username, name, colorCode)));
    }


    @PostMapping("/order/success")
    public ResponseEntity<?> orderSuccess(OrderReqDto orderReqDto) throws Exception {

        System.out.println(orderReqDto);
        return ResponseEntity.ok(new CMRespDto<>(1, "success", cartService.order(orderReqDto)));
    }

    @PostMapping("/order/one")
    public ResponseEntity<?> orderOne(OrderReqDto orderReqDto, @AuthenticationPrincipal PrincipalDetails principalDetails) throws Exception {

        return ResponseEntity.ok(new CMRespDto<>(1, "success", cartService.orderOne(orderReqDto, principalDetails.getMember().getUsername())));
    }

}
