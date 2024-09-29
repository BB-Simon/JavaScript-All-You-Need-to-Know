var AllOne = function() {
    this.fm = {};
    this.fsm = {};
};

/** 
* @param {string} key
* @return {void}
*/
AllOne.prototype.inc = function(key) {
    var oldFreq = this.fm[key] || 0;
    var newFreq = oldFreq + 1;
    this.fm[key] = newFreq;
    if (oldFreq in this.fsm) {
        var set = this.fsm[oldFreq];
        set.delete(key);
        if (set.size === 0) {
            delete this.fsm[oldFreq];
        }
    }
    if (!(newFreq in this.fsm)) {
        this.fsm[newFreq] = new Set();
    }
    this.fsm[newFreq].add(key);
};

/** 
* @param {string} key
* @return {void}
*/
AllOne.prototype.dec = function(key) {
    if (!(key in this.fm)) {
        return;
    }
    var oldFreq = this.fm[key];
    var newFreq = oldFreq - 1;
    this.fm[key] = newFreq;
    if (oldFreq in this.fsm) {
        var set = this.fsm[oldFreq];
        set.delete(key);
        if (set.size === 0) {
            delete this.fsm[oldFreq];
        }
    }
    if (newFreq > 0) {
        if (!(newFreq in this.fsm)) {
            this.fsm[newFreq] = new Set();
        }
        this.fsm[newFreq].add(key);
    }
};

/**
* @return {string}
*/
AllOne.prototype.getMaxKey = function() {
    if (Object.keys(this.fsm).length === 0) {
        return "";
    }
    var maxFreq = Math.max(...Object.keys(this.fsm));
    return Array.from(this.fsm[maxFreq])[0];
};

/**
* @return {string}
*/
AllOne.prototype.getMinKey = function() {
    if (Object.keys(this.fsm).length === 0) {
        return "";
    }
    var minFreq = Math.min(...Object.keys(this.fsm));
    return Array.from(this.fsm[minFreq])[0];
};

/** 
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */


// function createAllOne() {
//   const fm = {}; // Frequency map
//   const fsm = {}; // Frequency set map

//   function inc(key) {
//     update(key, (fm[key] || 0) + 1);
//   }

//   function dec(key) {
//     if (!(key in fm)) return;
//     update(key, fm[key] - 1);
//   }

//   function getMaxKey() {
//     const maxFreq = Math.max(...Object.keys(fsm).map(Number));
//     if (!fsm[maxFreq] || fsm[maxFreq].size === 0) return "";
//     return Array.from(fsm[maxFreq])[0];
//   }

//   function getMinKey() {
//     const minFreq = Math.min(...Object.keys(fsm).map(Number));
//     if (!fsm[minFreq] || fsm[minFreq].size === 0) return "";
//     return Array.from(fsm[minFreq])[0];
//   }

//   function update(key, newFreq) {
//     const oldFreq = fm[key] || 0;
//     fm[key] = newFreq;

//     // Remove key from the old frequency set
//     if (fsm[oldFreq]) {
//       fsm[oldFreq].delete(key);
//       if (fsm[oldFreq].size === 0) {
//         delete fsm[oldFreq];
//       }
//     }

//     // Add key to the new frequency set if it's greater than 0
//     if (newFreq > 0) {
//       if (!fsm[newFreq]) fsm[newFreq] = new Set();
//       fsm[newFreq].add(key);
//     }
//   }

//   return {
//     inc,
//     dec,
//     getMaxKey,
//     getMinKey
//   };
// }

// // Example usage:
// const allOne = createAllOne();
// allOne.inc("a");
// allOne.inc("b");
// allOne.inc("a");
// console.log(allOne.getMaxKey()); // "a"
// console.log(allOne.getMinKey()); // "b"
// allOne.dec("a");
// console.log(allOne.getMaxKey()); // "a" or "b"
