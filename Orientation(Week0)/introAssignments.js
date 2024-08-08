const crypto = require("crypto");

const input = "100xdevs";
const hash = crypto.createHash("sha256").update(input).digest("hex");

console.log(hash);

/**
 * ASSIGNMENT #1
 * What if I ask you the following question — Give me an input string that outputs a SHA-256 hash that starts with 00000 .
 * How will you do it? */
/**
 * ASSIGNMENT #2
 * What if I ask you that the input string should start with 100xdevs ?
 * How would the code change? */
function findStringWithPrefix(prefix) {
  let input = 0;
  for (;;) {
    let str = "100xdevs" + input.toString();
    const hash = crypto.createHash("sha256").update(str).digest("hex");
    if (hash.startsWith(prefix)) {
      return input;
    }
    input++;
  }
}

console.log(findStringWithPrefix("0000"));
