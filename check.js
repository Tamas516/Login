function $(id)
{
	return document.getElementById(id);
}

function ellenoriz(e)
{
	var hibak=[];
	if($('user').value=="" && $('pass').value=="")
	{
		hibak.push("Mindkét mező kitöltése kötelező!");
	}
	else if($('user').value=="")
	{
		hibak.push("Felhasználónév mező kitöltése kötelező!");
	}
	else if($('pass').value=="")
	{
		hibak.push("Jelszó mező kitöltése kötelező!");
	}
	if(hibak.length>0)
	{
		e.preventDefault();
		hibaMegjelenit(hibak);
	}
}

function hibaMegjelenit(hibak)
{
	var hibaUzenet=hibak.join();
	$('hibaLista').innerHTML=hibaUzenet;
}

function init()
{
	$('formId').addEventListener('submit',ellenoriz,false);
}

window.addEventListener('load',init,false);