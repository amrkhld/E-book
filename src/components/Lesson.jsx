// src/components/Lesson.jsx

import { useNavigate } from 'react-router-dom';
import dropletNote from '../assets/general/droplet_note.gif'


import "./lesson.css";

const Lesson = ({
    lessonNumber = 1,
    title,
    question,
    definition,
    note,
    illustrationContent = null,
    videoContent = null,
    outro,
    topic,
    part
}) => {

    const navigate = useNavigate();

    if (outro) {
        return (
            <>
                <section className="outro-container transition-play">

                    <div className="outro-left">
                        <h1 className='link-shake' style={{ cursor: "default" }}>🎉 Great Job!</h1>
                        <p style={{ color: "#ff3d00" }}>
                            You’ve completed this lesson successfully.
                        </p>
                        <button className='btn orange-btn pop'
                            onClick={() => navigate(`/content/${topic}/${part}/game`)}
                        >
                            Play a Game
                        </button>

                        <button
                            className="btn purple-btn pop"
                            onClick={() => navigate(`/content/${topic}/quiz`)}
                        >
                            Take a Quiz
                        </button>


                    </div>


                    <div className="outro-right">
                        <div className="outro-gif-frame ">
                            {illustrationContent}
                        </div>
                    </div>
                </section>
            </>
        );
    }

    return (
        <div className="lesson-container transition-play">
            <header className="lesson-header">
                <h1 className="lesson-number">Lesson {lessonNumber}</h1>
                <h1 className="lesson-title">{title}</h1>
            </header>

            <main className="lesson-main">
                <div className="left-main">
                    <h2>{question}</h2>
                    <p>{definition}</p>
                </div>

                <div className="right-main">
                    <div className={`content-frame ${!illustrationContent ? "video-content" : ""}`}>{illustrationContent ? illustrationContent : videoContent}</div>
                </div>
            </main >

            <div className="lesson-note">
                <div className="note-image">
                    <img src={dropletNote} alt="" />
                </div>
                <p>{note}</p>
            </div>
        </div>
    );
};

export default Lesson;