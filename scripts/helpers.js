class Helpers {
    palindrome(str) {
        var regex = /[\W_]/g;
        var lowRegStr = str.toLowerCase().replace(regex, '');
        var reverseStr = lowRegStr.split('').reverse().join('');

        if (reverseStr === lowRegStr) {
            console.log(str + " is a palindrome");
        } else {
            console.log(str + " is NOT a palindrome");
        }
    }
}

module.exports = Helpers;
