import Dashboard from "../src/components/Home/Dashboard";
import NotLoggedIn from "../src/components/Home/NotLoggedIn";
import Nav from "../src/components/Nav";
import useUser from "../src/hooks/useUser";

const Home = () => {
    const { user, loading } = useUser();
    return (
        <div className="container mx-auto px-4">
            <Nav user={user} />
            {loading ? (
                <div className="flex justify-center items-center h-52">Loading...</div>
            ) : user ? (
                <Dashboard />
            ) : (
                <NotLoggedIn />
            )}
        </div>
    );
};
export default Home;
