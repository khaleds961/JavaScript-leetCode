function allStringsHaveLength(arr, n) {
    return arr.every((str) => str.length === n);
}

console.log(allStringsHaveLength(["apple", "banana", "cherry"], 6)); // Output: true
console.log(allStringsHaveLength(["apple", "banana", "cherry"], 5)); // Output: false