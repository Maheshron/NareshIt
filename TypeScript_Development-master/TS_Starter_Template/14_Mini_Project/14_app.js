var CalculatorApp = (function () {
    function CalculatorApp() {
    }
    CalculatorApp.initialize = function () {
        CalculatorApp.firstNumber = document.querySelector(selectors, '#firstNumber');
        CalculatorApp.secondNumber = document.querySelector(selectors, '#secondNumber');
        CalculatorApp.operator = document.querySelector(selectors, '#operator');
        CalculatorApp.results_button = document.querySelector(selectors, '#results_button');
        CalculatorApp.plus_button = document.querySelector(selectors, '#plus_button');
        CalculatorApp.minus_button = document.querySelector(selectors, '#minus_button');
        CalculatorApp.division_button = document.querySelector(selectors, '#division_button');
        CalculatorApp.mul_button = document.querySelector(selectors, '#mul_button');
        CalculatorApp.clear_button = document.querySelector(selectors, '#clear_button');
    };
    CalculatorApp.addEventListener = {
        CalculatorApp: .equals_button.addEventListener(type, 'click', CalculatorApp.fetchResults)
    };
    return CalculatorApp;
}());
