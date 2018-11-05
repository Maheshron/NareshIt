class CalculatorApp{
    private static firstNumber:HTMLInputElement;
    private static secondNumber:HTMLInputElement;
    private static  operator:HTMLInputElement;
    private static results_button:HTMLInputElement;
    private static plus_button:HTMLInputElement;
    private static minus_button:HTMLInputElement;
    private static division_button:HTMLInputElement;
    private static mul_button:HTMLInputElement;
    private  static clear_button:HTMLInputElement;

  constructor(){

}
public static initialize(){
    CalculatorApp.firstNumber =  document.querySelector(selectors:'#firstNumber') as HTMLInputElement;
    CalculatorApp.secondNumber = document.querySelector(selectors:'#secondNumber') as HTMLInputElement;
    CalculatorApp.operator =     document.querySelector(selectors:'#operator') as HTMLInputElement;
    CalculatorApp.results_button = document.querySelector(selectors:'#results_button') as HTMLInputElement;
    CalculatorApp.plus_button = document.querySelector(selectors:'#plus_button') as HTMLInputElement;
    CalculatorApp.minus_button = document.querySelector(selectors:'#minus_button') as HTMLInputElement;
    CalculatorApp.division_button = document.querySelector(selectors:'#division_button') as HTMLInputElement;
    CalculatorApp.mul_button = document.querySelector(selectors:'#mul_button') as HTMLInputElement;
    CalculatorApp.clear_button = document.querySelector(selectors:'#clear_button') as HTMLInputElement;

}
public static  addEventListener{
    CalculatorApp.equals_button.addEventListener(type:'click',CalculatorApp.fetchResults);
}
}