import { atom } from "jotai";

export const Atom1 = atom(0)
export const AsyncAtom = atom(async (get) => 0, (get, set, value) => {
    console.log(value + " from async atom")
})