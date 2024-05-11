import React, { useEffect, useState } from "react";
import { Mode } from "../model/mode";
import { Character, hiraganas, katakanas } from "../lib/character-data";
import { getRandomElement } from "../lib/utils";
import Problem from "./start/Problem";
import Answer from "./start/Answer";
import { clsx } from "clsx";

const getRandomHiraKana = (character: string): Character => {
  if (character === "hiragana") {
    return getRandomElement([...hiraganas]);
  } else if (character === "katakana") {
    return getRandomElement([...katakanas]);
  } else {
    return getRandomElement([...hiraganas, ...katakanas]);
  }
};

interface Props extends Mode {}
const Start = ({ isAuto, time, character }: Props) => {
  const [randomCharacter, setRandomCharacter] = useState<Character>(() =>
    getRandomHiraKana(character)
  );
  const [showAnswer, setShowAnswer] = useState(false);
  const [timeoutId, setTimeoutId] = useState<number[]>([]);

  useEffect(() => {
    if (isAuto && showAnswer) {
      const localTimeoutId = setTimeout(() => {
        setShowAnswer(false);
        setRandomCharacter(getRandomHiraKana(character));
      }, 1000);
      setTimeoutId([...timeoutId, localTimeoutId]);
    } else if (isAuto && !showAnswer) {
      const localTimeoutId = setTimeout(() => {
        setShowAnswer(true);
      }, time * 1000);
      setTimeoutId([...timeoutId, localTimeoutId]);
    } else {
      timeoutId.forEach((id) => clearTimeout(id));
    }
  }, [showAnswer, isAuto]);

  const handleClickMain = () => {
    if (isAuto) return;
    if (showAnswer) {
      setShowAnswer(false);
      setRandomCharacter(getRandomHiraKana(character));
    } else {
      setShowAnswer(true);
    }
  };
  return (
    <main
      className={clsx(
        "h-full flex justify-center items-center",
        !isAuto && "cursor-pointer"
      )}
      onClick={handleClickMain}
    >
      <div className="relative text-center select-none">
        <Problem problem={randomCharacter.problem} />
        <Answer answer={randomCharacter.answer} isShown={showAnswer} />
      </div>
    </main>
  );
};

export default Start;
