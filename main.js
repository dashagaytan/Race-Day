let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
const runnerAge = 18;

if(registeredEarly && runnerAge > 18){
  raceNumber += 1000;
}
if (registeredEarly && runnerAge > 18){
  console.log(`Race starts at 9:30am, your race number is: ${raceNumber}.`);
} 
else if (!registeredEarly && runnerAge > 18){
  console.log(`Race starts at 11:00am, your race number is: ${raceNumber}.`);
}
else if (runnerAge < 18){
  console.log(`Race starts at 12:30pm, your race number is: ${raceNumber}.`);
}
else {
  console.log('Please see registration desk for assistance, thank you!');
}