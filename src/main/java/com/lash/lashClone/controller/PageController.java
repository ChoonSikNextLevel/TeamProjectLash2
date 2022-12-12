package com.lash.lashClone.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

// 캠페인, 저널, 브랜드 페이지 로딩


@Controller
public class PageController {

    @GetMapping("/index")
    public String loadMainPage() {
        return "page_main/index";
    }
    
    // campaign, journal 페이지의 경우 각 디테일 페이지는 임시 번호로 mapping 주소 설정
    @GetMapping("/campaign")
    public String loadCampaignPage() {
        return "page_campaign/campaign";
    }

    @GetMapping("/campaign/lookbook/10")
    public String loadLookBookPage1() {
        return "page_campaign/campaign_lookbook10";
    }

    @GetMapping("/campaign/lookbook/1")
    public String loadLookBookPage10() {
        return "page_campaign/campaign_lookbook1";
    }

    @GetMapping("/journal")
    public String loadJournalPage() {
        return "journal_html/journal";
    }

    @GetMapping("/journal/1")
    public String loadJournalDetail1Page() {
        return "journal_html/wooz_store";
    }

    @GetMapping("/journal/2")
    public String loadJournalDetail2Page() {
        return "journal_html/lash_brand_showcase";
    }

    @GetMapping("/journal/3")
    public String loadJournalDetail3Page() {
        return "journal_html/d_classic_store";
    }

    @GetMapping("/brand")
    public String loadBrandPage() {
        return "page_brand/brand-CB";
    }
}
