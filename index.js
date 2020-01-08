const cmdCtrl = require('readline').Interface({
    input: process.stdin,
    output: process.stdout
})

ask();

function ask() {
    cmdCtrl.question('Numero de carácteres: ', (resp) => {
        let valid = validateInput(resp);
        if (resp > 5000){
            resp = 5000;
        }
        if (valid){
            for (let i = 0; i < resp; i++) {
                let rand = Math.floor(Math.random() * 10);
                console.log(rand);
                if (rand < 5) {
                  cmdCtrl.write('\\');
                } else {
                  cmdCtrl.write('\/');
                }
            }
            cmdCtrl.close();
            process.exit(0);
        } else{
            ask();
        }

    });
}

function validateInput(input){
    if (isNaN(input)){
        console.log('El valor introducido no es un número! Vuelve a intentarlo');
        return false;
    } else{
        return true;
    }
}



