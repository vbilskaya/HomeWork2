/**
 * Created by Lera on 16.03.2017.
 */
var arr1 = [1, 3, 5, 7, 9];
var arr2 = [1, 2, 3, 4];

intersection(arr1, arr2);

function intersection(a, b) {

    var m = a.length, n = b.length, c = 0, C = [];
    for (var i = 0; i < m; i++)
    { var j = 0, k = 0;
        while (b[j] !== a[ i ] && j < n) j++;
        while (C[k] !== a[ i ] && k < c) k++;
        if (j != n && k == c) C[c++] = a[ i ];
    }
    return C;
}
