import { BasicInterface } from "../basic.interface";

interface NormalGuestsDataInterface {
    likes:  number[];
    drinks: number[];
    visits: string[];
}

export interface NormalGuestsInterface extends BasicInterface<NormalGuestsDataInterface> {
    /**
     * The game_id here, they use number to identify.
     */
    game_id:      number | null;
    data: NormalGuestsDataInterface;
}
