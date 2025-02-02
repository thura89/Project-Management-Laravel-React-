import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PROJECT_STATUS_CLASS_MAP, PROJECT_STATUS_TEXT_MAP } from "@/constants";
import { Head, Link, router } from "@inertiajs/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import TableHeading from "@/Components/TableHeading";

const index = ({ auth, projects, queryParams = null, success }) => {
    queryParams = queryParams || {};
    const searchFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }
        router.get(route("project.index"), queryParams);
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
        router.get(route("project.index"), queryParams);
    };
    const deleteProject = (project) => {
        if (!window.confirm("Are you sure you want to delete the project?")) {
            return;
        }
        router.delete(route("project.destroy",project.id));
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className=" flex justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Project
                    </h2>
                    <Link
                        href={route("project.create")}
                        className=" py-1 px-3 bg-emerald-500 rounded text-white transition-all shadow hover:bg-emerald-600"
                    >
                        Add New
                    </Link>
                </div>
            }
        >
            <Head title="Project" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {success && (
                        <div className="bg-emerald-500 py-2 px-4 text-white rounded mb-4">
                            {success}
                        </div>
                    )}
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <TableHeading
                                                name={"id"}
                                                sort_field={
                                                    queryParams.sort_field
                                                }
                                                sort_direction={
                                                    queryParams.sort_direction
                                                }
                                                sortChanged={sortChanged}
                                            >
                                                ID
                                            </TableHeading>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                <div className="flex items-center">
                                                    Image
                                                </div>
                                            </th>
                                            <TableHeading
                                                name={"name"}
                                                sort_field={
                                                    queryParams.sort_field
                                                }
                                                sort_direction={
                                                    queryParams.sort_direction
                                                }
                                                sortChanged={sortChanged}
                                            >
                                                Name
                                            </TableHeading>
                                            <TableHeading
                                                name={"status"}
                                                sort_field={
                                                    queryParams.sort_field
                                                }
                                                sort_direction={
                                                    queryParams.sort_direction
                                                }
                                                sortChanged={sortChanged}
                                            >
                                                Status
                                            </TableHeading>
                                            <TableHeading
                                                name={"created_at"}
                                                sort_field={
                                                    queryParams.sort_field
                                                }
                                                sort_direction={
                                                    queryParams.sort_direction
                                                }
                                                sortChanged={sortChanged}
                                            >
                                                Created At
                                            </TableHeading>
                                            <TableHeading
                                                name={"due_date"}
                                                sort_field={
                                                    queryParams.sort_field
                                                }
                                                sort_direction={
                                                    queryParams.sort_direction
                                                }
                                                sortChanged={sortChanged}
                                            >
                                                Due Date
                                            </TableHeading>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                <div className="flex items-center">
                                                    Created By
                                                    <a href="#">
                                                        <svg
                                                            className="w-3 h-3 ms-1.5"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                <span className="sr-only">
                                                    Edit
                                                </span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 pb-2"
                                            ></th>
                                            <th
                                                scope="col"
                                                className="px-6 pb-2"
                                            ></th>
                                            <th
                                                scope="col"
                                                className="px-6 pb-2"
                                            >
                                                <TextInput
                                                    className="w-full"
                                                    defaultValue={
                                                        queryParams.name
                                                    }
                                                    placeholder="Project Name"
                                                    onBlur={(e) =>
                                                        searchFieldChanged(
                                                            "name",
                                                            e.target.value
                                                        )
                                                    }
                                                    onKeyPress={(e) =>
                                                        onKeyPress("name", e)
                                                    }
                                                />
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 pb-2"
                                            >
                                                <SelectInput
                                                    className="w-full"
                                                    defaultValue={
                                                        queryParams.name
                                                    }
                                                    onChange={(e) =>
                                                        searchFieldChanged(
                                                            "status",
                                                            e.target.value
                                                        )
                                                    }
                                                >
                                                    <option value="">
                                                        select
                                                    </option>
                                                    <option value="pending">
                                                        pending
                                                    </option>
                                                    <option value="in_progress">
                                                        in-process
                                                    </option>
                                                    <option value="completed">
                                                        completed
                                                    </option>
                                                </SelectInput>
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 pb-2"
                                            ></th>
                                            <th
                                                scope="col"
                                                className="px-6 pb-2"
                                            ></th>
                                            <th
                                                scope="col"
                                                className="px-6 pb-2"
                                            ></th>
                                            <th
                                                scope="col"
                                                className="px-6 pb-2"
                                            ></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {projects.data.map((project) => (
                                            <tr
                                                key={project.id}
                                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                            >
                                                <td className="px-6 py-4">
                                                    {project.id}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <img
                                                        src={project.image_path}
                                                        alt={project.name}
                                                        className=" max-w-20"
                                                    />
                                                </td>
                                                <th
                                                    scope="row"
                                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                                >
                                                    <Link
                                                        className=" hover:text-gray-900 text-gray-600 underline"
                                                        href={route(
                                                            "project.show",
                                                            project.id
                                                        )}
                                                    >
                                                        {project.name}
                                                    </Link>
                                                </th>

                                                <td className="px-6 py-4 text-nowrap">
                                                    <span
                                                        className={
                                                            "px-2 py-1 rounded text-white " +
                                                            PROJECT_STATUS_CLASS_MAP[
                                                                project.status
                                                            ]
                                                        }
                                                    >
                                                        {
                                                            PROJECT_STATUS_TEXT_MAP[
                                                                project.status
                                                            ]
                                                        }
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {project.created_at}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {project.due_date}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {project.createdBy.name}
                                                </td>
                                                <td className="px-6 py-4 text-right text-nowrap">
                                                    <Link
                                                        href={route(
                                                            "project.edit",
                                                            project.id
                                                        )}
                                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                                                    >
                                                        Edit
                                                    </Link>
                                                    <button
                                                        onClick={(e) =>
                                                            deleteProject(
                                                                project
                                                            )
                                                        }
                                                        className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <Pagination links={projects.meta.links} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default index;
