import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import TextAreaInput from "@/Components/TextAreaInput";
import SelectInput from "@/Components/SelectInput";

const Edit = ({ auth, project }) => {
    const { data, setData, post, errors, reset } = useForm({
        image: "",
        name: project.name || "",
        status: project.status || "",
        description: project.description || "",
        due_date: project.due_date || "",
        _method: "PUT",
    });
    const onSubmit = (e) => {
        e.preventDefault();
        post(route("project.update",project.id));
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Edit Project
                    </h2>
                </div>
            }
        >
            <Head title="Edit Project" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <form
                                onSubmit={onSubmit}
                                className="p-4 sm:p-8 bg-white  sm:rounded-lg"
                            >
                                {project.image_path && (
                                    <div className="mb-4 ">
                                        <img
                                            src={project.image_path}
                                            className="w-64 border"
                                        />
                                    </div>
                                )}
                                <div>
                                    <InputLabel
                                        htmlFor="project_image_path"
                                        value="Project Image"
                                    />
                                    <TextInput
                                        id="project_image_path"
                                        name="image"
                                        type="file"
                                        onChange={(e) =>
                                            setData("image", e.target.files[0])
                                        }
                                        className="block mt-1 w-full border rounded"
                                    />
                                    <InputError
                                        message={errors.image}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="project_name"
                                        value="Project Name"
                                    />
                                    <TextInput
                                        id="project_name"
                                        name="name"
                                        type="text"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        isFocused={true}
                                        className="block mt-1 w-full border rounded"
                                    />
                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="project_description"
                                        value="Description"
                                    />
                                    <TextAreaInput
                                        id="project_description"
                                        name="description"
                                        value={data.description}
                                        onChange={(e) =>
                                            setData(
                                                "description",
                                                e.target.value
                                            )
                                        }
                                        className="block mt-1 w-full border rounded"
                                    />
                                    <InputError
                                        message={errors.description}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="project_due_date"
                                        value="Project Deadline"
                                    />
                                    <TextInput
                                        id="project_due_date"
                                        name="due_date"
                                        type="date"
                                        value={data.due_date}
                                        onChange={(e) =>
                                            setData("due_date", e.target.value)
                                        }
                                        className="block mt-1 w-full border rounded"
                                    />
                                    <InputError
                                        message={errors.due_date}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="project_status"
                                        value="Status"
                                    />
                                    <SelectInput
                                        id="project_status"
                                        name="status"
                                        value={data.status}
                                        onChange={(e) =>
                                            setData("status", e.target.value)
                                        }
                                        className="block mt-1 w-full border rounded"
                                    >
                                        <option value="">Select Status</option>
                                        <option value="pending">Pending</option>
                                        <option value="in_progress">
                                            In Progress
                                        </option>
                                        <option value="completed">
                                            Completed
                                        </option>
                                    </SelectInput>
                                    <InputError
                                        message={errors.status}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="text-right mt-4">
                                    <Link
                                        href={route("project.index")}
                                        className=" bg-gray-100 text-gray-800 rounded shadow transition-all hover:bg-gray-300 py-1 px-3"
                                    >
                                        Cancel
                                    </Link>
                                    <button
                                        type="submit"
                                        className=" bg-emerald-500 text-white shadow rounded hover:bg-emerald-600 transition-all py-1 px-3 ml-2"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Edit;
