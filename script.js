const grados = 6
const horas = document.querySelector(".hora")
const minutos = document.querySelector(".minuto")
const segundos = document.querySelector(".segundo")
const relojDigial = document.querySelector(".relojDigital")

setInterval(() =>{
    let tiempo = new Date()

    let hora = tiempo.getHours() * 30
    let minuto = tiempo.getMinutes() * grados
    let segundo = tiempo.getSeconds() * grados

    let tiempoDigital = new Date

    let horaDigital = tiempoDigital.getHours()
    let minutoDigital = tiempoDigital.getMinutes()
    let segundoDigital = tiempoDigital.getSeconds()
    let divisionDia = ""


    if (horaDigital >= 12) {
        horaDigital = horaDigital - 12
        divisionDia = "PM"
    }else{
        divisionDia = "AM"
    }

    if (horaDigital == 0) {
        horaDigital = 12
    }

    minutoDigital = minutoDigital < 10 ? "0"+minutoDigital : minutoDigital
    segundoDigital = segundoDigital < 10 ? "0"+segundoDigital : segundoDigital

    horas.style.transform = `rotate(${(hora) + (minuto/12)}deg)`
    minutos.style.transform = `rotate(${minuto}deg)`
    segundos.style.transform = `rotate(${segundo}deg)`


    relojDigial.innerHTML = `${horaDigital}:${minutoDigital}:${segundoDigital} ${divisionDia}`
})