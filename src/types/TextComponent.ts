export interface TextComponent {
    text?: string;
    color?: Color;
    font?: string;
    bold?: boolean;
    italic?: boolean;
    underlined?: boolean;
    strikethrough?: boolean;
    obfuscated?: boolean;
    insertion?: string;
    clickEvent?: ClickEvent;
    hoverEvent?: HoverEvent;
    extra?: TextComponent;
    translate?: string;
    with?: TextComponent[];
    score?: Score;
    selector?: string;
    separator?: TextComponent;
    keybind?: string;
    nbt?: string;
    interpret?: boolean;
    block?: string;
    entity?: string;
    storage?: string;
}

export type Color =
    | 'black'
    | 'dark_blue'
    | 'dark_green'
    | 'dark_aqua'
    | 'dark_red'
    | 'dark_purple'
    | 'gold'
    | 'gray'
    | 'dark_gray'
    | 'blue'
    | 'green'
    | 'aqua'
    | 'red'
    | 'light_purple'
    | 'yellow'
    | 'white'
    | `#${number}`;

export interface ClickEvent {
    action: ClickEventAction;
    value: string;
}

export type ClickEventAction =
    | 'open_url'
    | 'open_file'
    | 'run_command'
    | 'suggest_command'
    | 'change_page'
    | 'copy_to_clipboard';

export interface HoverEvent {
    action: HoverEventAction;
    contents: TextComponent | ShowItem | ShowEntity;
}

export type HoverEventAction =
    | 'show_text'
    | 'show_item'
    | 'show_entity';

export interface ShowItem {
    id: string;
    count?: number;
    tag?: object;
}

export interface ShowEntity {
    name?: TextComponent;
    type: string;
    id: string;
}

export interface Score {
    name: string;
    objective: string;
    value?: string;
}
