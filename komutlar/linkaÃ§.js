module.exports = ({
    name: "linkengelaç",
    code: `
    $onlyPerms[admin;Bunun İçin Yetkiniz Bulunmamaktadır !]
    $setServerVar[link;açık]
    $onlyIf[$getServerVar[link]!=açık;Bu Sistem Zaten Açık !]
    Link Engel Sistemi Başarıyla Açıldı.
    Kapatmak İçin Lütfen !linkengelkapat yazınız 
    `
    })