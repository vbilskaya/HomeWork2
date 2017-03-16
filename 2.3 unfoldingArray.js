/**
 * Created by Lera on 16.03.2017.
 */
function unfoldingArray() {
    var arr = [[1, 2], [3, 4, 5], [6]].reduce(function (a, b) {
        return a.concat(b);
    });
    console.log(arr);
}
unfoldingArray();