import React, { useState, useEffect } from "react";
import { Form, Button, Modal } from "semantic-ui-react";
import {
  populateAverageUserCategories,
  populateTop150Cats,
} from "../../../Utils/Projects/FantasyBball/TeamAnalyzer";

import "./TeamAnalyzer.css";

export default function ResultsModal(props) {
  const [open, setOpen] = useState(false);

  const [userCats, setUserCats] = useState([]);

  const [top150Cats, setTop150Cats] = useState([]);

  useEffect(() => {
    if (open) {
      setUserCats(populateAverageUserCategories(props.selectedPlayers));
      setTop150Cats(populateTop150Cats);
    }
  }, [open]);

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
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Form.Button>Show Results</Form.Button>}
      >
        <h1 style={{ textAlign: "center" }}>Results</h1>

        <Modal.Content>
          <div className="Results-Container">
            {userCats.map((userCat, index) => (
              <div key={index} className="Results-Category-Container">
                <h1>{userCat.category}</h1>
                <div>
                  <h1>{userCat.value}</h1>
                  <h1>Percentile Placeholder</h1>
                  <h1>{top150Cats[index].value}</h1>
                </div>
              </div>
            ))}
          </div>
        </Modal.Content>

        <Modal.Actions style={{ textAlign: "center" }}>
          <Button inverted content="Return" onClick={() => setOpen(false)} />
        </Modal.Actions>
      </Modal>
    </div>
  );
}
