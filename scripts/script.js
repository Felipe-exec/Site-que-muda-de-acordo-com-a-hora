function load() {

    var msg = window.document.getElementById('msg')
    var msg2 = window.document.getElementById('msg2')
    var img = window.document.getElementById('picture')
    var data = new Date()
    var hour = data.getHours()



    msg.innerHTML = `${data}`

    var msg2 = new Array("A persistência realiza o impossível. - Provérbio Chinês", "O insucesso é apenas uma oportunidade para recomeçar com mais inteligência. - Henry Ford", "Você precisa fazer aquilo que pensa que não é capaz de fazer. - Eleanor Roosevelt", 
    "Coragem é a resistência ao medo, domínio do medo, e não a ausência do medo. - Mark Twain", "Você tem de agir. E svocê tem que estar disposto a fracassar... se você tem medo de fracassar, não irá muito longe. - Steve Jobs", "Tudo o que você sempre quis está do outro lado do seu medo” – George Addair",
    "Caia 7 vezes. Levante-se 8 – Provérbio japonês", "A pessoa que diz que não pode ser feito não deve interromper a pessoa que está fazendo – Provérbio chinês", "Nossas vidas começam a terminar no dia em que nos calamos sobre as coisas que importam – Martin Luther King Jr");
    var randomNum = Math.floor(Math.random() * msg2.length);
    document.getElementById("msg2").src = msg2[randomNum];

    document.getElementById("msg2").innerHTML = `${msg2[randomNum]}`
    

    if (hour >= 6 && hour < 12) {
        var day = new Array("assets/Dia/day1(model lexica aperture v2).jpg", "assets/Dia/day2.jpg", "assets/Dia/day3.jpg", "assets/Dia/day4(model lexica aperture v2).jpg", "assets/Dia/day5(model lexica aperture v2).jpg");
        var randomNum = Math.floor(Math.random() * day.length);
        document.getElementById("picture").src = day[randomNum];
    } 
    else if (hour >= 12 && hour < 18) {
        var afternoon = new Array("assets/Tarde/afternoon1.jpg", "assets/Tarde/afternoon2.jpg", "assets/Tarde/afternoon3 (model Lexica Aperture v2).jpg", "assets/Tarde/afternoon4 (model Lexica Aperture v2).jpg");
        var randomNum = Math.floor(Math.random() * afternoon.length);
        document.getElementById("picture").src = afternoon[randomNum];
    }
    else {
        var night = new Array("assets/Noite/night1 (model Lexica Aperture v2).jpg", "assets/Noite/night2.jpg", "assets/Noite/night3.jpg", "assets/Noite/night4 (model Lexica Aperture v2).jpg", "assets/Noite/night5 (model Lexica Aperture v2).jpg");
        var randomNum = Math.floor(Math.random() * night.length);
        document.getElementById("picture").src = night[randomNum];
    }
}
