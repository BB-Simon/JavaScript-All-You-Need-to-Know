/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function(folder) {
    // Sort folders lexicographically so parent folders come before their subfolders
    folder.sort();
    
    const result = [folder[0]];  // Initialize result list with the first folder

    for (let i = 1; i < folder.length; i++) {
        const lastFolder = result[result.length - 1] + '/';
        
        // If the current folder does not start with the last added folder (plus a slash), it is not a subfolder
        if (!folder[i].startsWith(lastFolder)) {
            result.push(folder[i]);
        }
    }

    return result;
};