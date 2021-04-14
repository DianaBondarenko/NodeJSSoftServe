const {validation4} = require('./validation.js');

exports.findPalindrome = function (number) {
    const validation = validation4(number, arguments.length);
    if (validation === true) {
        let arr = Math.abs(number).toString().split('');
        let palindromes = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === arr[i + 1]) {
                let palindrome = [];
                palindrome.push(arr[i], arr[i + 1]);
                palindromes.push(checkNext(palindrome, 1, i));
            }
            if (arr[i - 1] === arr[i + 1]) {
                let palindrome = [];
                palindrome.push(arr[i - 1], arr[i], arr[i + 1]);
                palindromes.push(checkNext(palindrome, 2, i));
            }
        }

        function checkNext(palindrome, way, i) {
            for (let j = way; j < arr.length / 2; j++) {
                let left = i - j;
                let right = way === 1 ? i + j + 1 : i + j;
                if (arr[left] === arr[right]) {
                    palindrome.unshift(arr[left]);
                    palindrome.push(arr[right])
                } else break;
            }
            return palindrome;
        }

        if (palindromes.length === 0) return 0;
        let maxLength = palindromes.reduce((max, el) => max = el.length > max ? el.length : max, 0);
        let result = palindromes.find(el => el.length === maxLength);
        return Number.isInteger(number) ? Number(result.join('')) : result.join('');
    } else return validation;
}

// console.log(findPalindrome( 12344321 ));
// console.log(findPalindrome( 1234437 ));