// src/pages/GamePage.jsx

import { useParams, useNavigate } from "react-router-dom";
import lessons from "../data/lessons";
import DragDropGame from "../components/game/DragDropGame";
import BackgroundFrame from "../components/BackgroundFrame";
import TopNavigation from "../components/TopNavigation";


export default function GamePage() {
    const { topic, part } = useParams();
    const navigate = useNavigate();

    const lesson = lessons[topic]?.[Number(part)];

    function getOutroPart(lessonTopic) {
        const parts = lessons[lessonTopic];
        if (!parts) return null;

        return Number(
            Object.keys(parts).find((key) => parts[key].outro === true)
        );
    }
    const outroPart = getOutroPart(topic);


    if (!lesson?.game) {
        return <h1>Game not found</h1>;
    }

    return (
        <>
            <BackgroundFrame />
            <TopNavigation />

            <div className="transition-play">
                <DragDropGame
                    game={lesson.game}
                    onFinish={() => {
                        if (outroPart) {
                            navigate(`/content/${topic}/${outroPart}`);
                        }
                    }}
                />
            </div>
        </>
    );
}
