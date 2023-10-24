import { faker } from '@faker-js/faker'
const StaffList =[{
    key:0,
    avatar : faker.image.avatar(),
    name : faker.person.firstName(),
    email: faker.internet.email(),
    position:faker.person.jobTitle()

},
{
    key:1,
    avatar : faker.image.avatar(),
    name : faker.person.firstName(),
    email: faker.internet.email(),
    position:faker.person.jobTitle()

},
{
    key:2,
    avatar : faker.image.avatar(),
    name : faker.person.firstName(),
    email: faker.internet.email(),
    position:faker.person.jobTitle()

},






]
export default StaffList