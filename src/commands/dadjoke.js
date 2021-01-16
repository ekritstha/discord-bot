const fetch = require("node-fetch");

module.exports = async function (msg, args) {
  let keywords = "doctor";
  if (args.length > 0) {
    keywords = args.join(" ");
  }
  let url = `https://icanhazdadjoke.com/search?term=${keywords}`;
  let response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  let json = await response.json();
  const index = Math.floor(Math.random() * json.results.length);
  msg.channel.send(json.results[index].joke);
};
