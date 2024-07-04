import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";

const TableHeading = ({
    children,
    name,
    sortable = true,
    sort_field = null,
    sort_direction = null,
    sortChanged = () => {},
}) => {
    return (
        <th
            onClick={(e) => sortChanged(name)}
            scope="col"
            className="px-3 py-3 "
        >
            <div className="flex items-center h-2">
                {children}
                {sortable && (
                    <div className="border ml-1">
                        <ChevronUpIcon
                            className={
                                "w-4 " +
                                (sort_field === name && sort_direction === "asc"
                                    ? "text-gray-800"
                                    : "text-gray-400")
                            }
                        />
                        <ChevronDownIcon
                            className={
                                "w-4 " +
                                (sort_field === name &&
                                sort_direction === "desc"
                                    ? "text-gray-800"
                                    : "text-gray-400")
                            }
                        />
                    </div>
                )}
            </div>
        </th>
    );
};

export default TableHeading;
