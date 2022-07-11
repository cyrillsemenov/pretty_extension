let rules = [
    {
        sel: ".modal,.modal-backdrop,.js-modal,.alert,script,.fire-popup,.main_menu,.lang_switcher,.auth,.person-new__breadcrumbs,.btn,.form-group,.person-banner,.footer",
        func: "deleteAll"
    },
    {
        sel: ".header",
        func: "css",
        params: {
            position: "relative !important"
        }
    },
    {
        sel: ".page_body",
        func: "css",
        params: {
            width: "100%"
        }
    }
]