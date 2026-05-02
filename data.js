// 中藥資料庫：包含 59 項藥材詳細資訊與櫃位對照
const MEDICINE_DATABASE = {
    // 這裡存放用於百子櫃展示的結構 (700 與 800 系列)
    "800": [
        {
            layer: "第一層 (頂層)",
            items: [
                { code: "801", name: "麻黃" },
                { code: "802", name: "桂枝" },
                { code: "803", name: "紫蘇" },
                { code: "804", name: "生薑" }
            ]
        },
        {
            layer: "第二層",
            items: [
                { code: "805", name: "香薷" },
                { code: "806", name: "荊芥" },
                { code: "807", name: "防風" },
                { code: "808", name: "羌活" }
            ]
        }
        // ...以此類推完成 59 項
    ],
    "700": [
        {
            layer: "第一層",
            items: [
                { code: "701", name: "人參" },
                { code: "702", name: "黃芪" }
            ]
        }
    ]
};

// 為了讓 index.html 也能讀取，我們將原本的陣列也放在這裡
const medicines = [
    { name: "麻黃", property: "溫", toxicity: "無毒", nature: "辛、微苦。歸肺、膀胱經。", effect: "發汗解表，宣肺平喘，利水消腫。", usage: "煎服，2～10g。", notice: "表虛自汗及陰虛盜汗者慎用。", img: "麻黃.png" },
    { name: "桂枝", property: "溫", toxicity: "無毒", nature: "辛、甘。歸肺、心、膀胱經。", effect: "發汗解肌，溫經通脈。", usage: "煎服，3～10g。", notice: "孕婦慎用。", img: "桂枝.png" }
    // ...請將你之前 59 項的藥材陣列完整貼在這邊
];