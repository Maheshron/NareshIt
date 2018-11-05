// Create a module
var app = angular.module('CalcApp',[]);

// Create a Controller
app.controller('CalcAppCtrl',function () {
    this.firstnumber = null;
    this.secondnumber = null;
    this.operator = '+';
    this.results = ' RESULT' ;
    this.changeOperator = function(symbol) {
        this.operator = symbol;
    };
    this.calculate = function() {
        var num1 = this.firstnumber;
        var num2 = this.secondnumber;
        var opr = this.operator;
        if(num1 !== null && num2 !==null)
        {
        switch(opr){
            case '+':
                this.results = num1+num2;
                break;
            case '-':
                this.results = num1-num2;
                break;
            case '/':
                this.results = num1/num2;
                break;
            case '*':
                this.results = num1*num2;
                break;
            default:
                this.results = resulsts;
             break;
        }}
        else
        {
            this.results = 'Results';
        }
        this.clear = function () {
            this.firstnumber = null;
            this.secondnumber = null;
            this.operator = '+';
            this.results = 'Results';
        }
    }
});