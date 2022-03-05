let button = document.getElementById("calculateBtn");
let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

function ageCalculator () {
    let current      = new Date();
    let currentYear  = current.getFullYear();
    let currentMonth = current.getMonth() + 1;
    let currentDay   = current.getDate() 
    let inputDate    = document.getElementById("date-input").value;
    let totalYear, totalMonth, totalDay;
    inputDate = new Date(inputDate);
    let BirthDetails = {
        year  : inputDate.getFullYear(),
        month : inputDate.getMonth() + 1,
        day   : inputDate.getDate()
    }
    checkLeapYear(BirthDetails.year);

    if (
    BirthDetails.year > currentYear || 
    (BirthDetails.year == currentYear && BirthDetails.month > currentMonth) ||
    (BirthDetails.year == currentYear && BirthDetails.month == currentMonth && BirthDetails.day > currentDay)
    ) {
        alert("Not Born Yet");
        displayResult("-", "-", "-")

    } else {
        totalYear = currentYear - BirthDetails.year;
        
        if (currentMonth >= BirthDetails.month) {
            totalMonth = currentMonth - BirthDetails.month
        } else {
            totalYear--;
            totalMonth = 12 - BirthDetails.month + currentMonth;
        }

        if (currentDay >= BirthDetails.day) {
            totalDay = currentDay - BirthDetails.day;
        } else {
            totalMonth--;
            totalDay = months[currentMonth - 2] - BirthDetails.day + currentDay;
        }

        displayResult(totalYear, totalMonth, totalDay);
    }
}






//  check Leap Year:
function checkLeapYear (year) {
    if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {
        months[1] = 29;
    } else {
        months[1] = 28;
    }
}





//  display Result
function displayResult (year, month, day) {
    document.querySelector(".years h2").innerHTML = year;
    document.querySelector(".months h2").innerHTML = month;
    document.querySelector(".days h2").innerHTML = day;
}





button.addEventListener("click", ageCalculator)