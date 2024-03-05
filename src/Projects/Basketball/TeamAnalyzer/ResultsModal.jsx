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
                  <h1>{userCat.category}</h1>
                  <div>
                    <h1>{userCat.value}</h1>

                    <CustomRadialBarChart
                      userCatValue={userCat.value}
                      categoryName={userCat.category}
                      topValue={top150Cats[index].value}
                      // should correspond to correct category
                      percentile={percentiles[index].percentile}
                      // 156 total players
                      total={156}
                    />
                    <h1>{top150Cats[index].value}</h1>
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
