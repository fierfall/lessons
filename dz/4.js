var quantityPaperInput document.getElementById("quantityPaper");
var button document.getElementById("considerButton");
var resultInput document.getElementById("result");

var lowprice = 0.5;
var averageprice = 0.75;
var highprice = 1;

button.onclick = function()
{
	var quantityPaper = parseInt(quantityPaperInput.value);
	var total;
		if (quantityPaper > 100) 
		{
			total = lowprice * quantityPaper;
		}
		else if (quantityPaper > 50) 
		{
			total = averageprice * quantityPaper;
		}
		else if (quantityPaper < 50)
		{
			total = highprice * quantityPaper;
		}

	button.value = total;