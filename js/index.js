

// instanciating terminal
var term = new Terminal();
term.open(document.getElementById('terminal'));

  term.onData(d => {
      term.write(d);
  });

/*
  let sentence;
  // store stuffies still managing this, wanna be able to change ps1 & few more things but yeah, seriously wanna push this code cuz live code is poop rn (this one is still poop lmao)
  let username = "user ";
  let ps1 = " $ ";
  let prompt = username + ps1;
  let dt = new Date(); let dtps1 = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
*/