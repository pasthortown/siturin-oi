function run_cmd(cmd, args, callBack ) {
    var spawn = require('child_process').spawn;
    var child = spawn(cmd, args);
    var resp = "";

    child.stdout.on('data', function (buffer) { resp += buffer.toString() });
    child.stdout.on('end', function() { callBack (resp) });
}

function monitorear() {
    setTimeout(() => {
        run_cmd( "git", ["pull"], function(text) { console.log (text) });
        monitorear();
    }, 5000);
}

monitorear();