/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
    const MODULO = 1_000_000_007
    if (n == 1) return 1;
    if (n === 2) return 2;
    if (n === 3) return 5;

    let [f1, f2, f3] = [1,2,5];
    let fi;

    for (let i=4; i<=n; i++) {
        fi = ((2 * f3 % MODULO) + f1) % MODULO;

        f1 = f2;
        f2 = f3;
        f3 = fi;
    }
    return fi
};