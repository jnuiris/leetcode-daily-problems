//  完全想不出来

var minFlipsMonoIncr = function(s) {
    let dp = new Array(s.length + 1).fill(0).map(() => new Array(2).fill(0))
    for(let i = 0; i < s.length; i++) {
        dp[i + 1][0] = dp[i][0] + (s[i] === '1' ? 1 : 0)
        dp[i + 1][1] = Math.min(dp[i][0], dp[i][1]) + (s[i] === '0' ? 1 : 0)
    }
    return Math.min(dp[s.length][0], dp[s.length][1])
};

console.log(minFlipsMonoIncr("00110"))
console.log(minFlipsMonoIncr("010110"))
console.log(minFlipsMonoIncr("00011000"))