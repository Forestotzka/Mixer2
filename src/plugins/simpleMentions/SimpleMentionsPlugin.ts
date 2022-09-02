import { AbstractPlugin, AbstractPluginConfig } from '../../types/AbstractPlugin';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SimpleMentionsPluginConfig extends AbstractPluginConfig {
}

const defaultConfig: SimpleMentionsPluginConfig = {
    enable: true,
};

export class SimpleMentionsPlugin extends AbstractPlugin {
    constructor(id: string) {
        super(id, 'SimpleMentions');
        this.setupPlugin(defaultConfig);
    }

    public override onEnable(): void {
        console.log(`enabled plugin: ${this.displayName}`);
    }

    public override onDisable(): void {
        console.log(`disabled plugin: ${this.displayName}`);
    }
}
