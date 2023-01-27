import { MyDatabaseClassic } from './db/my-database-classic';
import { myDatabaseClassic as myDatabaseClassicFromModuleA } from './module_a';

const myDatabaseClassic = MyDatabaseClassic.instance;
myDatabaseClassic.add({ name: 'bruno', age: 20 });
myDatabaseClassic.add({ name: 'junior', age: 30 });
myDatabaseClassic.add({ name: 'paiva', age: 40 });
myDatabaseClassic.remove(1);
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseClassicFromModuleA);
