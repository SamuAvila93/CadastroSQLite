import { openDatabase } from 'react-native-sqlite-storage';

const db = openDatabase({ name: 'LojaDatabase.db' });
export default db;
