let rules = [
    {
        sel: ".banner__filmstrip, .article__header__after, .article__header__counter-block, .article__header__share-block, .subscription-popup",
        func: "deleteAll"
    },
    {
        sel: ".topline__right",
        func: "deleteChildren"
    },
    {
        sel: ".topline__logo-block",
        func: "css",
        params: {
            "marginLeft": "185px"
        }
    }
]