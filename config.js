
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
  "{"noiseKey":{"private":{"type":"Buffer","data":"2FH5UWrJawBR4+DQUGiLxphfbfOzjJNq6YhTXA3972Q="},"public":{"type":"Buffer","data":"4d9N3F5uumSTNtjQ5aCrXIi11vHK9BUm6PvdhibJA34="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"OHh3irTRculXGNf/14xXquUbeV/8frcJR6G3WMIAY2w="},"public":{"type":"Buffer","data":"VIL8HCnOgWX1lOAlhY7QXo6kajMb4+qlIigo8CYTxmI="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"aBn5yoaJLjeoevS/fenyN4yHGEcmjjQcJttt/b8Ou2g="},"public":{"type":"Buffer","data":"wsQTVK9MDK55H/BEzIWA5lr+8aqs9ujbddyUDsrMTXo="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"yON7qwylvOgINr5k6L331KhMQTyLnH2L83Vl7MGBN1U="},"public":{"type":"Buffer","data":"ccH3Gj1GlN9zDMOn9Xx1bfiaPSKeyyP1rlKB+glcLHc="}},"signature":{"type":"Buffer","data":"LA7cV1LAwbpKn7Py/xnayg6ARGx6pRIcvnWodaOfjPJV0TUE/wyFOhN/2ZRlvPPe1WnM2d2SpiY6ZiOsm8oaCg=="},"keyId":1},"registrationId":189,"advSecretKey":"rdLx3yBzXkrRI1MXvi7pzme2xajwgC8tkMKr8KnQrX0=","processedHistoryMessages":[{"key":{"remoteJid":"212708869993@s.whatsapp.net","fromMe":true,"id":"BD242E92491BF78D7583BD32C740EE6B"},"messageTimestamp":1720038658},{"key":{"remoteJid":"212708869993@s.whatsapp.net","fromMe":true,"id":"C6D1AFBA9BDD9CF58A0BFDF6E471E6ED"},"messageTimestamp":1720038663}],"nextPreKeyId":61,"firstUnuploadedPreKeyId":61,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"deviceId":"C7Bu0yJQQpWbLIxASmNaAw","phoneId":"81fc4df4-8218-4aa6-b089-b5d375f1a48d","identityId":{"type":"Buffer","data":"WNOtvjcqcmHeQnxlV07ylVNQ17A="},"registered":true,"backupToken":{"type":"Buffer","data":"haAV/dikkoio9IxX6xQTXmaGAuQ="},"registration":{},"pairingCode":"E6MRQZEC","me":{"id":"212708869993:16@s.whatsapp.net","name":"bot amirni","lid":"154949870690457:16@lid"},"account":{"details":"CKmY/GcQ+emWtAYYAiAAKAA=","accountSignatureKey":"ZdCuZ0uRp+oha0updAs57FpisM5vyZPiIDnuLi4x6C4=","accountSignature":"y7oZbY2v1FBogq/7/XIiTQTrC+yEstsmuI9vr/iNIgQ5bkpoLpgdbg5xf5jH6plVyyJHSPNhJ0TLRqjvCq5GCQ==","deviceSignature":"heMCdOlwY/nN4ifOPb1OHWEpywTUNLpxBQ9qb5En0dO+KZv9DqCVZWZipQ9Fq0keFbhsRRslwpFMMJZJDTjUDQ=="},"signalIdentities":[{"identifier":{"name":"212708869993:16@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BWXQrmdLkafqIWtLqXQLOexaYrDOb8mT4iA57i4uMegu"}}],"platform":"smba","lastAccountSyncTimestamp":1720038653,"myAppStateKeyId":"AAAAAEoL"}"
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
