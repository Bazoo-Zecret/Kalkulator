function isi(value) {
    document.getElementById("display").value += value;
}

function tambah(value) {
    document.getElementById("display").value += value;
}

function kurang(value) {
    document.getElementById("display").value += value;
}

function kali(value) {
    document.getElementById("display").value += value;
}

function bagi(value) {
    document.getElementById("display").value += value;
}

function bersihkan() {
    document.getElementById("display").value = "";
}

function hasil() {
    try {
        const result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}