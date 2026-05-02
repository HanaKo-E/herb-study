// data.js - 核心資料庫檔案
const MEDICINE_DATABASE = {
    // 左側櫃子 (800 系列)
    "800": [
        { "layer": "第一層", "items": [
            { "code": "801", "name": "山藥", "property": "平", "toxicity": "無毒", "nature": "甘。歸脾、肺、腎經。", "effect": "益氣養陰，補脾肺腎，固精止帶。", "usage": "煎服，15～30g。", "notice": "濕盛中滿、大便泄瀉者忌服。", "img": "山藥.png" },
            { "code": "803", "name": "金銀花", "property": "寒", "toxicity": "無毒", "nature": "甘。歸肺、心、胃經。", "effect": "清熱解毒，疏散風熱。", "usage": "煎服，6～15g。", "notice": "脾胃虛寒者忌用。", "img": "金銀花.png" },
            { "code": "802", "name": "連翹", "property": "微寒", "toxicity": "無毒", "nature": "苦。歸肺、心、小腸經。", "effect": "清熱解毒，消腫散結，疏散風熱。", "usage": "煎服，6～15g。", "notice": "脾胃虛寒及氣虛膿清者不宜用。", "img": "連翹.png" },
            { "code": "804", "name": "桃仁", "property": "平", "toxicity": "無毒", "nature": "苦、甘。歸心、肝、大腸經。", "effect": "活血祛瘀，潤腸通便，止咳平喘。", "usage": "煎服，5～10g。", "notice": "孕婦慎用。", "img": "桃仁.png" }
        ]},
        // ... (以此類推，將 index.html 中的資訊填入對應的 items)
        { "layer": "第二層", "items": [
            { "code": "806", "name": "細辛", "property": "溫", "toxicity": "有小毒", "nature": "辛。歸肺、腎、心經。", "effect": "解表散寒，祛風止痛，通竅，溫肺化飲。", "usage": "煎服，1～3g。", "notice": "不宜與藜蘆同用。", "img": "細辛.png" },
            { "code": "808", "name": "黃芪", "property": "溫", "toxicity": "無毒", "nature": "甘。歸脾、肺經。", "effect": "補氣升陽，固表止汗，利水消腫。", "usage": "煎服，9～30g。", "notice": "凡氣滯濕阻、食積停滯者慎用。", "img": "黃芪.png" }
        ]}
    ],
    "700": [
        { "layer": "第一層", "items": [
            { "code": "701", "name": "當歸", "property": "溫", "toxicity": "無毒", "nature": "甘、辛。歸肝、心、脾經。", "effect": "補血調經，活血止痛，潤腸通便。", "usage": "煎服，5～15g。", "notice": "濕盛中滿者忌服。", "img": "當歸.png" }
        ]}
    ]
};
