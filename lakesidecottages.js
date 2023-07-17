// Instructions: Lakeside Cottages accepts guests during the summer and early fall. Design a flowchart of psuedocode for a program that accepts a guest's last name, month, and day of the guest's stay will start and the number of nights for the stay. If the month is not 5 through 9 inclusive, then display a message that indicates the cottages are not available. Otherwise, if the number of nights is more than 14, display a message that indicates reservations are not accepted for more than 14 nights. Otherwise, display the total fee for the guest, which is $600 total for any number of days through 7, and then $75 per day for any additional days through 14. 

var monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var monthQuan = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

$('#reserve').click(function(e){
  e.preventDefault();

  // console.log("Cottage");

  var chosenMonth = $('#chosenMonth').val();
  var numOfNights = $('#numOfNights').val();

  if(chosenMonth == "" || numOfNights == ""){
    $('#reservationResult').append('<p>Month and number of nights should not be empty.</p>');
  } else if(!(chosenMonth >= 5 && chosenMonth <= 9)){
    $('#reservationResult').append('<p>The cottages are not available. Please choose other month.</p>');
  } else if(numOfNights > 14){
    $('#reservationResult').append('<p>Reservations are not accepted for more than 14 nights.</p>');
  } else{
    var totalAmount = 0;
    console.log(numOfNights);

    // If the nights is less than or equal to 7, fix 600 pesos payment
    if(numOfNights <= 7){
      totalAmount = 600;
    }
    
    // Plus 75 pesos per added day up to 14
    else if(numOfNights > 7 && numOfNights <= 14){
      for(let i = 7; i < numOfNights; i++){
        totalAmount = totalAmount + 75;
      }
      totalAmount = totalAmount + 600;
    }

    $('#reservationResult').append(`<p>Total fee: ${totalAmount}</p>`);
    $('#reservationResult').append(`<p>Thank you for trusting Lakeside Cottages!</p>`);
  }

})






// A. Modify the cottages rental program to display guest's data only if the stay starts in month 9 and lasts more than 10 days.

// B. Modify the cottage rental program to display the guest's data only if the total bill is more than $1000.

// C. Modify the cottage rental program to prompt the user for a month and day after the guest's rental data has been entered. Display the guest's data only if the specified date falls within the guest's stay.