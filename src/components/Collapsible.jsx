import {ApplicatorDocs} from "../dev/ApplicatorDocs";
import Collapsible from "react-collapsible";

export const CollapsableDocs = () => {
    return (
        <Collapsible trigger={"See docs"}>
            <ApplicatorDocs></ApplicatorDocs>
        </Collapsible>
    )
}
