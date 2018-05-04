const Discord = require ('discord.js');

var bot = new Discord.Client();
var prefix = ('!');





bot.on('ready', () => {
    bot.user.setActivity(`!invitation Nombre d'utilisateurs : ${bot.users.size}`);
    console.log("Le bot est pret !");
});

bot.login(process.env.TOKEN);


bot.on('message',message => {
    if (message.content === "ping"){
        message.reply("pong !");
        console.log ('Easter egg 1 trouvé');
    
    }

    if (message.content === prefix +'invitation'){
        var invitation_embed = new Discord.RichEmbed()
       .setColor('#25E6B9')
       .addField("invitation du bot","   Lien du bot : https://discordapp.com/oauth2/authorize?client_id=432084941640302593&scope=bot&permissions=8 ")
       .addField("invitation du serveur Not ok","Lien d'invitation: https://discord.gg/jRvuNUg ")
       .setFooter("Page d'invitation")
       message.channel.sendEmbed(invitation_embed);
   console.log("La comande d'invitation a été demander");
   }
if (message.content === prefix + 'cheatop'){
  var easteregg_2_embed = new Discord.RichEmbed()
  .setColor('#25E6B9')
  .addField("Succès !","tu es desormis le propriétaire du serveur, tu peux désormais tout niquer ou bannis tout le monde!")
  .setFooter("Et la, maintenant, tu te sens con, car sa marche pas, et tu viens de te faire prank, rip toi, une minute de silence pls")
  message.channel.sendEmbed(easteregg_2_embed);
  console.log ('Easter egg 2 trouvé');

}
});

bot.on("message", (message) => {
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

  bot.on('message', message => {
    if(message.content.includes("https") || message.content.includes("http")) {
        if(!message.guild.member(message.author).hasPermission("EMBED_LINKS")) {
            message.delete();
            const embed = new Discord.RichEmbed()
                .setTitle("Erreur")
                .setColor("RANDOM")
                .setDescription("Vous n'avez pas la permission d'envoyer  des liens !")
            message.author.send(embed);
        }
    }
  });

  bot.on('message', message => {
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

bot.on("message", (message) => {
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
      if(message.content === "YAYA") {
        message.channel.send("C'est qui lui? Ah oui, c'est bon, je m'en rappelle, c'est le boss du serveur Les bromingos");
      }
      if(message.content === "Heya!") {
        message.channel.send("Bien le bonjour. :)");
      }
      })
    
  
  bot.on('message', message => {
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



bot.on('message', message => {
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

bot.on('guildMemberAdd', function (member) {
    member.createDM().then(function (channel) {
     return channel.send('Bienvenue sur le serveur que tu viens de rejoindre, je te souhaite un excellent moment dedans')
    }).catch(console.error)
    })

    bot.on('message', message => {
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

    bot.on("message", function(message) {
        if (message.author.equals(bot.user)) return;

        if(!message.content.startsWith(prefix)) return;

        var args = message.content.substring(prefix.length).split(" ")

        switch (args[0].toLowerCase()) {
            case "roll":
            var roll = Math.floor(Math.random() * args[1]) +1;
            if (!roll) return message.reply("Entre un numéro")
            message.channel.send("Je choisis le numéro " + roll + " !");
            break;
            case"8ball":
            let args = message.content.split(" ").slice(1);
            let tte = args.join(" ")
            if (!tte){
                return message.reply("Merci de poser une question :8ball: ")};

                var replys = [
                    "Oui",
                    "Non",
                    "Je ne sais pas",
                    "Peut être"

                ];

                let reponse = (replys[Math.floor(Math.random() * replys.length)])
                var embed = new Discord.RichEmbed()
                .setDescription(":8ball:")
                .addField("Question", tte)
                .addField("Réponse", reponse)
                message.channel.sendEmbed(embed)
            }}) 


            bot.on('message', message => {

                if(message.content === prefix + "si") {
                    var embed = new Discord.RichEmbed()
                    .setDescription("Information du discord")
                    .addField("Nom du discord", message.guild.name)
                    .addField("Crée le", message.guild.createdAt)
                    .addField("Tu as rejoins ce serveur le", message.guild.joinedAt)
                    .addField("Nombres de membres sur ce serveur", message.guild.memberCount)
                    .setColor("0x0000FF")
                    message.channel.sendEmbed(embed)

                }
            })

bot.on('message', message => {
    if (message.content === prefix + "fabriquant"){
        message.channel.sendMessage("*Ce bot a été crée par Akatoyaki*");
        console.log("fabriquant effectué");
    }
    
    if (message.content === "Salut"){
        message.reply("Bien le bonjour. :)");
        console.log("salut");
    }
    
    if (message.content === "Bonjour"){
        message.reply("Bien le bonjour. :)");
        console.log("bonjour");
    }
    
    if (message.content === "slt"){
        message.reply("Bien le bonjour. :)");
        console.log("slt");
    }
    
    if (message.content === "bjr"){
        message.reply("Bien le bonjour. :)");
        console.log("bjr");
    }
    
    if (message.content === "Hey"){
        message.reply("Bien le bonjour. :)");
        console.log("hey");
    }

});


