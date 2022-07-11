let rules = [
    {
        sel: ".Header-menuToggle,.Header-buttons,.Header-nav,.SaveMeduza-root,.Layout-bannerTop,.AdvPanel-root,.UnderTheSun-root,.Layout-footer,.GDPRPanel-root,[data-testid='related-rich-block'],[data-testid='toolbar'],#div-gpt-ad",
        func: "deleteAll"
    },
    {
        sel: ".GeneralMaterial-head",
        func: "css",
        params: {
            "alignItems": "center"
        }
    }
]