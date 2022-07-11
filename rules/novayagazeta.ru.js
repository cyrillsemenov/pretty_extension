let rules = [
    {
        sel: ".Header_linkDonate_*,.DonateLink_link_*,.SearchButton_root_*,.LoginButton_root_*,.ShopLink_rootShop_*,.Menu_iconsBox*,.Header_issueDesktop_*,.SubscriptionInformer_*,.adfox*",
        func: "deleteAll"
    },
    {
        sel: "h1",
        func: "css",
        params: {
            "max-width": "70%",
            "font-size": "45px",
            "line-height": "45px",
            "text-align": "left",
            "font-weight": "600"
        }
    },
    {
        sel: ".Logo_root_*,.Post_headerWrapper_*,.Header_upWrapper_*,.Content_root__*",
        func: "css",
        params: {
            "paddingLeft": "60px"
        }
    }
]
q$(".Header_linkDonate_*,.DonateLink_link_*,.SearchButton_root_*,.LoginButton_root_*,.ShopLink_rootShop_*,.Header_issueDesktop_*,div[style='position: fixed; top: 0px; left: 0px; height: 5px; width: 100%; background-color: transparent; z-index: 1298;']").rmAll();
q$("h1").css("max-width","70%").css("font-size","45px").css("line-height","45px").css("text-align","left").css("font-weight","600");
q$(".Logo_root_*, .Post_headerWrapper_*, .Header_upWrapper_*, .Content_root__*").css("paddingLeft", "60px");