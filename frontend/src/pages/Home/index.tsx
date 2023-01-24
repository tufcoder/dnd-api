import { useState } from "react";

import { ToggleButtons } from "../../components/ToggleButtons";

import {
  HomeContainer, Modifier, Score, ScoresContainer, ScoreWrapper
} from "./styles";

export function Home() {
  const [data, setData] = useState({
    attributes: [0, 0, 0, 0, 0, 0]
  });

  const getModifierScore = (attribute: number) => {
    if (attribute >= 1 && attribute <= 3) return "-4";
    if (attribute >= 4 && attribute <= 5) return "-3";
    if (attribute >= 6 && attribute <= 7) return "-2";
    if (attribute >= 8 && attribute <= 9) return "-1";
    if (attribute >= 10 && attribute <= 11) return "0";
    if (attribute >= 12 && attribute <= 13) return "+1";
    if (attribute >= 14 && attribute <= 15) return "+2";
    if (attribute >= 16 && attribute <= 17) return "+3";
    if (attribute >= 18 && attribute <= 19) return "+4";
    return "0";
  };

  function handleClickToggleButton(type: string) {
    const body = {
      maximum_attributes: 6,
      minimal_score: 12,
    };

    const payload = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    if (type === "Roll 4D6") {
      fetch("http://localhost:1337/attributes/4d6", payload)
        .then(response => response.json())
        .then(api => setData(api))
        .catch(error => console.log(error));
    }
    else if (type === "Roll 1D10 + 8") {
      fetch("http://localhost:1337/attributes/1d10plus8", payload)
        .then(response => response.json())
        .then(api => setData(api))
        .catch(error => console.log(error));
    }
    else if (type === "Roll 1D8 + 10") {
      fetch("http://localhost:1337/attributes/1d8plus10", payload)
        .then(response => response.json())
        .then(api => setData(api))
        .catch(error => console.log(error));
    }
    else if (type === "Roll 3D6") {
      fetch("http://localhost:1337/attributes/3d6", payload)
        .then(response => response.json())
        .then(api => setData(api))
        .catch(error => console.log(error));
    }
  }

  return (
    <HomeContainer>
      <h1>Ability Scores</h1>
      <div>
        <ScoresContainer>
          {data.attributes && data.attributes.map((attribute, index) => (
            <ScoreWrapper key={index}>
              <Score>{attribute}</Score>
              <Modifier>{getModifierScore(attribute)}</Modifier>
            </ScoreWrapper>
          ))}
        </ScoresContainer>
        <ToggleButtons handleClick={handleClickToggleButton} />
      </div>
    </HomeContainer>
  );
}
