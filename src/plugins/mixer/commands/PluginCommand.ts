import { MaplePlayer } from 'maple-server';

import { PLUGIN_LIST } from '../../..';
import { TextComponent } from '../../../types/TextComponent';
import { arrayToComponents } from '../utils/textComponent';

export function pluginCommand(sender: MaplePlayer, args: string[]): void {
    switch (args[0]) {
        case 'list': {
            const enabledPls: string[] = [];
            const disabledPls: string[] = [];

            for (const plugin of PLUGIN_LIST) {
                if (plugin.enabled) {
                    enabledPls.push(plugin.displayName);
                } else {
                    disabledPls.push(plugin.displayName);
                }
            }

            const enabledComps: TextComponent[] = [
                {
                    text: `${enabledPls.length} plugins enabled: `,
                    color: 'white',
                },
            ];
            const disabledComps: TextComponent[] = [
                {
                    text: '\n',
                },
                {
                    text: `${disabledPls.length} plugins disabled: `,
                    color: 'white',
                },
            ];

            const enabled = enabledComps.concat(arrayToComponents(enabledPls));
            const disabled = disabledComps.concat(arrayToComponents(disabledPls));
            const json = enabled.concat(disabled);

            sender.sendCommand(`tellraw @s ${JSON.stringify(json)}`);
            break;
        }
    }
}
