import { useState } from "react";
import { auth } from "../utils/firebase";

const useUser = () => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    auth.onAuthStateChanged((user) => {
        setUser(user);
        setLoading(false);
    });

    return {
        user,
        loading,
    };
};

export default useUser;
