const core = require("@actions/core");
const github = require("@actions/github");

try {
  const nameToGreet = core.getInput("who-to-greet");
  console.log(`Hello ${nameToGreet}!`);
  const time = new Date().toTimeString();
  core.setOutput("time", time);
  const nameNotToGreet = core.getInput("who-not-to-greet");
  if (!!nameNotToGreet) {
    console.log(`And you ${nameNotToGreet}, I don't want to greet you!`);
    core.setOutput("who-to-dislike", nameNotToGreet);
  }
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
