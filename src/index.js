module.exports = function reverse(n) {
    n = Math.abs(n);
    const result = n.toString().split("");
    return +result.reverse().join("");
};
