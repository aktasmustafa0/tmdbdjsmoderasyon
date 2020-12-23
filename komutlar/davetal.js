module.exports =({
  name:"davetal",
  code:`
  $color[RANDOM]
  $description[$thumbnail[$userAvatar[$mentioned[1]]]
  Bot İsmi : $username[$mentioned[1]]#$discriminator[$mentioned[1]]
  Bot Kuruluş Tarihi : $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$mentioned[1];time];years;Yıl;-1];year;Yıl;-1];months;Ay;-1];month;Ay;-1];weeks;Hafta;-1];week;Hafta;-1];days;Gün;-1];day;Gün;-1];hour;Saat;-1];hours;Saat;-1];minute;Dakika;-1];minutes;Dakika;-1];and;Ve;-1];seconds;Saniye Önce Kuruldu !;-1];second;Saniye Önce Kuruldu !;-1]
  
  -8 Perm- Rollü Davet Linki = [Buraya Tıklayınız\\](https://discord.com/oauth2/authorize?client_id=$mentioned[1]&scope=bot&permissions=8)
  
  -0 Perm- Rolsüz Davet Linki = [Buraya Tıklayınız\\](https://discord.com/oauth2/authorize?client_id=$mentioned[1]&scope=bot&permissions=0)
  ] 
  $footer[İsteyen Kişi $username#$discriminator;$authorAvatar]
  $onlyIf[$isBot[$mentioned[1]]!=false;Etiketlediğin Kişi Bir Bot Değil !]
  $onlyIf[$message!=;Bir Bot Etiketle !]
  `
})