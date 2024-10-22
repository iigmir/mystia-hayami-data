enum Dlcs {
    /**
     * The [main game](https://store.steampowered.com/app/1584090).
     */
    CORE = "CORE",
    /**
     * The [DLC1](https://store.steampowered.com/app/1838750) with Forest of Magic & Youkai Mountain.
     */
    DLC1 = "DLC1",
    /**
     * The [DLC2](https://store.steampowered.com/app/1927110) with Former Hell & Chireiden.
     * [DLC 2.5](https://store.steampowered.com/app/2122050) should be labelled as DLC2.
     */
    DLC2 = "DLC2",
    /**
     * The [DLC3](https://store.steampowered.com/app/2191950) with Myouren Temple & Divine Spirit Mausoleum.
     */
    DLC3 = "DLC3",
    /**
     * The [DLC4](https://store.steampowered.com/app/2399330) with Garden of the Sun & Shining Needle Castle.
     * Hint: 
     */
    DLC4 = "DLC4",
    /**
     * The [DLC5](https://store.steampowered.com/app/2399331) with Makai & Lunar Capital.
     */
    DLC5 = "DLC5",
}

const dlcs: Dlcs[] = [
    Dlcs.CORE,
    Dlcs.DLC1,
    Dlcs.DLC2,
    Dlcs.DLC3,
    Dlcs.DLC4,
    Dlcs.DLC5
];

export interface BasicInterface<T> {
    /**
     * An unique number identifier of a structured data. Not related with games.
     */
    app_id:       number;
    /**
     * An unique label identifier of a structured data.
     * Generally it will be a snake_case of their English name,
     * but sometimes it comes from game saving data instead.
     */
    app_label_id: string;
    /**
     * The ID of a structured data that is from a game saving data.
     * 
     * In most cases, you should use `game_id` as your identifier,
     * but so1metime the ID just can't found, yes...
     */
    game_id:      unknown;
    name:         Name;
    /**
     * First appearence in given DLC. Give "CORE" if the DLC is unknown.
     */
    dlc:          Dlcs;
    links:        Links;
    /**
     * The data
     */
    data?:        unknown;
}

/**
 * A link to combine entries in order to build the web. If the entry is not in the site, gives `null`.
 * 
 * @example Take Mystia Lorelei as example,
 * ```
 * {
 *     "wikidata": "Q130600680",
 *     "thwiki": "米斯蒂娅·萝蕾拉",
 *     "touhouwiki": "Mystia_Lorelei",
 * }
 * ```
 */
export interface Links {
    /**
     * The identifier of [Wikidata](https://www.wikidata.org) to the entry.
     */
    wikidata:   null | string;
    /**
     * The identifier of [THBwiki](https://thwiki.cc) to the entry.
     */
    thwiki:     null | string;
    /**
     * The identifier of [Touhou Wiki](https://en.touhouwiki.net) to the entry. Currently we only support English.
     */
    touhouwiki: null | string;
    // partners?:  string;
}

/**
 * Names shown in the game.
 * Currently we have Trad/Simp Chinese, English, Japanese, and Korean.
 * 
 * @example Take Mystia Lorelei as example,
 * ```
 * {
 *     "zh-hans": "米斯蒂娅·萝蕾拉",
 *     "zh-hant": "米斯蒂婭·蘿蕾拉",
 *     "en": "Mystia Lorelei",
 *     "ja": "ミスティア・ローレライ",
 *     "ko": " 미스티아 로렐라이",
 * }
 * ```
 */
export interface Name {
    /**
     * 简体中文
     */
    "zh-hans": string;
    /**
     * 繁體中文
     */
    "zh-hant": string;
    /**
     * English
     */
    en:        string;
    /**
     * 日本語
     */
    ja:        string;
    /**
     * 한국어
     */
    ko:        string;
}
