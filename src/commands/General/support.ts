import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
  constructor(client: WAClient, handler: MessageHandler) {
    super(client, handler, {
      command: "support",
      aliases: ["support"],
      description: "Gets the support group links",
      category: "general",
      usage: `${client.config.prefix}Support`,
      baseXp: 10,
    });
  }

  run = async (M: ISimplifiedMessage): Promise<void> => {
    await this.client.sendMessage(
      M.sender.jid,
      ` _*I'M  LEVI*\n\n
        _*LEVI NEWS*_:  https://chat.whatsapp.com/Fnk9vRRcSS8L22L8Bq1GyZ\n\n 
        _*WELCOME TO LEVI BOT. inc *_ https://chat.whatsapp.com/Fnk9vRRcSS8L22L8Bq1GyZ\n\n
        _*LEVI NSFW*_:https://chat.whatsapp.com/EmfhxmgQhNfIUxiE8NHCvq\n\n 
        
`,

      MessageType.text
    );

    return void M.reply("Sent you the Group Link in personal message");
  };
}
