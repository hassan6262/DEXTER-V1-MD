const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0h3UjVhT2FBQURjblIxVjBUNTJLNXZPYmpsTHlXSnQvYjV5QnpuQ3oyMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVmFTcHhWUHB5V3owakF0aldWNC9uTnJIZ3E0ZFF5WjhtY1p5TVN3ZG9DTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHTHp2cUpzYU9JU2EvTGJUQlcwWUs0Y1hvUVZkaVNsbVhwMkNiMFBPZFg0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvRDlHS25FMXlaYjU5aG1HODA5Q21ucE9YT1grQ1BPQnM4Vk16NG5iQVhnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitEcWZWNjdIRXR1eUkyVW1DSGFjbjFNV1puMVc3bUNVcXFOS3M0c0NXMDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNFa25DdGJaQ2hyNzJHbDY4RGV2bHl4bWF2RTRFdVVuOVhiTWkxMXNjd2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0RwU2J0YlZlWDVFZ2RtVi8rQ3g3U0xYbmZuTGZDaFNMa0dOMlUyODEyaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0JTYnk3b09sOWwzUDViQXJibzFJYVcwc1F1aWtYWWwvRlJhZ1M4TXVSVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdOdVpvNE94a21TT093NktlT2FHTG02eTgxUHNaR3o4TzlkVW5KUDhvZmVnTWxlZGZEU0REMUNKb3grcFRydU84WXNvY0RyZzdhT0tXQ2c5UVIwaEJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODksImFkdlNlY3JldEtleSI6IkdRakFqaDAwU1BoRy9HRzBITFo1Mi9PdXBNdVJsR3JyaXV2eVluZnpKd2c9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiNDQ3OTIzNDM2MDQwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkIxQTczNTlCOEU3NzE4MjFEREY3NUMwQkMzREQxMjFFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzU3Nzc2NDV9LHsia2V5Ijp7InJlbW90ZUppZCI6IjQ0NzkyMzQzNjA0MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwNzgwQTIwOUI1MTA0QjJFMDJDRjk1NzU5NDE3MTYzNCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM1Nzc3NjQ1fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIwMGdrQWc5dVQ2S0lGdjFRUUVQa0ZBIiwicGhvbmVJZCI6ImJkZTQ5ZTU3LTllYWItNGNkMC04ODJmLTdlMDViNDUzNDQ4MyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFVmFpcXNmL2JEWHNRdGRIQ1R0MlRuK1ZDQjQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR2NRK09tSHhXR0FCSkJOY0R0MkdhbUdueWJjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkNUNldDN01aIiwibWUiOnsiaWQiOiI0NDc5MjM0MzYwNDA6MTdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoibm1yYSBVSyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSXY0N2JnQkVONjYxN3NHR0JJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiR3hrK3F3TWxDVUJ4dE5wTStZcEIraWxFeTZHYVNKUnlWdWgyME1ybGdVOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSXFmOHUxdUNNZHg3VFBxL1RSWkRkTUtha2hDcGdBS1U3dnhZQnZOVXVlT1dUd2NhZDBSY3lPZndlNndVWjMrcnJJZitkbWw2RUUyN1A2Z0o5M2d3QlE9PSIsImRldmljZVNpZ25hdHVyZSI6Imk1STJnRFhsQ1lQbEdha1ppM3dGKzFQSmVGUUo5bStxTHZURjErN1lOMjhRaStneXJZbTdqVjllQnZ2UDJzZFpLTFJwNFYwSWtvR1pQQk9HaHVPeUFBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNDQ3OTIzNDM2MDQwOjE3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJzWlBxc0RKUWxBY2JUYVRQbUtRZm9wUk11aG1raVVjbGJvZHRESzVZRlAifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzU3Nzc2NDQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRlByIn0=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "⚔  dexter  ⚔",
    NUMERO_OWNER : process.env.OWNER_NUMBER || "",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "oui",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    BOT : process.env.BOT_NAME || 'DEXTER-MD',
    OPENAI_API_KEY : process.env.OPENAI_API_KEY || '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',
    URL : process.env.BOT_MENU_LINKS || 'https://static.animecorner.me/2023/08/op2.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_API_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    //GPT : process.env.OPENAI_API_KEY || '',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true, rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
