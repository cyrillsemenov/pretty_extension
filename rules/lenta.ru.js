let rules = [
    {
        sel: ".banner,.rubric-header,.sidebar,.header__center,.header__right,.header__burger,.topic-footer",
        func: "deleteAll"
    },
    {
        sel: ".voiceover,.bookmark,.sharings",
        func: "deleteParent"
    },
    {
        sel: ".topic-page__content",
        func: "css",
        params: {
            "margin-left": "0px"
        }
    },
    {
        sel: "header.header",
        func: "css",
        params: {
            "padding-left": "40px"
        }
    }
]