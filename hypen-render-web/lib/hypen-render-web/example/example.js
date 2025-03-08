import {parseHypen} from "../dist/bundle.js";
import {renderHypen} from "../dist/bundle.js";

document.addEventListener('MonacoUpdated', (event) => {
    let data = event.detail.currentContent
    parseHypen(data, (data)=>{
        renderHypen(data.output)
    }, (error) => {
        console.log("Got error", error)
    })

});
