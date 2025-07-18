import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { Backend_URl } from "../config"; // double check spelling

export function useContent() {
    const [contents, setContents] = useState([]);
    // Optional: const [error, setError] = useState(null);

    const refresh = useCallback(() => {
        const token = localStorage.getItem("token");
        axios.get(`${Backend_URl}/api/v1/content`, {
            headers: token ? { "Authorization": token } : {}
        })
        .then((response) => {
            setContents(response.data.content);
        })
        .catch((e) => {
            // Optionally set error state
            // setError(e);
            console.error("Failed to fetch content:", e);
        });
    }, []);

    useEffect(() => {
        refresh();
        const interval = setInterval(refresh, 10000);
        return () => clearInterval(interval);
    }, [refresh]);

    return {contents, refresh /*, error */};
}
