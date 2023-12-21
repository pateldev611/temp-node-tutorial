const os=require('os')

//info abt current user
const user=os.userInfo()
console.log(user)

//method returns the system of uptime in seconds


console.log(`the system of Uptime is ${os.uptime()}seconds`)

const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOS)