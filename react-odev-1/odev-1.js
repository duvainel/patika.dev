import axios from "axios";

export default async function getUser(userId) {
  const { data: user } = await axios(
    "https://jsonplaceholder.typicode.com/users/" + userId
  );

  const { data: posts } = await axios(
    "https://jsonplaceholder.typicode.com/posts?userId=" + userId
  );

  return {
    ...user,
    posts,
  };
}

getUser(1).then((data) => console.log(data));
