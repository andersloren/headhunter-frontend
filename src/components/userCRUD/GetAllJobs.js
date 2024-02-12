// Libraries, functions, etc.
import axios from "axios";
import { useEffect, useState } from "react";

// CSS
import "../adminCRUD/getAllStyles.css";

export default function GetAllJobs() {
    const [jobList, setJobList] = useState([]);

    useEffect(() => {
        getAllJobs();
    }, []);

    async function getAllJobs() {
        const url = "http://localhost:8080/api/v1/jobs/findAll";

        try {
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
                    "Content-Type": "application/json",
                },
            });
            setJobList(response.data.data);
        } catch (error) {
            console.error("Error get all", error);
        }
    }

    return (
        <div className="main">
            <div className="heading-text-box get-text">
                <h1 className="heading-primary">Found Jobs</h1>
                <ul>
                    {jobList.map((job) => (
                        <li key={job.id}>
                            Id: {job.id},
                            Description: {job.description}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
