let rules = [
    {
        sel: "article>div>div>div>div>div>a~div,article>div:nth-last-of-type(2),article>div:nth-last-of-type(1)",
        func: "deleteAll"
    },
    {
        sel: "#app>div>div>div",
        func: "css",
        paramas: {
            "margin": "100px auto"
        }
    }
]