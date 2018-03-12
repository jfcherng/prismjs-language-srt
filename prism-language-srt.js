/*!
 * SRT subtitle syntax highlight for Prism.js
 *
 * @author Jack Cherng <jfcherng@gmail.com>
 * @version 1.0.3
 * @license MIT
 */
Prism.languages.srt = {
    'id': {
        pattern: /^\d+$/m,
        alias: 'number'
    },
    'time-line': {
        pattern: /(^|\s)(\d+\s*[:：]\s*\d+\s*[:：]\s*\d+[,，.．]\d+)\s*-+>\s*(\d+\s*[:：]\s*\d+\s*[:：]\s*\d+[,，.．]\d+)/m,
        lookbehind: true,
        inside: {
            'time': {
                pattern: /\d+\s*[:：]\s*\d+\s*[:：]\s*\d+[,，.．]\d+/m,
                alias: 'string'
            },
            'dashed-arrow': {
                pattern: /-+>/,
                alias: 'punctuation'
            },
            'space': / /
        }
    },
    'ass-tag': {
        pattern: /\{@*\\[^}\r\n]+\}/,
        inside: {
            'space': / /
        },
        alias: 'comment'
    }
};
