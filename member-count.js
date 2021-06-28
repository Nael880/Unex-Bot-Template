module.exports = (client) => {
const channelId = '838073488622747698'

const updateMembers = (guild) => {
    const channel = guild.channels.cache.get(channelId)
    channel.setName('Membres: ${guild.memberCount.toLocaleString()}')
}

client.on('guildMemberAdd', (member) => updateMembers(member.guild))
client.on('guildMemberRemove', (member) => updateMembers(member.guild))

const guild = client.guilds.cache.get('561302637673447445')
updateMembers(guild)
}