function totalDigitRekursif(angka) {
    // you can only write your code here!
    var angkaStr = String(angka)

    var angkaPertama = angkaStr[0]
    var angkaSisa = angkaStr.slice(1)
    // console.log (angkaSisa)

    if(angkaStr.length === 1) {
        return parseInt(angkaStr)
    } else {
        return parseInt(angkaPertama[0]) + totalDigitRekursif(angkaSisa)
    }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5