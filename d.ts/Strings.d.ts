declare namespace Strings {
    export function pluralize(num: number, words: string[]): string;
    export function numConversion(num: number, words: string[], dontPrintNumber?: boolean): string;
    export function formatCost(cost: number, groupSeparator?: string, forceShowCents?: boolean): string;
    export function formatCostInCents(cost: number, groupSeparator?: string, forceShowCents?: boolean): string;
}

export default Strings;