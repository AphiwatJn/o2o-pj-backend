const bcrypt = require('bcryptjs')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const hashedPassword = bcrypt.hashSync('123456', 10)

const User = [
    { firstname: 'Andy',t_code:'t001',  password: hashedPassword, email: 'andy@ggg.mail'},
]

const info = [
    { title: 'HTML', description:'HTML5 : Writing a web page'},
]

console.log('Seed...')

async function run() {
    await prisma.teacher.createMany({data: teacherData})
    await prisma.subject.createMany({data: subjectData})
}

run()
