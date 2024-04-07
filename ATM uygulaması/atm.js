let bakiye = 1000;
const yeniSatir = "\r\n";

let metin = "1-bakiye görüntüleme"+yeniSatir
+"2-para çekme" +yeniSatir
+"3-para yatırma" +yeniSatir
+"4-çıkış" +yeniSatir
"lütfen yapmak istediğiniz işlemi seçiniz."

let secim = prompt(metin);
switch(secim){
    case "1" :
        alert("bakiyeniz: "+bakiye);
        break;
        case "2" :
            let cekilecekTutar = Number(prompt("çekmek istediğiniz tutarı giriniz: ")); 
            if(cekilecekTutar<bakiye){
                alert("kalan bakiye: "+ (bakiye-cekilecekTutar));
            }else {
                alert("bakiyeniz yetersiz");
            }
            break;
            case "3":
                let yatırılacakTutar = Number(prompt("yatırmak istediğiniz tutarı giriniz"));
                bakiye = yatırılacakTutar+bakiye;
                alert("güncel bakiyeniz: "+bakiye);
                break;

                case "4": 
              alert("sistemden çıkış yapılmıştır.");
              break;

              default:
             alert("lütfen 1-4 arası seçim yapınız.")
             break;




}
