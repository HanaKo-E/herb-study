// data.js

/**
 * 1. 百子櫃物理分佈結構
 * 對應左側櫃子 (8區) 與 右側櫃子 (7區)
 */
const MEDICINE_DATABASE = {
    "800": [
        {
            layer: "第一層 (801-804)",
            items: [
                { code: "801", name: "山藥" },
                { code: "802", name: "連翹" },
                { code: "803", name: "金銀花" },
                { code: "804", name: "桃仁" }
            ]
        },
        {
            layer: "第二層 (805-808)",
            items: [
                { code: "805", name: "赤芍" },
                { code: "806", name: "細辛" },
                { code: "807", name: "牡丹皮" },
                { code: "808", name: "黃芪" }
            ]
        },
        {
            layer: "第三層 (809-812)",
            items: [
                { code: "809", name: "桔梗" },
                { code: "810", name: "竹葉" },
                { code: "811", name: "蘆根" },
                { code: "812", name: "淡豆豉" }
            ]
        },
        {
            layer: "第四層 (813-816)",
            items: [
                { code: "813", name: "紫蘇" },
                { code: "814", name: "牡蠣" },
                { code: "815", name: "生地黃" },
                { code: "816", name: "甘草" }
            ]
        },
        {
            layer: "第五層 (817-819)",
            items: [
                { code: "817", name: "牛膝" },
                { code: "818", name: "牛蒡子" },
                { code: "819", name: "前胡" },
                { code: "無資料", name: "熟地" }
            ]
        },
        {
            layer: "第六層 (820-821)",
            items: [
                { code: "820", name: "澤瀉" },
                { code: "821", name: "陳皮" },
                { code: "無資料", name: "黨參" },
                { code: "無資料", name: "菊花" }
            ]
        }
    ],
    "700": [
        {
            layer: "第一層 (701-704)",
            items: [
                { code: "701", name: "當歸" },
                { code: "702", name: "獨活" },
                { code: "703", name: "炙甘草" },
                { code: "704", name: "川芎" }
            ]
        },
        {
            layer: "第二層 (705-708)",
            items: [
                { code: "705", name: "白芷" },
                { code: "706", name: "柴胡" },
                { code: "707", name: "荊芥" },
                { code: "708", name: "白芍" }
            ]
        },
        {
            layer: "第三層 (709-712)",
            items: [
                { code: "709", name: "生薑" },
                { code: "710", name: "茯苓" },
                { code: "711", name: "大棗" },
                { code: "712", name: "茶葉" }
            ]
        },
        {
            layer: "第四層 (713-716)",
            items: [
                { code: "713", name: "薄荷" },
                { code: "714", name: "枳殼" },
                { code: "715", name: "防風" },
                { code: "716", name: "土茯苓" }
            ]
        },
        {
            layer: "第五層 (717-720)",
            items: [
                { code: "717", name: "山茱萸" },
                { code: "718", name: "製半夏" },
                { code: "719", name: "北杏" },
                { code: "720", name: "紅花" }
            ]
        },
        {
            layer: "第六層 (721-724)",
            items: [
                { code: "721", name: "香附" },
                { code: "722", name: "薑活" },
                { code: "723", name: "肉桂皮" },
                { code: "724", name: "附子" }
            ]
        }
    ]
};

/**
 * 2. 藥材詳細教學資訊 (完整 59 項)
 * 根據先前對話內容補全，確保名稱與上方 MEDICINE_DATABASE 完全一致
 */
