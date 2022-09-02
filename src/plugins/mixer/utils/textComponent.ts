import { TextComponent } from '../../../types/TextComponent';

export function arrayToComponents(array: string[]): TextComponent[] {
    const components: TextComponent[] = [];

    for (let i = 0; i < array.length; i++) {
        components.push({
            text: array[i],
            color: 'green',
        });

        if (i !== array.length - 1) {
            components.push({
                text: ', ',
                color: 'gray',
            });
        }
    }
    return components;
}
