let t = [];

let gracz1 = document.createElement("IMG");
gracz1.name = "gracz1";
gracz1.src = "./jpg/bskoczek.png";
gracz1.pole = 1;
gracz1.kolor = "rgb(0,128,255)";
let gracz2 = document.createElement("IMG");
gracz2.name = "gracz2";
gracz2.src = "./jpg/rskoczek.png";
gracz2.pole = 1;
gracz2.kolor = "rgb(170,0,0)";

let nowplaying = gracz1;

function start() {
    for (let y = 0; y < 11; y++) {
        t[y] = [];
        for (let x = 0; x < 11; x++) {
            t[y][x] = "";
        }
    }
    document.getElementById("start").disabled = true;
    document.getElementById("losuj").disabled = false;
    generujplansze();
    noweid();
    generujpionki();
    document.getElementById("kostka").style.backgroundColor = nowplaying.kolor;
}

function generujplansze() {
    let table = document.createElement("TABLE");
    for (let y = 10; y >= 1; y--) {
        let tr = document.createElement("TR");
        for (let x = 1; x <= 10; x++) {
            let td = document.createElement("TD");
            td.setAttribute("id", x + "." + y);
            td.innerHTML = t[y][x];
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.getElementById("plansza").appendChild(table);
}

function noweid() {
    let pola = document.getElementsByTagName("td");
    let x = 1;
    let y = 1;
    for (let p = 1; p <= pola.length; p++) {
        if (p % 2 === 0) document.getElementById(x + "." + y).style.backgroundColor = "rgb(103,160,57)";
        else document.getElementById(x + "." + y).style.backgroundColor = "rgb(240,212,4)";
        if (p === 1 || p === 100) document.getElementById(x + "." + y).style.backgroundColor = "orange";
        if (p === 8 || p === 18 || p === 45 || p === 46 || p === 52 || p === 59 || p === 41 || p === 49 || p === 58 || p === 72 || p === 85 || p === 98) {
            document.getElementById(x + "." + y).style.backgroundColor = "rgb(66,191,235)";
            document.getElementById(x + "." + y).nazwa = "bomba";
        }
        document.getElementById(x + "." + y).innerHTML = p;
        document.getElementById(x + "." + y).id = "p" + p;
        if ((p > 10 && p < 20) || (p > 30 && p < 40) || (p > 50 && p < 60) || (p > 70 && p < 80) || (p > 90)) x--;
        if ((p > 0 && p < 10) || (p > 20 && p < 30) || (p > 40 && p < 50) || (p > 60 && p < 70) || (p > 80 && p < 90)) x++;
        if (p === 10 || p === 20 || p === 30 || p === 40 || p === 50 || p === 60 || p === 70 || p === 80 || p === 90) y++;
    }
}

function generujpionki() {
    document.getElementById("p1").appendChild(gracz1);
    document.getElementById("p1").appendChild(gracz2);
}

function losulosu() {
    document.getElementById("losuj").disabled = true;
    let los = Math.floor(Math.random()*6+1);
    document.getElementById("kostka").innerHTML = los;
    ruch(los);
}

function ruch(los) {
    let ile = nowplaying.pole + los;
    if (ile <= 100) {
        let plus1 = setInterval(autoruch,300);
        let licznik = 1;
        function autoruch() {
            let newid = nowplaying.pole+1;
            document.getElementById("p" + newid).appendChild(nowplaying);
            nowplaying.pole++;
            if (licznik === los) {
                let cel;
                if (document.getElementById("p" + newid).nazwa === "bomba") {
                    let moneta = Math.floor(Math.random()*2);
                    if (moneta === 0) {
                        if (newid === 8) cel = 34;
                        if (newid === 18) cel = 42;
                        if (newid === 45) cel = 84;
                        if (newid === 46) cel = 74;
                        if (newid === 52) cel = 91;
                        if (newid === 59) cel = 78;
                        if (newid === 41) cel = 62;
                        if (newid === 49) cel = 67;
                        if (newid === 58) cel = 71;
                        if (newid === 72) cel = 80;
                        if (newid === 85) cel = 88;
                        if (newid === 98) cel = 99;
                        let save = document.getElementById("p" + cel).style.backgroundColor;
                        document.getElementById("p" + cel).style.backgroundColor = nowplaying.kolor;
                        let gottagofast = setInterval(sonic,100);
                        function sonic() {
                            document.getElementById("losuj").disabled = true;
                            newid = nowplaying.pole+1;
                            document.getElementById("p" + newid).appendChild(nowplaying);
                            nowplaying.pole++;
                            if (newid === cel) {
                                if (los != 6) {
                                    if (nowplaying === gracz1) nowplaying = gracz2;
                                    else nowplaying = gracz1;
                                    document.getElementById("kostka").style.backgroundColor = nowplaying.kolor;
                                }
                                document.getElementById("p" + cel).style.backgroundColor = save;
                                document.getElementById("losuj").disabled = false;
                                clearInterval(gottagofast);
                            }
                        }
                    } else if (moneta === 1) {
                        if (newid === 41) cel = 19;
                        if (newid === 49) cel = 10;
                        if (newid === 58) cel = 17;
                        if (newid === 72) cel = 28;
                        if (newid === 85) cel = 16;
                        if (newid === 98) cel = 61;
                        if (newid === 8) cel = 1;
                        if (newid === 18) cel = 9;
                        if (newid === 45) cel = 33;
                        if (newid === 46) cel = 15;
                        if (newid === 52) cel = 38;
                        if (newid === 59) cel = 30;
                        let save = document.getElementById("p" + cel).style.backgroundColor;
                        document.getElementById("p" + cel).style.backgroundColor = nowplaying.kolor;
                        let gottagofast = setInterval(sonic,100);
                        function sonic() {
                            document.getElementById("losuj").disabled = true;
                            newid = nowplaying.pole-1;
                            document.getElementById("p" + newid).appendChild(nowplaying);
                            nowplaying.pole--;
                            if (newid === cel) {
                                if (los != 6) {
                                    if (nowplaying === gracz1) nowplaying = gracz2;
                                    else nowplaying = gracz1;
                                    document.getElementById("kostka").style.backgroundColor = nowplaying.kolor;
                                }
                                document.getElementById("p" + cel).style.backgroundColor = save;
                                document.getElementById("losuj").disabled = false;
                                clearInterval(gottagofast);
                            }
                        }
                    }
                } else if (newid === 100) {
                    alert(nowplaying.name + " wygrał!");
                    document.getElementById("losuj").disabled = true;
                } else if (los != 6) {
                        if (nowplaying === gracz1) nowplaying = gracz2;
                        else nowplaying = gracz1;
                }
                if (ile != 100) document.getElementById("losuj").disabled = false;
                document.getElementById("kostka").innerHTML = "";
                document.getElementById("kostka").style.backgroundColor = nowplaying.kolor;
                clearInterval(plus1);
            } else licznik++;
        }
    } else {
        alert("Za dużo oczek.");
        if (nowplaying === gracz1) nowplaying = gracz2;
        else nowplaying = gracz1;
        document.getElementById("losuj").disabled = false;
        document.getElementById("kostka").innerHTML = "";
        document.getElementById("kostka").style.backgroundColor = nowplaying.kolor;
    }
}