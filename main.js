let raceNumber = Math.floor(Math.random() * 1000);
const runnerRegEarly = false;  //change this to true if you want to see another result 
const runnerAge = 18;          //change this to your age to see your schedule 

if (runnerAge>18 && runnerRegEarly ){
  raceNumber += 1000
};
if (runnerAge>18 && runnerRegEarly ){
  console.log(`You will race at 9:30am and your number race is:  ${raceNumber}`)
} 
else if ( runnerAge>18 && runnerRegEarly == false){console.log(`You will race at 11:00am and your number race is:  ${raceNumber}`)
                                                  } 
else if ( runnerAge<18 ){
  console.log(`You will race at 12:30am and your number race is:  ${raceNumber}`)} 
else {
  console.log('You should check the registration desk for more information')
}
