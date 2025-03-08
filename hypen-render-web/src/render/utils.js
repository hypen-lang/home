
export function findComponentInParent (component, idToFind) {
    const res = component.childrenArray.find((it) => it.id === idToFind)
    if (typeof res === 'undefined') {
        return component.childrenArray.map((it) => findComponentInParent(it, idToFind)).find((it) => notUndefined(it))
    } else {
        return {
            result: res,
            parent: component.id
        }
    }
}

export function removeChildrenIfEmpty (item) {
    if (!isUndefined(item.childrenArray) && item.childrenArray.length === 0) {
        delete item.childrenArray
        delete item.children
    } else if (!isUndefined(item.childrenArray)) {
        console.log(item.childrenArray)
        item.children = item.childrenArray.map((it) => {
            return removeChildrenIfEmpty(it)
        })
    }
    return item
}

// Serves for text generating
const startupy = ['active', 'arc', 'auto', 'app', 'avi', 'base', 'co', 'con', 'core', 'clear', 'en', 'echo', 'even', 'ever', 'fair', 'go', 'high', 'hyper', 'in', 'inter', 'iso', 'jump', 'live', 'make', 'mass', 'meta', 'matter', 'omni', 'on', 'one', 'open', 'over', 'out', 're', 'real', 'peak', 'pure', 'shift', 'silver', 'solid', 'spark', 'start', 'true', 'up', 'vibe']
const o = ['arc', 'atlas', 'base', 'bay', 'boost', 'capsule', 'case', 'center', 'cast', 'click', 'dash', 'deck', 'dock', 'dot', 'drop', 'engine', 'flow', 'glow', 'grid', 'gram', 'graph', 'hub', 'focus', 'kit', 'lab', 'level', 'layer', 'light', 'line', 'logic', 'load', 'loop', 'ment', 'method', 'mode', 'mark', 'ness', 'now', 'pass', 'port', 'post', 'press', 'push', 'rise', 'scape', 'scale', 'scan', 'scout', 'sense', 'set', 'shift', 'ship', 'side', 'signal', 'snap', 'scope', 'space', 'span', 'spark', 'spot', 'start', 'storm', 'stripe', 'sync', 'tap', 'tilt', 'ture', 'type', 'view', 'verge', 'vibe', 'ware', 'yard', 'up']
const a = ['.', '-', 'ary', 'able', 'ance', 'ible', 'ice', 'ite', 'er', 'eon', 'ent', 'ful', 'gent', 'tion', 'sion']
const d = ['.', '-', 'X', 'Live', 'Xtreme', 'Space', 'XYZ', 'astic']
const config = {
    dictionaries: [startupy, o, a, d],
    length: 3,
    separator: '',
    style: 'capital'
}


export function formatDate (date) {
    let dd = date.getDate()
    let mm = date.getMonth() + 1
    const yyyy = date.getFullYear()
    if (dd < 10) { dd = '0' + dd }
    if (mm < 10) { mm = '0' + mm }
    date = dd + '.' + mm + '.' + yyyy
    return date
}

