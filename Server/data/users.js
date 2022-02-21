import { bcrypt } from "bcrypt.js";

const users = [
  {
    name: "alex",
    email: "alex040892@gmail.com",
    password: bcrypt.hashSync("harmonica", 10),
    isAdmin: true,
  },
  {
    name: "User",
    email: "user@example.com",
    password: bcrypt.hashSync("harmonica", 10),
  },
];

export default users;
