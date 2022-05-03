let handler =  m => m.reply(`
╭─「 Donasi 」
│ • Dana : 087899922661
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
