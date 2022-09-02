import { load } from 'js-yaml';
import path from 'path';

import { AbstractPluginConfig } from './types/AbstractPlugin';
import { Language } from './types/Language';
import { readYamlFileSync } from './utils/yamlFile';

export interface Config {
    language: Language;
    directoryPath: string;
    jvmArguments: string[];
    rconClient: RconClientConfig;
}

export interface RconClientConfig {
    host: string;
    port: number;
    password: string;
}

export interface PluginsConfig {
    [plugin: string]: AbstractPluginConfig;
}

export const CONFIG_FOLDER = '.mixer';

export function loadConfig(): Config {
    const filePath = path.join(CONFIG_FOLDER, 'config.yml');

    const yaml = readYamlFileSync(filePath);
    const config = load(yaml) as Config;
    return config;
}

export function loadPluginConfig(id: string): AbstractPluginConfig {
    const filePath = path.join(CONFIG_FOLDER, 'plugins.yml');

    const yaml = readYamlFileSync(filePath);
    const config = load(yaml) as PluginsConfig;
    return config[id];
}
