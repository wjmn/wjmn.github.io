function collectFootnotes() {
    if (screen.width > 1280) {
        var footrefs = document.getElementsByClassName("footref");
        for (let footref of footrefs) {
            var id = footref.getAttribute("href").substr(1);
            var number = footref.innerText;
            var footnote = document.getElementById(id).parentNode.parentNode;
            var content = footnote.lastChild.innerHTML;

            var newLabel = document.createElement("label");
            newLabel.innerText = number;

            var newContent = document.createElement("div");
            newContent.classList.add("footnote-content");
            newContent.innerHTML = content;

            var newAside = document.createElement("aside");
            newAside.id = id;
            newAside.classList.add("aside-footnote");
            newAside.appendChild(newLabel);
            newAside.appendChild(newContent);

            footref.parentNode.insertBefore(newAside, null);
        };
    };
}
