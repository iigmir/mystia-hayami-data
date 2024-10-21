import { BasicInterface } from "../basic.interface";

export enum Visit {
    BambooForest = "BambooForest",
    BeastForest = "BeastForest",
    DLC1MagicForest = "DLC1_MagicForest",
    DLC1YoukaiMountain = "DLC1_YoukaiMountain",
    HakureiShrine = "HakureiShrine",
    HumanVillage = "HumanVillage",
    ScarletMansion = "ScarletMansion",
}

interface RareGuestsDataInterface {
    likes:  number[];
    hates?: number[];
    drinks: number[];
    budget: Array<number | null>;
    visits: Array<Visit | null>;
}

export interface RareGuestsInterface extends BasicInterface<RareGuestsDataInterface> {
    game_alias?:  string[];
    data:         RareGuestsDataInterface;
}
