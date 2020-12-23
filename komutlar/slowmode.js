module.exports = {
  name:"slowmode",
  code:`
 Kanalın Yavaş-Modu \`\`$message\`\` Olarak Ayarlandı !
$slowmode[$channelID;$messages] $onlyIf[$hasPerms[$authorID;managechannels]==true;Bu Komudu Sadece \`\`Kanalları Yönet\`\` Olanlar Kullanabilir !]

  $onlyIf[$isNumber[$message]==true;Girdiğin Bir Rakam Değil !]
  $onlyIf[$message[1]>=0;Girdiğin Rakam 0'ın Altında Olamaz !]
  $onlyIf[$message!=;Bir Rakam Girmedin !]
  `
}