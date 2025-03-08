import { mapApplicatorsToStyle } from '@/core/applicatorToCssMapping'
import { isUndefined } from '@/core/utils'

const app = require("../hypen-kotlin/kotlin/hypen-kotlin.js")
let parser = new app.HypenParser()
// this creates components for preview
export function createHTMLFromComponent (component, parentComponent, focusedNode, assets) {

    let createdNode
    if (component.name !== undefined && component.name !== null) {
        switch (component.name.toLowerCase()) {
            case 'list':
                // eslint-disable-next-line no-case-declarations
                // eslint-disable-next-line no-case-declarations
                let listDirection = component.arguments.argFor('direction', 1)
                // eslint-disable-next-line no-case-declarations
                const gap = component.arguments.argFor('gap', 2)
                if (isUndefined(listDirection) || listDirection == null) {
                    listDirection = 'vertical'
                }
                if (listDirection === 'vertical') {
                    createdNode = document.createElement('vstack')
                    createdNode.classList.add('vstack')
                } else {
                    createdNode = document.createElement('hstack')
                    createdNode.classList.add('hstack')
                }
                createdNode.style.gap = gap
                createdNode.style.flexWrap = 'nowrap'
                createdNode.style.whiteSpace = 'wrap'
                createdNode.style.overflow = 'scroll'
                createdNode.style.scrollHeight = 'none'
                createdNode.style.scrollWidth = 'none'
                break
            case 'column':
                createdNode = document.createElement('vstack')
                createdNode.classList.add('vstack')
                break
            case 'center':
                createdNode = document.createElement('vstack')
                createdNode.classList.add('vstack')
                break
            case 'row':
                createdNode = document.createElement('hstack')
                createdNode.classList.add('hstack')
                break
            case 'text':
                createdNode = document.createElement('div')
                var txt = component.arguments.argFor('text', 0)
                if (txt[0] === '"') { txt = txt.substring(1, txt.length - 1) }
                var tNode = document.createTextNode(txt)
                createdNode.style.inlineSize = 'max-content'
                createdNode.style.width = 'max-content'
                createdNode.style.color = 'black'
                createdNode.appendChild(tNode)
                break
            case 'image':
                createdNode = document.createElement('img')
                var src = component.arguments.argFor('url', 0)
                if (src[0] === '@') {
                    const name = src.substring(8, src.length)
                    createdNode.src = assets[name].link
                } else if (src.length > 5 && src.substring(0, 5) === 'item.') {
                    createdNode.src = 'https://picsum.photos/100/100'
                } else {
                    createdNode.src = src.substring(1, src.length - 1)
                }
                break
            case 'box':
                createdNode = document.createElement('div')
                break
            case 'root':
                createdNode = document.createElement('div')
                createdNode.style.height = '100%'
                break
            case 'styleBox':
                createdNode = document.createElement('div')
                createdNode.style.height = '200px'
                createdNode.style.width = '200px'
                break

            case 'stack':
                createdNode = document.createElement('div')
                break
            case 'spacer':
                createdNode = document.createElement('spacer')
                break
            default:
                createdNode = document.createElement('div')
                break
        }
        createdNode.id = component.metaData.internalId
        createdNode.style.userSelect = 'none'

        if (!isComponentAContainer(component.name)) {
            createdNode.className = 'drop'
            createdNode.classList.add('drop')
        }
        createdNode.ondragover = (ev) => {
            ev.preventDefault()
            if (isComponentAContainer(component.name)) {
                ev.dataTransfer.dropEffect = 'copy'
            }
        }
        let count = 0
        createdNode.ondragenter = (ev) => {
            let parent
            if (isComponentAContainer(component.name)) {
                parent = document.getElementById(createdNode.id)
            } else {
                parent =
                    document.getElementById(createdNode.id).parentElement
            }
            if (count === 0) {
                document.getElementsByClassName('dropHoveringAvaliable').forEach((it) => {
                    it.classList.remove('dropHoveringAvaliable')
                })
            }
            count++
            parent.classList.add('dropHoveringAvaliable')
            /*
              const tempStub = document.getElementById('stub')
              if (tempStub != null) { tempStub.remove() }
              const stub = document.createElement('div')
              stub.style.width = '10px'
              stub.style.height = '50px'
              stub.style.border = '2px solid aquamarine'
              stub.id = 'stub'
              parent.insertBefore(stub, document.getElementById(comp.id).children[0])
               */
        }
        createdNode.ondragleave = (ev) => {
            count--
            let parent
            if (isComponentAContainer(component.name)) {
                parent = createdNode
            } else {
                parent =
                    document.getElementById(createdNode.id).parentElement
            }
            if (count === 0) {
                parent.classList.remove('dropHoveringAvaliable')
            }
            /*
              const tempStub = document.getElementById('stub')
              if (tempStub != null) { tempStub.remove() } */
        }


        createdNode = mapApplicatorsToStyle(component, parentComponent, createdNode)

        if (component.name === 'StyleBox') {
            createdNode.style.height = '100%'
            createdNode.style.width = '200px'
        }

        if (component.metaData.internalId !== null && focusedNode === component.metaData.internalId) {
            createdNode.style.borderColor = 'rgba(0,255,225,0.87)'
            createdNode.style.borderStyle = 'solid'
        } else if (component.name !== 'root') {
            // const border = comp.style.border
            createdNode.onmouseover = function (e) {
                e.target.classList.add('inFocus')
            }
            createdNode.onmouseout = function (e) {
                e.target.classList.remove('inFocus')
            }
        }

        const kids = Array.from(component.childrenArray)
            .map((it) => createHTMLFromComponent(it, parentComponent, focusedNode, assets))
        kids.forEach((it) => {
            if (it !== undefined) {
                createdNode.appendChild(it)
            }
        })
        if (component.name.toLowerCase() === 'list') {
            kids.push(...kids)
            kids.push(...kids)
            kids.forEach((it) => {
                if (it !== undefined) {
                    createdNode.appendChild(it.cloneNode(true))
                }
            })
        }

        return createdNode
    } else { return undefined }
}

export function dropTextForComponent (compName) {
    switch (compName.toLowerCase()) {
        case 'column':
            return ' Column { }'
        case 'row':
            return ' Row { }'
        case 'center':
            return ' Center { }'
        case 'box':
            return ' Box { }'
        case 'inset':
            return ' Inset { }'
        case 'list':
            return ' List { }'
        case 'text':
            return ' Text("Value")'
        case 'image':
            return ' Image("https://")'
        default:
            return ''
    }
}

export function isComponentAContainer (compName) {
    switch (compName.toLowerCase()) {
        case 'column':
        case 'row':
        case 'center':
        case 'root':
        case 'box':
        case 'inset':
        case 'list':
            return true
        default:
            return false
    }
}
