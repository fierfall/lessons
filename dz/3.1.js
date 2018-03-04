var numberInput1 document.getElementByid("numberInput_1");
var numberInput2 document.getElementByid("numberInput_2");
var buttonPlus document.getElementByid("button_Plus");
var buttonMinus document.getElementByid("button_Minus");
var buttonMultiply document.getElementByid("button_Multiply");
var buttonDivide document.getElementByid("button_Divide");
var resultInput document.getElementByid("result");

buttonPlus.onclick = function()
{
	var a = parseInt(numberInput1.value);
	var b = parseInt(numberInput2.value);
	var result = a + b;

	resultInput.value = result;
}

buttonMinus.onclick = function()
{
	var a = parseInt(numberInput1.value);
	var b = parseInt(numberInput2.value);
	var result = a - b;

	resultInput.value = result;
}

buttonMultiply.onclick = function()
{
	var a = parseInt(numberInput1.value);
	var b = parseInt(numberInput2.value);
	var result = a * b;

	resultInput.value = result;
}

buttonDivide.onclick = function()
{
	var a = parseInt(numberInput1.value);
	var b = parseInt(numberInput2.value);
	var result = a / b;

	resultInput.value = result;
}



