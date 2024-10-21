import { BasicInterface } from "../basic.interface";

interface PartnersDataInterface {
    price: number;
    tags:  number[];
}

export interface PartnersInterface extends BasicInterface<PartnersDataInterface> {
    game_alias?:   string[];
    data:         PartnersDataInterface;
}

