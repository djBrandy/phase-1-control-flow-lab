function scuberGreetingForFeet(rideDistance){
  let message;
  if (rideDistance <= 400) {
    message = 'This one is on me!';
  }else if (rideDistance >= 400 && rideDistance<= 2000) {
    message = 'That will be twenty bucks.';
  }if (rideDistance > 2000 ) {
    message = 'I will gladly take your thirty bucks.';
  }if (rideDistance > 2000) {
    message = 'I will gladly take your thirty bucks.';
  }if (rideDistance > 2500) {
    message = 'No can do.';
  }
  return message;
}


function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC' ? "Ok, sounds good." : "No go.";

}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case 'generous':
        return 'Thank you so much.';
    case 'not as generous':
        return 'Thank you.';
    default:
        return 'Bye.';
}
}
