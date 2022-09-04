import { CONFIG } from '..';
import { Language } from '../types/Language';
import { Locales } from '../types/Locales';

const languages: Language[] = ['en_US', 'ja_JP'];

const locales: Locales = {};

/**
 * 全ての言語別のテキストをロードします
 */
export async function loadAllLocale(): Promise<void> {
    for (const lang of languages) {
        await loadLocale(lang);
    }
}

/**
 * 言語別のテキストをロードします
 * @param lang 言語
 */
export async function loadLocale(lang: Language): Promise<void> {
    locales[lang] = await import(`./languages/${lang}.json`);
}

/**
 * 言語別のテキストを取得します
 * @param id 翻訳識別子
 * @param lang 言語
 * @returns テキスト
 */
export function locale(id: string, lang?: Language): string {
    const useLang = lang ? lang : CONFIG.language;

    const ids = locales[useLang];
    if (!ids) {
        console.warn(`The specified language '${useLang}' was not found.`);
        return '';
    }

    const text = ids[id];
    if (!text) {
        console.warn(`The specified translation identifier '${id}' was not found.`);
        return '';
    }
    return text;
}
