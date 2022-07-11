let rules = [
    {
        sel: "a.breaking,.menu3__bottom,.menu3__age, .menu3__items,.menu3__bookmark,.menu3__login,.menu3__search, .document-head__f1__r,.right-col",
        func: "deleteAll"
    },
    {
        sel: ".wrap",
        func: "css",
        params: {
            "padding-top": "0"
        }
    },
    {
        sel: ".menu3",
        func: "css",
        params: {
            "margin-bottom": "0"
        }
    },
    {
        sel: ".menu3__logo",
        func: "css",
        params: {
            "margin-left": "20px"
        }
    }
]