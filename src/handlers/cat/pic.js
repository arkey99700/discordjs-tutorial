import fetch from "node-fetch";

const pic = async function (interaction) {
  let picURL;

  await fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((json) => (picURL = json[0].url));

  interaction.reply({ content: picURL });
};

export default pic;
