# Pretty Chrome extension makes some sites looks better
This is my work tool, which I use to take screenshots of some news sites.

### Installation
Feel free to check out this pretty link https://developer.chrome.com/docs/extensions/mv3/getstarted/

### Rules
The rules are stored in `/rules/` directory and are named after `window.location.hostname`.

`somesite.com.js` should look like this:
```javascript
rules = [
    {
        sel: "here is your CSS selector (https://www.w3schools.com/cssref/css_selectors.asp)",
        func: "deleteAll", // | "deleteFirst" | "deleteChildren" | "deleteParent" | "css" | "custom"
        params: {
            "fn": (selector, kwargs) => {
                console.log("In case of custom function other params of rule will be passed to it as object 'kwargs'")
            },
            "any-css-parameter": "for-example"
        }
    },
    ...
]
```

### Killer-feature
Killer-feature is that you can use wildcard in your selectors (with ids and classes). This script will fix it.

For example `.class-*-name` will be converted to `[class^="class-"][class$="-name"]`.

So your rules will remain well readable.

### Why write your own?
Really, I shouldn't have to. And I'm really sorry.
I used to use script in wonderful [User JavaScript and CSS](https://chrome.google.com/webstore/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld) by Dmitry Novikov.
Other tools didn't meet my requirements (obviously blah-blah-blah)

But I just needed an easy way to share my tool with colleagues.

### Contribution
Contributions are highly acceptable and very welcome. We have a lot of sites without rules and we want them to look better on screenshots. Even if the news doesn't age very well.

<br/><br/><br/><br/>
## Нет войне и свободу Алексею Навальному!
