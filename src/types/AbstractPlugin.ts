import { loadPluginConfig } from '../Config';

export interface AbstractPluginConfig {
    enable: boolean;
}

export interface AbstractPlugin {
    onEnable?(): void;
    onDisable?(): void;
    loadConfig?(config: AbstractPluginConfig): void;
}

export abstract class AbstractPlugin {
    private _enabled = false;

    constructor(
        public readonly id: string,
        public readonly displayName: string,
    ) {}

    public get enabled(): boolean {
        return this._enabled;
    }

    protected setupPlugin(defaultConfig: AbstractPluginConfig): void {
        const config = loadPluginConfig(this.id) as AbstractPluginConfig;

        this._enabled = defaultConfig.enable;
        if (typeof config.enable === 'boolean') {
            this._enabled = config.enable;
        }

        if (this.loadConfig) {
            this.loadConfig(config);
        }
        this.setEnabled(this._enabled);
    }

    private setEnabled(enabled: boolean): void {
        if (enabled) {
            if (this.onEnable) this.onEnable();
        } else {
            if (this.onDisable) this.onDisable();
        }
    }
}
