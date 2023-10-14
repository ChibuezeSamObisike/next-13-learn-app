import React, { ReactNode, Suspense } from "react";

interface Props {
  children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div className='flex items-center'>
      <aside className='bg-slate-200 p-5 mr-5'>Admin Sidebar</aside>
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
