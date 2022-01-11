export interface Gyroid {
    sourceSheet: SourceSheet;
    name: string;
    patternTitle: null;
    diy: boolean;
    patternCustomize: boolean;
    kitCost: number | null;
    kitType: KitType | null;
    cyrusCustomizePrice: number | null;
    color1: string;
    color2: string;
    exchangePrice: null;
    exchangeCurrency: null;
    size: Size;
    sourceNotes: null | string;
    seasonEvent: null;
    seasonEventExclusive: null;
    hhaBasePoints: number;
    hhaConcept1: null;
    hhaConcept2: null;
    hhaSeries: null;
    hhaSet: null;
    hhaCategory: null;
    interact: boolean;
    tag: Tag;
    outdoor: boolean;
    lightingType: null | string;
    soundType: string;
    catalog: Catalog;
    versionAdded: VersionAdded;
    unlocked: boolean;
    variants: Variant[];
}
export declare enum Catalog {
    NotForSale = "Not for sale"
}
export declare enum KitType {
    Normal = "Normal"
}
export declare enum Size {
    The1X1 = "1x1"
}
export declare enum SourceSheet {
    Gyroids = "Gyroids"
}
export declare enum Tag {
    Haniwa = "Haniwa"
}
export interface Variant {
    image: string;
    filename: string;
    uniqueEntryId: string;
    source: Source[];
    internalId: number;
    buy: number;
    sell: number;
    variation: null | string;
    variantId: VariantID | null;
    bodyCustomize: boolean;
    bodyTitle: BodyTitle | null;
    pattern: null;
}
export declare enum BodyTitle {
    Color = "Color"
}
export declare enum Source {
    Brewster = "Brewster",
    DigSpot = "Dig Spot"
}
export declare enum VariantID {
    The0_0 = "0_0",
    The1_0 = "1_0",
    The2_0 = "2_0",
    The3_0 = "3_0",
    The4_0 = "4_0",
    The5_0 = "5_0",
    The6_0 = "6_0"
}
export declare enum VersionAdded {
    The200 = "2.0.0"
}
