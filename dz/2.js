var numberInput1 document.getElementById("numberInput_1");
var numberInput2 document.getElementById("numberInput_2");
var buttonCalc document.getElementById("buttonResult");
var numberOutputIn document.getElementById("numberOutput")

buttonResult.onclick = function()
{
	var numberInput_1 = parseInt (numberInput1.value);
	var numberInput_2 = parseInt (numberInput2.value);
	var result;
		{
			result = numberInput1 + numberInput2;
		}

		numberOutputIn.value = result;
}