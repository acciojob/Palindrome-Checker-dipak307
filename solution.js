// complete the given function

function palindrome(str){

    s = s.replace(/[^0-9a-zA-Z]+/gmi,"");
    s = s.toLowerCase();
    var l = 0, r = s.length - 1;
    console.log(s);

    while(l<r) {
        if(s.charAt(l) != s.charAt(r)) {
            return false;
        }
        l++;
        r--;
    }
    return true;
}
module.exports = palindrome
