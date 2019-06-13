process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/versions':
                console.log('Your Node version is ' + process.versions.node);
                break;
            case '/lang':
                console.log('Your Languague is ' + process.env.LANG);
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        };
    }
});