// Prompt for Copilot
// Write a JavaScript function toCamelCase that converts strings to camelCase.
// Here are some examples:
// first name → firstName
// user_id → userId
// SCREEN_NAME → screenName
// mobile-number → mobileNumber
// Implement the function to handle these cases.

function toCamelCase(str) {
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }
    
    return str
        .trim()
        .toLowerCase()
        .replace(/(?:^\w|[A-Z]|\b\w|\s+|\_+|\-+)/g, (match, index) => 
            index === 0 ? match.toLowerCase() : match.toUpperCase()
        )
        .replace(/[\s\-_]+/g, '');
}
