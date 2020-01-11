export const setActionPrefix = (actionType: string, prefix: string): string =>
    `${prefix}${actionType}`;
