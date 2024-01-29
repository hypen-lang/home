export const languageConfiguration = {
    comments: {
        lineComment: '//',
        // blockComment: ['/*', '*/'], // Uncomment if your language supports block comments
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')']
    ],
    autoClosingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        // ... any other auto-closing pairs
    ],
    // other configurations...
};
