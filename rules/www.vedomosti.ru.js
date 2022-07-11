let rules = [
    {
        sel: ".the-sidebar,#adfox*,.article-share,.article-tools*,.article-recommendation,.popular-mobile,.article__metrics,.subscription-placeholders,.the-projects,.the-header__progress,footer,script",
        func: "deleteAll"
    },
    {
        sel: ".the-header__toolbar",
        func: "deleteChildren"
    },
    {
        sel: ".layout__container",
        func: "css",
        params: {
            "paddingLeft": "0",
            "maxWidth": "100%"
        }
    },
    {
        sel: ".the-header",
        func: "css",
        params: {
            "top":"0",
            "position": "unset"
        }
    }
]