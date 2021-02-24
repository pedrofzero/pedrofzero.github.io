const os = require("os");
const pty = require("node-pty");

let shell = os.platform() === "win32" ? "cmd.exe" : "bash";

let ptyProcess = pty.spawn(shell, [], {
    name: "xterm",
    cols: 80,
    rows: 24,
    cwd: process.env.HOME,
    env: process.env
});

ptyProcess.on("data", function(data() {
    
})