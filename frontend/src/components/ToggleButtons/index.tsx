import { useState } from "react";

import { ButtonContainer, ButtonToggle } from "./styles";

enum Rules {
  "Roll 4D6",
  "Roll 1D10 + 8",
  "Roll 1D8 + 10",
  "Roll 3D6",
}

type ButtonTypes = keyof typeof Rules;

interface ToggleButtonsProps {
  handleClick: (type: string) => void;
}

export function ToggleButtons({ handleClick }: ToggleButtonsProps) {
  const [active, setActive] = useState("");

  const buttonTypes: ButtonTypes[] = ["Roll 4D6", "Roll 1D10 + 8", "Roll 1D8 + 10", "Roll 3D6"];

  function onClickToggleButton(type: string) {
    setActive(type);
    handleClick(type);
  }

  return (
    <ButtonContainer>
      {buttonTypes.map(type => (
        <ButtonToggle
          key={type}
          active={active === type}
          onClick={() => onClickToggleButton(type)}
        >
          {type}
        </ButtonToggle>
      ))}
    </ButtonContainer>
  );
}
