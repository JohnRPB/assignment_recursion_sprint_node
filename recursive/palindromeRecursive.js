
const palindromeRecursive = (string) => {
  string = string.match(/[a-zA-Z]/g).join("").toLowerCase();

  if (string.length <= 1) return true;
  if (string[0] !== string.slice(-1)) return false;
  return palindromeRecursive(string.slice(1,-1))
}

console.log("Rise to vote, sir : ", palindromeRecursive("Rise to vote, sir"));
console.log("Rise lto vote, sir : ", palindromeRecursive("Rise lto vote, sir"));




