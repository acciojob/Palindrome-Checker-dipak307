// complete the given function

function palindrome(str){

    var l = 0, r = s.length - 1;
    console.log(s);

    while(l<r) {
        if(s.charAt(l) != s.charAt(r)) {
            return false;
        }
        l++;     
        r--;
        //////decreasing.......
    }
    return true;
}
module.exports = palindrome
