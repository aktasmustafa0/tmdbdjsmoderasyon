module.exports = ({
    name:"linkengelkapat",
    code: `
    $onlyPerms[admin;Bunun İçin Yetkiniz Bulunmamaktadır !]
    $resetServerVar[link;kapalı]
    $onlyIf[$getServerVar[link]!=kapalı;Bu Sistem Zaten Kapalı !]
    Link Engel Sistemi Başarıyla Kapatıldı.
    Açmak İçin Lütfen !linkengel-aç Yazınız !
    `
    })