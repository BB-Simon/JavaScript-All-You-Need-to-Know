// primes = [
//     2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
//     71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149,
//     151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229,
//     233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313,
//     317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409,
//     419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499,
//     503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601,
//     607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691,
//     701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809,
//     811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907,
//     911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997
// ]


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var primeSubOperation = function(nums) {
    // Helper function to generate list of primes up to maxNum using Sieve of Eratosthenes
    function sieve(maxNum) {
        const isPrime = Array(maxNum + 1).fill(true);
        isPrime[0] = isPrime[1] = false;
        for (let i = 2; i * i <= maxNum; i++) {
            if (isPrime[i]) {
                for (let j = i * i; j <= maxNum; j += i) {
                    isPrime[j] = false;
                }
            }
        }
        const primes = [];
        for (let i = 2; i <= maxNum; i++) {
            if (isPrime[i]) primes.push(i);
        }
        return primes;
    }

    // Generate all primes up to 1000
    const primes = sieve(1000);

    // Initialize the previous number in the strictly increasing sequence
    let prev = 0;

    // Iterate over nums and apply the operation as needed
    for (let i = 0; i < nums.length; i++) {
        // Find the largest prime less than nums[i] that makes nums[i] - prime > prev
        let pos = primes.findIndex(prime => prime >= nums[i]);
        if (pos === -1) pos = primes.length; // No prime greater than or equal to nums[i]

        let success = false;

        // Try possible primes in reverse order to find the largest possible prime
        for (let j = pos - 1; j >= 0; j--) {
            const prime = primes[j];
            if (nums[i] - prime > prev) {
                nums[i] -= prime;
                success = true;
                break;
            }
        }

        // If no valid prime found and nums[i] is not greater than prev, return false
        if (!success && nums[i] <= prev) {
            return false;
        }

        // Update prev to the current element's value
        prev = nums[i];
    }

    // If we succeeded in making the array strictly increasing, return true
    return true;
};