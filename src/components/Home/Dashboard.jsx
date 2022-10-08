/* eslint-disable @next/next/no-img-element */
const tasks = [
    {
        assigned: "টেপা ইমন",
        photo: "https://cdn.britannica.com/84/206384-050-00698723/Javan-gliding-tree-frog.jpg",
        task: "বাথরুমে বইয়া ভাত খা",
    },
    {
        assigned: "সানি লিওন",
        photo: "https://cdn.britannica.com/55/174255-050-526314B6/brown-Guernsey-cow.jpg",
        task: "একটা বেডারে মারতে হইব",
        proof: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    },
];

const Dashboard = () => {
    return (
        <>
            {tasks.map((task, i) => (
                <Task key={i} task={task} />
            ))}
        </>
    );
};

export default Dashboard;

const Task = ({ task }) => {
    return (
        <article className="border h-24 rounded-lg mt-4 flex max-w-xs mx-auto">
            <div className="relative border-r h-full p-2 w-24 flex items-center justify-center shrink-0">
                <img
                    className="absolute h-full w-full object-cover"
                    src={task.photo}
                    alt={task.assigned}
                />
                <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black" />
                <h1 className="z-10 text-white self-end">{task.assigned}</h1>
            </div>
            <div className="p-2 flex flex-col justify-between w-full">
                <h1>{task.task}</h1>
                {task.proof ? (
                    <div className="flex w-full justify-between">
                        <span className="bg-indigo-500 text-white rounded-md max-w-fit px-2 text-sm">
                            Completed
                        </span>
                        <a
                            href={task.proof}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 text-white rounded-md max-w-fit px-2 text-sm"
                        >
                            View Proof
                        </a>
                    </div>
                ) : (
                    <span className="bg-indigo-500 text-white rounded-md max-w-fit px-2 text-sm">
                        Pending
                    </span>
                )}
            </div>
        </article>
    );
};
