import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import TextAreaInput from "@/Components/TextAreaInput";
import SelectInput from "@/Components/SelectInput";

const Create = ({ auth, projects, users }) => {
    const { data, setData, post, errors, reset } = useForm({
        project_id:'',

        image: "",
        name: "",
        status: "",
        description: "",
        due_date: "",
        priority:'',
        assigned_user_id:''
    });
    const onSubmit = (e) => {
        e.preventDefault();
        post(route("task.store"));
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Create Task
                    </h2>
                </div>
            }
        >
            <Head title="Create Task" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <form
                                onSubmit={onSubmit}
                                className="p-4 sm:p-8 bg-white  sm:rounded-lg"
                            >
                                <div>
                                    <InputLabel
                                        htmlFor="task_project_id"
                                        value="Task Project Id"
                                    />
                                    <SelectInput
                                        id="project_id"
                                        name="project_id"
                                        value={data.project_id}
                                        onChange={(e) =>
                                            setData(
                                                "project_id",
                                                e.target.value
                                            )
                                        }
                                        className="block mt-1 w-full border rounded"
                                    >
                                        {projects.data.map((project) => (
                                            <option
                                                key={project.id}
                                                value={project.id}
                                            >
                                                {project.name}
                                            </option>
                                        ))}
                                    </SelectInput>
                                    <InputError
                                        message={errors.project_id}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="task_image_path"
                                        value="Task Image"
                                    />
                                    <TextInput
                                        id="task_image_path"
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
                                        htmlFor="task_name"
                                        value="Task Name"
                                    />
                                    <TextInput
                                        id="task_name"
                                        name="name"
                                        type="text"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        className="block mt-1 w-full border rounded"
                                    />
                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="task_description"
                                        value="Description"
                                    />
                                    <TextAreaInput
                                        id="task_description"
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
                                        htmlFor="task_due_date"
                                        value="Task Deadline"
                                    />
                                    <TextInput
                                        id="task_due_date"
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
                                        htmlFor="task_status"
                                        value="Status"
                                    />
                                    <SelectInput
                                        id="task_status"
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
                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="task_priority"
                                        value="Task Priority"
                                    />
                                    <SelectInput
                                        id="task_priority"
                                        name="priority"
                                        value={data.priority}
                                        onChange={(e) =>
                                            setData("priority", e.target.value)
                                        }
                                        className="block mt-1 w-full border rounded"
                                    >
                                        <option value="">
                                            Select Priority
                                        </option>
                                        <option value="low">Low</option>
                                        <option value="medium">Medium</option>
                                        <option value="high">High</option>
                                    </SelectInput>
                                    <InputError
                                        message={errors.priority}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="task_assigned_user_id"
                                        value="Task Assigend User"
                                    />
                                    <SelectInput
                                        id="task_assigned_user_id"
                                        name="assigned_user_id"
                                        value={data.assigned_user_id}
                                        onChange={(e) =>
                                            setData(
                                                "assigned_user_id",
                                                e.target.value
                                            )
                                        }
                                        className="block mt-1 w-full border rounded"
                                    >
                                        <option value="">
                                            Select Assigned User
                                        </option>
                                        {users.data.map((user) => (
                                            <option value={user.id} key={user.id}>
                                                {user.name}
                                            </option>
                                        ))}
                                    </SelectInput>
                                    <InputError
                                        message={errors.assigned_user_id}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="text-right mt-4">
                                    <Link
                                        href={route("task.index")}
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

export default Create;
