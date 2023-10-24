import { faker } from '@faker-js/faker'
const Staff =[{
    key:0,
    avatar : faker.image.avatar(),
    name : faker.person.firstName(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
    

},
{
    key:1,
    avatar : faker.image.avatar(),
    name : faker.person.firstName(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past()

},
{
    key:2,
    avatar : faker.image.avatar(),
    name : faker.person.firstName(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past()

},




]
export default Staff