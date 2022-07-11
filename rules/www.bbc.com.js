let rules = [
    {
        sel: "nav[role='navigation'],section[data-e2e='related-content-heading'],footer",
        func: "deleteAll"
    },
    {
        sel: "section[role='region'],aside[aria-labelledby='related-topics'],section[data-e2e='features-analysis-heading'],section[data-e2e='top-stories-heading'],div[data-e2e='media-player']",
        func: "deleteParent"
    }
]