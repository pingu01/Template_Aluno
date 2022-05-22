function bubbleSort() {
    // o método split separa os valores identificados pelo .value e os transforma em valores de uma array
        var num = document.getElementById("numbers").value.split(",")
        var length = num.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < (length - i - 1); j++) {
                if (Number(num[j]) > Number(num[j + 1])) {
                    var tmp = num[j];
                    num[j] = num[j + 1];
                    num[j + 1] = tmp;
                }
            }
        }
        document.getElementById("ordem").innerHTML = num
    }
