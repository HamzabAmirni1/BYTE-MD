
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "212624855939@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Va5mXGNLdQeXkib1M82X";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Va5mXGNLdQeXkib1M82X";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "212624855939";
global.owner = process.env.OWNER_NUMBER || "212624855939";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "{"noiseKey":{"private":{"type":"Buffer","data":"ULerTgVc4OBOJQbbPro+mklQlj+RwoWKHNYZDWgkxXk="},"public":{"type":"Buffer","data":"cDde23WaZq6PVa8e5cmjSEd2PSsdXSLZyPR8OqKlBDw="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"eNvaa9usyjwAlLUaVB+8VRjev7WoPTSeZMWK2I8jD24="},"public":{"type":"Buffer","data":"yHhtQSVioH+qiaomNQi/P2eN3+D/f0YlEeAvaQhVVDs="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"mJp7Gq+oGgonat35tBshHXYJ+hBYPGDmpl0WFaPGC08="},"public":{"type":"Buffer","data":"orXdU99NeDkUAuRJ7A9KYJK3mPjSF0ogNpHUg5LwdV8="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"IKp/nZ75I7uHTUrI4K+etVBoDHcrfNh6qf4JyJjWYEs="},"public":{"type":"Buffer","data":"RZQ/z7ZKbnwmfcITKejp7naOMl40h5XLD393MUnMXHY="}},"signature":{"type":"Buffer","data":"qKltTtMdCr8Z8/mXIXA3sR7EBzixx2/Fbsb4afvj2lKm9yCFvxpnAZSEcO/FeIfFYMzyfj0Ss3Iu3eVfd0KaDQ=="},"keyId":1},"registrationId":88,"advSecretKey":"oguZvGQxRQrqpCffHQgrN0Q5cPx+FokknOlm9FEZznI=","processedHistoryMessages":[{"key":{"remoteJid":"212624855939@s.whatsapp.net","fromMe":true,"id":"AA59A4E1530C469498A66270DABEFF99"},"messageTimestamp":1720042631}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"hl2xsk-oSxqjl8XHtw_jfw","phoneId":"b0278864-5845-4fdb-830c-e814a70a87f4","identityId":{"type":"Buffer","data":"qebSg9DJjycAi5mwpAVaOMYWr04="},"registered":true,"backupToken":{"type":"Buffer","data":"gH3YA3ONlo+JgBSh9ls1MwnLj2U="},"registration":{},"pairingCode":"1QBFYJZQ","me":{"id":"212624855939:15@s.whatsapp.net","name":"hamzaamirni"},"account":{"details":"CJeysOIEEPeIl7QGGAMgACgA","accountSignatureKey":"5iX865h+IM1Hnw2TlMvBA49xc3YLTcZvtsJtbmk4/R4=","accountSignature":"f1ONAkxiVulY11s4f/Fz7mRSKbfi7HUDoXnjpaE/jsGMr3SXr6ieOdZLLWGxU4mFtkCK66ncok7qeTg1xW0RBg==","deviceSignature":"jTqdBLW6K04YpYR/jzwDsjiKR+pIU/bh7/RCYCysrKy7GN0Ak3V7B5sjRdw8cb9IEofAWJ00jP02Bhyhp5FWBw=="},"signalIdentities":[{"identifier":{"name":"212624855939:15@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BeYl/OuYfiDNR58Nk5TLwQOPcXN2C03Gb7bCbW5pOP0e"}}],"platform":"smba","lastAccountSyncTimestamp":1720042621,"myAppStateKeyId":"AAAAAJZw"}" //Make sure session id starts with Byte;;;
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By TalkDrove*",
  author: process.env.PACK_AUTHER || "TalkDrove",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "BYTE-MD",
  ownername: process.env.OWNER_NAME || "Hamza",
  errorChat: process.env.ERROR_CHAT || "923072380380",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
