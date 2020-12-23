module.exports = {
  name:"banyetkilisi",
  code:`
Ban Yetkilisi Ayarlanmıştır.
Ayarlanan Rol \`\`$roleName[$mentionedRoles[1]]\`\`
$setServerVar[banrol;$roleName[$mentionedRoles[1]]]
$onlyPerms[admin;Bunun İçin Yetkiniz Bulunmamaktadır !]
$suppressErrors[Etiketlenen Bir Rol Değil !]
$onlyIf[$message!=;Ban-Rol Ayarlamam İçin Bir Rol Etiketlemelisin !]
`
}