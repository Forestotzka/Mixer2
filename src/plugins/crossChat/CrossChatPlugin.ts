import { AbstractPlugin, AbstractPluginConfig } from '../../types/AbstractPlugin';

export interface CrossChatPluginConfig extends AbstractPluginConfig {
    token: string;
    channels: string[];
}

const defaultConfig: CrossChatPluginConfig = {
    enable: true,
    token: '',
    channels: [],
};

export class CrossChatPlugin extends AbstractPlugin {
    private token: string;
    private channels: string[];

    constructor(id: string) {
        super(id, 'CrossChat');

        this.token = defaultConfig.token;
        this.channels = defaultConfig.channels;
        this.setupPlugin(defaultConfig);
    }

    public override loadConfig(config: CrossChatPluginConfig): void {
        if (config.token) this.token = config.token;
        if (config.channels) this.channels = config.channels;
    }

    public override onEnable(): void {
        console.log(`enabled plugin: ${this.displayName}`);
    }

    public override onDisable(): void {
        console.log(`disabled plugin: ${this.displayName}`);
    }
}
