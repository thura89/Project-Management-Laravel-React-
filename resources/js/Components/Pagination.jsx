import { Link } from "@inertiajs/react";

const Pagination = ({ links }) => {
  return (
    // <nav className="text-center mt-4">
    //   {links.map((link) => {
    //     <Link
    //       preserveScroll
    //       href={link.url || ""}
    //       key={link.label}
    //       className={
    //         "inline-block py-2 px-3 rounded-lg text-gray-200 text-xs " +
    //         (link.active ? "bg-gray-50" : " ") +
    //         (!link.url
    //           ? "!text-gray-500 cursor-not-allowed "
    //           : " hover:bg-gray-950 ")
    //       }
    //       dangerouslySetInnerHTML={{ __html: link.label }}
    //     ></Link>;
    //   })}
    // </nav>
    <nav className="text-center mt-4">
      {links.map((link) => (
        <Link
          preserveScroll
          href={link.url || ""}
          key={link.label}
          className={
            "inline-block py-2 px-3 rounded-lg text-gray-500 text-md " +
            (link.active ? "bg-gray-950 text-gray-100" : " ") +
            (!link.url
              ? "!text-gray-300 cursor-not-allowed "
              : "hover:bg-gray-950 hover:text-gray-100")
          }
          dangerouslySetInnerHTML={{ __html: link.label }}
        ></Link>
      ))}
    </nav>
  );
};

export default Pagination;
