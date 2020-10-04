export const combineClassNames = (...args: (string | undefined | false)[]): string => args.filter(Boolean).join(' ')
