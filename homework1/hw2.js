// ~~~~~ task 1 ~~~~~ //
// concat()
function concat(...arguments) {
    return arguments.reduce((result, str) => result + str, "");
}

console.log(concat("Hello", " ", "world!"))


// ~~~~~ task 2 ~~~~~ //
// lastIndexOf()
function lastIndexOf(str, searchValue, fromIndex = str.length) {
    //;
    if (fromIndex < 0) fromIndex = 0;
    if (fromIndex > str.length) fromIndex = str.length;
    if (searchValue === "") return fromIndex;
    let indexInSearchValue = searchValue.length-1;
    for (let i = fromIndex - 1; i >= 0; i--) {
        if (str[i] == searchValue[indexInSearchValue]) {
            indexInSearchValue --;
            if (indexInSearchValue < 0) {
                return i;
            }
        } else {
            indexInSearchValue = searchValue.length-1;
        }
    }
    return -1;
}

// way 2
function lastIndexOf2(str, searchValue, fromIndex = str.length) {
    const regExp = new RegExp(searchValue,"g");
    if (fromIndex !== str.length) {
        str = str.slice(0, fromIndex+1);
    }
    let matches = Array.from(str.matchAll(regExp));
    return matches[matches.length-1].index;
}

console.log(lastIndexOf("hello hello world!", "hello"));
console.log(lastIndexOf2("hello hello world!", ""));


// ~~~~~ task 3 ~~~~~ //
// includes()
function includes(str, searchString, fromIndex = 0) {
    const regExp = new RegExp(searchString);
    return fromIndex === 0 ? regExp.test(str) : regExp.test(str.slice(fromIndex));
}

console.log(includes("Hello world", "world"))
console.log(includes("Hello world", "Hello", 2))


// ~~~~~ task 4 ~~~~~ //
// repeat()
function repeat(str, count) {
    if (count === 0) return "";
    if (count >= 0 && count < Infinity) {
        count = Math.floor(count);
        let result = "";
        for (let i = 0; i < count; i++) {
            result += str;
        }
        return result;
    } else return new RangeError();
}

console.log(repeat("hello", 6));


// ~~~~~ task 5 ~~~~~ //
// substr()
function substr(str, start, length) {
    if (start >= str.length || length <= 0) return "";
    if (start < 0) start = str.length + start;
    let finish = (length && length < str.length - start) ? start + length : str.length;
    let result = "";
    for (let i = start; i < finish; i++) {
        result += str[i];
    }
    return result;
}

console.log(substr("Hello world!", 6));
console.log(substr("Hello world!", 6, 5));


// ~~~~~ task 6 ~~~~~ //
// substring()
function substring(str, indexA, indexB) {
    if (indexA == indexB) return "";
    if (indexA <= 0 || isNaN(indexA)) indexA = 0;
    if (indexB <= 0 || isNaN(indexB)) indexB = 0;
    if (indexA > str.length) indexA = str.length;
    if (indexB > str.length || !indexB) indexB = str.length;
    if (indexA > indexB) {
        let temp = indexA;
        indexA = indexB;
        indexB = temp;
    }
    let result = "";
    for (let i = indexA; i < indexB; i++) {
        result += str[i];
    }
    return result;
}

console.log(substring("Hello world!", 11, 6));
