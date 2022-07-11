let rules = [
    {
        sel: ".header_advert,.under,.shareBlock,[data-set-region]",
        func: "deleteAll"
    },
    {
        sel: ".minilogo",
        func: "css",
        params: {
            "padding-left": "125px"
        }
    }
]