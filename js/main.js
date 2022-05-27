


class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
    }

    clear () {
        this.currnetOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete () {

    }
    appendNumber (number) {
        if (number === '.' && this.currnetOperand.includes('.')) return;
        if (this.currnetOperand === undefined) {
            this.currnetOperand = number
        }else {
            this.currnetOperand = this.currnetOperand.toString() + number.toString()
        }
    }
    chooseOperation (operation) {

    }
    compute () {

    }
    updateDisplay () {
        currentOperandTextElement.innerHTML = this.currnetOperand
    }
};







const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsbutton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearbutton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerHTML);
        calculator.updateDisplay();
    })
})