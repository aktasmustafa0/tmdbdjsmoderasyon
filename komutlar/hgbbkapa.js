module.exports = {
  name:"hg-bb-kapat",
  code:`
  Hoşgeldin-Baybay Sistemi Kapanmıştır.
  $resetServerVar[hgbb]
  $onlyIf[$hasPerms[$authorID;admin]!=false;Bunu Sadece \`\`Yönetici\`\` Yetkisi Olanlar Kullanabilir !]
  `
}