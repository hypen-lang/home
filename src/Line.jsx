import Marquee from "react-fast-marquee";

export const Line = () => {
    return (
        <div className={"line_parent"}>
            <div className={"line_first"}></div>
            <Marquee className="scrolling_text" speed={"100"}>
                language ‑ browser ‑ framework -
            </Marquee>
            <div className={"line_second"}></div>
            <hr></hr>
        </div>
    )
}
