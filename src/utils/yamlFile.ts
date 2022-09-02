import { readdirSync, readFileSync } from 'fs';
import path from 'path';

export function readYamlFileSync(filePath: string): string {
    const fileName = path.parse(filePath).name.toLowerCase();
    const dirPath = path.dirname(filePath);

    const files = readdirSync(dirPath, 'utf-8');

    for (const file of files) {
        const name = path.parse(file).name.toLowerCase();
        const ext = path.parse(file).ext.toLowerCase();

        if (name === fileName) {
            if (ext === '.yaml' || ext === '.yml') {
                const yamlFilePath = path.join(dirPath, name + ext);
                return readFileSync(yamlFilePath, 'utf-8');
            }
        }
    }

    throw Error('Failed to load yaml file.');
}
