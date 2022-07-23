import { createContext } from "react";

export type globalContent = {
    childCapacity: number,
    adultCapacity: number,
    rating: number,
};

export const GlobalContext = createContext<globalContent>({
    childCapacity: 0,
    adultCapacity: 0,
    rating: 0
});