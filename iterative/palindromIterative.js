const palindromeIterative = (string) => {
  string = string.match(/[a-zA-Z]/g).join("").toLowerCase();

  while(string[0] === string.slice(-1)) {
    if(string.length <= 1) return true;

    string = string.slice(1,-1)
  }
  return false;

}

console.log("Rise to vote, sir : ", palindromeIterative("Rise to vote, sir"));
console.log("Rise lto vote, sir : ", palindromeIterative("Rise lto vote, sir"));


