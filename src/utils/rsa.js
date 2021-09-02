// rsa加密
import JSEncrypt from 'jsencrypt'
const publicKey = 'MEgCQQC3NXE2B667ZrHC3SHBl5Hi7UpN24fwk+L2bOx94KEVwoBHnradggjn3c/fhk6v1db7PtD4vgArWMUqcUc1PkkrAgMBAAE='//公钥
const privateKey = `MIIBOwIBAAJBALc1cTYHrrtmscLdIcGXkeLtSk3bh/CT4vZs7H3goRXCgEeetp2C
COfdz9+GTq/V1vs+0Pi+ACtYxSpxRzU+SSsCAwEAAQJBAJwHMaF4LYGAVkfEmCkN
crs2p59jJYToDdUcstQJaGbkSxslNXxnS8Ah+Kz3bq7m0W7jzMii+e4CTS+5zu4+
LbECIQDoZRIwLEoMzcSUU+AaewdnnQ4ItetMABom+mvDDuYDNwIhAMnRZLNrvRbK
Low2IDX09AHnavhdK4IWVA9GtjgOi0utAiBE88AaxPlPpTnfXKeQk9JVntbMJNXk
nd8kk4anwGLkrwIhALCOpWBp4tSrMCmtuGQ71bRMtkJtkACQdB2hKQzFfItJAiAf
WVR0HbQDT+MoiLuvVWgdgFK380fs9uy5JO1OfI/luQ==`//私钥
//加密方法
function RSAencrypt(pas) {
    console.log(pas,publicKey)
    //实例化jsEncrypt对象
    let jse = new JSEncrypt();
    //设置公钥
    jse.setPublicKey(publicKey);
    console.log('加密：' + jse.encrypt(pas))
    return jse.encrypt(pas);
}
//解密方法
function RSAdecrypt(pas) {
    console.log(pas)
    let jse = new JSEncrypt();
    // 私钥
    jse.setPrivateKey(privateKey)
    console.log('解密：' + jse.decrypt(pas))
    return jse.decrypt(pas);
}
export { RSAencrypt, RSAdecrypt }