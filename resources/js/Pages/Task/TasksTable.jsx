import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput";
import TableHeading from "@/Components/TableHeading";
import TextInput from "@/Components/TextInput";
import { TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP } from "@/constants";
import { Link, router } from "@inertiajs/react";
import React from "react";

const TasksTable = ({
    tasks,
    queryParams = null,
    hideProjectColumn = false,
}) => {
    queryParams = queryParams || {};
    const searchFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }

        router.get(route("task.index"), queryParams);
    };

    const onKeyPress = (name, e) => {
        if (e.key !== "Enter") return;

        searchFieldChanged(name, e.target.value);
    };

    const sortChanged = (name) => {
        if (name === queryParams.sort_field) {
            if (queryParams.sort_direction === "asc") {
                queryParams.sort_direction = "desc";
            } else {
                queryParams.sort_direction = "asc";
            }
        } else {
            queryParams.sort_field = name;
            queryParams.sort_direction = "asc";
        }
        router.get(route("task.index"), queryParams);
    };

    return (
        <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <TableHeading
                                name={"id"}
                                sort_field={queryParams.sort_field}
                                sort_direction={queryParams.sort_direction}
                                sortChanged={sortChanged}
                            >
                                ID
                            </TableHeading>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">Image</div>
                            </th>
                            {!hideProjectColumn && (
                                <th scope="col" className="px-6 py-3">
                                    <div className="flex items-center">
                                        Project Name
                                    </div>
                                </th>
                            )}
                            <TableHeading
                                name={"name"}
                                sort_field={queryParams.sort_field}
                                sort_direction={queryParams.sort_direction}
                                sortChanged={sortChanged}
                            >
                                Name
                            </TableHeading>
                            <TableHeading
                                name={"status"}
                                sort_field={queryParams.sort_field}
                                sort_direction={queryParams.sort_direction}
                                sortChanged={sortChanged}
                            >
                                Status
                            </TableHeading>
                            <TableHeading
                                name={"created_at"}
                                sort_field={queryParams.sort_field}
                                sort_direction={queryParams.sort_direction}
                                sortChanged={sortChanged}
                            >
                                Created At
                            </TableHeading>
                            <TableHeading
                                name={"due_date"}
                                sort_field={queryParams.sort_field}
                                sort_direction={queryParams.sort_direction}
                                sortChanged={sortChanged}
                            >
                                Due Date
                            </TableHeading>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">
                                    Created By
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 pb-2"></th>
                            <th scope="col" className="px-6 pb-2"></th>
                            {!hideProjectColumn && (
                                <th scope="col" className="px-6 pb-2"></th>
                            )}
                            <th scope="col" className="px-6 pb-2">
                                <TextInput
                                    className="w-full"
                                    defaultValue={queryParams.name}
                                    placeholder="Task Name"
                                    onBlur={(e) =>
                                        searchFieldChanged(
                                            "name",
                                            e.target.value
                                        )
                                    }
                                    onKeyPress={(e) => onKeyPress("name", e)}
                                />
                            </th>
                            <th scope="col" className="px-6 pb-2">
                                <SelectInput
                                    className="w-full"
                                    defaultValue={queryParams.name}
                                    onChange={(e) =>
                                        searchFieldChanged(
                                            "status",
                                            e.target.value
                                        )
                                    }
                                >
                                    <option value="">select</option>
                                    <option value="pending">pending</option>
                                    <option value="in_progress">
                                        in-process
                                    </option>
                                    <option value="completed">completed</option>
                                </SelectInput>
                            </th>
                            <th scope="col" className="px-6 pb-2"></th>
                            <th scope="col" className="px-6 pb-2"></th>
                            <th scope="col" className="px-6 pb-2"></th>
                            <th scope="col" className="px-6 pb-2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.data.map((task) => (
                            <tr
                                key={task.id}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                            >
                                <td className="px-6 py-4">{task.id}</td>
                                <td className="px-6 py-4">
                                    <img
                                        src={task.image_path}
                                        alt={task.name}
                                    />
                                </td>
                                {!hideProjectColumn && (
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {task.project.name}
                                    </th>
                                )}

                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {task.name}
                                </th>

                                <td className="px-6 py-4">
                                    <span
                                        className={
                                            "px-2 py-1 rounded text-white " +
                                            TASK_STATUS_CLASS_MAP[task.status]
                                        }
                                    >
                                        {TASK_STATUS_TEXT_MAP[task.status]}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {task.created_at}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {task.due_date}
                                </td>
                                <td className="px-6 py-4">
                                    {task.createdBy.name}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <Link
                                        href={route("task.edit", task.id)}
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                                    >
                                        Edit
                                    </Link>
                                    <Link
                                        href={route("task.destroy", task.id)}
                                        className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"
                                    >
                                        Delete
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Pagination links={tasks.meta.links} />
        </div>
    );
};

export default TasksTable;
