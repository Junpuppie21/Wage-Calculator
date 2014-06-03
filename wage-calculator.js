var extra;
var hours = function()
{

	var moneyDesired = document.getElementById("goal").value;
	document.getElementById("goal").innerHTML = moneyDesired;
	if (isNaN(moneyDesired) || moneyDesired === "") 
	{
		//document.getElementById("Null").innerHTML =("Enter some numbers, loser.")
		return
	}

	if (moneyDesired < 0)
	{
		document.getElementById("Null").innerHTML =("Stay home!")
		return
	}

	var wage = document.getElementById("wage").value;
	document.getElementById("wage").innerHTML = wage;
	hoursPerDay = 0
	if (isNaN(wage) || wage === "") {
		//document.getElementById("Null").innerHTML =("Enter some numbers, loser.")
		return
	};

	document.getElementById('Paycheck').innerHTML = ("Paycheck = $" + moneyDesired)
	document.getElementById('Wage').innerHTML = ("Hourly Wage = $"+wage)
    hoursToWork = moneyDesired/wage
    if (hoursToWork/5%0.25 !== 0)
    {	
	    hoursPerDay = hoursToWork/5 
        difference = .25 - hoursPerDay%.25
        hoursPerDay += difference
	    document.getElementById('Hours').innerHTML = ("Hours = " + hoursPerDay + " each day")
	    if (hoursToWork/5 > 24){
	       	document.getElementById('Jacob').innerHTML = ("GET A LOAN")
	        return
	    }	

	}
	else{
	    hoursPerDay = hoursToWork/5 
	    document.getElementById('Hours').innerHTML = ("Hours = " + hoursPerDay + " each day")
	    if (hoursPerDay > 24){
	       	document.getElementById('Jacob').innerHTML = ("Find a bank, jacob" )
	        return
		}
	}
	

	extra = (1.25*wage+wage*5*hoursPerDay)
	document.getElementById('Extra').innerHTML = ("If you work 15 minutes longer everyday, you make $" + extra)



}
hours()
