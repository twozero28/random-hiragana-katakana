import { useId } from "react";
import SelectBox from "./SelectBox";
import { Mode } from "../../model/mode";

const availableTimes = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];

export interface ModelFormProps extends Mode {
  onChangeAuto: React.ChangeEventHandler<HTMLInputElement>;
  onChangeTime: React.ChangeEventHandler<HTMLSelectElement>;
  onChangeCharacter: React.ChangeEventHandler<HTMLSelectElement>;
}
const ModeForm = ({
  isAuto,
  time,
  character,
  onChangeAuto,
  onChangeTime,
  onChangeCharacter,
}: ModelFormProps) => {
  const autoCheckBoxId = useId();
  return (
    <div className="flex flex-row items-center space-x-2">
      <input
        id={autoCheckBoxId}
        type="checkbox"
        onChange={onChangeAuto}
        checked={isAuto}
        className="cursor-pointer"
      />
      <label htmlFor={autoCheckBoxId} className="cursor-pointer">
        Auto
      </label>
      {isAuto && (
        <SelectBox onChange={onChangeTime}>
          {availableTimes.map((t) => (
            <option value={t} selected={t === time}>
              {t}
            </option>
          ))}
        </SelectBox>
      )}
      <SelectBox onChange={onChangeCharacter}>
        <option value="both" selected={character === "both"}>
          Both
        </option>
        <option value="hiragana" selected={character === "hiragana"}>
          Hiragana
        </option>
        <option value="Katakana" selected={character === "Katakana"}>
          Katakana
        </option>
      </SelectBox>
    </div>
  );
};

export default ModeForm;
