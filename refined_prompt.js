// Prompt for Copilot
// Write a JavaScript function toCamelCase that converts a given string to camelCase.
// The function should handle both single words and multi-word strings with spaces, hyphens, or underscores as delimiters (e.g., "hello world", "hello-world", "hello_world").
// It should ignore leading and trailing spaces and ensure that the first word is lowercase while subsequent words are capitalized (e.g., "hello world" should return "helloWorld").
// The function must throw an error with a descriptive message if the input is not a valid string (such as null, undefined, or non-string values).
// It should also handle edge cases such as empty strings, strings with only delimiters, or strings with mixed-case characters (e.g., "hello__world" or "Hello-world").
// If the input is an empty string or consists solely of delimiters, the function should return an empty string.

// For example:
// toCamelCase('hello world') should return 'helloWorld'
// toCamelCase('Hello world') should return 'helloWorld'
// toCamelCase('hello_world') should return 'helloWorld'
// toCamelCase('hello-world') should return 'helloWorld'
// If the input is an empty string or just spaces, like toCamelCase(' '), the function should return ''.

function toCamelCase(str) {
    if (typeof str !== 'string') {
        throw new Error('Input must be a valid string');
    }

    if (!str.trim()) {
        return '';
    }

    return str
        .trim()
        .toLowerCase()
        .replace(/(?:^\w|[A-Z]|\b\w|\s+|\_+|\-+)/g, (match, index) => 
            index === 0 ? match.toLowerCase() : match.toUpperCase()
        )
        .replace(/[\s\-_]+/g, '');
}
