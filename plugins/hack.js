    pattern: "menus",
    type: "MENU list",
    info: "user",
    dontAddCommandList: true,
  },
  async (_0x22514a) => {
    try {
      let _0x20ed34 = (
        "\n*➮ᴜᴘ ᴛɪᴍᴇ :* " +
        runtime(process.uptime()) +
        "\n*➮ᴛᴏᴅᴀʏ ɪs :* " +
        _0x22514a.date +
        "\n*➮ɴᴏᴡ ᴛɪᴍᴇ :* " +
        _0x22514a.time +
        "\n\n➮Fᴏᴜɴᴅᴇʀ- Rush Team\n➮Oᴡɴᴇʀ - " +
        Config.ownername +
        "\n➮Nᴜᴍ - " +
        owner.split(",")[0] +
        "\n➮Mᴇᴍᴏ - " +
        formatp(os.totalmem() - os.freemem()) +
        "/" +
        formatp(os.totalmem()) +
        "\n\n *🧑‍💻 :* Rushmd\n\n" +
        readmore +
        "\n╭──❰ *ALL MENU* ❱\n│🏮 Lɪꜱᴛ\n│🏮 Cᴀᴛᴇɢᴏʀʏ\n│🏮 Hᴇʟᴘ\n│🏮 Aʟɪᴠᴇ\n│🏮 Uᴘᴛɪᴍᴇ\n│🏮 Wᴇᴀᴛʜᴇʀ\n│🏮 Lɪɴᴋ\n│🏮 Cᴘᴜ\n│🏮 Rᴇᴘᴏꜱɪᴛᴏʀʏ\n╰─────────────⦁"
      ).trim();
      return await _0x22514a.bot.sendUi(_0x22514a.from, {
        caption: _0x20ed34,
      });
    } catch (_0x450fce) {
      await _0x22514a.error(_0x450fce + "\nCommand:menus", _0x450fce);
    }
  }
);
Rush_patch.cmd(
  {
    pattern: "pala",
    desc: "To check ping",
    category: "user",
    fromMe: true,
    filename: __filename,
  },
  async (_0x5d887, _0x291296, { Void: _0x43ee74 }) => {
    try {
      if (!_0x291296) {
        return await _0x5d887.send(
          "*_how is pala_*"
        );
      }
      let _0x584a9e = _0x291296.split(",");
      var _0x5b0dfd;
      var _0x3be11d;
      let _0x17bd8a = false;
      if (_0x5d887.quoted) {
        let _0x1f29ea = _0x5d887.quoted.mtype;
        if (_0x1f29ea == "stickerMessage" && _0x291296) {
          _0x17bd8a = true;
          _0x5b0dfd = _0x291296.split(" ")[0];
          _0x3be11d = "sticker-" + _0x5d887.quoted.msg.fileSha256;
        }
      }
      if (!_0x17bd8a && _0x584a9e.length > 1) {
        _0x3be11d = _0x584a9e[0].trim().toLowerCase();
        _0x5b0dfd = _0x584a9e[1].trim().toLowerCase();
      } else if (!_0x17bd8a) {
        return await _0x5d887.send(
          "*_Uhh Dear, Give Cmd With New Name_*\n*Eg: _.setcmd New_Name, Cmd_Name_*"
        );
      }
      if (_0x3be11d.length < 1) {
        return await _0x5d887.reply(
          "*_Uhh Please, Provide New_Cmd Name First_*"
        );
      }
      if (global.setCmdAlias[_0x3be11d]) {
        return await _0x5d887.send(
          '*_"' +
            (_0x17bd8a ? "Given Sticker" : _0x3be11d) +
            '" Already set for "' +
            global.setCmdAlias[_0x3be11d] +
            '" Cmd, Please try another ' +
            (_0x17bd8a ? "Sticker" : "Name") +
            "_*"
        );
      }
