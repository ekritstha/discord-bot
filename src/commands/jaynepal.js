const replies = [
  "🇳🇵",
  "Jay Nepal 🇳🇵",
  "रातो र चन्द्र सूर्य जङ्गी निशान हाम्रो",
];

module.exports = function (msg, args) {
  const index = Math.floor(Math.random() * replies.length);
  msg.channel.send(replies[index]);
};
