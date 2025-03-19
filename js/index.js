let ballon = document.querySelector('.ballon-koste')
let parsedballon = parseFloat(ballon.innerHTML)

let klikkerKosten = document.querySelector('#klikker-kosten')
let parsedklikkerKosten = parseFloat(klikkerKosten.innerHTML)
let klikkerLevel = document.querySelector(".klikker-level")
let klikkerVersterken = document.querySelector(".klikker-versterken")
let parsedklikkerVersterken = parseFloat(klikkerVersterken.innerHTML)

let benjaminKosten = document.querySelector('#benjamin-kosten')
let parsedBenjaminKosten = parseFloat(benjaminKosten.innerHTML)
let benjaminLevel = document.querySelector(".benjamin-level")
let benjaminVersterken = document.querySelector(".benjamin-versterken")
let parsedBenjaminVersterken = parseFloat(benjaminVersterken.innerHTML)

let dartKosten = document.querySelector('#dart-kosten')
let parsedDartKosten = parseFloat(dartKosten.innerHTML)
let dartLevel = document.querySelector(".dart-level")
let dartVersterken = document.querySelector(".dart-versterken")
let parsedDartVersterken = parseFloat(dartVersterken.innerHTML)

let superaapKosten = document.querySelector('#superaap-kosten')
let parsedsuperaapKosten = parseFloat(superaapKosten.innerHTML)
let superaapLevel = document.querySelector(".superaap-level")
let superaapVersterken = document.querySelector(".superaap-versterken")
let parsedSuperaapVersterken = parseFloat(superaapVersterken.innerHTML)

let ppcTekst = document.getElementById("ppc-tekst")
let ppsTekst = document.getElementById("pps-tekst")

let popSound = document.getElementById("pop-sound");
let upgradeSound = document.getElementById("upgrade-sound");

let ppc = 1

let pps = 0

const music = document.getElementById('background-music');

// Deze lijn code zorgt ervoor als ik op de ballon klik het aantal pops omhoog de parsefloat zorgt ervoor dat de +1 niet achter de 0 komt te staan maar het echt bij elkaar optelt
function incrementBallon() {
    popSound.currentTime = 1; // Reset geluid zodat het snel achter elkaar kan spelen
    popSound.play(); // Speelt het popgeluid af
    ballon.innerHTML = Math.round(parsedballon += ppc)
}


function koopKlik() {
    if (parsedballon >= parsedklikkerKosten) {
        ballon.innerHTML = Math.round(parsedballon -= parsedklikkerKosten)

        klikkerLevel.innerHTML++
            parsedklikkerVersterken = parseFloat((parsedklikkerVersterken * 1.5).toFixed(2))
        klikkerVersterken.innerHTML = parsedklikkerVersterken
        ppc += parsedklikkerVersterken

        parsedklikkerKosten *= 1.5
        klikkerKosten.innerHTML = Math.round(parsedklikkerKosten)

        upgradeSound.currentTime = 0;
        upgradeSound.play();
    }

}

function koopBenjamin() {
    if (parsedballon >= parsedBenjaminKosten) {
        ballon.innerHTML = Math.round(parsedballon -= parsedBenjaminKosten)

        benjaminLevel.innerHTML++
            parsedBenjaminVersterken = parseFloat((parsedBenjaminVersterken * 1.5).toFixed(2))
        benjaminVersterken.innerHTML = parsedBenjaminVersterken
        pps += parsedBenjaminVersterken

        parsedBenjaminKosten *= 1.5
        benjaminKosten.innerHTML = Math.round(parsedBenjaminKosten)

        upgradeSound.currentTime = 0;
        upgradeSound.play();

    }

}

function koopDart() {
    if (parsedballon >= parsedDartKosten) {
        ballon.innerHTML = Math.round(parsedballon -= parsedDartKosten)

        dartLevel.innerHTML++
            parsedDartVersterken = parseFloat((parsedDartVersterken * 1.5).toFixed(2))
        dartVersterken.innerHTML = parsedDartVersterken
        pps += parsedDartVersterken

        parsedDartKosten *= 1.5
        dartKosten.innerHTML = Math.round(parsedDartKosten)

        upgradeSound.currentTime = 0;
        upgradeSound.play();

    }

}

function koopSuperaap() {
    if (parsedballon >= parsedsuperaapKosten) {
        ballon.innerHTML = Math.round(parsedballon -= parsedsuperaapKosten);

        superaapLevel.innerHTML++;
        parsedSuperaapVersterken = parseFloat((parsedSuperaapVersterken * 1.5).toFixed(2));
        superaapVersterken.innerHTML = parsedSuperaapVersterken; // Deze lijn is belangrijk om de versterkingswaarde te updaten in de UI.

        pps += parsedSuperaapVersterken;

        parsedsuperaapKosten *= 1.5;
        superaapKosten.innerHTML = Math.round(parsedsuperaapKosten);

        upgradeSound.currentTime = 0;
        upgradeSound.play();

    }
}

setInterval(() => {
    parsedballon += pps / 10
    ballon.innerHTML = Math.round(parsedballon)
    ppcTekst.innerHTML = Math.round(ppc)
    ppsTekst.innerHTML = Math.round(pps)
}, 100)

function toggleMusic() {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

function setVolume(value) {
    music.volume = value;
}