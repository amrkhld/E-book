import topFrame from "../assets/shapes/top_frame.svg";
import bottomRightFrame from "../assets/shapes/bottom-right_frame.svg";
import "./BackgroundFrame.css"

export default function BackgroundFrame() {
    return (
        <>
            <img src={topFrame} className="top-frame" alt="" />
            <img src={bottomRightFrame} className="bottom-right-frame" alt="" />
        </>
    );
}