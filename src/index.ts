import { MapleServer } from 'maple-server';

import { CommandManager } from './commands/CommandManager';
import { loadConfig } from './Config';
import { CrossChatPlugin, MixerPlugin, SimpleMentionsPlugin } from './plugins';
import { AbstractPlugin } from './types/AbstractPlugin';

export const CONFIG = loadConfig();

export const SERVER = new MapleServer({
    rconClient: CONFIG.rconClient,
    server: {
        directoryPath: CONFIG.directoryPath,
    },
});

SERVER.on('playerChat', CommandManager.onPlayerChat);

export const PLUGIN_LIST: AbstractPlugin[] = [];
PLUGIN_LIST.push(new CrossChatPlugin('crossChat'));
PLUGIN_LIST.push(new SimpleMentionsPlugin('simpleMentions'));
PLUGIN_LIST.push(new MixerPlugin('mixer'));

SERVER.start(CONFIG.jvmArguments);
