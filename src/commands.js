const gif = require("./commands/gif.js");
const jaynepal = require("./commands/jaynepal.js");
const dadjoke = require("./commands/dadjoke.js");

const commands = { jaynepal, gif, dadjoke };

module.exports = async function (msg) {
  if (msg.channel.id == process.env.CHANNELID) {
    let tokens = msg.content.split(" ");
    let command = tokens.shift();
    if (command.charAt(0) === "!") {
      command = command.substring(1);
      commands[command](msg, tokens);
    }
  }
};
