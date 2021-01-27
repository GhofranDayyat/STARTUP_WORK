var JopTayp=prompt ("What your Back Ground");
var ExpYear=prompt("How Many Experiec Year Do you Have");
var JopDetails;
if (ExpYear >1 && ExpYear < 5 ) {JopDetails="Contact the Following Suppliers ********"
    
} else if (ExpYear > 5  ){JopDetails="Contact the Following Suppliers ********) 
} else if (ExpYear < 1) {"Take Courses with the Following A cademy***********"
    
}
document.write(JopDetails);
document.getElementById(Job).innerText=JopTayp;

confirm("Have You Contacted one of the Supplier");
alert("Thank you and GoodLuck")