const medicines = [
    { name: "麻黃", property: "溫", toxicity: "無毒", nature: "辛、微苦。歸肺、膀胱經。", effect: "發汗解表，宣肺平喘，利水消腫。", usage: "煎服，2～10g。", notice: "表虛自汗及陰虛盜汗，咳喘由於腎不納氣的虛喘者慎用。", img: "麻黃.png" },
    { name: "桂枝", property: "溫", toxicity: "無毒", nature: "辛、甘。歸肺、心、膀胱經。", effect: "發汗解肌，溫經通脈，通陽化氣。", usage: "煎服，3～10g。", notice: "辛溫助陽，易傷陰耗血。孕婦及月經過多者慎。", img: "桂枝.png" },
    { name: "紫蘇葉", property: "溫", toxicity: "無毒", nature: "辛。歸肺、脾經。", effect: "發汗解表，理氣寬中，解魚蟹毒。", usage: "煎服，3～10g。不宜久煎。", notice: "無", img: "紫蘇葉.png" },
    { name: "生薑", property: "溫", toxicity: "無毒", nature: "辛。歸肺、脾、胃經。", effect: "解表散寒，溫中止嘔，溫肺止咳。", usage: "煎服，3～9g。", notice: "熱盛及陰虛內熱者忌服。", img: "生薑.png" },
    { name: "香薷", property: "微溫", toxicity: "無毒", nature: "辛。歸肺、胃、脾經。", effect: "發汗解表，化濕和中，利水消腫。", usage: "煎服，3～10g。不宜久煎。", notice: "汗多表虛者忌用。", img: "香薷.png" },
    { name: "荊芥", property: "微溫", toxicity: "無毒", nature: "辛。歸肺、肝經。", effect: "祛風解表，透疹止癢，消瘡，止血。", usage: "煎服，5～10g。", notice: "無", img: "荊芥.png" },
    { name: "防風", property: "微溫", toxicity: "無毒", nature: "辛、甘。歸膀胱、肝、脾經。", effect: "祛風解表，勝濕止痛，止痙，止瀉。", usage: "煎服，5～10g。", notice: "凡燥熱、陰虛血虧者慎用。", img: "防風.png" },
    { name: "羌活", property: "溫", toxicity: "無毒", nature: "辛、苦。歸膀胱、腎經。", effect: "解表散寒，祛風勝濕，止痛。", usage: "煎服，3～9g。", notice: "陰血虧虛者慎用。", img: "羌活.png" },
    { name: "白芷", property: "溫", toxicity: "無毒", nature: "辛。歸肺、胃、大腸經。", effect: "解表散寒，祛風止痛，通鼻竅，燥濕止帶。", usage: "煎服，3～9g。", notice: "辛香溫燥，陰虛血熱者忌服。", img: "白芷.png" },
    { name: "細辛", property: "溫", toxicity: "有小毒", nature: "辛。歸肺、腎、心經。", effect: "解表散寒，祛風止痛，通竅，溫肺化飲。", usage: "煎服，1～3g。", notice: "不宜與藜蘆同用。", img: "細辛.png" },
    { name: "藁本", property: "溫", toxicity: "無毒", nature: "辛。歸膀胱、肝經。", effect: "祛風散寒，勝濕止痛。", usage: "煎服，3～10g。", notice: "血虛頭痛及熱證均慎用。", img: "藁本.png" },
    { name: "蒼耳子", property: "溫", toxicity: "有小毒", nature: "辛、苦。歸肺經。", effect: "祛風解表，宣通鼻竅，除濕止痛。", usage: "煎服，3～10g。", notice: "血虛頭痛不宜用。", img: "蒼耳子.png" },
    { name: "薄荷", property: "涼", toxicity: "無毒", nature: "辛。歸肺、肝經。", effect: "發散風熱，清利頭目，利咽，透疹，疏肝解鬱。", usage: "煎服，3～6g。宜後下。", notice: "體虛多汗者不宜。", img: "薄荷.png" },
    { name: "牛蒡子", property: "寒", toxicity: "無毒", nature: "辛、苦。歸肺、胃經。", effect: "發散風熱，宣肺透疹，利咽散結。", usage: "煎服，6～12g。", notice: "脾虛便溏者慎用。", img: "牛蒡子.png" },
    { name: "蟬蛻", property: "寒", toxicity: "無毒", nature: "甘。歸肺、肝經。", effect: "發散風熱，透疹止癢，止痙，明目退翳。", usage: "煎服，3～6g。", notice: "孕婦慎用。", img: "蟬蛻.png" },
    { name: "桑葉", property: "寒", toxicity: "無毒", nature: "甘、苦。歸肺、肝經。", effect: "發散風熱，清肺止咳，平肝明目。", usage: "煎服，5～10g。", notice: "無", img: "桑葉.png" },
    { name: "菊花", property: "微寒", toxicity: "無毒", nature: "辛、甘、苦。歸肺、肝經。", effect: "發散風熱，清肝明目，平抑肝陽。", usage: "煎服，5～10g。", notice: "無", img: "菊花.png" },
    { name: "柴胡", property: "微寒", toxicity: "無毒", nature: "苦、辛。歸肝、膽經。", effect: "疏散退熱，疏肝解鬱，升舉陽氣。", usage: "煎服，3～10g。", notice: "肝陽上亢者忌用。", img: "柴胡.png" },
    { name: "葛根", property: "涼", toxicity: "無毒", nature: "甘、辛。歸脾、胃經。", effect: "解肌退熱，透疹，生津止渴，升陽止瀉。", usage: "煎服，9～15g。", notice: "無", img: "葛根.png" },
    { name: "金銀花", property: "寒", toxicity: "無毒", nature: "甘。歸肺、心、胃經。", effect: "清熱解毒，疏散風熱。", usage: "煎服，6～15g。", notice: "脾胃虛寒者忌用。", img: "金銀花.png" },
    { name: "連翹", property: "微寒", toxicity: "無毒", nature: "苦。歸肺、心、小腸經。", effect: "清熱解毒，消腫散結，疏散風熱。", usage: "煎服，6～15g。", notice: "無", img: "連翹.png" },
    { name: "黃芪", property: "溫", toxicity: "無毒", nature: "甘。歸脾、肺經。", effect: "補氣升陽，固表止汗，利水消腫。", usage: "煎服，9～30g。", notice: "凡表實邪盛、氣滯濕阻者忌用。", img: "黃芪.png" },
    { name: "山藥", property: "平", toxicity: "無毒", nature: "甘。歸脾、肺、腎經。", effect: "補脾養胃，生津益肺，補腎澀精。", usage: "煎服，15～30g。", notice: "濕盛中滿者不宜。", img: "山藥.png" },
    { name: "當歸", property: "溫", toxicity: "無毒", nature: "甘、辛。歸肝、心、脾經。", effect: "補血調經，活血止痛，潤腸通便。", usage: "煎服，6～12g。", notice: "濕盛中滿、大便泄瀉者忌服。", img: "當歸.png" },
    { name: "甘草", property: "平", toxicity: "無毒", nature: "甘。歸心、肺、脾、胃經。", effect: "補脾益氣，清熱解毒，祛痰止咳，緩急止痛，調和諸藥。", usage: "煎服，2～10g。", notice: "不宜與京大戟、甘遂、芫花同用。", img: "甘草.png" },
    { name: "茯苓", property: "平", toxicity: "無毒", nature: "甘、淡。歸心、肺、脾、腎經。", effect: "利水滲濕，健脾，安神。", usage: "煎服，10～15g。", notice: "無", img: "茯苓.png" },
    { name: "川芎", property: "溫", toxicity: "無毒", nature: "辛。歸肝、膽、心包經。", effect: "活血行氣，祛風止痛。", usage: "煎服，3～10g。", notice: "陰虛火旺、孕婦慎用。", img: "川芎.png" },
    { name: "陳皮", property: "溫", toxicity: "無毒", nature: "苦、辛。歸脾、肺經。", effect: "理氣健脾，燥濕化痰。", usage: "煎服，3～10g。", notice: "舌赤少津、內熱燥咳者慎用。", img: "陳皮.png" },
    { name: "黨參", property: "平", toxicity: "無毒", nature: "甘。歸脾、肺經。", effect: "補中益氣，健脾益肺。", usage: "煎服，9～30g。", notice: "不宜與藜蘆同用。", img: "黨參.png" },
    { name: "桔梗", property: "平", toxicity: "無毒", nature: "苦、辛。歸肺經。", effect: "宣肺，利咽，祛痰，排膿。", usage: "煎服，3～10g。", notice: "陰虛久咳、咯血者慎用。", img: "桔梗.png" },
    { name: "白芍", property: "微寒", toxicity: "無毒", nature: "苦、酸。歸肝、脾經。", effect: "養血調經，斂陰止汗，柔肝止痛，平抑肝陽。", usage: "煎服，6～15g。", notice: "不宜與藜蘆同用。", img: "白芍.png" },
    { name: "赤芍", property: "微寒", toxicity: "無毒", nature: "苦。歸肝經。", effect: "清熱涼血，散瘀止痛。", usage: "煎服，6～12g。", notice: "不宜與藜蘆同用。", img: "赤芍.png" },
    { name: "生地黃", property: "寒", toxicity: "無毒", nature: "甘、苦。歸心、肝、腎經。", effect: "清熱涼血，養陰生津。", usage: "煎服，10～15g。", notice: "脾虛便溏者忌用。", img: "生地黃.png" },
    { name: "熟地", property: "微溫", toxicity: "無毒", nature: "甘。歸肝、腎經。", effect: "補血養陰，填精益髓。", usage: "煎服，9～15g。", notice: "脾胃虛弱、氣滯痰多、腹滿便溏者慎用。", img: "熟地.png" },
    { name: "牡丹皮", property: "微寒", toxicity: "無毒", nature: "苦、辛。歸肝、腎經。", effect: "清熱涼血，活血散瘀。", usage: "煎服，6～12g。", notice: "血虛有寒、孕婦慎用。", img: "牡丹皮.png" },
    { name: "獨活", property: "微溫", toxicity: "無毒", nature: "辛、苦。歸腎、膀胱經。", effect: "祛風勝濕，止痛。", usage: "煎服，3～10g。", notice: "陰虛血燥者慎用。", img: "獨活.png" },
    { name: "牡蠣", property: "微寒", toxicity: "無毒", nature: "鹹、澀。歸肝、膽、腎經。", effect: "重鎮安神，平肝潛陽，軟堅散結，收斂固澀。", usage: "煎服，15～30g。宜先煎。", notice: "無", img: "牡蠣.png" },
    { name: "桃仁", property: "平", toxicity: "無毒", nature: "苦、甘。歸心、肝、大腸經。", effect: "活血祛瘀，潤腸通便，止咳平喘。", usage: "煎服，5～10g。宜搗碎。", notice: "孕婦慎用。", img: "桃仁.png" },
    { name: "蘆根", property: "寒", toxicity: "無毒", nature: "甘。歸肺、胃經。", effect: "清熱瀉火，生津止渴，除煩，止嘔，利尿。", usage: "煎服，15～30g。", notice: "無", img: "蘆根.png" },
    { name: "竹葉", property: "寒", toxicity: "無毒", nature: "甘、辛、淡。歸心、肺、胃經。", effect: "清熱除煩，生津，利尿。", usage: "煎服，6～15g。", notice: "無", img: "竹葉.png" },
    { name: "淡豆豉", property: "涼", toxicity: "無毒", nature: "辛、甘、微苦。歸肺、胃經。", effect: "解表，除煩，宣發鬱熱。", usage: "煎服，6～12g。", notice: "無", img: "淡豆豉.png" },
    { name: "牛膝", property: "平", toxicity: "無毒", nature: "苦、酸。歸肝、腎經。", effect: "逐瘀通經，補肝腎，強筋骨，利尿通淋，引血下行。", usage: "煎服，6～15g。", notice: "孕婦慎用。", img: "牛膝.png" },
    { name: "前胡", property: "微寒", toxicity: "無毒", nature: "苦、辛。歸肺經。", effect: "降氣化痰，宣散風熱。", usage: "煎服，6～10g。", notice: "無", img: "前胡.png" },
    { name: "澤瀉", property: "寒", toxicity: "無毒", nature: "甘、淡。歸腎、膀胱經。", effect: "利水滲濕，泄熱，通淋。", usage: "煎服，6～10g。", notice: "無", img: "澤瀉.png" },
    { name: "大棗", property: "溫", toxicity: "無毒", nature: "甘。歸脾、胃經。", effect: "補中益氣，養血安神，緩和藥性。", usage: "煎服，3～12g。", notice: "濕盛、脘腹脹滿、食積及蟲滯者忌服。", img: "大棗.png" },
    { name: "茶葉", property: "涼", toxicity: "無毒", nature: "苦、甘。歸心、肺、胃經。", effect: "清頭目，除煩渴，化痰，消食，利尿，解毒。", usage: "煎服或沖泡。", notice: "失眠者慎用。", img: "茶葉.png" },
    { name: "枳殼", property: "微寒", toxicity: "無毒", nature: "苦、辛、酸。歸脾、胃、大腸經。", effect: "理氣寬中，行滯消脹。", usage: "煎服，3～10g。", notice: "孕婦慎用。", img: "枳殼.png" },
    { name: "土茯苓", property: "平", toxicity: "無毒", nature: "甘、淡。歸肝、胃經。", effect: "解毒，除濕，通利關節。", usage: "煎服，15～60g。", notice: "服藥時忌茶。", img: "土茯苓.png" },
    { name: "山茱萸", property: "微溫", toxicity: "無毒", nature: "酸、澀。歸肝、腎經。", effect: "補益肝腎，收斂固澀。", usage: "煎服，6～12g。", notice: "命門火旺、素有濕熱者不宜用。", img: "山茱萸.png" },
    { name: "製半夏", property: "溫", toxicity: "有小毒", nature: "辛。歸脾、胃、肺經。", effect: "燥濕化痰，降逆止嘔，消痞散結。", usage: "煎服，3～9g。", notice: "不宜與川烏、草烏、附子同用。", img: "製半夏.png" },
    { name: "北杏", property: "微溫", toxicity: "有小毒", nature: "苦。歸肺、大腸經。", effect: "止咳平喘，潤腸通便。", usage: "煎服，3～10g。", notice: "嬰兒慎用。", img: "北杏.png" },
    { name: "紅花", property: "溫", toxicity: "無毒", nature: "辛。歸心、肝經。", effect: "活血通經，散瘀止痛。", usage: "煎服，3～10g。", notice: "孕婦忌用。", img: "紅花.png" },
    { name: "香附", property: "平", toxicity: "無毒", nature: "辛、微苦、微甘。歸肝、脾、三焦經。", effect: "疏肝解鬱，理氣寬中，調經止痛。", usage: "煎服，6～10g。", notice: "無", img: "香附.png" },
    { name: "肉桂皮", property: "大熱", toxicity: "無毒", nature: "辛、甘。歸腎、脾、心、肝經。", effect: "補火助陽，引火歸元，散寒止痛，溫通經脈。", usage: "煎服，1～5g。", notice: "孕婦忌用，不宜與赤石脂同用。", img: "肉桂皮.png" },
    { name: "薑活", property: "溫", toxicity: "無毒", nature: "辛、苦。歸膀胱、腎經。", effect: "解表散寒，祛風勝濕，止痛。", usage: "煎服，3～9g。", notice: "陰血虧虛者慎用。", img: "薑活.png" },
    { name: "附子", property: "大熱", toxicity: "有毒", nature: "辛、甘。歸腎、脾、心經。", effect: "回陽救逆，補火助陽，逐風寒濕邪。", usage: "煎服，3～15g。宜先煎。", notice: "孕婦忌用，不宜與半夏同用。", img: "附子.png" },
    { name: "炙甘草", property: "溫", toxicity: "無毒", nature: "甘。歸心、肺、脾、胃經。", effect: "補脾和胃，益氣養陰，通陽復脈。", usage: "煎服，2～10g。", notice: "不宜與京大戟、甘遂、芫花同用。", img: "炙甘草.png" },
    { name: "山楂", property: "微溫", toxicity: "無毒", nature: "酸、甘。歸脾、胃、肝經。", effect: "消食化積，行氣散瘀。", usage: "煎服，9～12g。", notice: "脾胃虛弱、無積滯者慎用。", img: "山楂.png" },
    { name: "白芷", property: "溫", toxicity: "無毒", nature: "辛。歸肺、胃、大腸經。", effect: "解表散寒，祛風止痛，通鼻竅。", usage: "煎服，3～9g。", notice: "陰虛血熱者忌服。", img: "白芷.png" }
];
