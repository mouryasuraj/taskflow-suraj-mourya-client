
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SpinnerLoader from "../../../components/SpinnerLoader";
import { darkBlue, lightBlue } from "../../../utils/constants";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import useTaskForm from "../hooks/useTaskForm";

const TaskForm = ({ setShowTaskForm }) => {
    const { register, handleSubmit, errors, isSubmitting, handleOnSubmit, taskAction, allUsers } = useTaskForm(setShowTaskForm)

    return (
        <div className="fixed h-screen w-screen flex items-center justify-center z-3 bg-black/70 top-0 left-0">
            <div className="lg:w-[50vw] w-[90vw] rounded-2xl px-4 py-3 bg-white">
                <div className="flex items-center justify-between mb-3">
                    <p style={{ color: darkBlue }} className="font-bold text-lg">{taskAction === "create" ? "Create new task" : "Update project"}</p>
                    <button onClick={() => {
                        setShowTaskForm(false)
                    }} className="p-2 hover:bg-red-400 text-gray-500 hover:text-white cursor-pointer rounded-sm w-fit">
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
                <form onSubmit={handleSubmit(handleOnSubmit)} className="space-y-4">

                    {/* Title */}
                    <div>
                        <input
                            required
                            {...register("title")}
                            placeholder="Task Title *"
                            className="border p-2 w-full rounded"
                        />
                        {errors.title && (
                            <p className="text-red-500 text-sm">{errors.title.message}</p>
                        )}
                    </div>

                    {/* Description */}
                    <div>
                        <textarea
                            {...register("description")}
                            placeholder="Description"
                            className="border p-2 w-full rounded"
                            rows={5}
                        />
                    </div>

                    <div className="flex items-center justify-between gap-5">
                        {/* Status */}
                        <div className="w-full">
                            <select
                                required
                                {...register("status")}
                                className="border p-2 w-full rounded"
                            >
                                <option value="">---Select Status---</option>
                                <option value="todo">Todo</option>
                                <option value="in_progress">In Progress</option>
                                <option value="done">Done</option>
                            </select>
                        </div>

                        {/* Priority */}
                        <div className="w-full">
                            <select
                                required
                                {...register("priority")}
                                className="border p-2 w-full rounded"
                            >
                                <option value="">---Select Priority---</option>
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                        </div>
                    </div>

                    {/* Assignee */}
                    <div className="w-full">
                        <select
                            required
                            {...register("assignee_id")}
                            className="border p-2 w-full rounded"
                            placeholder="Assif"
                        >
                            <option value="">---Assign Task---</option>
                            {
                                allUsers.map(u => {
                                    return <option key={u._id} value={u._id}>{u.name}</option>
                                })
                            }
                        </select>
                    </div>

                    {/* Due Date */}
                    <div>
                        <input
                            type="date"
                            {...register("due_date")}
                            className="border p-2 w-full rounded"
                        />
                    </div>

                    {/* Submit */}
                    <div className="flex justify-end gap-2">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="cursor-pointer text-white px-4 py-2 rounded"
                            style={{ backgroundColor: lightBlue }}
                        >
                            {isSubmitting ? <SpinnerLoader /> : "Submit"}
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default TaskForm;