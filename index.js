const Discord = require("discord.js"); //baixar a lib
const client = new Discord.Client();
const config = require("./config.json");


client.on("message", async message => {    

  if (message.isMentioned(client.user)) {
    let infob = new Discord.RichEmbed()
      .setDescription('Olá, sou o bot Hype,  meu prefixo é **h!** para ver meus comandos use `h!ajuda`')
    message.channel.send(infob);
  }
});
client.on('raw', async dados => {
    if(dados.t !== "MESSAGE_REACTION_ADD" && dados.t !== "MESSAGE_REACTION_REMOVE") return
    if(dados.d.message_id != "566982078625873931") return

    let servidor = client.guilds.get("572227186728370186")
    let membro = servidor.members.get(dados.d.user_id)

    let cargo1 = servidor.roles.get('694344367581691965'),
        cargo2 = servidor.roles.get('566986370363686943'),
        cargo3 = servidor.roles.get('566986398989549632')

    if(dados.t === "MESSAGE_REACTION_ADD"){
        if(dados.d.emoji.id === "566966275578789888"){
            if(membro.roles.has(cargo1)) return
            membro.addRole(cargo1)
        }else if(dados.d.emoji.name === "👌"){
            if(membro.roles.has(cargo2)) return
            membro.addRole(cargo2)
        }else if(dados.d.emoji.id === "566966738013388821"){
            if(membro.roles.has(cargo3)) return
            membro.addRole(cargo3)
        }
    }
    if(dados.t === "MESSAGE_REACTION_REMOVE"){
        if(dados.d.emoji.id === "566966275578789888"){
            if(membro.roles.has(cargo1)) return
            membro.removeRole(cargo1)
        }else if(dados.d.emoji.name === "👌"){
            if(membro.roles.has(cargo2)) return
            membro.removeRole(cargo2)
        }else if(dados.d.emoji.id === "566966738013388821"){
            if(membro.roles.has(cargo3)) return
            membro.removeRole(cargo3)
        }
    }

})




