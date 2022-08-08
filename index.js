import getUsers from "./modules/users.js";
import filtering from "./modules/filter.js";

const allUsers = getUsers();
const fetchedUsers = filtering(allUsers, { name: "ali" });
console.log(fetchedUsers);
