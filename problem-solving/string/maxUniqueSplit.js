/**
 * @param {string} s
 * @return {number}
 */
var maxUniqueSplit = function(s) {
    const backtrack = (start, seen) => {
        if (start === s.length) {
            return 0; // Base case: if we've reached the end of the string
        }
        
        let maxSplits = 0;
        
        // Try splitting the string into all possible substrings starting from 'start'
        for (let end = start + 1; end <= s.length; end++) {
            const substring = s.slice(start, end); // Get the substring from start to end
            
            if (!seen.has(substring)) { // Check if the substring hasn't been used yet
                seen.add(substring); // Add the current substring to the set
                maxSplits = Math.max(maxSplits, 1 + backtrack(end, seen)); // Recursively split the remaining string
                seen.delete(substring); // Remove the substring for backtracking
            }
        }
        
        return maxSplits;
    };
    
    return backtrack(0, new Set()); // Start the backtracking with an empty set
};