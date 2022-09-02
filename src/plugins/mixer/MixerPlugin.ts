import { CommandManager } from '../../commands/CommandManager';
import { AbstractPlugin, AbstractPluginConfig } from '../../types/AbstractPlugin';
import { pluginCommand } from './commands';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MixerPluginConfig extends AbstractPluginConfig {
}

const defaultConfig: MixerPluginConfig = {
    enable: true,
};

export class MixerPlugin extends AbstractPlugin {
    constructor(id: string) {
        super(id, 'Mixer');
        this.setupPlugin(defaultConfig);
    }

    public override onEnable(): void {
        console.log(`enabled plugin: ${this.displayName}`);

        CommandManager.registerCommand('!plugin', pluginCommand);
    }

    public override onDisable(): void {
        console.log(`disabled plugin: ${this.displayName}`);
    }
}
