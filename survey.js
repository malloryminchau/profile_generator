const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let survey = [];
rl.question('What\'s your name? Nicknames are also acceptable ', (answer) => {
  survey.push(answer);
  rl.question('What\'s an activity you like doing? ', (answer) => {
    survey.push(answer);
    rl.question('What do you listen to while doing that? ', (answer) => {
      survey.push(answer);
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
        survey.push(answer);
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
          survey.push(answer);
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            survey.push(answer);
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              survey.push(answer);
              
              console.log(`${survey[0]} likes listening to ${survey[2]} while ${survey[1]}, devouring ${survey[4]} for ${survey[3]}, prefers ${survey[5]} over any other sport, and is amazing at ${survey[6]}.`);
              
              rl.close();
            });
          }); 
        });
      });
    });
  });
});

