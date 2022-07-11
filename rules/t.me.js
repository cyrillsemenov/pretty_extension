if (window.location.search == "?embed=true") {
    rules = [
        {
            sel: "body",
            func: "css",
            params: {
                "margin-top": "100px"
            }
        },
        {
            sel: ".tgme_widget_message_views",
            func: "deleteAll"
        }
    ]
} else {
    window.location.href=window.location.href+"?embed=true";
}