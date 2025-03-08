document.addEventListener('DOMContentLoaded', function() {
    const numberInput = document.getElementById('number-input');
    const checkBtn = document.getElementById('check-btn');
    const result = document.getElementById('result');

    checkBtn.addEventListener("click", function () {
        const decimalNumber = parseInt(numberInput.value.trim(), 10);
        if (isNaN(decimalNumber) || decimalNumber <= 0) {
            alert('Please enter a valid positive number');
            return;
        }

        const Roman = romanConverter(decimalNumber);
        result.textContent = `${decimalNumber} is ${Roman} in the Roman numeral system`;
        
    });

    function romanConverter(num) {
        const romanNumerals = [
            { value: 1000, numeral: 'M' },
            { value: 900, numeral: 'CM' },
            { value: 500, numeral: 'D' },
            { value: 400, numeral: 'CD' },
            { value: 100, numeral: 'C' },
            { value: 90, numeral: 'XC' },
            { value: 50, numeral: 'L' },
            { value: 40, numeral: 'XL' },
            { value: 10, numeral: 'X' },
            { value: 9, numeral: 'IX' },
            { value: 5, numeral: 'V' },
            { value: 4, numeral: 'IV' },
            { value: 1, numeral: 'I' }
        ];

        let romanNumeral = '';
        for (let i = 0; i < romanNumerals.length; i++) {
            while (num >= romanNumerals[i].value) {
                romanNumeral += romanNumerals[i].numeral;
                num -= romanNumerals[i].value;
            }
        }
        return romanNumeral;
    }
});