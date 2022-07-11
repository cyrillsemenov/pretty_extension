function enterKeyPressHandler(e) {
    let sel, range, br, addedBr = false;
    evt = e || window.event;
    if (e.keyCode == 13) {
        if (typeof window.getSelection != "undefined") {
            sel = window.getSelection();
            if (sel.getRangeAt && sel.rangeCount) {
                range = sel.getRangeAt(0);
                range.deleteContents();
                br = document.createElement("br");
                range.insertNode(br);
                range.setEndAfter(br);
                range.setStartAfter(br);
                sel.removeAllRanges();
                sel.addRange(range);
                e.preventDefault();
            }
        } else if (typeof document.selection != "undefined") {
            sel = document.selection;
            if (sel.createRange) {
                range = sel.createRange();
                range.pasteHTML("<br>");
                range.select();
                e.preventDefault();
            }
        }
    }
}

function selectionHandler (e) {
	let span = document.createElement("span");
    span.style.backgroundColor = "yellow";

    if (window.getSelection) {
        let selection = window.getSelection();
        if (selection.toString() !== "") {
            let range = selection.getRangeAt(0).cloneRange();
            let cmd = (e) => {
	    		if (e.keyCode == 91) {
	    			window.addEventListener("keydown", h, { once: true });
	    		}
			};
			let h = (e) => {
				e.preventDefault();
				if (e.keyCode == 72) {
		            range.surroundContents(span);
		            selection.removeAllRanges();
		            selection.addRange(range);
		            span.addEventListener("click", (e) => {
    					span.replaceWith(...span.childNodes);
		            }, { once: true })
				};
			};
            
            window.addEventListener("keydown", cmd, { once: true });
        }
    }
}

document.body.addEventListener("keypress", enterKeyPressHandler, false);
document.body.addEventListener("mouseup", selectionHandler, false);
document.body.contentEditable = true;
document.body.spellcheck = false;