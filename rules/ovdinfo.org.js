let rules = [
    {
        sel: "#call-and-donate, #header-links, #social-column, .magiccolumns-outer .right",
        func: "deleteAll"
    },
    {
        sel: "header",
        func: "css",
        params: {
            "height": "auto"
        }
    },
    {
        sel: "#logo > a > img",
        func: "css",
        params: {
            "width": "auto",
            "height": "40px"
        }
    },
    {
        sel: "#slogan",
        func: "css",
        params: {
            "margin-top": "3px",
            "line-height": "12px",
            "line-height": "12px",
            "font-size": "10px"
        }
    },
    {
        sel: "#logo-and-slogan",
        func: "css",
        params: {
            "height": "45px",
            "padding": "7px 0 8px 45px"
        }
    }
]



