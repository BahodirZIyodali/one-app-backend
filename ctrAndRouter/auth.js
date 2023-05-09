const { Router } = require('express');
const uuid = require('uuid');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { readFile, writeFile } = require('../utils/fs.js');

const router = Router();

let users = readFile('users.json');

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  const foundedUser = users.find((user) => user.email === email);

  if (foundedUser) {
    return res.status(400).send(JSON.stringify({
      msg: 'User already exists!!',
    }));
  }

  const hashPsw = await bcrypt.hash(password, 12);

  const user = {
    id: uuid.v4(),
    username,
    email,
    password: hashPsw,
  };

  users.push(user);

  writeFile('users.json', users);

  return res.status(201).send({
    msg: 'User registered!',
  });
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const foundedUser = users.find(
    (user) => user.email === username || user.username === username,
  );

  if (!foundedUser) {
    return res.status(404).send({ msg: 'User not found!' });
  }

  const checkPsw = await bcrypt.compare(password, foundedUser.password);

  if (checkPsw) {
    const token = await jwt.sign(
      { id: foundedUser.id },
      process.env.SECRET_KEY,
      {
        expiresIn: '1h',
      },
    );
    return res.status(200).send({ token });
  }

  return res.status(404).send({ msg: 'Invalid password!' });
});

module.exports = router;
