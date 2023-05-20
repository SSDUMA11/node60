import { promises, Stats } from 'fs';

const newData = [
  { name: 'Anna', age: 24 },
  { name: 'Tom', age: 21 },
];

const isExist = async (filePath) => {
  try {
    await promises.stat(filePath, Stats);
    return true;
  } catch (error) {
    return false;
  }
};

(async () => {
  const filePath = 'C:\\Users\\User\\data.json';

  if (await isExist(filePath)) {
    const data = await promises.readFile(filePath, { encoding: 'utf-8' });
    const users = JSON.parse(data);
    users.users.push(...newData);

    const updatedData = JSON.stringify(users);
    await promises.writeFile(filePath, updatedData, { encoding: 'utf-8' });

    console.log('Data has been saved to data.json');
  } else {
    console.log('File does not exist.');
  }
})();
