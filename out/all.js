"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YearEnum = exports.WindowType = exports.WindowColor = exports.Weather = exports.Vision = exports.VfxType = exports.Version = exports.Source = exports.LabelTheme = exports.VariantID = exports.UnlockMethodEnum = exports.Subtype = exports.Style = exports.SourceSheet = exports.SoundType = exports.Size = exports.Shadow = exports.SecondaryShape = exports.PrimaryShape = exports.Personality = exports.PaneType = exports.Museum = exports.MovementSpeed = exports.SeasonalAvailability = exports.LightingType = exports.KitType = exports.InteractEnum = exports.Hobby = exports.HhaConcept1 = exports.HhaCategory = exports.Gender = exports.ExchangeCurrency = exports.CurtainType = exports.Color = exports.CeilingType = exports.Category = exports.CatchDifficulty = exports.Catalog = exports.BodyTitle = exports.Season = void 0;
var Season;
(function (Season) {
    Season["Autumn"] = "autumn";
    Season["Spring"] = "spring";
    Season["Summer"] = "summer";
    Season["Winter"] = "winter";
})(Season = exports.Season || (exports.Season = {}));
var BodyTitle;
(function (BodyTitle) {
    BodyTitle["Art"] = "Art";
    BodyTitle["BallType"] = "Ball type";
    BodyTitle["Bamboo"] = "Bamboo";
    BodyTitle["BaseColor"] = "Base color";
    BodyTitle["Beans"] = "Beans";
    BodyTitle["BeverageColor"] = "Beverage color";
    BodyTitle["BladeColor"] = "Blade color";
    BodyTitle["BlockColor"] = "Block color";
    BodyTitle["BoardMarkings"] = "Board markings";
    BodyTitle["BodyColor"] = "Body color";
    BodyTitle["BottleColor"] = "Bottle color";
    BodyTitle["BoxColor"] = "Box color";
    BodyTitle["BrickColor"] = "Brick color";
    BodyTitle["BucketColor"] = "Bucket color";
    BodyTitle["BuntingColor"] = "Bunting color";
    BodyTitle["BurnerColor"] = "Burner color";
    BodyTitle["Can"] = "Can";
    BodyTitle["CandleColor"] = "Candle color";
    BodyTitle["ChairColor"] = "Chair color";
    BodyTitle["ChinaColor"] = "China color";
    BodyTitle["Color"] = "Color";
    BodyTitle["Condition"] = "Condition";
    BodyTitle["ConfettiColor"] = "Confetti color";
    BodyTitle["ContentColor"] = "Content color";
    BodyTitle["Contents"] = "Contents";
    BodyTitle["CordColor"] = "Cord color";
    BodyTitle["CoverDesign"] = "Cover design";
    BodyTitle["Creation"] = "Creation";
    BodyTitle["CupColor"] = "Cup color";
    BodyTitle["CurtainRod"] = "Curtain rod";
    BodyTitle["Decorations"] = "Decorations";
    BodyTitle["Design"] = "Design";
    BodyTitle["Fabric"] = "Fabric";
    BodyTitle["FlameColor"] = "Flame color";
    BodyTitle["Flavor"] = "Flavor";
    BodyTitle["Flavors"] = "Flavors";
    BodyTitle["FlowerColor"] = "Flower color";
    BodyTitle["Flowers"] = "Flowers";
    BodyTitle["Food"] = "Food";
    BodyTitle["Frame"] = "Frame";
    BodyTitle["FrameColor"] = "Frame color";
    BodyTitle["FruitColor"] = "Fruit color";
    BodyTitle["Genre"] = "Genre";
    BodyTitle["Hairstyle"] = "Hairstyle";
    BodyTitle["Hanger"] = "Hanger";
    BodyTitle["HangerColor"] = "Hanger color";
    BodyTitle["HayCondition"] = "Hay condition";
    BodyTitle["HolderColor"] = "Holder color";
    BodyTitle["Illumination"] = "Illumination";
    BodyTitle["JoyCon"] = "Joy-Con";
    BodyTitle["KimonoPattern"] = "Kimono pattern";
    BodyTitle["KnitCapColor"] = "Knit-cap color";
    BodyTitle["LabelColor"] = "Label color";
    BodyTitle["Leaves"] = "Leaves";
    BodyTitle["LidSeatColor"] = "Lid & seat color";
    BodyTitle["LightColor"] = "Light color";
    BodyTitle["Logo"] = "Logo";
    BodyTitle["LumberType"] = "Lumber type";
    BodyTitle["MakeupColor"] = "Makeup color";
    BodyTitle["MapCenter"] = "Map center";
    BodyTitle["MatColor"] = "Mat color";
    BodyTitle["MetalColor"] = "Metal color";
    BodyTitle["MushroomType"] = "Mushroom type";
    BodyTitle["Name"] = "Name";
    BodyTitle["Navigation"] = "Navigation";
    BodyTitle["NutColor"] = "Nut color";
    BodyTitle["PaintColor"] = "Paint color";
    BodyTitle["PaintColors"] = "Paint colors";
    BodyTitle["Pattern"] = "Pattern";
    BodyTitle["PlanterColor"] = "Planter color";
    BodyTitle["Plants"] = "Plants";
    BodyTitle["PlateColor"] = "Plate color";
    BodyTitle["PoleColor"] = "Pole color";
    BodyTitle["Poles"] = "Poles";
    BodyTitle["PumpkinColor"] = "Pumpkin color";
    BodyTitle["RaceCarColors"] = "Race-car colors";
    BodyTitle["RoofColor"] = "Roof color";
    BodyTitle["RoofTileColor"] = "Roof-tile color";
    BodyTitle["Scent"] = "Scent";
    BodyTitle["ScreenDesign"] = "Screen design";
    BodyTitle["Season"] = "Season";
    BodyTitle["SeatColor"] = "Seat color";
    BodyTitle["ShadeColor"] = "Shade color";
    BodyTitle["ShakerColor"] = "Shaker color";
    BodyTitle["ShellColor"] = "Shell color";
    BodyTitle["Sign"] = "Sign";
    BodyTitle["SignDesign"] = "Sign design";
    BodyTitle["StandColor"] = "Stand color";
    BodyTitle["Stone"] = "Stone";
    BodyTitle["Style"] = "Style";
    BodyTitle["SurfaceColor"] = "Surface color";
    BodyTitle["TableColor"] = "Table color";
    BodyTitle["Tableware"] = "Tableware";
    BodyTitle["TapeType"] = "Tape type";
    BodyTitle["Theme"] = "Theme";
    BodyTitle["TopCloth"] = "Top cloth";
    BodyTitle["TracingTableColor"] = "Tracing-table color";
    BodyTitle["Tray"] = "Tray";
    BodyTitle["TrayColor"] = "Tray color";
    BodyTitle["Variation"] = "Variation";
    BodyTitle["WagonColor"] = "Wagon color";
    BodyTitle["WreathColor"] = "Wreath color";
})(BodyTitle = exports.BodyTitle || (exports.BodyTitle = {}));
var Catalog;
(function (Catalog) {
    Catalog["ForSale"] = "For sale";
    Catalog["NotForSale"] = "Not for sale";
    Catalog["NotInCatalog"] = "Not in catalog";
    Catalog["Seasonal"] = "Seasonal";
})(Catalog = exports.Catalog || (exports.Catalog = {}));
var CatchDifficulty;
(function (CatchDifficulty) {
    CatchDifficulty["Easy"] = "Easy";
    CatchDifficulty["Hard"] = "Hard";
    CatchDifficulty["Medium"] = "Medium";
    CatchDifficulty["VeryEasy"] = "Very Easy";
    CatchDifficulty["VeryHard"] = "Very Hard";
})(CatchDifficulty = exports.CatchDifficulty || (exports.CatchDifficulty = {}));
var Category;
(function (Category) {
    Category["Bridge"] = "Bridge";
    Category["CeilingDecor"] = "Ceiling Decor";
    Category["Door"] = "Door";
    Category["Equipment"] = "Equipment";
    Category["Floors"] = "Floors";
    Category["Housewares"] = "Housewares";
    Category["Incline"] = "Incline";
    Category["Mailbox"] = "Mailbox";
    Category["Miscellaneous"] = "Miscellaneous";
    Category["Other"] = "Other";
    Category["Roofing"] = "Roofing";
    Category["Rugs"] = "Rugs";
    Category["Savory"] = "Savory";
    Category["Siding"] = "Siding";
    Category["Sweet"] = "Sweet";
    Category["Tools"] = "Tools";
    Category["WallMounted"] = "Wall-mounted";
    Category["Wallpaper"] = "Wallpaper";
})(Category = exports.Category || (exports.Category = {}));
var CeilingType;
(function (CeilingType) {
    CeilingType["Cloth"] = "Cloth";
    CeilingType["Gold"] = "Gold";
    CeilingType["Plain"] = "Plain";
    CeilingType["Stone"] = "Stone";
    CeilingType["Tile"] = "Tile";
    CeilingType["Wood"] = "Wood";
})(CeilingType = exports.CeilingType || (exports.CeilingType = {}));
var Color;
(function (Color) {
    Color["Aqua"] = "Aqua";
    Color["Beige"] = "Beige";
    Color["Black"] = "Black";
    Color["Blue"] = "Blue";
    Color["Brown"] = "Brown";
    Color["Colorful"] = "Colorful";
    Color["Gray"] = "Gray";
    Color["Green"] = "Green";
    Color["Orange"] = "Orange";
    Color["Pink"] = "Pink";
    Color["Purple"] = "Purple";
    Color["Red"] = "Red";
    Color["White"] = "White";
    Color["Yellow"] = "Yellow";
})(Color = exports.Color || (exports.Color = {}));
var CurtainType;
(function (CurtainType) {
    CurtainType["Curtains"] = "Curtains";
    CurtainType["RollerShades"] = "Roller Shades";
    CurtainType["SlattedBlinds"] = "Slatted Blinds";
})(CurtainType = exports.CurtainType || (exports.CurtainType = {}));
var ExchangeCurrency;
(function (ExchangeCurrency) {
    ExchangeCurrency["Bells"] = "Bells";
    ExchangeCurrency["HeartCrystals"] = "Heart Crystals";
    ExchangeCurrency["NookMiles"] = "Nook Miles";
    ExchangeCurrency["NookPoints"] = "Nook Points";
    ExchangeCurrency["Poki"] = "Poki";
})(ExchangeCurrency = exports.ExchangeCurrency || (exports.ExchangeCurrency = {}));
var Gender;
(function (Gender) {
    Gender["Female"] = "Female";
    Gender["Free"] = "Free";
    Gender["Male"] = "Male";
    Gender["Manly"] = "Manly";
    Gender["Womanly"] = "Womanly";
})(Gender = exports.Gender || (exports.Gender = {}));
var HhaCategory;
(function (HhaCategory) {
    HhaCategory["AC"] = "AC";
    HhaCategory["Appliance"] = "Appliance";
    HhaCategory["Audio"] = "Audio";
    HhaCategory["Clock"] = "Clock";
    HhaCategory["Doll"] = "Doll";
    HhaCategory["Dresser"] = "Dresser";
    HhaCategory["Food"] = "Food";
    HhaCategory["Kitchen"] = "Kitchen";
    HhaCategory["Lighting"] = "Lighting";
    HhaCategory["MusicalInstrument"] = "MusicalInstrument";
    HhaCategory["Pet"] = "Pet";
    HhaCategory["Plant"] = "Plant";
    HhaCategory["SmallGoods"] = "SmallGoods";
    HhaCategory["Trash"] = "Trash";
    HhaCategory["Tv"] = "TV";
})(HhaCategory = exports.HhaCategory || (exports.HhaCategory = {}));
var HhaConcept1;
(function (HhaConcept1) {
    HhaConcept1["AmusementPark"] = "amusement park";
    HhaConcept1["Ancient"] = "ancient";
    HhaConcept1["ApparelShop"] = "apparel shop";
    HhaConcept1["Arcade"] = "arcade";
    HhaConcept1["Bathroom"] = "bathroom";
    HhaConcept1["Caf\u00E9"] = "caf\u00E9";
    HhaConcept1["ChildSRoom"] = "child's room";
    HhaConcept1["CityLife"] = "city life";
    HhaConcept1["Concert"] = "concert";
    HhaConcept1["ConstructionSite"] = "construction site";
    HhaConcept1["Den"] = "den";
    HhaConcept1["European"] = "European";
    HhaConcept1["Expensive"] = "expensive";
    HhaConcept1["Facility"] = "facility";
    HhaConcept1["Fancy"] = "fancy";
    HhaConcept1["Fantasy"] = "fantasy";
    HhaConcept1["Fitness"] = "fitness";
    HhaConcept1["FreezingCold"] = "freezing cold";
    HhaConcept1["Garden"] = "garden";
    HhaConcept1["Harmonious"] = "harmonious";
    HhaConcept1["Heritage"] = "heritage";
    HhaConcept1["Horror"] = "horror";
    HhaConcept1["Hospital"] = "hospital";
    HhaConcept1["Kitchen"] = "kitchen";
    HhaConcept1["Lab"] = "lab";
    HhaConcept1["LivingRoom"] = "living room";
    HhaConcept1["Local"] = "local";
    HhaConcept1["Music"] = "music";
    HhaConcept1["Nature"] = "nature";
    HhaConcept1["Ocean"] = "ocean";
    HhaConcept1["Office"] = "office";
    HhaConcept1["Outdoors"] = "outdoors";
    HhaConcept1["Park"] = "park";
    HhaConcept1["Party"] = "party";
    HhaConcept1["PublicBath"] = "public bath";
    HhaConcept1["Resort"] = "resort";
    HhaConcept1["Restaurant"] = "restaurant";
    HhaConcept1["Retro"] = "retro";
    HhaConcept1["School"] = "school";
    HhaConcept1["SciFi"] = "sci-fi";
    HhaConcept1["Shop"] = "shop";
    HhaConcept1["Space"] = "space";
    HhaConcept1["Sports"] = "sports";
    HhaConcept1["Stylish"] = "stylish";
    HhaConcept1["Supermarket"] = "supermarket";
    HhaConcept1["Workshop"] = "workshop";
})(HhaConcept1 = exports.HhaConcept1 || (exports.HhaConcept1 = {}));
var Hobby;
(function (Hobby) {
    Hobby["Education"] = "Education";
    Hobby["Fashion"] = "Fashion";
    Hobby["Fitness"] = "Fitness";
    Hobby["Music"] = "Music";
    Hobby["Nature"] = "Nature";
    Hobby["Play"] = "Play";
})(Hobby = exports.Hobby || (exports.Hobby = {}));
var InteractEnum;
(function (InteractEnum) {
    InteractEnum["Bed"] = "Bed";
    InteractEnum["Chair"] = "Chair";
    InteractEnum["Kitchenware"] = "Kitchenware";
    InteractEnum["Mirror"] = "Mirror";
    InteractEnum["MusicPlayer"] = "Music Player";
    InteractEnum["MusicalInstrument"] = "Musical Instrument";
    InteractEnum["Storage"] = "Storage";
    InteractEnum["Toilet"] = "Toilet";
    InteractEnum["Trash"] = "Trash";
    InteractEnum["Tv"] = "TV";
    InteractEnum["Wardrobe"] = "Wardrobe";
    InteractEnum["Workbench"] = "Workbench";
})(InteractEnum = exports.InteractEnum || (exports.InteractEnum = {}));
var KitType;
(function (KitType) {
    KitType["Normal"] = "Normal";
    KitType["Pumpkin"] = "Pumpkin";
    KitType["RainbowFeather"] = "Rainbow feather";
})(KitType = exports.KitType || (exports.KitType = {}));
var LightingType;
(function (LightingType) {
    LightingType["Candle"] = "Candle";
    LightingType["Emission"] = "Emission";
    LightingType["Fluorescent"] = "Fluorescent";
    LightingType["Monitor"] = "Monitor";
    LightingType["Shade"] = "Shade";
    LightingType["Spotlight"] = "Spotlight";
})(LightingType = exports.LightingType || (exports.LightingType = {}));
var SeasonalAvailability;
(function (SeasonalAvailability) {
    SeasonalAvailability["AllYear"] = "All Year";
    SeasonalAvailability["Autumn"] = "Autumn";
    SeasonalAvailability["Fall"] = "Fall";
    SeasonalAvailability["Spring"] = "Spring";
    SeasonalAvailability["Summer"] = "Summer";
    SeasonalAvailability["SummerWinter"] = "Summer; Winter";
    SeasonalAvailability["Winter"] = "Winter";
})(SeasonalAvailability = exports.SeasonalAvailability || (exports.SeasonalAvailability = {}));
var MovementSpeed;
(function (MovementSpeed) {
    MovementSpeed["Fast"] = "Fast";
    MovementSpeed["Medium"] = "Medium";
    MovementSpeed["Slow"] = "Slow";
    MovementSpeed["Stationary"] = "Stationary";
    MovementSpeed["VeryFast"] = "Very fast";
    MovementSpeed["VerySlow"] = "Very slow";
})(MovementSpeed = exports.MovementSpeed || (exports.MovementSpeed = {}));
var Museum;
(function (Museum) {
    Museum["Room1"] = "Room 1";
    Museum["Room2"] = "Room 2";
    Museum["Room3"] = "Room 3";
})(Museum = exports.Museum || (exports.Museum = {}));
var PaneType;
(function (PaneType) {
    PaneType["Glass"] = "Glass";
    PaneType["Screen"] = "Screen";
})(PaneType = exports.PaneType || (exports.PaneType = {}));
var Personality;
(function (Personality) {
    Personality["BigSister"] = "Big Sister";
    Personality["Cranky"] = "Cranky";
    Personality["Jock"] = "Jock";
    Personality["Lazy"] = "Lazy";
    Personality["Normal"] = "Normal";
    Personality["Peppy"] = "Peppy";
    Personality["Smug"] = "Smug";
    Personality["Snooty"] = "Snooty";
})(Personality = exports.Personality || (exports.Personality = {}));
var PrimaryShape;
(function (PrimaryShape) {
    PrimaryShape["ALine"] = "A-line";
    PrimaryShape["ALong"] = "A-long";
    PrimaryShape["BLong"] = "B-long";
    PrimaryShape["Balloon"] = "Balloon";
    PrimaryShape["Balloonemm"] = "Balloonemm";
    PrimaryShape["Box"] = "Box";
    PrimaryShape["Dress"] = "Dress";
    PrimaryShape["Kimono"] = "Kimono";
    PrimaryShape["Marinesuit"] = "Marinesuit";
    PrimaryShape["Overall"] = "Overall";
    PrimaryShape["Rib"] = "Rib";
    PrimaryShape["Robe"] = "Robe";
    PrimaryShape["Salopette"] = "Salopette";
    PrimaryShape["Salopetteemm"] = "Salopetteemm";
})(PrimaryShape = exports.PrimaryShape || (exports.PrimaryShape = {}));
var SecondaryShape;
(function (SecondaryShape) {
    SecondaryShape["H"] = "H";
    SecondaryShape["L"] = "L";
    SecondaryShape["N"] = "N";
})(SecondaryShape = exports.SecondaryShape || (exports.SecondaryShape = {}));
var Shadow;
(function (Shadow) {
    Shadow["Large"] = "Large";
    Shadow["Long"] = "Long";
    Shadow["Medium"] = "Medium";
    Shadow["Small"] = "Small";
    Shadow["XLarge"] = "X-Large";
    Shadow["XLargeWFin"] = "X-Large w/Fin";
    Shadow["XSmall"] = "X-Small";
    Shadow["XXLarge"] = "XX-Large";
})(Shadow = exports.Shadow || (exports.Shadow = {}));
var Size;
(function (Size) {
    Size["The05X05"] = "0.5x0.5";
    Size["The05X1"] = "0.5x1";
    Size["The15X15"] = "1.5x1.5";
    Size["The1X05"] = "1x0.5";
    Size["The1X1"] = "1x1";
    Size["The1X15"] = "1x1.5";
    Size["The1X2"] = "1x2";
    Size["The2X05"] = "2x0.5";
    Size["The2X1"] = "2x1";
    Size["The2X15"] = "2x1.5";
    Size["The2X2"] = "2x2";
    Size["The3X1"] = "3x1";
    Size["The3X2"] = "3x2";
    Size["The3X3"] = "3x3";
    Size["The4X3"] = "4x3";
    Size["The4X4"] = "4x4";
    Size["The5X5"] = "5x5";
})(Size = exports.Size || (exports.Size = {}));
var SoundType;
(function (SoundType) {
    SoundType["Crash"] = "Crash";
    SoundType["DrumSet"] = "Drum set";
    SoundType["HiHat"] = "Hi-hat";
    SoundType["Kick"] = "Kick";
    SoundType["Melody"] = "Melody";
    SoundType["Snare"] = "Snare";
})(SoundType = exports.SoundType || (exports.SoundType = {}));
var SourceSheet;
(function (SourceSheet) {
    SourceSheet["Accessories"] = "Accessories";
    SourceSheet["Achievements"] = "Achievements";
    SourceSheet["Artwork"] = "Artwork";
    SourceSheet["Bags"] = "Bags";
    SourceSheet["Bottoms"] = "Bottoms";
    SourceSheet["CeilingDecor"] = "CeilingDecor";
    SourceSheet["ClothingOther"] = "ClothingOther";
    SourceSheet["Construction"] = "Construction";
    SourceSheet["DressUp"] = "DressUp";
    SourceSheet["Fencing"] = "Fencing";
    SourceSheet["Fish"] = "Fish";
    SourceSheet["Floors"] = "Floors";
    SourceSheet["Fossils"] = "Fossils";
    SourceSheet["Gyroids"] = "Gyroids";
    SourceSheet["Headwear"] = "Headwear";
    SourceSheet["Housewares"] = "Housewares";
    SourceSheet["Insects"] = "Insects";
    SourceSheet["InteriorStructures"] = "InteriorStructures";
    SourceSheet["MessageCards"] = "MessageCards";
    SourceSheet["Miscellaneous"] = "Miscellaneous";
    SourceSheet["Music"] = "Music";
    SourceSheet["Other"] = "Other";
    SourceSheet["ParadisePlanning"] = "ParadisePlanning";
    SourceSheet["Photos"] = "Photos";
    SourceSheet["Posters"] = "Posters";
    SourceSheet["Reactions"] = "Reactions";
    SourceSheet["Recipes"] = "Recipes";
    SourceSheet["Rugs"] = "Rugs";
    SourceSheet["SeaCreatures"] = "SeaCreatures";
    SourceSheet["SeasonsAndEvents"] = "SeasonsAndEvents";
    SourceSheet["Shoes"] = "Shoes";
    SourceSheet["Socks"] = "Socks";
    SourceSheet["SpecialNpcs"] = "SpecialNpcs";
    SourceSheet["ToolsGoods"] = "ToolsGoods";
    SourceSheet["Tops"] = "Tops";
    SourceSheet["Umbrellas"] = "Umbrellas";
    SourceSheet["Villagers"] = "Villagers";
    SourceSheet["WallMounted"] = "WallMounted";
    SourceSheet["Wallpaper"] = "Wallpaper";
})(SourceSheet = exports.SourceSheet || (exports.SourceSheet = {}));
var Style;
(function (Style) {
    Style["Active"] = "Active";
    Style["Cool"] = "Cool";
    Style["Cute"] = "Cute";
    Style["Elegant"] = "Elegant";
    Style["Gorgeous"] = "Gorgeous";
    Style["Simple"] = "Simple";
})(Style = exports.Style || (exports.Style = {}));
var Subtype;
(function (Subtype) {
    Subtype["A"] = "A";
    Subtype["B"] = "B";
})(Subtype = exports.Subtype || (exports.Subtype = {}));
var UnlockMethodEnum;
(function (UnlockMethodEnum) {
    UnlockMethodEnum["BCATA"] = "BCAT (a)";
    UnlockMethodEnum["BCATB"] = "BCAT (b)";
    UnlockMethodEnum["BCATC"] = "BCAT (c)";
    UnlockMethodEnum["NTP"] = "NTP";
})(UnlockMethodEnum = exports.UnlockMethodEnum || (exports.UnlockMethodEnum = {}));
var VariantID;
(function (VariantID) {
    VariantID["The0_0"] = "0_0";
    VariantID["The0_1"] = "0_1";
    VariantID["The0_2"] = "0_2";
    VariantID["The0_3"] = "0_3";
    VariantID["The0_4"] = "0_4";
    VariantID["The0_5"] = "0_5";
    VariantID["The0_6"] = "0_6";
    VariantID["The0_7"] = "0_7";
    VariantID["The1_0"] = "1_0";
    VariantID["The1_1"] = "1_1";
    VariantID["The1_2"] = "1_2";
    VariantID["The1_3"] = "1_3";
    VariantID["The1_4"] = "1_4";
    VariantID["The1_5"] = "1_5";
    VariantID["The1_6"] = "1_6";
    VariantID["The1_7"] = "1_7";
    VariantID["The2_0"] = "2_0";
    VariantID["The2_1"] = "2_1";
    VariantID["The2_2"] = "2_2";
    VariantID["The2_3"] = "2_3";
    VariantID["The2_4"] = "2_4";
    VariantID["The2_5"] = "2_5";
    VariantID["The2_6"] = "2_6";
    VariantID["The2_7"] = "2_7";
    VariantID["The3_0"] = "3_0";
    VariantID["The3_1"] = "3_1";
    VariantID["The3_2"] = "3_2";
    VariantID["The3_3"] = "3_3";
    VariantID["The3_4"] = "3_4";
    VariantID["The3_5"] = "3_5";
    VariantID["The3_6"] = "3_6";
    VariantID["The3_7"] = "3_7";
    VariantID["The4_0"] = "4_0";
    VariantID["The4_1"] = "4_1";
    VariantID["The4_2"] = "4_2";
    VariantID["The4_3"] = "4_3";
    VariantID["The4_4"] = "4_4";
    VariantID["The4_5"] = "4_5";
    VariantID["The4_6"] = "4_6";
    VariantID["The4_7"] = "4_7";
    VariantID["The5_0"] = "5_0";
    VariantID["The5_1"] = "5_1";
    VariantID["The5_2"] = "5_2";
    VariantID["The5_3"] = "5_3";
    VariantID["The5_4"] = "5_4";
    VariantID["The5_5"] = "5_5";
    VariantID["The5_6"] = "5_6";
    VariantID["The5_7"] = "5_7";
    VariantID["The6_0"] = "6_0";
    VariantID["The6_1"] = "6_1";
    VariantID["The6_2"] = "6_2";
    VariantID["The6_3"] = "6_3";
    VariantID["The6_4"] = "6_4";
    VariantID["The6_5"] = "6_5";
    VariantID["The6_6"] = "6_6";
    VariantID["The6_7"] = "6_7";
    VariantID["The7_0"] = "7_0";
    VariantID["The7_1"] = "7_1";
    VariantID["The7_2"] = "7_2";
    VariantID["The7_3"] = "7_3";
    VariantID["The7_4"] = "7_4";
    VariantID["The7_5"] = "7_5";
    VariantID["The7_6"] = "7_6";
    VariantID["The7_7"] = "7_7";
})(VariantID = exports.VariantID || (exports.VariantID = {}));
var LabelTheme;
(function (LabelTheme) {
    LabelTheme["Comfy"] = "comfy";
    LabelTheme["Everyday"] = "everyday";
    LabelTheme["FairyTale"] = "fairy tale";
    LabelTheme["Formal"] = "formal";
    LabelTheme["Goth"] = "goth";
    LabelTheme["Outdoorsy"] = "outdoorsy";
    LabelTheme["Party"] = "party";
    LabelTheme["Sporty"] = "sporty";
    LabelTheme["Theatrical"] = "theatrical";
    LabelTheme["Vacation"] = "vacation";
    LabelTheme["Work"] = "work";
})(LabelTheme = exports.LabelTheme || (exports.LabelTheme = {}));
var Source;
(function (Source) {
    Source["AbleSisters"] = "Able Sisters";
    Source["AllVillagers"] = "All villagers";
    Source["AppleTree"] = "Apple Tree";
    Source["AssessingFossils"] = "Assessing fossils";
    Source["Beach"] = "Beach";
    Source["Birthday"] = "Birthday";
    Source["Blathers"] = "Blathers";
    Source["Breeding"] = "Breeding";
    Source["Brewster"] = "Brewster";
    Source["BuryingBellsInAGlowingSpot"] = "Burying bells in a glowing spot";
    Source["CJ"] = "C.J.";
    Source["CatchingWithANet"] = "Catching with a net";
    Source["CedarTree"] = "Cedar Tree";
    Source["CheckToyDayStockingsTheDayAfterToyDay"] = "Check Toy Day stockings the day after Toy Day";
    Source["CherryTree"] = "Cherry Tree";
    Source["ChoppingABambooTree"] = "Chopping a bamboo tree";
    Source["ChoppingATree"] = "Chopping a tree";
    Source["ClamDigSpot"] = "Clam dig spot";
    Source["CoconutTree"] = "Coconut Tree";
    Source["Cooking"] = "Cooking";
    Source["Crafting"] = "Crafting";
    Source["Cyrus"] = "Cyrus";
    Source["DaisyMae"] = "Daisy Mae";
    Source["DeliveringItemForAVillager"] = "Delivering item for a villager";
    Source["DigSpot"] = "Dig Spot";
    Source["DiggingUpACarrotPlant"] = "Digging up a carrot plant";
    Source["DiggingUpAFullyGrownBush"] = "Digging up a fully grown bush";
    Source["DiggingUpAPotatoPlant"] = "Digging up a potato plant";
    Source["DiggingUpAPumpkinPlant"] = "Digging up a pumpkin plant";
    Source["DiggingUpASugarcanePlant"] = "Digging up a sugarcane plant";
    Source["DiggingUpATomatoPlant"] = "Digging up a tomato plant";
    Source["DiggingUpAWheatPlant"] = "Digging up a wheat plant";
    Source["DiveSpot"] = "Dive spot";
    Source["DodoAirlines"] = "Dodo Airlines";
    Source["DonTReturnLostItem"] = "Don't return lost item";
    Source["DonTReturnTreasureQuestItem"] = "Don't return treasure quest item";
    Source["DonatingAllArt"] = "Donating all art";
    Source["DonatingAllBugs"] = "Donating all bugs";
    Source["DonatingAllFish"] = "Donating all fish";
    Source["DonatingAllFossils"] = "Donating all fossils";
    Source["DonatingAllSeaCreatures"] = "Donating all sea creatures";
    Source["EggBalloon"] = "Egg balloon";
    Source["ExpiredTurnips"] = "Expired turnips";
    Source["Fishing"] = "Fishing";
    Source["Flick"] = "Flick";
    Source["Franklin"] = "Franklin";
    Source["GlowingDigSpot"] = "Glowing dig spot";
    Source["GroupStretching"] = "Group Stretching";
    Source["Gullivarrr"] = "Gullivarrr";
    Source["Gulliver"] = "Gulliver";
    Source["HHPApparelShop"] = "HHP Apparel Shop";
    Source["HHPCaf\u00E9"] = "HHP Caf\u00E9";
    Source["HHPOffice"] = "HHP Office";
    Source["HardwoodTree"] = "Hardwood Tree";
    Source["Hha"] = "HHA";
    Source["HighFriendship"] = "High Friendship";
    Source["HittingARock"] = "Hitting a rock";
    Source["Isabelle"] = "Isabelle";
    Source["Jack"] = "Jack";
    Source["Jingle"] = "Jingle";
    Source["JollyReddSTreasureTrawler"] = "Jolly Redd's Treasure Trawler";
    Source["KKConcert"] = "K.K. concert";
    Source["KappN"] = "Kapp'n";
    Source["KappNIslands"] = "Kapp'n islands";
    Source["KatrinaSCleansingService"] = "Katrina's Cleansing Service";
    Source["Kicks"] = "Kicks";
    Source["KicksCoOp"] = "Kicks' Co-op";
    Source["Label"] = "Label";
    Source["Leif"] = "Leif";
    Source["Lottie"] = "Lottie";
    Source["Luna"] = "Luna";
    Source["MOM"] = "Mom";
    Source["Mail"] = "Mail";
    Source["MayDayTour"] = "May Day Tour";
    Source["Niko"] = "Niko";
    Source["Nintendo"] = "Nintendo";
    Source["NookLink"] = "NookLink";
    Source["NookMilesRedemption"] = "Nook Miles Redemption";
    Source["NookSCranny"] = "Nook's Cranny";
    Source["NookShopping"] = "Nook Shopping";
    Source["NookShoppingDailySelection"] = "Nook Shopping Daily Selection";
    Source["NookShoppingPosters"] = "Nook Shopping Posters";
    Source["NookShoppingPromotion"] = "Nook Shopping Promotion";
    Source["NookShoppingSeasonal"] = "Nook Shopping Seasonal";
    Source["NotAvailable"] = "NotAvailable";
    Source["OnGround"] = "On ground";
    Source["OrangeTree"] = "Orange Tree";
    Source["Pascal"] = "Pascal";
    Source["Pav\u00E9"] = "Pav\u00E9";
    Source["PeachTree"] = "Peach Tree";
    Source["PearTree"] = "Pear Tree";
    Source["PickingCarrots"] = "Picking carrots";
    Source["PickingFlowers"] = "Picking flowers";
    Source["PickingPotatoes"] = "Picking potatoes";
    Source["PickingPumpkins"] = "Picking pumpkins";
    Source["PickingSugarcane"] = "Picking sugarcane";
    Source["PickingTomatoes"] = "Picking tomatoes";
    Source["PickingWheat"] = "Picking wheat";
    Source["PlantingABambooShoot"] = "Planting a bamboo shoot";
    Source["PlantingACedarSapling"] = "Planting a cedar sapling";
    Source["PlantingACherry"] = "Planting a cherry";
    Source["PlantingACoconut"] = "Planting a coconut";
    Source["PlantingAPeach"] = "Planting a peach";
    Source["PlantingAPear"] = "Planting a pear";
    Source["PlantingASapling"] = "Planting a sapling";
    Source["PlantingAnApple"] = "Planting an apple";
    Source["PlantingAnOrange"] = "Planting an orange";
    Source["RecycleBox"] = "Recycle box";
    Source["ReddSCoOpRaffle"] = "Redd's Co-op Raffle";
    Source["ReddSRaffle"] = "Redd's Raffle";
    Source["Reese"] = "Reese";
    Source["Rover"] = "Rover";
    Source["Saharah"] = "Saharah";
    Source["SaharahSCoOp"] = "Saharah's Co-op";
    Source["SeedBag"] = "Seed bag";
    Source["ShakingAHardwoodOrCedarTree"] = "Shaking a hardwood or cedar tree";
    Source["Snowboy"] = "Snowboy";
    Source["StartingItems"] = "Starting items";
    Source["The5StarTownStatus"] = "5-star town status";
    Source["TomNook"] = "Tom Nook";
    Source["UseAFountainFirework"] = "Use a fountain firework";
    Source["Wardell"] = "Wardell";
    Source["Wilbur"] = "Wilbur";
    Source["WishingOnShootingStars"] = "Wishing on shooting stars";
    Source["WrappingAPresent"] = "Wrapping a present";
    Source["Zipper"] = "Zipper";
})(Source = exports.Source || (exports.Source = {}));
var Version;
(function (Version) {
    Version["The100"] = "1.0.0";
    Version["The110"] = "1.1.0";
    Version["The1100"] = "1.10.0";
    Version["The1110"] = "1.11.0";
    Version["The120"] = "1.2.0";
    Version["The130"] = "1.3.0";
    Version["The140"] = "1.4.0";
    Version["The150"] = "1.5.0";
    Version["The160"] = "1.6.0";
    Version["The170"] = "1.7.0";
    Version["The180"] = "1.8.0";
    Version["The190"] = "1.9.0";
    Version["The200"] = "2.0.0";
    Version["The204"] = "2.0.4";
})(Version = exports.Version || (exports.Version = {}));
var VfxType;
(function (VfxType) {
    VfxType["LightOff"] = "LightOff";
    VfxType["Random"] = "Random";
    VfxType["Synchro"] = "Synchro";
})(VfxType = exports.VfxType || (exports.VfxType = {}));
var Vision;
(function (Vision) {
    Vision["Medium"] = "Medium";
    Vision["Narrow"] = "Narrow";
    Vision["VeryNarrow"] = "Very Narrow";
    Vision["VeryWide"] = "Very Wide";
    Vision["Wide"] = "Wide";
})(Vision = exports.Vision || (exports.Vision = {}));
var Weather;
(function (Weather) {
    Weather["AnyExceptRain"] = "Any except rain";
    Weather["AnyWeather"] = "Any weather";
    Weather["RainOnly"] = "Rain only";
})(Weather = exports.Weather || (exports.Weather = {}));
var WindowColor;
(function (WindowColor) {
    WindowColor["BlackMetal"] = "Black Metal";
    WindowColor["DarkWood"] = "Dark Wood";
    WindowColor["GreyMetal"] = "Grey Metal";
    WindowColor["GreyWood"] = "Grey Wood";
    WindowColor["LightWood"] = "Light Wood";
    WindowColor["NaturalWood"] = "Natural Wood";
    WindowColor["WhiteMetal"] = "White Metal";
    WindowColor["WhiteWood"] = "White Wood";
    WindowColor["Wood"] = "Wood";
})(WindowColor = exports.WindowColor || (exports.WindowColor = {}));
var WindowType;
(function (WindowType) {
    WindowType["Arch"] = "Arch";
    WindowType["Circle"] = "Circle";
    WindowType["FourPane"] = "Four Pane";
    WindowType["SinglePane"] = "Single Pane";
    WindowType["SlidingPane"] = "Sliding Pane";
})(WindowType = exports.WindowType || (exports.WindowType = {}));
var YearEnum;
(function (YearEnum) {
    YearEnum["Any"] = "Any";
})(YearEnum = exports.YearEnum || (exports.YearEnum = {}));
//# sourceMappingURL=all.js.map