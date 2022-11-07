var listNumber = [];
var listNumber1 = [];
var SumNumber = 0;
var count = 0;
var smallestNumber = 0;
var evenNumber = 0;

var smallestPositiveNumber = 0;

function btnAddNumber() {
    
    var number = document.getElementById("number").value * 1;
    
    listNumber.push(number);
    document.getElementById("listNumber").innerHTML = listNumber;
}

function btnSumNumber() {
    var n = 0;
    if (listNumber.length === 0) {
        alert("Vui lòng thêm số để thực thi");
        return;
    }
    while (n < listNumber.length) {
        if (listNumber[n] > 0) {
            SumNumber += listNumber[n];
        }
        n++
    }
   
    document.getElementById("Number1").innerHTML = "Tổng số dương là: " + SumNumber;
}

function btnPositiveNumbers() {
    var n = 0;
    if (listNumber.length === 0) {
        alert("Vui lòng thêm số để thực thi");
        return;
    }
    while (n < listNumber.length) {
        if (listNumber[n] > 0) {
            count++;
        }
        n++;
    }
    document.getElementById("Number2").innerHTML = "Số dương: " + count;
}

function btnSmallestNumber() {
   
    if (listNumber.length === 0) {
        alert("Vui lòng thêm số để thực thi");
        return;
    }
    smallestNumber = listNumber[0];
    for (var i = 1; i < listNumber.length; i++) {
        if (smallestNumber > listNumber[i]) {
            smallestNumber = listNumber[i];
        }
    }
    document.getElementById("Number3").innerHTML = "Số nhỏ nhất là:" + smallestNumber;
}

function btnSmallestPositiveNumber() {
    var i = 0;
    var listPositiveNumber = [];
    if (listNumber.length === 0) {
        alert("Vui lòng thêm số để thực thi");
        return;
    }
    while (i < listNumber.length) {
        if (listNumber[i] > 0) {
            listPositiveNumber.push(listNumber[i]);
        }
        i++
    }
    smallestPositiveNumber = listPositiveNumber[0];

    for (var a = 1; a < listPositiveNumber.length; a++ ) {

        if (smallestPositiveNumber > listPositiveNumber[a]) {
            smallestPositiveNumber = listPositiveNumber[a];
        }
    }
    document.getElementById("Number4").innerHTML = "Số dương nhỏ nhất là: " + smallestPositiveNumber;
}

function btnEvenNumber() {
    
    for (var i = listNumber.length -1; i >= 0; i--){
        if (listNumber[i] % 2 === 0) {
            evenNumber = listNumber[i];
            break;
        }
    }
    document.getElementById("Number5").innerHTML = "số chẵn cuối cùng là: " + evenNumber;
}

function btnTranlate() {
    var locationNumber1 = document.getElementById("locationNumber1").value * 1;
    var locationNumber2 = document.getElementById("locationNumber2").value * 1;

    var number1 = listNumber[locationNumber1];
    listNumber[locationNumber1] = listNumber[locationNumber2];
    listNumber[locationNumber2] = number1;

    document.getElementById("Number6").innerHTML = "Mảng sau khi đổi: " + listNumber;
}

function btnSortUp() {
    var ListSortUpNumber = [];
    for (var i = 0; i < listNumber.length -1 ; i++) {
        var idmid = i;
        for (let j = i + 1; j < listNumber.length; j++){
            if (listNumber[j] < listNumber[idmid]) {
                idmid = j;
            }
        }
        //swap
        var a = listNumber[i];
        listNumber[i] = listNumber[idmid];
        listNumber[idmid] = a;
    }

    document.getElementById("Number7").innerHTML = "Mảng sau khi được sắp xếp: " + listNumber;
}

function btnCheckNumber() {
    var i = 0;
    var NumberNT = 0;
    while (i < listNumber.length) {
        if (listNumber[i] != 1 && kt_ngto(listNumber[i]) === 1) {
            NumberNT = listNumber[i];
            break;
        }
        i++;
    }
    document.getElementById("Number8").innerHTML = NumberNT;
}

//handle check_so_ngto
function kt_ngto(n)
{
    let rs = 1;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0 && n > 2) {
            rs = 0;
        };
    };
    return rs;
};

function btnAddNumber1() {
    
    var number1 = document.getElementById("number1").value * 1;
    
    listNumber1.push(number1);
    document.getElementById("listNumber1").innerHTML = listNumber1;
}

function btnCountIntegers() {
    var i = 0;
    var countIntegerNumbers = 0;
    while (i < listNumber1.length) {
        if (Number.isInteger(listNumber1[i])) {
            countIntegerNumbers++;
        }
        i++;
    }
    document.getElementById("Number9").innerHTML = "Số nguyên là: " + countIntegerNumbers;
}

function btnCompare() {
    var negativeNumbers = 0;
    var positiveNumbers = 0;
    var i = 0;
    while (i < listNumber.length) {
        if (listNumber[i] > 0) {
            positiveNumbers++;
        } else {
            negativeNumbers++;
        }
        i++
    }
    var rs = positiveNumbers > negativeNumbers ? "Số dương > Số âm" : "Số âm > Số dương";

    document.getElementById("Number10").innerHTML = rs;
}

