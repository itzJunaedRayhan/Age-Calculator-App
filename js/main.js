let button = document.getElementById("calculateBtn");

let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

function ageCalculator () {
    let today = new Date();
    let inputDate = new Date(document.getElementById("date-input").value);
    let birthYear, birthMonth, birthDate;
    
    let birthDetails = {
        date  : inputDate.getDate(),
        month : inputDate.getMonth() + 1,
        year  : inputDate.getFullYear()
    }

    let currentYear  = today.getFullYear();
    let currentMonth = today.getMonth() + 1;
    let currentDate  = today.getDate();

    //  check for Leap Year
    leapChecker(currentYear);

    if (
        birthDetails.year > currentYear ||
        (birthDetails.month > currentMonth && birthDetails.year == currentYear) || 
        (birthDetails.date > currentDate && birthDetails.month == currentMonth && birthDetails.year == currentYear)
    ) {
        alert("Not Born Yet");
        displayResult("-", "-", "-")
        return;
    } else {
        birthYear = currentYear - birthDetails.year;

        if (currentMonth >= birthDetails.month) {
            birthMonth = currentMonth - birthDetails.month;
        } else {
            birthYear--;
            birthMonth = 12 + currentDate - birthDetails.month;
        }

        if (currentDate >= birthDetails.date) {
            birthDate = currentDate - birthDetails.date
        } else {
            birthMonth--;
            let days = months[currentMonth - 2];
            birthDate = days + currentDate - birthDetails.date;
            if (birthMonth < 0) {
                birthMonth = 11;
                birthYear--;
            }
        }
        //  console.log(birthYear, birthMonth, birthDate);
        displayResult(birthDate, birthMonth, birthYear);
    }
}



//  Leap Checker Function:
function leapChecker (year) {
    if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {
        months[1] = 29;
    } else {
        months[1] = 28;
    }
}



//  Display The Result Function
function displayResult (date, month, year) {
    document.querySelector(".days h2").innerHTML = date;
    document.querySelector(".months h2").innerHTML = month;
    document.querySelector(".years h2").innerHTML = year;
}



button.addEventListener("click", ageCalculator)