document.addEventListener("DOMContentLoaded", function () {
    const fibonacciInput = document.getElementById("fibonacciInput");
    const calculateFibonacciButton = document.getElementById("calculateFibonacci");
    const fibonacciResult = document.getElementById("fibonacciResult");

    calculateFibonacciButton.addEventListener("click", function () {
        const n = parseInt(fibonacciInput.value);
        if (!isNaN(n)) {
            const result = calculateFibonacci(n);
            fibonacciResult.textContent = `Deret Fibonacci ke-${n}: ${result}`;
        }
    });

    const shapeSelect = document.getElementById("shapeSelect");
    const shapeInputs = document.getElementById("shapeInputs");
    const inputLabel1 = document.getElementById("inputLabel1");
    const inputLabel2 = document.getElementById("inputLabel2");
    const inputLabel3 = document.getElementById("inputLabel3");
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const input3 = document.getElementById("input3");
    const calculateVolumeButton = document.getElementById("calculateVolume");
    const volumeResult = document.getElementById("volumeResult");

    calculateVolumeButton.addEventListener("click", function () {
        const selectedShape = shapeSelect.value;
        let volume;

        const value1 = parseFloat(input1.value);
        const value2 = parseFloat(input2.value);
        const value3 = parseFloat(input3.value);

        if (selectedShape === "cube") {
            volume = calculateVolumeCube(value1);
        } else if (selectedShape === "rectangularPrism") {
            volume = calculateVolumeRectangularPrism(value1, value2, value3);
        } else if (selectedShape === "sphere") {
            volume = calculateVolumeSphere(value1);
        } else if (selectedShape === "cylinder") {
            volume = calculateVolumeCylinder(value1, value2);
        } else if (selectedShape === "cone") {
            volume = calculateVolumeCone(value1, value2);
        }

        if (!isNaN(volume)) {
            volumeResult.textContent = `Volume: ${volume.toFixed(2)}`;
        } else {
            volumeResult.textContent = "Masukkan nilai yang valid untuk menghitung volume.";
        }
    });

    shapeSelect.addEventListener("change", function () {
        const selectedShape = shapeSelect.value;
        if (selectedShape === "none") {
            shapeInputs.classList.add("hidden");
        } else {
            shapeInputs.classList.remove("hidden");
            if (selectedShape === "cube") {
                inputLabel1.textContent = "Sisi:";
                inputLabel2.classList.add("hidden");
                inputLabel3.classList.add("hidden");
                input2.classList.add("hidden");
                input3.classList.add("hidden");
            } else if (selectedShape === "rectangularPrism") {
                inputLabel1.textContent = "Panjang:";
                inputLabel2.textContent = "Lebar:";
                inputLabel3.textContent = "Tinggi:";
                inputLabel2.classList.remove("hidden");
                inputLabel3.classList.remove("hidden");
                input2.classList.remove("hidden");
                input3.classList.remove("hidden");
            } else if (selectedShape === "sphere") {
                inputLabel1.textContent = "Jari-Jari:";
                inputLabel2.classList.add("hidden");
                inputLabel3.classList.add("hidden");
                input2.classList.add("hidden");
                input3.classList.add("hidden");
            } else if (selectedShape === "cylinder" || selectedShape === "cone") {
                inputLabel1.textContent = "Jari-Jari:";
                inputLabel2.textContent = "Tinggi:";
                inputLabel3.classList.add("hidden");
                input2.classList.remove("hidden");
                input3.classList.add("hidden");
            }
        }
    });

    function calculateFibonacci(n) {
        if (n <= 0) {
            return "N/A";
        } else if (n === 1 || n === 2) {
            return 1;
        } else {
            let fib1 = 1;
            let fib2 = 1;
            let result = 0;
            for (let i = 3; i <= n; i++) {
                result = fib1 + fib2;
                fib1 = fib2;
                fib2 = result;
            }
            return result;
        }
    }

    function calculateVolumeCube(sisi) {
        return sisi ** 3;
    }

    function calculateVolumeRectangularPrism(panjang, lebar, tinggi) {
        return panjang * lebar * tinggi;
    }

    function calculateVolumeSphere(jariJari) {
        return (4 / 3) * Math.PI * jariJari ** 3;
    }

    function calculateVolumeCylinder(jariJari, tinggi) {
        return Math.PI * jariJari ** 2 * tinggi;
    }

    function calculateVolumeCone(jariJari, tinggi) {
        return (1 / 3) * Math.PI * jariJari ** 2 * tinggi;
    }
});
