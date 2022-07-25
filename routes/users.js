import express from 'express';
import { v4 as uuidv4 } from 'uuid';
const router = express.Router();

const users = [
  { firstName: 'John', lastName: 'Doe', age: 46 },
  { firstName: 'aravind', lastName: 'selvam', age: 22 },
  { firstName: 'moni', lastName: 'rajkumar', age: 22 },
  { firstName: 'vishnu', lastName: 'bala', age: 24 },
];
router.get('/', (req, res) => {
  res.send(users);
});
router.post('/', (req, res) => {
  users.push({ ...req.body, id: uuidv4() });
});
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const uniqueuser = users.filter((item) => item.id === id);
  res.send(uniqueuser);
});
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const deleteuser = users.filter((item) => item.id !== id);
  res.send(deleteuser);
});
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const editueuser = users.filter((item) => item.id === id);
  if (firstName) {
    editueuser.firstName = firstName;
  }
  if (lastName) {
    editueuser.lastName = lastName;
  }
  if (age) {
    editueuser.age = age;
  }
});
export default router;
