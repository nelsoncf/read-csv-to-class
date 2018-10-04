var Cliente = require('./models/Cliente');
const lerArquivo = require('./lerArquivo')

const essaCaralhaTerminou = function(files){
    mapFiles(1, files);
}

const mapFiles = function(tipo, files){

    let clients = [];

    if(files){
        files.forEach((cli, index) => {
            file = cli.split(';')
            let client = new Cliente(file[0],file[1], file[2],file[3],file[4],file[5],file[6],file[7],file[8],file[9],file[10],file[11], file[12])

            clients.push(client);
            //console.log("Cliente " + index, client)
        });
        console.log(clients);
    }

}

lerArquivo('C:/Users/n.de.campos.filho/Desktop/SQL SAFRA/ClienteCSV.csv', essaCaralhaTerminou)


