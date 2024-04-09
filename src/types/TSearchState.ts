import { TSearchItem } from "./TSearchItem";

export type TSearchState = {
    list: TSearchItem[],
    isLoading: boolean,
    error: null | string,
    search: string,
}
