let rules = [
    {
        sel: ".red-menu",
        func: "deleteParent"
    },
    {
        sel: "aside,.menu-holder,.search-holder,.uptl_container-share,.adfox*,footer,.disclame_block,.addthis_inline_share_toolbox",
        func: "deleteAll"
    },
    {
        sel: "nav.navbar",
        func: "css",
        params: {
            "position": "absolute"
        }
    },
    {
        sel: "section > .container > div > :first-child",
        func: "custom",
        params: {
            fn: (selector, kwargs) => {
                document.querySelector(selector).className = 'col-sm-12'
            }
        }
    }
]