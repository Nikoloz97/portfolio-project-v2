import React, { useState, useEffect } from "react";
import { Form, Button, Modal } from "semantic-ui-react";

import {
  populateAverageUserCategories,
  populateTop150Cats,
  populatePercentiles,
} from "../../../Utils/Projects/FantasyBball/TeamAnalyzer";
import CustomRadialBarChart from "../../../Utils/General/CustomRadialBarChart";
import "./TeamAnalyzer.css";

export default function ResultsModal(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userCats, setUserCats] = useState([]);
  const [top150Cats, setTop150Cats] = useState([]);
  const [percentiles, setPercentiles] = useState([]);
  const [
    arePercentilesFinishedCalculating,
    setArePercentilesFinishedCalculating,
  ] = useState(false);

  useEffect(() => {
    if (percentiles.length > 0) {
      setArePercentilesFinishedCalculating(true);
    }
  }, [percentiles]);

  useEffect(() => {
    if (userCats.length > 0) {
      setPercentiles(populatePercentiles(userCats));
    }
  }, [userCats]);

  useEffect(() => {
    if (isModalOpen) {
      setUserCats(populateAverageUserCategories(props.selectedPlayers));
      setTop150Cats(populateTop150Cats);
    }
  }, [isModalOpen]);

  return (
    <div
      className={`Team-Analyzer-Results-Modal-Container ${
        props.playerIndex === props.selectedPlayers.length - 1 &&
        props.selectedPlayer.isPlayerChosen
          ? "Unhide"
          : // : ""
            // TODO: remove (+ uncomment above)
            "Unhide"
      }`}
    >
      <Modal
        onOpen={() => setIsModalOpen(true)}
        open={isModalOpen}
        trigger={<Form.Button>Show Results</Form.Button>}
      >
        <h1 style={{ textAlign: "center" }}>Results</h1>

        <Modal.Content>
          {arePercentilesFinishedCalculating && (
            <div className="Results-Container">
              {userCats.map((userCat, index) => (
                <div key={index} className="Results-Category-Container">
                  <h1 className="Results-Category-Header">
                    {userCat.category}
                  </h1>
                  <div className="Results-Averages-Percentile-Container">
                    <div className="Results-Averages-Container">
                      <h4>Averages</h4>
                      <div className="Results-Averages-Grid">
                        <div className="Results-Averages-Column">
                          <h4>User</h4>
                          <p style={{ marginBottom: "0px" }}>{userCat.value}</p>
                        </div>
                        <div className="Results-Averages-Column">
                          <h4>Top-156</h4>
                          <p style={{ marginTop: "0px" }}>
                            {top150Cats[index].value}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="Percentile-Chart-Container">
                      <div className="Percentile-Chart-Header">
                        <h4>Percentile</h4>
                      </div>
                      <CustomRadialBarChart
                        userCatValue={userCat.value}
                        categoryName={userCat.category}
                        topValue={top150Cats[index].value}
                        percentile={percentiles[index].percentile}
                        // 156 total players
                        total={156}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Modal.Content>

        <Modal.Actions style={{ textAlign: "center" }}>
          <Button
            inverted
            content="Return"
            onClick={() => setIsModalOpen(false)}
          />
        </Modal.Actions>
      </Modal>
    </div>
  );
}
