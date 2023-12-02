import {CharacterSelection, Mode} from "~/types/enums";

export const useMode = () => useState<Mode>('mode', () => Mode.Auto);
export const useIsAuto = () => {
    return computed(() => useMode().value === Mode.Auto);
}
export const useTime = () => useState<number>('time', () => 2500);

export const useCharacterSelection = () => useState<CharacterSelection>('characterSelection', () => CharacterSelection.Both);