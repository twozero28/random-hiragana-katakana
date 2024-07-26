import {writable} from "svelte/store";
import {getRandomCharacter} from "./get-random-character.js";
import {hiraganas, katakanas} from "../data/charaters.js";

export const isAuto = writable(true);
export const selectCharacter = writable('both');
export const time = writable(2.5);
export const isShown = writable(false);
export const character = writable(getRandomCharacter([...hiraganas, ...katakanas]));
