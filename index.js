

const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("I am ready!");
  });

  client.on("message", (message) => {
    if (message.content.startsWith("ping")) {
      message.channel.send("pong!");
    }
  });



client.login("NDE4MDk1MjQ1NjgzNTg5MTIw.DbjRjg.kdK62jHcODnVx6XqUM-xEli_eVI");

client.on("message", (message) => {
  if (message.content.startsWith("!kick")) {
      // Easy way to get member object though mentions.
      var member= message.mentions.members.first();
      // Kick
      member.kick().then((member) => {
          // Successmessage
          message.channel.send("Bim " + member.displayName + " a été exclu :point_right: ");
      }).catch(() => {
           // Failmessage
          message.channel.send("Access Denied");
      });
  }
});

client.on('guildMemberAdd', function (member) {
member.createDM().then(function (channel) {
 return channel.send('Bienvenue sur le serveur + member.displayName')
}).catch(console.error)
})

client.on('message', message => {
  if(message.content.includes("https") || message.content.includes("http")) {
      if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) {
          message.delete();
          const embed = new Discord.RichEmbed()
              .setTitle("Erreur")
              .setColor("RANDOM")
              .setDescription("Vous n'avez pas la permission d'envoyer  des liens !")
          message.author.send(embed);
      }
  }
});

client.on('message', message => {
  if(message.content.startsWith("!game"))  {
      if(message.author.id === "409648278393716736" || message.author.id === "318040882924355595") {
          let Game = message.content.split(" ").slice(1).join(" ");
          client.user.setGame(Game);
          message.delete();
      }else{
          message.channel.send("Cette commande a besoin de la permission du Fondateur du bot !")
      }
  }
});

client.on('message', message => {
	if(message.content.startsWith("!profil")) {
		let mentionned = message.mentions.users.first();
	if(!mentionned) {
		if(message.author.presence.status === "online") {
			var status = "En Ligne";
		}else if(message.author.presence.status === "dnd") {
			var status = "Ne pas déranger";
		}else if(message.author.presence.status === "idle") {
			var status = "Inactif";
		}else if(message.author.presence.status === "invisible") {
			var status = "Hors Ligne";
		}
		if(!message.author.game) {
			let game = "aucun jeu"
		}else{
			let game = message.author.game.name;
		}
		const e = new Discord.RichEmbed()
			.setTitle("Profil de " + message.author)
			.addField("Nom", message.author.username)
			.addField("ID", message.author.id)
			.addField("Status", status)
			.addField("Tag", message.author.tag)
			.addField("Roles", "```" + message.guild.member(message.author).roles.map(r => r.name).join(", ") + "```")
			.addField("#", message.author.discriminator)
		message.channel.send(e);
	}else{
		if(mentionned.presence.status === "online") {
			var status = "En Ligne";
		}else if(mentionned.presence.status === "dnd") {
			var status = "Ne pas déranger";
		}else if(mentionned.presence.status === "idle") {
			var status = "Inactif";
		}else if(mentionned.presence.status === "invisible") {
			var status = "Hors Ligne";
		}
		if(!mentionned.game) {
			let game = "aucun jeu"
		}else{
			let game = mentionned.game
		}
		const e = new Discord.RichEmbed()
			.setTitle("Profil de " + mentionned)
			.addField("Nom", mentionned.username)
			.addField("ID", mentionned.id)
			.addField("Status", status)
			.addField("Tag", mentionned.tag)
			.addField("Roles", "```" + message.guild.member(mentionned).roles.map(r => r.name).join(", ") + "```")
			.addField("#", mentionned.discriminator)
		message.channel.send(e);
	}
	}
});

client.on('message', message => {
    if(message.content.startsWith("!ban")) {
        let member = message.mentions.users.first();
        let reason = message.content.split(" ").slice(2).join(" ");
        let modlog = message.guild.channels.find("name", "banissement");
        if(!member) {
            message.channel.send("Utilisation: !ban <Utilisateur> <Raison>");
        }else{
            if(!reason) {
                message.channel.send("Utilisation: !ban <Utilisateur> <Raison>");
            }else{
                if(!modlog) {
                    message.channel.send("Il require le salon nommés banissement !")
                }else{
                    if(message.guild.member(message.author).hasPermission("BAN_MEMBERS")) {
                        if(message.guild.member(member).bannable) {
                            message.guild.member(member).ban(reason);
                            const e = new Discord.RichEmbed()
                                .setTitle("Bannisement")
                                .setColor("BLACK")
                                .addField("Utilisateur Banni", member)
                                .addField("Modérateur", message.author)
                                .addField("Raison", reason)
                            modlog.send(e);
                        }else{
                            message.channel.send("Le bot ne peux pas bannir " + member)
                        }
                    }else{
                        message.channel.send("Vous n'avez pas la permission")
                    }
                }
            }
        }
    }
});

