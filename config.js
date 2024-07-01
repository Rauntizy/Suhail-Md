const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348137939347";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_05_07_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjM4LFxuICAgICAgICA0MixcbiAgICAgICAgNzEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjEyLFxuICAgICAgICAwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDgzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTY4LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzIsXG4gICAgICAgIDg3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTQzLFxuICAgICAgICA0MCxcbiAgICAgICAgMjIyLFxuICAgICAgICA5OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDcsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTAwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDksXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDUxLFxuICAgICAgICA2MixcbiAgICAgICAgNTcsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjUsXG4gICAgICAgIDAsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDczLFxuICAgICAgICA2OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODUsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDY4LFxuICAgICAgICAyMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTIsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDYwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTksXG4gICAgICAgIDEyMixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0LFxuICAgICAgICA1NixcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTU4LFxuICAgICAgICA3MixcbiAgICAgICAgMTQzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDYyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDgzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAzMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTExLFxuICAgICAgICA0NixcbiAgICAgICAgMzIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQwLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNixcbiAgICAgICAgMjYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTEyLFxuICAgICAgICAzMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwMixcbiAgICAgICAgODQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDY5LFxuICAgICAgICAxODEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDU0LFxuICAgICAgICAyNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDUxLFxuICAgICAgICA2NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODgsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkY3VStFWkxPWDlJQnZFWW8vZXZIN1NPQVBXRDdOVmJmVml5b21PS0pyek09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIl9oZXE1MEpUVHdDUU9TZ1JpREJ4MHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzczODg1ZjctMzJhMS00OGFhLTkxZGUtZjE1MDBiNGNiMzcxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNixcbiAgICAgIDcyLFxuICAgICAgMTM2LFxuICAgICAgOTIsXG4gICAgICAxMDIsXG4gICAgICAxODAsXG4gICAgICAxMDAsXG4gICAgICAyLFxuICAgICAgMjE2LFxuICAgICAgODcsXG4gICAgICA4OCxcbiAgICAgIDIzMSxcbiAgICAgIDE2MixcbiAgICAgIDEyNCxcbiAgICAgIDE2OCxcbiAgICAgIDIxMyxcbiAgICAgIDE0MyxcbiAgICAgIDEwMixcbiAgICAgIDI0MSxcbiAgICAgIDIzNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTksXG4gICAgICA2MCxcbiAgICAgIDM5LFxuICAgICAgMTQxLFxuICAgICAgMjUxLFxuICAgICAgMTEzLFxuICAgICAgMTAwLFxuICAgICAgMjIsXG4gICAgICAxMjMsXG4gICAgICAxMjEsXG4gICAgICAxODcsXG4gICAgICAxNjMsXG4gICAgICAwLFxuICAgICAgMTU5LFxuICAgICAgMTI4LFxuICAgICAgMTg5LFxuICAgICAgMzgsXG4gICAgICAxLFxuICAgICAgMjI4LFxuICAgICAgMTYxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkhDQlRXNTFLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTM3OTM5MzQ3OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjExNDc3ODczOTU3MjkzOTozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BmVm85SUJFTDNEaTdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVGJ6UEJiRGZYcUxkVVdzSzFObVYxNE9BQnNaNVE2UkltL3NROSs1c25UQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJzbktiYVc0ak9HQ2h1RHAyYXVJZXdFZHpPVGJ4Tm1tQm1IeS9sVjZFampibXR0czEwaDEvdTE5SkplbElOdlF1UytDbG96RTY3NDBRaDUvMHFsV2ZCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJoV3QxMy91dWJFT3ZaUjJIVHhFdjlYYmRnWm9TM3hsQVdGOWgxTzRxMVRwU3JYS0hSajRkU1VmMmxRUytGYnpHSENxblI2Rm1HS0tnQXoyOXpkWHRBQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTM3OTM5MzQ3OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDQ4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk4NTM1MDVcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
