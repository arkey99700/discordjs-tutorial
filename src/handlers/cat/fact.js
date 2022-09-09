import fetch from "node-fetch";

const fact = async function (interaction) {
  let fact;

  await fetch("https://catfact.ninja/fact")
    .then((response) => response.json())
    .then((json) => (fact = json.fact));

  interaction.reply({ content: fact });
};

export default fact;
