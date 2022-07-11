function main() {
    const hostname = window.location.hostname;
    console.log(`HOSTNAME = ${window.location.hostname}`);
    rules.forEach((rule) => {
        console.log(rule);
        let selector = fixWildcard(rule.sel);
        let params = rule.params ?? {};
        funcs[rule.func](selector, params);
    })
}

chrome.action.onClicked.addListener((tab) => {
    const url = new URL(tab.url);
    const host = url.host;
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["fix_wildcard.js", "make_editable.js", "functions.js",`rules/${host}.js`]
    },(_) => {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: main
        });
    });
    
    console.log(tab)
    // if(!tab.url.includes("chrome://")) {
    //     chrome.scripting.executeScript({
    //         target: { tabId: tab.id },
    //         function: main
    //     });
    // }
});