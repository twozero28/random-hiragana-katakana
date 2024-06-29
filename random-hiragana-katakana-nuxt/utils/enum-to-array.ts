import {Mode} from "~/types/enums";

export default function (e: {[key: number]: string}): Array<{key: number, value: string}> {
    return Object.entries(e)
        .filter(([key, value]) => !isNaN(Number(value)))
        .map(([key, value]) => ({key: Number(value), value: key}))
}