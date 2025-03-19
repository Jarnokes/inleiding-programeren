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

let ppcTekst = document.getElementById("ppc-tekst")
let ppsTekst = document.getElementById("pps-tekst")

let ppc = 1

let pps = 0

// Deze lijn code zorgt ervoor als ik op de ballon klik het aantal pops omhoog de parsefloat zorgt ervoor dat de +1 niet achter de 0 komt te staan maar het echt bij elkaar optelt
function incrementBallon() {
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
    }

}

setInterval(() => {
    parsedballon += pps / 10
    ballon.innerHTML = Math.round(parsedballon)
    ppcTekst.innerHTML = Math.round(ppc)
    ppsTekst.innerHTML = Math.round(pps)
}, 100)