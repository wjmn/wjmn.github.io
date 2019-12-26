function collectFootnotes() {
    if (screen.width > 1280) {
        var footnotes = document.getElementsByClassName("footnote-ref");
        for (let footnote of footnotes) {
            var id = footnote.hash.substr(1);
            var content = document.getElementById(id);
            var number = footnote.innerHTML

            var newLabel = document.createElement("label");
            newLabel.innerHTML = number;

            var newContent = document.createElement("article");
            newContent.classList.add("aside-content");
            newContent.innerHTML = content.innerHTML;

            var newAside = document.createElement("aside");
            newAside.id = id;
            newAside.classList.add("aside-footnote");
            newAside.appendChild(newLabel);
            newAside.appendChild(newContent);

            footnote.parentNode.insertBefore(newAside, null);
        };
    };
}
