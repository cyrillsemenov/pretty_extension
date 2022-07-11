const split_ptn = /(?<!\[[^\]]+) ?([, >+~]) ?/gm,
    element_ptn = /^(?<!^\.#\[:)([\w*]+)/gm,
    id_ptn = /#([\w-*]+)/gm,
    class_ptn = /\.([\w-*]+)/gm,
    attribute_ptn = /\[([\w-]+)([~|^$*]?=)?([\w-]+)?\]/gm;

    function cssSplit(str) {
        elements = str.split(split_ptn)
            return elements.flatMap((el) => {
            let delimiter = el.match(split_ptn)
            let element = el.match(element_ptn);
            let id = el.match(id_ptn);
            let classes = el.match(class_ptn);
            let attributes = el.match(attribute_ptn);
            return [delimiter, element, id, classes, attributes].flat().filter(Boolean)
        })
    }

    function generateAttribute(str, attr) {
        let splittedStr = str.split("*").filter(Boolean)
        return splittedStr.map((e, i) => {
            let pos = "*";
            if (i == 0 && !str.startsWith("*")) {
                pos = "^"
            } else if (i == splittedStr.length-1 && !str.endsWith("*")) {
                pos = "$"
            }
            return `[${attr}${pos}=${e}]`
        })
    }

    function fixWildcard(selector) {
        if (!selector.includes("*")) {
            return selector
        }
        return cssSplit(selector).flatMap((str) => {
            if (!str.includes("*")) {
                return str
            }
            switch(str[0]) {
                case ".":
                    return generateAttribute(str.substring(1), "class")
                case "#":
                    return generateAttribute(str.substring(1), "id")
                default:
                    return str
            }
        }).join("")
    }