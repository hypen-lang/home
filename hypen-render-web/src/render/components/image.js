const {mapApplicatorsToStyle, valueFromArgument} = require("../applicatorToCssMapping");
const Hypen = (require('../../hypen-kotlin/kotlin/hypen-kotlin.js').space.hypen.parser.combinators)

function render(instance, parent){
    console.assert(instance instanceof Hypen.ComponentUsage)
    console.assert(instance.name.text.toLowerCase() === "image")

    const url = valueFromArgument(instance.arguments.argFor('url', 0))
    const image = document.createElement('img')
    image.src = url

    mapApplicatorsToStyle(instance, parent, image)
    return image
}

module.exports = {
    renderImage: render
}
