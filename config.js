const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '94761516805'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://SithumKalhara:97531@cluster0.iva7dbo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'Sithumkalhara271@gmail.com'
global.github = 'https://github.com/Sithuwa/SITHUWA-MD'
global.location = 'Sri Lanka'
global.gurl = 'https://instagram.com' // add your username
global.sudo = process.env.SUDO || "94761516805"
global.devs = '94761516805';
global.website = 'https://github.com/Sithuwa/SITHUWA-MD' //wa.me/+94000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/15b1dd8aeaa47888d75d7.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0h3UjVhT2FBQURjblIxVjBUNTJLNXZPYmpsTHlXSnQvYjV5QnpuQ3oyMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVmFTcHhWUHB5V3owakF0aldWNC9uTnJIZ3E0ZFF5WjhtY1p5TVN3ZG9DTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHTHp2cUpzYU9JU2EvTGJUQlcwWUs0Y1hvUVZkaVNsbVhwMkNiMFBPZFg0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvRDlHS25FMXlaYjU5aG1HODA5Q21ucE9YT1grQ1BPQnM4Vk16NG5iQVhnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitEcWZWNjdIRXR1eUkyVW1DSGFjbjFNV1puMVc3bUNVcXFOS3M0c0NXMDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNFa25DdGJaQ2hyNzJHbDY4RGV2bHl4bWF2RTRFdVVuOVhiTWkxMXNjd2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0RwU2J0YlZlWDVFZ2RtVi8rQ3g3U0xYbmZuTGZDaFNMa0dOMlUyODEyaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0JTYnk3b09sOWwzUDViQXJibzFJYVcwc1F1aWtYWWwvRlJhZ1M4TXVSVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdOdVpvNE94a21TT093NktlT2FHTG02eTgxUHNaR3o4TzlkVW5KUDhvZmVnTWxlZGZEU0REMUNKb3grcFRydU84WXNvY0RyZzdhT0tXQ2c5UVIwaEJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODksImFkdlNlY3JldEtleSI6IkdRakFqaDAwU1BoRy9HRzBITFo1Mi9PdXBNdVJsR3JyaXV2eVluZnpKd2c9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiNDQ3OTIzNDM2MDQwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkIxQTczNTlCOEU3NzE4MjFEREY3NUMwQkMzREQxMjFFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzU3Nzc2NDV9LHsia2V5Ijp7InJlbW90ZUppZCI6IjQ0NzkyMzQzNjA0MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwNzgwQTIwOUI1MTA0QjJFMDJDRjk1NzU5NDE3MTYzNCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM1Nzc3NjQ1fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIwMGdrQWc5dVQ2S0lGdjFRUUVQa0ZBIiwicGhvbmVJZCI6ImJkZTQ5ZTU3LTllYWItNGNkMC04ODJmLTdlMDViNDUzNDQ4MyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFVmFpcXNmL2JEWHNRdGRIQ1R0MlRuK1ZDQjQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR2NRK09tSHhXR0FCSkJOY0R0MkdhbUdueWJjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkNUNldDN01aIiwibWUiOnsiaWQiOiI0NDc5MjM0MzYwNDA6MTdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoibm1yYSBVSyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSXY0N2JnQkVONjYxN3NHR0JJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiR3hrK3F3TWxDVUJ4dE5wTStZcEIraWxFeTZHYVNKUnlWdWgyME1ybGdVOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSXFmOHUxdUNNZHg3VFBxL1RSWkRkTUtha2hDcGdBS1U3dnhZQnZOVXVlT1dUd2NhZDBSY3lPZndlNndVWjMrcnJJZitkbWw2RUUyN1A2Z0o5M2d3QlE9PSIsImRldmljZVNpZ25hdHVyZSI6Imk1STJnRFhsQ1lQbEdha1ppM3dGKzFQSmVGUUo5bStxTHZURjErN1lOMjhRaStneXJZbTdqVjllQnZ2UDJzZFpLTFJwNFYwSWtvR1pQQk9HaHVPeUFBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNDQ3OTIzNDM2MDQwOjE3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJzWlBxc0RKUWxBY2JUYVRQbUtRZm9wUk11aG1raVVjbGJvZHRESzVZRlAifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzU3Nzc2NDQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRlByIn0=",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'SITHUWA BOT',
  packname:  process.env.PACK_NAME || 'MADE BY SITHUM KALHARA',
  
  botname:   process.env.BOT_NAME === undefined ? "SITHUWA-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'sithumkalhara' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱɪᴛʜᴜᴡᴀ-ᴍᴅ•* ",   //*『sᴜʙsᴄʀɪʙᴇ • ʙʟᴀᴅᴇ ᴛᴇᴄʜ』*\n youtube.com/@blade444"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'sithuwa-md',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
