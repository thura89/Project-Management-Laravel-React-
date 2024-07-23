import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import TasksTable from "./TasksTable";

const index = ({ auth, tasks, success, queryParams = null }) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className=" flex justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Task
                    </h2>
                    <Link
                        href={route("task.create")}
                        className=" py-1 px-3 bg-emerald-500 rounded text-white transition-all shadow hover:bg-emerald-600"
                    >
                        Add New
                    </Link>
                </div>
            }
        >
            <Head title="Task" />
            
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <TasksTable
                                tasks={tasks}
                                queryParams={queryParams}
                                success={success}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default index;
