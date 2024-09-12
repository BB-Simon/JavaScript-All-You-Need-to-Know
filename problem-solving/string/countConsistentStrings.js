/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
   let count = 0;
    // Create a set to store the allowed characters
    const allowedSet = new Set(allowed);

    // Loop through each word in the 'words' array
    for (let word of words) {
        let check = true;  // Initialize check as true for each word
        for (let char of word) {
            // If any character of the word doesn't exist in the allowedSet, mark the word as inconsistent
            if (!allowedSet.has(char)) {
                check = false;
                break;  // Exit the loop if an inconsistent character is found
            }
        }
        // If 'check' is still true, the word is consistent; increment the countult
        if (check) count++;
    }
    return count; 
};