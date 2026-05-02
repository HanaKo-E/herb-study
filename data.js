// data.js
const MEDICINE_DATABASE = {
    "800": [
        { layer: "第一層", items: [{ code: "801", name: "麻黃" }, { code: "802", name: "桂枝" }] },
        // ...其餘 800 系列資料
    ],
    "700": [
        { layer: "第一層", items: [{ code: "701", name: "人參" }] },
        // ...其餘 700 系列資料
    ]
};

const medicines = [
    { 
        name: "麻黃", 
        property: "溫", 
        toxicity: "無毒", 
        nature: "辛、微苦。歸肺、膀胱經。", 
        effect: "發汗解表，宣肺平喘，利水消腫。", 
        usage: "煎服，2～10g。", 
        notice: "表虛自汗及陰虛盜汗者慎用。", 
        img: "麻黃.png" 
    },
    // ...重複此結構填寫 59 項藥材
];
