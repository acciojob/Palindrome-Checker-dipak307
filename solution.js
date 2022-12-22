// complete the given function

function palindrome(str){

    var l = 0, r = str.length - 1;
    console.log(str);

    while(l<r) {
        if(str.charAt(l) != str.charAt(r)) {
            return false;
        }
        l++;     
        r--;
        //////decreasing.......
    }
    return true;
}
module.exports = palindrome
