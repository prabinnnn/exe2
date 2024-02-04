const checklargestnumber = (string) => {
  let largestnumber = string[0];
  for (let i = 0; i <= string.length; i++) {
    if (string[i] > largestnumber) {
      string[i] = largestnumber;
    }
    return largestnumber;
  }
};
console.log(checklargestnumber(1, 2, 3, 4, 5));
