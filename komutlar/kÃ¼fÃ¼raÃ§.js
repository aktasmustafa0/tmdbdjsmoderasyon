module.exports = ({
    name:"küfüraç",
    code: `
    $onlyPerms[admin;Bunun İçin Yetkiniz Bulunmamaktadır !]
    $setServerVar[küfür;açık]
    $onlyIf[$getServerVar[küfür]!=açık;Bu Sistem Zaten Açık !]
    Küfür Engel Sistemi Başarıyla Kapatıldı.
    Açmak İçin Lütfen !küfürkapat Yazınız !
    `
    })