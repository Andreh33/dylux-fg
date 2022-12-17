                                membercount: groupMetadata.participants.length,
                                profile: pp,
                                background: 'https://i.imgur.com/klTSO3d.jpg'
                            }, 'apikey')
                            // this.sendFile(id, pp, 'pp.jpg', text, null, false, { mentions: [user] })
                            this.sendButton(id, text, fgig, action === 'add' ? wel : lea, [
                             [(action == 'add' ? '⦙☰ MENU' : 'BYE'), (action == 'add' ? '/help' : 'khajs')], 
                             [(action == 'add' ? '⏍ INFO' : 'ッ'), (action == 'add' ? '/info' : ' ')] ], null, {mentions: [user]})
                          
                    }
                }
            }
            break
        case 'promote':
        case 'promover':
            text = (chat.sPromote || this.spromote || conn.spromote || '@user ahora es administrador')
        case 'demote':
        case 'degradar':
            if (!text)
                text = (chat.sDemote || this.sdemote || conn.sdemote || '@user ya no es administrador')
            text = text.replace('@user', '@' + participants[0].split('@')[0])
            if (chat.detect)
                this.sendMessage(id, { text, mentions: this.parseMention(text) })
            break
    }
}

/**
 * Handle groups update
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['groups.update']} groupsUpdate 
 */
export async function groupsUpdate(groupsUpdate) {
    if (opts['self'])
        return
    for (const groupUpdate of groupsUpdate) {
        const id = groupUpdate.id
        if (!id) continue
        let chats = global.db.data.chats[id], text = ''
        if (!chats?.detect) continue
        if (groupUpdate.desc) text = (chats.sDesc || this.sDesc || conn.sDesc || 'Descripción cambiada a \n@desc').replace('@desc', groupUpdate.desc)
        if (groupUpdate.subject) text = (chats.sSubject || this.sSubject || conn.sSubject || 'El nombre del grupo cambió a \n@group').replace('@subject', groupUpdate.subject)
        if (groupUpdate.icon) text = (chats.sIcon || this.sIcon || conn.sIcon || 'El icono del grupo cambió a').replace('@icon', groupUpdate.icon)
        if (groupUpdate.revoke) text = (chats.sRevoke || this.sRevoke || conn.sRevoke || 'El enlace del grupo cambia a\n@revoke').replace('@revoke', groupUpdate.revoke)
        if (!text) continue
        await this.sendMessage(id, { text, mentions: this.parseMention(text) })
    }
}

export async function deleteUpdate(message) {
    try {
        const { fromMe, id, participant } = message
        if (fromMe)
            return
        let msg = this.serializeM(this.loadMessage(id))
        if (!msg)
            return
        let chat = global.db.data.chats[msg.chat] || {}
        if (chat.delete)
            return
        await this.reply(msg.chat, `
≡ Borró un mensaje  
┌─⊷  𝘼𝙉𝙏𝙄 𝘿𝙀𝙇𝙀𝙏𝙀 
▢ *Nombre :* @${participant.split`@`[0]} 
└─────────────
Para desactivar esta función, escriba 
*/off antidelete*
*.enable delete*
`.trim(), msg, {
            mentions: [participant]
        })
        this.copyNForward(msg.chat, msg).catch(e => console.log(e, msg))
    } catch (e) {
        console.error(e)
    }
}

global.dfail = (type, m, conn) => {
    let msg = {
        rowner: '👑 Este comando solo puede ser utilizado por el *Creador del bot*',
        owner: '🔱 Este comando solo puede ser utilizado por el *Dueño del Bot*',
        mods: '🔰  Esta función es solo para *Para moderadores del Bot*',
        premium: '💠 Este comando es solo para miembros *Premium*\n\nEscribe */premium* para más info',
        group: '⚙️ ¡Este comando solo se puede usar en grupos!',
        private: '📮 Este comando solo se puede usar en el chat *privado del Bot*',
        admin: '🛡️ Este comando es solo para *Admins* del grupo',
        botAdmin: '💥 ¡Para usar este comando debo ser *Administrador!*',
        unreg: '📇 Regístrese para usar esta función  Escribiendo:\n\n*/reg nombre.edad*\n\n📌Ejemplo : */reg dylux.16*',
        restrict: '🔐 Esta característica está *deshabilitada*'
    }[type]
    if (msg) return conn.sendButton(m.chat, msg, fgig, null, [['🔖 OK', 'khajs'], ['⦙☰ Menu', '/menu'] ], m)
}

let file = global.__filename(import.meta.url, true)
watchFile(file, async () => {
    unwatchFile(file)
    console.log(chalk.magenta("✅  Se actualizo 'handler.js'"))
    if (global.reloadHandler) console.log(await global.reloadHandler())
})  
