import { MyDatabaseClassic } from './db/my-database-classic';

const myDatabaseClassic = MyDatabaseClassic.instance;
myDatabaseClassic.add({ name: 'joas', age: 20 });
myDatabaseClassic.add({ name: 'vitor', age: 30 });
myDatabaseClassic.add({ name: 'gomes', age: 40 });
myDatabaseClassic.remove(1);
myDatabaseClassic.show();

export { myDatabaseClassic };
