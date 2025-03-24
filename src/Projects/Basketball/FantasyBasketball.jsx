import React, { useState, useEffect, useRef } from "react";
import teamAnalyzerImage from "../../Images/FantasyBball/NbaPlayers.avif";
import schedAnalyzerImage from "../../Images/FantasyBball/NbaSchedule.jpg";
import "./FantasyBasketball.css";
import InvertableButton from "../../Utils/Projects/FantasyBball/InvertableButton";
import { progressiveBackgroundImageLoader } from "../../Utils/ProgressiveLoaders";

const FantasyBasketball = () => {
  const [isScheduleHovered, setIsScheduleHovered] = useState(false);
  const [isTeamHovered, setIsTeamHovered] = useState(false);
  const [isHeaderToFadeIn, setIsHeaderToFadeIn] = useState(false);

  const teamAnalyzerRef = useRef(null);
  const schedAnalyzerRef = useRef(null);

  useEffect(() => {
    return progressiveBackgroundImageLoader(
      teamAnalyzerRef.current,
      teamAnalyzerImage
    );
  }, []);

  useEffect(() => {
    return progressiveBackgroundImageLoader(
      schedAnalyzerRef.current,
      schedAnalyzerImage
    );
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHeaderToFadeIn(true);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="Default-Page">
      <div className="FB-Container">
        <div className={`FB-Header ${isHeaderToFadeIn ? "visible" : ""}`}>
          Fantasy Basketball Hub
        </div>
        <div className="FB-Button-Container">
          <div
            ref={teamAnalyzerRef}
            className={`Hub-Team-Analyzer ${isTeamHovered ? "Hovered" : ""}`}
            onMouseEnter={() => setIsTeamHovered(true)}
            onMouseLeave={() => setIsTeamHovered(false)}
          >
            <InvertableButton
              link="/projects/fantasy-basketball/team-analyzer"
              className="FB-Button"
              isInversionCustom={true}
              name="Team Analyzer"
            />
          </div>

          <div className="Hub-Coming-Soon-Container">
            <div
              ref={schedAnalyzerRef}
              className={`Hub-Schedule-Analyzer Hub-Coming-Soon-Background ${
                isScheduleHovered ? "Hovered" : ""
              }`}
              onMouseEnter={() => setIsScheduleHovered(true)}
              onMouseLeave={() => setIsScheduleHovered(false)}
            >
              <InvertableButton
                link="/projects/fantasy-basketball/schedule-analyzer"
                className="FB-Button"
                isInversionCustom={true}
                name="Schedule Analyzer"
              />
            </div>
            <div className="Hub-Coming-Soon-Overlay">Coming Soon</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FantasyBasketball;
