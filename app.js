import { promises } from 'fs';

const users = [
  { name: 'Mike', age: 25 },
  { name: 'Bob', age: 32 },
  { name: 'Nikola', age: 17 }
];

const newData = [
  { name: 'Anna', age: 24 },
  { name: 'Tom', age: 21 },
];

const isExist = async (filePath) => {
  try {
    await promises.stat(filePath);
    return true;
  } catch (error) {
    return false;
  }
};

(async () => {
  const filePath = 'C:\\Users\\User\\data.json';

  if (await isExist(filePath)) {
    const data = await promises.readFile(filePath, { encoding: 'utf-8' });
    const usersData = JSON.parse(data);
    usersData.dataUsers.push(...users);
    usersData.dataUsers.push(...newData);
    console.log(usersData.dataUsers);

    const updatedData = JSON.stringify(usersData);
    await promises.writeFile(filePath, updatedData, { encoding: 'utf-8' });

    console.log('Data has been saved to data.json');
  } else {
    console.log('File does not exist.');
  }
})();
