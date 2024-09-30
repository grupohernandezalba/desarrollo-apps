const os = require('os');

//console.log(os);
//https://medium.com/@diego.coder/m%C3%B3dulo-os-en-nodejs-sistema-operativo-e7ac0e1963be

const platform = os.platform();
console.log(platform); 

const nameOs = os.type();
console.log(nameOs);


const uptimeOS = os.uptime();
console.log(uptimeOS/60); //minutos


const totalMemory = os.totalmem();
console.log(totalMemory/1024); //Megabytes


const cpuArchitecture = os.arch();
console.log(cpuArchitecture);

const cpusCoreLogic = os.cpus();
console.log(cpusCoreLogic); 
console.log(cpusCoreLogic[0].model);


const networkInfo = os.networkInterfaces();
console.log(networkInfo);


const homeDir = os.homedir();
console.log(homeDir);