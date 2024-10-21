export interface BeveragesInterface {
    app_id:       number;
    app_label_id: string;
    game_id:      string;
    name:         Name;
    dlc:          Dlc;
    data:         Data;
}

export interface Data {
    price: number;
    tags:  number[];
}

export enum Dlc {
    Core = "CORE",
    Dlc1 = "DLC1",
}

export interface Name {
    "zh-hans": string;
    "zh-hant": string;
    en:        string;
    ja:        string;
    ko:        string;
}
