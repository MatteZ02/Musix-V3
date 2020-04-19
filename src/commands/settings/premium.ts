module.exports = {
  name: "premium",
  async execute(msg, args, client) {
    if (msg.member.id !== client.config.devId)
      return msg.channel.send(client.messages.onlyDev);
    if (!args[2])
      return msg.channel.send(
        `${client.messages.correctUsage} ${client.messages.premiumUsage}`
      );
    if (client.global.db.guilds[args[2]].premium === false) {
      client.global.db.guilds[args[2]].premium = true;
      let message;
      message = client.messages.nowPremium.replace(
        "%GUILD%",
        client.guilds.cache.get(args[2]).name
      );
      msg.channel.send(message);
    } else if (client.global.db.guilds[args[2]].premium === true) {
      client.global.db.guilds[args[2]].premium = false;
      let message;
      message = client.messages.noMorePremium.replace(
        "%GUILD%",
        client.guilds.cache.get(args[2]).name
      );
      msg.channel.send(message);
    }
  },
};
