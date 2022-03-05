let button = document.getElementById("calculateBtn");
let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

//  Function to Calculate Age:
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

    
    //  Call The Function to Check Number of Leap Years between BirthYear and CurrentYear:
    let NumberOfLeapYears = checkLeapYear(currentYear, BirthDetails.year)



    if (
    BirthDetails.year > currentYear || 
    (BirthDetails.year == currentYear && BirthDetails.month > currentMonth) ||
    (BirthDetails.year == currentYear && BirthDetails.month == currentMonth && BirthDetails.day > currentDay)
    ) {
        alert("Not Born Yet");
        displayResult("-", "-", "-")
    } else {
        //  Get Total Year After Subtract with BirthYear:
        totalYear = currentYear - BirthDetails.year;
        

        //  Get Total Months After Subtract with BirthMonth:
        if (currentMonth >= BirthDetails.month) {
            totalMonth = currentMonth - BirthDetails.month
        } else {
            totalYear--;
            totalMonth = 12 - BirthDetails.month + currentMonth;
        }


        //  Get Total Days After Subtract with BirthDate:
        if (currentDay >= BirthDetails.day + NumberOfLeapYears) {
            totalDay = currentDay - BirthDetails.day + NumberOfLeapYears;
        } else {
            totalMonth--;
            totalDay = months[currentMonth - 2] - BirthDetails.day + NumberOfLeapYears + currentDay;
        }


        //  Calling Function to Display the result to Browser:
        displayResult(totalYear, totalMonth, totalDay);
    }
}



//  check Number Of Leap Year:
function checkLeapYear (current, birthYear) {
    let count = 0;
    for (; birthYear <= current; birthYear++) {
        if (birthYear % 4 == 0 || (birthYear % 100 == 0 && birthYear % 400 == 0)) {
            count++;
        }
    }
    return count;
}



//  display Result:
function displayResult (year, month, day) {
    document.querySelector(".years h2").innerHTML = year;
    document.querySelector(".months h2").innerHTML = month;
    document.querySelector(".days h2").innerHTML = day;
}



//  Call the age calculator when click on button:
button.addEventListener("click", ageCalculator)