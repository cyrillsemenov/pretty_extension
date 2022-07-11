let rules = [
    {
        sel: ".adsContainer,#navMain,#navPath,#navMeta,#search,#sharing-bar,.photo_source,.profile-info>div>.row,#footerSection",
        func: "deleteAll"
    },
    {
        sel: "#navContainer",
        func: "css",
        params: {
            "minHeight": "0"
        }
    }
]