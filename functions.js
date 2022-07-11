function forAll (selector, fn) {
    let collection = document.querySelectorAll(selector) || [];
    collection.forEach(fn);
}

funcs = {
    deleteAll: (selector, params) => {
        forAll(selector, e => e.remove())
    },
    deleteFirst: (selector, params) => {
        let el = document.querySelector(selector);
        if (el) {el.remove()}
    },
    deleteChildren: (selector, params) => {
        forAll(selector, e => [...e.children].forEach(c => c.remove()))
    },
    deleteParent: (selector, params) => {
        forAll(selector, e => e.parentElement.remove())
    },
    css: (selector, params) => {
        let style = Object.entries(params);
        forAll(selector, e => {
            style.forEach(s => {
                e.style[s[0]] = s[1]
            })
        })
    },
    custom: (selector, params) => {
        const { fn, ...kwargs } = params
        params.fn(selector, kwargs)
    }
}   