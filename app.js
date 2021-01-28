var JopTayp = prompt("What your Back Ground");
var ExpYear = prompt("How Many Experiec Year Do you Have");
var JopDetails;

if (ExpYear > 1 && ExpYear < 5) {
    JopDetails = "Contact the Following Suppliers ********";

} else if (ExpYear > 5) {
    JopDetails = "Contact the Following Suppliers ********";
} else if (ExpYear < 1) {
    JopDetails = "Take Courses with the Following A cademy***********";

}
document.write(JopDetails);

confirm("do you work now");
alert("Thank you and GoodLuck");

var JopTayp = prompt('what do you want contract or freelance');

while (JopTayp !== 'contract' && JopTayp !== 'freelance') {
    JopTayp = prompt('what do you want contract or freelance');
}

var JopDetails;

if (JopTayp === 'contract') {
    JopDetails = '<img src="Image/Contract-Management-2.jpg"/>';
} else if (JopTayp === 'freelance') {
    JopDetails = '<img src="Image/download.jpg"/>';
}

var ExpYear = prompt('How Many Experiec Year Do you Have?');

var result = '';

for (var i = 0; i < ExpYear; i++) {
    result = result + JopDetails;
}

document.write(result);


