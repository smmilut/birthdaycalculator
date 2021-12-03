/** Collapse the next element after the "clickcollapse" */
function collapseClicked(event) {
    const clickCollapseEl = event.target;
    const collapsableEl = clickCollapseEl.nextElementSibling;
    const isCollapsed = collapsableEl.classList.contains("collapsed");
    // toggle collapsed state
    if (isCollapsed) {
        uncollapse(collapsableEl, clickCollapseEl);
    } else {
        collapse(collapsableEl, clickCollapseEl);
    }
}

function collapse(collapsableEl, clickCollapseEl) {
    collapsableEl.classList.add("collapsed");
    clickCollapseEl.classList.add("clicktouncollapse");
    clickCollapseEl.classList.remove("clicktocollapse");
}

function uncollapse(collapsableEl, clickCollapseEl) {
    collapsableEl.classList.remove("collapsed");
    clickCollapseEl.classList.add("clicktocollapse");
    clickCollapseEl.classList.remove("clicktouncollapse");
}

/** Initialize all collapsable elements */
export function init() {
    const allClickCollapse = document.getElementsByClassName("clickcollapse");
    for (let elementIndex = 0; elementIndex < allClickCollapse.length; elementIndex++) {
        const clickCollapseEl = allClickCollapse[elementIndex];
        clickCollapseEl.addEventListener("click", collapseClicked, false);
    }
}
