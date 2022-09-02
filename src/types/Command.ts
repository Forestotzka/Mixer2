import { MaplePlayer } from 'maple-server';

export interface Command {
    prefix: string;
    callback: (sender: MaplePlayer, args: string[]) => void;
}
