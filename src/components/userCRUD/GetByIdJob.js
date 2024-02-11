import axios from "axios";
import { useState } from "react";
import Input from "../utils/input/Input";

export default function GetByIdJob() {
    const [id, setId] = useState("");
    const [job, setJob] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    function handleGetByIdJob(e) {
        e.preventDefault();

        console.log(id);

        setIsVisible(true);
        getUserByEmail(e.target.value);
    }

    async function getUserByEmail() {
        const url = `http://localhost:8080/api/v1/jobs/findJob/${id}`;

        try {
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
                    "Content-Type": "application/json",
                },
            });
            console.log(response.data.data);
            setJob(response.data.data);
        } catch (error) {
            console.error("Error getting job by id", error);
        }
    }
    return (
        <div className="main">
            <div className="heading-text-box">
                <h1 className="heading-primary">Find Job</h1>
                <div className="form-box">
                    <form onSubmit={handleGetByIdJob}>
                        <p>
                            <Input
                                placeholder="Enter id"
                                state={id}
                                onSetState={setId}
                            />
                        </p>
                        <p>
                            <button>Find Job</button>
                        </p>
                    </form>
                    {isVisible && (
                        <>
                            <p>
                                <div className="get-text">
                                    Id: {job.id}, Description: {job.description}
                                </div>
                            </p>
                            <button>❌</button>
                            <button>✏️</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
