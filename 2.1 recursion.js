/**
 * Created by Lera on 16.03.2017.
 */


function convert(number){
    if(number == 0 ) {
        return number;
    }
    else {
        return (number % 2) + 10 * convert(Math.floor(number / 2));
    }
}
console.log(convert(4));