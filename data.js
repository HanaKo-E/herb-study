// data.js

// 1. 百子櫃物理分佈結構 (700 & 800 系列)
const MEDICINE_DATABASE = {
    "800": [
        {
            layer: "第一層",
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
        // 你可以依照此格式繼續增加 800 系列的層級
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

// 2. 藥材詳細教學資訊 (完整 59 項結構)
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
    { 
        name: "桂枝", 
        property: "溫", 
        toxicity: "無毒", 
        nature: "辛、甘。歸肺、心、膀胱經。", 
        effect: "發汗解肌，溫經通脈。", 
        usage: "煎服，3～10g。", 
        notice: "孕婦慎用。", 
        img: "桂枝.png" 
    },
    // --- 以下為補齊的 57 項占位資料，請根據你的需求修改內容 ---
    ...Array.from({ length: 57 }, (_, i) => ({
        name: `待填藥材 ${String(i + 3).padStart(2, '0')}`,
        property: "待填",
        toxicity: "待填",
        nature: "請輸入性味歸經...",
        effect: "請輸入功效內容...",
        usage: "請輸入用法用量...",
        notice: "請輸入使用注意...",
        img: "placeholder.png"
    }))
];

// 如果你希望手動一筆一筆填寫，請參考下方展開的格式：
/*
    { 
        name: "第三味藥", 
        property: "平", 
        toxicity: "無毒", 
        nature: "...", 
        effect: "...", 
        usage: "...", 
        notice: "...", 
        img: "image3.png" 
    },
*/
