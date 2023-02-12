var quotes = [
    "“Il leone usa tutta la sua forza anche per uccidere un coniglio.”",
    "“Quando muovi, sii rapido come il vento, maestoso come la foresta, avido come il fuoco, incrollabile come la montagna.”",
    "“L’attacco migliore è quello che non fa capire dove difendersi. La difesa migliore è quella che non fa capire dove attaccare.”",
    "“Conosci il nemico come conosci te stesso. Se fari così, anche in mezzo a cento battaglie non ti troverai mai in pericolo.”",
    "“Se sei lontano dal nemico, fagli credere di essere vicino.”",
    "“Tutti possono vedere la mie tattiche, nessuno può conoscere la mia strategia.”",
    "“Un esercito confuso conduce all'altrui vittoria.”",
    "“Se la situazione è vantaggiosa, agisci. Se non lo è, fermati.”",
    "“Con l’ordine affronta il disordine. Con la calma affronta l’irruenza. Questa è l’arte di padroneggiare la mente.”"
];

var quote = quotes[Math.floor(Math.random()*quotes.length)];

document.getElementById("hero-title").innerHTML = quote;


