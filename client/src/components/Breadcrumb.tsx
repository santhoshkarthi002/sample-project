import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
const Breadcrumb = ({
  action,
  header,
}: {
  action?: ReactNode;
  header: string;
}) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav
      className="sticky top-0 z-50 flex justify-between mt-3 bg-gray-50 text-gray-700 border border-gray-200 py-3 px-5 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-md"
      aria-label="Breadcrumb"
    >
      <div className="flex flex-col px-2 gap-1">
        <div className="text-lg font-bold">{header}</div>
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          {/* Home Link */}
          <li className="inline-flex items-center">
            <Link
              to="#"
              className="text-sm text-gray-700 hover:text-gray-900 inline-flex items-center dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              Home
            </Link>
          </li>

          {/* Dynamic Breadcrumb Links */}
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;

            return (
              <li key={routeTo} className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                {isLast ? (
                  <span className="text-gray-400 ml-1 md:ml-2 text-sm font-medium dark:text-gray-500">
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                  </span>
                ) : (
                  <Link
                    to={'#'}
                    className="text-gray-700 hover:text-gray-900 ml-1 md:ml-2 text-sm font-medium dark:text-gray-400 dark:hover:text-white"
                  >
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
      <div className="flex justify-end items-center">{action}</div>
    </nav>
  );
};

export default Breadcrumb;
