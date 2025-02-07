
const HeaderElement = () => {
  return (
    <nav className="block w-full  px-4 py-2 mx-auto text-white bg-slate-900 shadow-md rounded-md lg:px-8 lg:py-3">
      <div className=" flex flex-wrap items-center justify-between  text-gray-100">
        <a
          href="#"
          className="mr-4 block cursor-pointer py-1.5 text-base text-gray-200 font-semibold"
        >
          Sample-Project
        </a>
        {/* <div className="hidden lg:block">
          userinfo
        </div> */}
      </div>
    </nav>
  );
};

export default HeaderElement;