export function capitalizeFirstLetter (string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

// custom html diffing
export const diffHtml = function (newElement, oldElement, depth) {
    // Get arrays of child nodes
    const oldNodes = Array.prototype.slice.call(oldElement.childNodes)
    const newNodes = Array.prototype.slice.call(newElement.childNodes)

    // If extra elements in DOM, remove them
    let count = oldNodes.length - newNodes.length
    if (count > 0) {
        for (; count > 0; count--) {
            oldNodes[oldNodes.length - count].parentNode.removeChild(oldNodes[oldNodes.length - count])
        }
    }

    newNodes.forEach(function (node, index) {
        // If element doesn't exist, create it
        if (!oldNodes[index]) {
            oldElement.appendChild(node.cloneNode(true))
            return
        }
        // If element is not the same type, replace element
        if (getNodeType(node) !== getNodeType(oldNodes[index])) {
            oldNodes[index].parentNode.replaceChild(node.cloneNode(true), oldNodes[index])
            return
        }
        console.log('Old style for id:' + node)
        console.log(oldNodes[index].style)
        console.log('New style:')
        console.log(node.style)

        if (node.style !== oldNodes[index].style) {
            console.log('replacing style')
            oldNodes[index].style = node.style
        } else {
            console.log('not replacing style')
        }

        if (node.className !== oldNodes[index].className) {
            oldNodes[index].className = node.className
        }

        const oldContent = getNodeContent(node)
        if (oldContent && oldContent !== getNodeContent(oldNodes[index])) {
            oldNodes[index].textContent = oldContent
        }

        // If target element should be empty, wipe it
        if (oldNodes[index].childNodes.length > 0 && node.childNodes.length < 1) {
            oldNodes[index].innerHTML = ''
            return
        }

        // replace the node
        if (oldNodes[index].childNodes.length < 1 && node.childNodes.length > 0) {
            const fragment = document.createDocumentFragment()
            diffHtml(node, fragment, depth + 1)
            oldNodes[index].appendChild(fragment)
            return
        }

        if (node.childNodes.length > 0) {
            diffHtml(node, oldNodes[index], depth + 1)
        }
    })
}

const getNodeContent = function (node) {
    if (node.childNodes && node.childNodes.length > 0) return null
    return node.textContent
}

const getNodeType = function (node) {
    if (node.nodeType === 3) return 'text'
    if (node.nodeType === 8) return 'comment'
    return node.tagName.toLowerCase()
}

export function notUndefined (it) {
    return typeof it !== 'undefined'
}

export function isUndefined (it) {
    return typeof it === 'undefined'
}

export function randomColor () {
    return CSS_COLOR_NAMES[Math.floor(Math.random() * CSS_COLOR_NAMES.length)]
}

// CSS Color Names
// Compiled by @bobspace.
//
// A javascript array containing all of the color names listed in the CSS Spec.
// The full list can be found here: https://www.w3schools.com/cssref/css_colors.asp
// Use it as you please, 'cuz you can't, like, own a color, man.

const CSS_COLOR_NAMES = [
    'AliceBlue',
    'Aqua',
    'Aquamarine',
    'Azure',
    'Blue',
    'BlueViolet',
    'Chartreuse',
    'Chocolate',
    'Coral',
    'Crimson',
    'Cyan',
    'DarkCyan',
    'DarkGreen',
    'DarkMagenta',
    'DarkOrange',
    'DarkOrchid',
    'DarkRed',
    'DarkSlateBlue',
    'DarkTurquoise',
    'DarkViolet',
    'DeepPink',
    'DeepSkyBlue',
    'DodgerBlue',
    'ForestGreen',
    'Fuchsia',
    'Gold',
    'GoldenRod',
    'Green',
    'GreenYellow',
    'HotPink',
    'IndianRed',
    'Indigo',
    'Ivory',
    'LawnGreen',
    'LightCoral',
    'Lime',
    'LimeGreen',
    'Magenta',
    'MediumAquaMarine',
    'MediumBlue',
    'MediumOrchid',
    'MediumPurple',
    'MediumSeaGreen',
    'MediumSlateBlue',
    'MediumSpringGreen',
    'MediumTurquoise',
    'MediumVioletRed',
    'Navy',
    'Orange',
    'OrangeRed',
    'Orchid',
    'PaleGreen',
    'PaleTurquoise',
    'PaleVioletRed',
    'Plum',
    'PowderBlue',
    'Purple',
    'RebeccaPurple',
    'Red',
    'RosyBrown',
    'RoyalBlue',
    'Salmon',
    'SeaGreen',
    'SkyBlue',
    'SlateBlue',
    'SpringGreen',
    'SteelBlue',
    'Teal',
    'Thistle',
    'Tomato',
    'Turquoise',
    'Violet',
    'Yellow',
    'YellowGreen'
]
