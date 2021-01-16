const fetch = require("node-fetch");

module.exports = async function (msg, args) {
  let keywords = "nepal";
  if (args.length > 0) {
    keywords = args.join(" ");
  }
  let url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHYTOKEN}&q=${keywords}&offset=0&rating=g&lang=en`;
  let response = await fetch(url);
  let json = await response.json();
  const index = Math.floor(Math.random() * json.data.length);
  msg.channel.send(json.data[index].url);
  msg.channel.send("GIF from GIPHY: " + keywords);
};
