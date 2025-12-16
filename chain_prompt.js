// Prompt for Copilot
// Write a JavaScript function toKebabCase that converts a given string to kebab-case by following these steps:
// 1. Remove any leading or trailing spaces from the input string.
// 2. Convert all uppercase letters to lowercase and replace spaces, underscores, and hyphens between words with a single hyphen (-).
// 3. Ensure that if the input is not a valid string (such as null, undefined, or non-string values), the function throws an error with a descriptive message.
// 4. If the input string is empty or consists only of delimiters, return an empty string.

// For example:
// toKebabCase('Hello World') should return 'hello-world'
// toKebabCase('Hello_World') should return 'hello-world'
// toKebabCase(' hello__world ') should return 'hello-world'
// Additionally, toKebabCase('') should return '', and toKebabCase(' ') should also return ''.

function toKebabCase(str) {
    if (typeof str !== 'string') {
        throw new Error('Input must be a valid string');
    }

    if (!str.trim()) {
        return '';
    }

    return str
        .trim()
        .toLowerCase()
        .replace(/[\s\-_]+/g, '-');
}
