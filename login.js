function $(id)
{
	return document.getElementById(id);
}

function login(e)
{
	if($('user').value!="" && $('pass').value!="" && ($('user').value!="Tomi" || $('pass').value!="123"))
	{
		e.preventDefault();
		alert("Hibás adatok!");

	}
	else if($('user').value=="Tomi" && $('pass').value=="123" && $('user').value!="" && $('pass').value!="")
	{
		alert("Sikeres Belépés!")
	}

}

function init()
{
	$('formId').addEventListener('submit',login,false);
}

window.addEventListener('load',init,false);