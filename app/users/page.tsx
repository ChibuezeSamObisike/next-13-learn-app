import React, { Suspense } from "react";
import UserTable from "./UserTable";
import Link from "next/link";

//{cache: "no-store"}
// next:{
//revalidate:10
//}

interface IProps {
  searchParams: {
    sortOrder: string;
  };
}

const Page = async ({ searchParams: { sortOrder } }: IProps) => {
  return (
    <>
      <h1>Users Page</h1>
      <Link className='btn btn-primary' href='/users/new'>
        New User
      </Link>
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  );
};

export default Page;
