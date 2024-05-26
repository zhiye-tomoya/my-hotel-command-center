import Link from "next/link";

export const SideMenu = () => {
  const menus = ["Dashboard", "Incidents", "Upload CSV"];
  return (
    <div className="fixed top-0 left-0 h-full w-[300px] p-6">
      <div className="flex flex-col gap-y-6 items-start mt-[2rem]">
        <div className="w-full flex justify-center text-6xl font-extrabold">Logo</div>
        {menus.map((menu) => {
          return <Menu menu={menu} />;
        })}
      </div>
    </div>
  );
};

const Menu = ({ menu }: { menu: string }) => {
  return (
    <Link className="flex justify-center w-full p-2 text-xl font-semibold hover:bg-accent hover:text-slate-500 " href="#">
      {menu}
    </Link>
  );
};
