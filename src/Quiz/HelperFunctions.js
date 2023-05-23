import { openDB } from 'idb';
import axios from "axios"
export const fetchData = async (subject, setTestData) => {
  try {
    const db = await openDB('testDB', 1, {
      upgrade(db) {
        db.createObjectStore('cache', { expireAfterSeconds: 2 * 60 * 60 });
      },
    });

    const cachedData = await db.get('cache', subject);

    if (cachedData) {
      setTestData(cachedData);
    } else {
      const response = await fetch(import.meta.env.VITE_SPECIFIC_DATA + subject);
      const fetchedData = await response.json();

      await db.put('cache', fetchedData, subject);
      setTestData(fetchedData);
    }
  } catch (error) {
    console.error('Error fetching test data:', error);
  }
};

/*
cached api call
export async function GetAllTest() {
  try {
    const db = await openDB('my-database', 1, {
      upgrade(db) {
        if (!db.objectStoreNames.contains('data-store')) {
          db.createObjectStore('data-store');
        }
      },
    });

    const tx = db.transaction('data-store', 'readonly');
    const store = tx.objectStore('data-store');

    // Generate the key using a unique identifier
    const key = 'data-key';

    const data = await store.get(key);

    if (data) {
      // Data exists in IndexedDB, return it
      return data.products;
    }

    // Data does not exist in IndexedDB, fetch from API
    const response = await fetch(import.meta.env.VITE_APIURL);
    if (!response.ok) {
      throw new Error('Failed to fetch data from API');
    }

    const fetchedData = await response.json();

    // Save the fetched data to IndexedDB with the generated key
    const writeTx = db.transaction('data-store', 'readwrite');
    const writeStore = writeTx.objectStore('data-store');
    await writeStore.put(fetchedData, key);

    setTimeout(() => {
      const deleteTx = db.transaction('data-store', 'readwrite');
      const deleteStore = deleteTx.objectStore('data-store');
      deleteStore.delete(key);
    }, 12 * 60 * 60 * 1000); // 12 hours in milliseconds

    return fetchedData.products;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch data');
  }
}
*/

export async function GetAllTest() {
  try {
    const response = await fetch(import.meta.env.VITE_APIURL);
    if (!response.ok) {
      throw new Error('Failed to fetch data from API');
    }

    const fetchedData = await response.json();
    return fetchedData.products;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch data');
  }
}

export async function PostData(data) {
  try {
    await axios.post(import.meta.env.VITE_APIURL, data);
    const res = await GetAllTest()
    return res
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch data');
  }
}

export async function Delete(id) {
  try {
    await axios.delete(import.meta.env.VITE_APIURL, { data: { "productId": id } });
    const res = await GetAllTest()
    return res
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch data');
  }
}