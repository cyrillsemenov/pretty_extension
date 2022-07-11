let rules = [
    {
        sel: ".nav-line-wrapper--bottom, .nav-top-line__list-wrapper, iframe, .columns-layout__left, .branding_dfp__sitewrap, .top-ad, .social-share",
        func: "deleteAll"
    },
    {
        sel: "#branding-layout",
        func: "css",
        params: {
            "padding-top": "0"
        }
    },
    {
        sel: ".main-nav",
        func: "css",
        params: {
            "height": "auto"
        }
    },
    {
        sel: ".main-wrap",
        func: "css",
        params: {
            "padding-top": "40px",
            "padding-left": "40px"
        }
    }
]