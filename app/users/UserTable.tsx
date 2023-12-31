import Link from "next/link";
import React from "react";

import { sort } from "fast-sort";

const UserTable = async ({ sortOrder }: { sortOrder: string }) => {
  interface User {
    id: number;
    name: string;
    email: string;
  }
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: {
      revalidate: 10,
    },
  });
  const users: User[] = await response.json();

  const sortedUsers = sort(users).asc(
    sortOrder === "email" ? (user) => user.email : (user) => user.name
  );

  return (
    <table className='table table-bordered'>
      <thead>
        <tr>
          <th>
            <Link href='/users?sortOrder=name'>Name</Link>
          </th>
          <th>
            <Link href='/users?sortOrder=email'>Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((user) => (
          <tr key={user?.id}>
            <td>{user?.name}</td>
            <td>{user?.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
