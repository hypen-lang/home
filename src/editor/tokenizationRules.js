export const tokensProvider = {
    defaultToken: '',
    tokenPostfix: '.hypen',

    keywords: [
        'module', 'component', 'Column', 'Row', 'Text', 'Canvas', 'Rect', `Container`, `Image`, `Button`, `Input`, `Form`, `List`
        // ... add all your keywords
    ],

    operators: [
        '.', ',', '{', '}', '(', ')', '[', ']'
        // ... add all your operators
    ],

    // The main tokenizer for your languages
    tokenizer: {
        root: [
            // Highlight 'module' in a unique color
            [/\bmodule\b/, 'module-keyword'],

            // Highlight 'Text', 'Column', 'Row' in another color
            [/\b(Text|Column|Row|Canvas|Rect|Container|Image|Button|Input|List)\b/, 'component-keyword'],
            [/\/\/.*$/, 'comment'], // Line comment
            // Highlight applicators (between . and braces/brackets)
            [/\.\s*(\w+)\s*(?=[\[({])/, 'applicator'],
            // Highlight words before a bracket that aren't in brackets (component names)
            [/\b(?<!])\w+(?=\s*\{)/, 'pre-bracket'],
            // Brackets
            [/[{}]/, 'delimiter.bracket'],
            [/[a-z_$][\w$]*/, { cases: { '@keywords': 'keyword', '@default': 'identifier' } }],
            [/#[\w]+/, 'number.hex'],
        ],
    },
};
