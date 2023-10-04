document.addEventListener("DOMContentLoaded", function () {
    const numberInput = document.getElementById("numberInput");
    const generateButton = document.getElementById("generateButton");
    const result = document.getElementById("result");

    generateButton.addEventListener("click", function () {
        result.innerHTML = "";

        const numbers = parseInt(numberInput.value);
        if (isNaN(numbers) || numbers <= 0) {
            result.innerHTML = "Vui lòng nhập một số lượng hợp lệ.";
            return;
        }

        let count = 0;
        let N = 2;

        while (count < numbers) {
            if (isPrime(N)) {
                result.innerHTML += N + " ";
                count++;
            }
            N++;
        }
    });

    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;

        let i = 5;
        while (i * i <= num) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
            i += 6;
        }

        return true;
    }
});
