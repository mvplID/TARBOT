module.exports = Object.freeze({
  TOKEN: '1690598764:AAFXUpEklBaND1PVuEwa6jcB4hljbn5hp6k',
  ARIA_SECRET: 'myaria2',
  ARIA_DOWNLOAD_LOCATION: '/home/user/path/to/download/dir (no trailing "/")',
  ARIA_DOWNLOAD_LOCATION_ROOT: '/', //The mountpoint that contains ARIA_DOWNLOAD_LOCATION
  ARIA_FILTERED_DOMAINS: ['yts', 'YTS', 'cruzing.xyz', 'eztv.ag', 'YIFY'], // Prevent downloading from URLs containing these substrings
  ARIA_FILTERED_FILENAMES: ['YIFY'], // Files/top level directories with these substrings in the filename won't be downloaded
  ARIA_PORT: 8210, // Port for aria2c RPC server, if you change this here, make sure to update aria.sh as well
  GDRIVE_PARENT_DIR_ID: '0AHyzvHb5uEskUk9PVA',
  OTHER_GDRIVE_DIR_IDS: [14JytVDfPO8CtT2_UAIpXdo2xmfZWH5bW, 1IZxKyYd_wY4lyAyzTVTwoNXYPi9sE613, 1U61-w4mDXkLnNIr9LHUgE9eVPW5Xa_aT], // This is needed if u want to look for files in multiple dirs on list command
  SUDO_USERS: [912869129, 920726575, 1065436084],	// Telegram user IDs. These users can use the bot in any chat.
  AUTHORIZED_CHATS: [1257467260, 1065436084, -1001380920810, 920726575, 969941333, -1001257467260],	// Telegram chat IDs. Anyone in these chats can use the bot.
  STATUS_UPDATE_INTERVAL_MS: 12000, // A smaller number will update faster, but might cause rate limiting
  DRIVE_FILE_PRIVATE: {
    ENABLED: false,
    EMAILS: ['someMail@gmail.com', 'someOtherMail@gmail.com']
  },
  DOWNLOAD_NOTIFY_TARGET: {  // Information about the web service to notify on download completion.
    enabled: false,   // Set this to true to use the notify functionality
    host: 'hostname.domain',
    port: 80,
    path: '/botNotify'
  },
  COMMANDS_USE_BOT_NAME: {
    ENABLED: false,  // If true, all commands except '/list' has to have the bot username after the command
    NAME: "@nameOf_bot"
  },
  IS_TEAM_DRIVE: true,
  USE_SERVICE_ACCOUNT: true,
  INDEX_DOMAIN: "",
  TELEGRAPH_TOKEN: '041b99ce687ce61e08013045cfe66e45c80830e5dc5f4678ed116abc2a0a' // Telegraph token, if you want to show search results in telegra.ph else keep it blank
});