client.on("message", (message) => {
    if(message.content === "Salut poto") {
      message.channel.send("Euh, t'es qui toi?");
    }
    if(message.content === "wat") {
      message.channel.send("Va revoir ton anglais soumis! :joy: ");
    }
    if(message.content === "lol") {
      message.channel.send("Euh, nan, c'est mieux mdr ou ptdr");
    }
    if(message.content === "miam") {
        message.channel.send("Oh oui, que c'est bon, le diner que mamy a fait :heart: ");
      }
      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }
      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }      if(message.content === "spam @everyone") {
        message.channel.send("@everyoneee let's go bombardement");
      }
      if(message.content === "T'es qui?") {
      message.channel.send("Je suis ton père mouhahaha");
    }
  if(message.content === "fdp") {
  message.channel.send("Tu fais du poulet toi? (fdp = faire du poulet)");
    }
    if(message.content === "connard") {
      message.channel.send("Mais, n'importe quoi, c'est toi qui dis ça, alors que ta pas d'ami ptddrr, va te cacher sous merde! Même un bot te nique :joy: ");
    }
    if(message.content === "!caca") {
      message.channel.send(" :poop: ");
    }
    if(message.content === "Fdp") {
        message.channel.send("Tu fais du poulet toi? (fdp = faire du poulet)");
      }
      if(message.content === "FDP") {
        message.channel.send("Tu fais du poulet toi? (fdp = faire du poulet)");
      }
      if(message.content === "ntm") {
        message.channel.send("Mais en faites, ma mère est morte, nique ta grand mère, d'ou tu parle de ma mère, elle est morte pd");
      }
      if(message.content === "Ntm") {
        message.channel.send("Mais en faites, ma mère est morte, nique ta grand mère, d'ou tu parle de ma mère, elle est morte pd");
      }
      if(message.content === "NTM") {
        message.channel.send("Mais en faites, ma mère est morte, nique ta grand mère, d'ou tu parle de ma mère, elle est morte pd");
      }
      if(message.content === "FRITES") {
        message.channel.send("Oh sérieux, arrête de parler de ça, je go au macdo ou kfc :yum: ");
      }
      if(message.content === "Frite") {
        message.channel.send("Oh sérieux, arrête de parler de ça, je go au macdo ou kfc :yum: ");
      }
      if(message.content === "frites") {
        message.channel.send("Oh sérieux, arrête de parler de ça, je go au macdo ou kfc :yum: ");
      }
      if(message.content === "frite") {
        message.channel.send("Oh sérieux, arrête de parler de ça, je go au macdo ou kfc :yum: ");
      }
      if(message.content === "FRITE") {
        message.channel.send("Oh sérieux, arrête de parler de ça, je go au macdo ou kfc :yum: ");
      }
      if(message.content === "Viande") {
        message.channel.send("Putain, ferme ta grand bouche avec ça, je suis végétalien, je mange que des légumes :yum: ");
      }
    })
  
  client.on('message', message => {
    if(message.content.startsWith("!em")) {
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
        message.channel.fetchMessages()
            .then(function (list) {
                message.channel.bulkDelete(list);
            },
            function (err) {
                message.channel.send("ERROR: ERROR CLEARING CHANNEL.")
            });
	}
}
})



client.on('message', message => {
    if(message.content.startsWith("!avatar")) {
	if(message.mentions.members.first()){
		const target = message.mentions.members.first();
		let embed = new Discord.RichEmbed()
			.setTitle(`Your requested Avatar!`)
			.setDescription(target + `'s Avatar`)
			.setImage(target.user.avatarURL)
			.setColor (0xFF0000);
		message.reply({embed});
	}else if(!message.mentions.members.first()){
		let embed = new Discord.RichEmbed()
			.setTitle("Ton avatar!")
			.setImage(message.author.avatarURL)
			.setColor(0xFF0000);
		message.reply({embed});
    }
}
})



client.on('message', message => {
  if(message.content.startsWith("hi")) {
	message.channel.send(`Hi, ${message.author.username}! I am ${config.botname}`);
} 
})

client.on('guildMemberAdd', function (member) {
  member.createDM().then(function (channel) {
channel.send('Bienvenue sur le serveur, je te souhaite de passer un agréable moment ' + displayName )
  }).catch(console.error)
})

client.on('guildMemberAdd', member => {
  var role = member.guild.roles.find('name', 'Membres');
})

client.on('guildMemberAdd', member => {
  var role = member.guild.roles.find('name', 'Membre');
})
