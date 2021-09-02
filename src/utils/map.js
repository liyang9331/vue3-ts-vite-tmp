function getMap(b) {
    var a = ""; 
    switch (b.replace(/\s*/g, "").replace("\u7701", "")) {
        case "\u5317\u4eac": a = "Beijing"; break;
        case "\u4e0a\u6d77": a = "Shanghai"; break;
        case "\u5929\u6d25": a = "Tianjin"; break;
        case "\u56db\u5ddd": a = "Sichuan"; break;
        case "\u5c71\u4e1c": a = "Shandong"; break;
        case "\u6e56\u5317": a = "hubei"; break;
        case "\u6c5f\u82cf": a = "Jiangsu"; break;
        case "\u91cd\u5e86": a = "Chongqing"; break;
        case "\u6d59\u6c5f": a = "Zhejiang"; break;
        case "\u6c5f\u897f": a = "Jiangxi"; break;
        case "\u5b89\u5fbd": a = "Anhui"; break;
        case "\u6e56\u5357": a = "Hunan"; break;
        case "\u8fbd\u5b81": a = "Liaoning"; break;
        case "\u5409\u6797": a = "Jiling"; break;
        case "\u9ed1\u9f99\u6c5f": a = "Heilongjiang"; break;
        case "\u5c71\u897f": a = "Shanxi"; break;
        case "\u9752\u6d77": a = "Qinhai"; break;
        case "\u9655\u897f": a = "Shaanxi"; break;
        case "\u7518\u8083": a = "Ganshu"; break;
        case "\u5185\u8499\u53e4": a = "Neimenggu"; break;
        case "\u5b81\u590f": a = "Ningxia"; break;
        case "\u5e7f\u4e1c": a = "Guangdong"; break;
        case "\u65b0\u7586": a = "Xinjiang"; break;
        case "\u897f\u85cf": a = "Xizhang"; break;
        case "\u8d35\u5dde": a = "Guizhou"; break;
        case "\u4e91\u5357": a = "Yunnan"; break;
        case "\u6cb3\u5357": a = "Henan"; break;
        case "\u6d77\u5357": a = "Hainan"; break;
        case "\u5e7f\u897f": a = "Guangxi"; break;
        case "\u798f\u5efa": a = "Fujian"; break;
        case "\u6cb3\u5317": a = "Hebei"
    }
    return a
}
export default getMap