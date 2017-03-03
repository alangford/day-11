/**
 * Created by beebe on 3/2/2017.
 */
/*Check a string for whether or not it's a palindrome without spaces and special characters. */
function palindrome(str){
    var regex = /([^A-Za-z])+/g;
        if(str.indexOf(regex) === -1){
            return true;
        }


}
console.log(palindrome("sfafbou!@$#!@#"));