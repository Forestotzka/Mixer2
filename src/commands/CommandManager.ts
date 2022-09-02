import { MaplePlayer } from 'maple-server';

import { Command } from '../types/Command';

export class CommandManager {
    private static commands: Command[] = [];

    public static registerCommand(prefix: string, callback: (sender: MaplePlayer, args: string[]) => void): void {
        CommandManager.commands.push({
            prefix: prefix,
            callback: callback,
        });
    }

    public static onPlayerChat(senders: MaplePlayer[], message: string): void {
        const sender = senders[0];
        const args = message.split(' ');

        for (const command of CommandManager.commands) {
            if (command.prefix === args[0]) {
                args.shift();
                command.callback(sender, args);
            }
        }
    }
}
