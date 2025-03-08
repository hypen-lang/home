const {mapApplicatorsToStyle} = require("../applicatorToCssMapping");
const Hypen = (require('../../hypen-kotlin/kotlin/hypen-kotlin.js').space.hypen.parser.combinators)

function render(instance, parent, renderChildren){
    console.assert(instance instanceof Hypen.ComponentUsage)
    console.assert(instance.name.text.toLowerCase() === "center")

    const center = document.createElement('div')
    center.classList.add('center')

    // CSS to center content
    center.style.display = 'flex'
    center.style.justifyContent = 'center'
    center.style.alignItems = 'center'

    let kids = renderChildren(instance.block, parent)
    kids.forEach((child) => {
        center.appendChild(child)
    })

    mapApplicatorsToStyle(instance, parent, center)
    return center
}

module.exports = {
    renderCenter: render
}
