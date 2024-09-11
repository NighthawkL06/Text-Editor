import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Method to add content to the database
export const putDb = async (content) => {
  const db = await openDB('jate', 1);
  const result = await db.add('jate', { content });
  console.log('Data saved to the database with id:', result);
};

// Method to get all content from the database
export const getDb = async () => {
  const db = await openDB('jate', 1);
  const allContent = await db.getAll('jate');
  console.log('Retrieved content from the database:', allContent);
  return allContent;
};

initdb();