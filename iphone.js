var iphone = {
    Merek: 'Apple iPhone 14 Pro Max',
    Layar: 'LTPO Super Retina XDR OLED 6.7 inci',
    RAM: '6 GB',
    Warna: 'abu-abu'
};


// Objek iPhone 14
function Iphone(Merek, Layar, RAM, Warna) {
    this.Merek = Merek;
    this.Layar = Layar;
    this.RAM = RAM;
    this.Warna = Warna;
}

var iphone_14 = new Iphone(
    'Apple iPhone 14 Pro Max',
    'LTPO Super Retina XDR OLED 6.7 inci',
    '6 GB',
    'abu-abu'

);
var terimaa_iphone = document.getElementsByClassName('iphone14');
terimaa_iphone[0].innerHTML = iphone.Merek;
terimaa_iphone[1].innerHTML = iphone.Layar;
terimaa_iphone[2].innerHTML = iphone.RAM;
terimaa_iphone[3].innerHTML = iphone.Warna

// Objek iPhone 13
var iphone13 = new Iphone(
    'Apple iPhone 13 Pro Max',
    'Super Retina XDR OLED 6.1 inci',
    '4 GB',
    'biru'
);
var terimaa_iphone13 = document.getElementsByClassName('iphone13');
terimaa_iphone13[0].innerHTML = iphone13.Merek;
terimaa_iphone13[1].innerHTML = iphone13.Layar;
terimaa_iphone13[2].innerHTML = iphone13.RAM;
terimaa_iphone13[3].innerHTML = iphone13.Warna

// Objek iPhone 12
var iphone12 = new Iphone(
    'Apple iPhone 12 Pro Max',
    'Super Retina XDR OLED 6.7 inci',
    '6 GB',
    'silver'
);
var terimaa_iphone12 = document.getElementsByClassName('iphone12');
terimaa_iphone12[0].innerHTML = iphone12.Merek;
terimaa_iphone12[1].innerHTML = iphone12.Layar;
terimaa_iphone12[2].innerHTML = iphone12.RAM;
terimaa_iphone12[3].innerHTML = iphone12.Warna
