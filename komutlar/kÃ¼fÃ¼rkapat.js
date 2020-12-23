module.exports = ({
    name:"küfürkapat",
    code: `
    $onlyPerms[admin;Bunun İçin Yetkiniz Bulunmamaktadır !]
    $resetServerVar[küfür]
    $onlyIf[$getServerVar[küfür]!=kapalı;Bu Sistem Zaten Kapalı !]
    Küfür Engel Sistemi Başarıyla Kapatıldı.
    Açmak İçin Lütfen !küfüraç Yazınız !
    `
    })