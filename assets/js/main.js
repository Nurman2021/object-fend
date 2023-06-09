let donut = {rasa: 'cokelat', harga: 20000, toping: ['meses', 'coco pandan', 'taburan cokelat']}

let toping_donut = donut.toping[1];

let terima_donut = document.getElementById("donut");

terima_donut.innerHTML=toping_donut;