client.on("message", message => {
  const args = message.content.split(" ").slice(1);
 
  if (message.content.startsWith(config.prefix + "eval")) {
    if(message.author.id !== config.ownerID) return;
    try {
      const code = args.join(" ");
      let evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
 
      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
});



client.on('message', async (message) => {
  if (message.content === 'reiniciarbotstaff') {
    if (message.author.id === '514929188960993280') {
      client.destroy().then(r => {
        client.login(config.token)
        let embed = new Discord.RichEmbed()
          .setTimestamp()
          .setTitle('**Reiniciando | hype**')
          .setDescription(`Estou ` + "Reniciando")
          .addField("Será que é uma nova atualização?", `**Será? Nunca se sabe**`)
          .setColor("#ca00ff")
          .setFooter(message.author.tag)

        message.channel.send(embed)

      })
    } else {
      message.channel.send(`${message.author}, **você não tem permissão para executar este comando**`)
    }
  }
})

client.on('message', async (message) => {
  if (message.content === 'desligarbotstaff') {
    if (message.author.id === '514929188960993280') {
      let embed = new Discord.RichEmbed()
        .setTimestamp()
        .setTitle('**Desligando |  hype**')
        .setDescription(`Estou ` + "Desligando")
        .addField("Será que é uma nova atualização?", `**Será? Nunca se sabe**`)
        .setColor("#fff800")
        .setFooter(`Desenvolvido por:`, "@Slooooweqyy")

      await message.channel.send(embed).then(msg => {
        client.destroy()
        process.exit()
      })
    } else {
      message.channel.send(`${message.author}, **você não tem permissão para executar este comando**`)
    }
  }
})

client.on("ready", () => {
  console.log(`O Bot Hype foi ligado com sucesso!`);
  client.user.setPresence(`Transmitindo meu desenvolvimento`);
});
client.on('message', async (message) => {
  if (message.content === 'logout') {
    client.destroy()
  }
})

client.on('ready', () => {
 
// Com isso feito, basta só criar uma mensagem ou uma embed adicionando as variáveis.
  let tt = [
    { name: `Códigos!`, type: 'WATCHING' },
    { name: `#VemProCod`, type: 'LISTENING' },
    { name: `Pedra na Janela do meu desenvolvedor`, type: 'PLAYING' },
    { name: `Meu desenvolvimento`, type: 'STREAMING', url: 'https://twitch.tv/pedroricardo' },
    { name: `Olhe o changelog!`, type: 'STREAMING', url: 'https://twitch.tv/pedroricardo' },
    { name: `Meu Desenvolvimento`, type: 'PLAYING' },
    { name: `Meus DEVS`, type: 'STREAMING', url: 'https://twitch.tv/pedroricardo' },
    { name: `Entre no meu discord! - `, type: 'STREAMING', url: 'https://twitch.tv/pedroricardo' },
    { name: `iSlooowuS_`, type: 'WATCHING' },
    { name: `Sua música`, type: 'LISTENING' },
    { name: `Meu Desenvolvimento`, type: 'STREAMING', url: 'https://twitch.tv/drbiscoito' },
    { name: `Uma vida de bot!`, type: 'STREAMING', url: 'https://twitch.tv/pedroricardo' },
    { name: `Fui criado no dia: 03/04/2020 às 11:21 AM `, type: 'STREAMING', url: 'https://twitch.tv/pedroricardo' },
    { name: `Fazem 1d 5h que acordei!`, type: 'PLAYING' },
    { name: `Mais um dia`, type: 'STREAMING', url: 'https://twitch.tv/pedroricardo' },
    { name: `</Sloooow>#8735`, type: 'WATCHING' },
    { name: `Ouvindo Propostas de parceria`, type: 'LISTENING' },
    { name: `Comandos pro ar!`, type: 'PLAYING' },
    { name: `Logo by: Etinhoo`, type: 'STREAMING', url: 'https://twitch.tv/pedroricardo' },
    { name: `Porrada na cara do preguiçoso do meu desenvolvedor`, type: 'STREAMING', url: 'https://twitch.tv/pedroricardo' },
    { name: `Meu Desenvolvimento`, type: 'PLAYING' },
    { name: `Hype`, type: 'STREAMING', url: 'https://twitch.tv/pedroricardo' },
    { name: `Achou um bug? Chame meu desenvolvedor no privado`, type: 'STREAMING', url: 'https://twitch.tv/pedroricardo' },
  ]; function st() {
    let rs = tt[Math.floor(Math.random() * tt.length)];
    client.user.setPresence({ game: rs });
  }

  st();
  setInterval(() => st(), 20000);
});


client.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  if (!message.content.startsWith(config.prefix)) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();


  if (comando === "ajudaexcluidapowzim") {
    let embed = new Discord.RichEmbed()
      .setTitle("❖▬▬▬▬๑۩│Supreme│۩๑▬▬▬▬❖")
      .setColor("#020101")
      .setThumbnail(client.user.avatarURL)
      .setDescription("**Olá, aqui estará alguns de meus comandos:**")
      .addField(`scc!ajuda`, `*Mostra essa lista*`)
      .addField(`scc!say`, `*Faz eu falar algo (Apenas quem tem permissão)*`)
      .addField(`scc!ban`, `*Faz eu banir alguém (Apenas quem tem permissão)*`)
      .addField(`scc!apagar`, `*Faz eu apagar o chat (Apenas quem tem permissão)*`)
      .addField(`scc!ausente`, `*EM BREVE*`)
      .addField(`scc!reintegrar`, `Faz uma enquete de reintegração`)
      .addField(`scc!aviso`, `Faz um aviso `)
      .addField(`scc!blacklist/scc!bl`, `**Dá blacklist em algum membro**`)
      .addField(`scc!enquete`, `Faz uma enquete `)
    message.channel.send(embed)
  }
//if(!message.member.hasPermission("MANAGE_MEMBERS")) 

if (comando === "ajuda") {
   const emojiSim = client.emojis.find(emoji => emoji.name === 'sino')
   const emojiS = client.emojis.find(emoji => emoji.name === 'Nitro')
   const emojiSi = client.emojis.find(emoji => emoji.name === 'Zoom')
   const emojix = client.emojis.find(emoji => emoji.name === 'x')
    const embed_inicial = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle(`Ajuda - Selecione uma categoria `)
      .setDescription(`${emojiSim}

             💈 - Outros
             ♣ - Voltar
             🍇 - Moderação`)
    message.author.send(embed_inicial).then(async msg => {
      await msg.react('💈')
      await msg.react('🍇')
      await msg.react('♣')

      const coletor = msg.createReactionCollector(((reaction, user) => user.id === message.author.id), { time: 60000 })
      coletor.on('collect', col => {
        col.remove(message.author.id) // isso é para remover a reacao da pessoa

        switch (col.emoji.name) {
    


          case "💈": {
            const embed_categoria2 = new Discord.RichEmbed()
              .setColor('#00ff2b')
              .setTitle(`Ajuda - Outros`)
              .setDescription(`${emojiSi}
                             h!aviso - Avisa os membros sem dar everyone
                             h!ping - Informa meu ping 
                             h!linguagem - informa minha linguagem atual
                             h!enquete - Faz uma enqute
                             h!say - Faz eu falar algo 
                             h!new - Fala uma novidade sem dar everyone
                             h!anuncio - Faz um anúncio  dando everyone
                             h!invite - Envia o invite do bot
                             h!version - Mostra minha versão atual do Discord.JS`)
            msg.edit(embed_categoria2)
            break;
          }


          case "🍇": {
            const embed_categoria3 = new Discord.RichEmbed()
              .setColor('#ff0004')
              .setTitle(`Ajuda - Moderação`)
              .setDescription(`
                             h!ban = Da ban emcum usuário
                             h!blacklist = Da claclist em um usuário
                             h!limparchat = Apcga menssagens
                             h!reportar`)
            msg.edit(embed_categoria3)
            break;
          }

 case "♣": {
            const embed_categoria4 = new Discord.RichEmbed()
              .setColor('RANDOM')
              .setTitle(`Ajuda`)
              .setDescription(`${emojiSim}
                    💈 - Outros
                    ♣ - Voltar
                    🔲 - SubModeração
                    🍇 - Moderação`)
            msg.edit(embed_categoria4)
            break;
          }
        }
      })
    })
message.channel.send(`${message.author} enviei meus comandos para seu privado`)

     console.log(`${message.author.tag} usou o comando ajuda`) //Agora vamos fazer ele enviar o convite o DM
     let privado = new Discord.RichEmbed()
     .setTitle(`${emojiSim} - Entre em meu discord oficial - https://discord.gg/kMngwgu`)
     message.author.send(privado)
//Embed de convite feita, agora vamos mandar o bot enviar no DM
  
  

    const fetched = await message.channel.fetchMessages({ limit: deleteCount });
    message.channel.bulkDelete(fetched)

      .catch(error => message.reply(`Não foi possível deletar mensagens devido a: ${error}`));


  if(comando === "kick") {
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit: 
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    if(!message.member.hasPermission("BAN_MEMBERS"))
      return message.reply(`eita! vai com calma ae, você não tem permissões pra isso`);
    
    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Mencione um membro válido");
    if(!member.kickable) 
      return message.reply("Eu não posso kica-lo, ou ele tem um cargo superior ao meu ou eu não possuo permissões para isso");
    
    // slice(1) removes the first part, which here should be the user mention or ID
    // join(' ') takes all the various parts to make it a single string.
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Nenhuma razão";
    
    // Now, time for a swift kick in the nuts!
    await member.kick(reason)
      .catch(error => message.reply(`Desculpa ${message.author} infelizmente você não pode kicar por causa de: ${error}`));
      message.reply(`${member.user.tag} Foi kicado por ${message.author.tag} Motivo: ${reason}`);
      console.log(`${message.author.tag} usou kick para kicar o ${member.user.tag}`)


  }
    if (comando === "avatar") {
    var member= message.mentions.members.first();
    let embed = new Discord.RichEmbed()
    .setTitle(`Aqui está o avatar `)
  .setImage(message.member.avatarURL)
  .setColor('RANDOM')
    message.channel.send(embed)
  }


  if(comando === "invite") { 
    let invite = new Discord.RichEmbed()
    

    .setTitle(` Me convide para seu servidor `)
    .setDescription(`Invite - [Clique Aqui](https://discordapp.com/oauth2/authorize?&client_id=695634665222176860&scope=bot)`)
    message.channel.send(`${message.author} Olha sua DM ae broow`)
    message.author.send(invite)
  }
if(comando === "site") {
  const site = new Discord.RichEmbed()
  .setTitle(`Você quer ver meu site? - Ele ainda está em desenvolvimento` )
  message.author.send(site)
}



}
});

const fs = require("fs")
let Comandos = []

fs.readdir("./comandos_teste", (err, arquivos) => {
  const ArquivoJs = arquivos.filter(arquivo => arquivo.split('.').pop() === 'js')
  if (ArquivoJs.length > 0) {
    arquivos.forEach((valor, index) => {
      if(index===0){
        console.log('Carregando comandos...')
      }
      const ArquivoRequire = require(`./comandos_teste/${valor}`)
      Comandos.push(ArquivoRequire)
      console.log(`${valor} carregado!`)
      if (index === ArquivoJs.length - 1) {
        console.log('Todos os comandos foram carregados com sucesso!')
      }
    })
  } else {
    console.log('Nenhum comando encontrado!')
  }
})

client.on('message', (message) => {
  if (message.author.bot) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
  if (message.content.startsWith(config.prefix)) {
    const AcharComando = Comandos.find(objeto => objeto.nome === args.slice(0, 1).join(' '))
    if (AcharComando) {
      AcharComando.executavel(client, message, args)
    } else {
      
    }
  }
})

client.login(config.token);