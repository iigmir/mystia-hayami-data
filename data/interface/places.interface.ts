import { BasicInterface } from "./basic.interface";

export interface PlaceInterface extends BasicInterface<[]> {
    /**
     * The game_id here, they use string to identify.
     */
    game_id:      string;
}
