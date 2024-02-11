// Libraries, functions, etc
import axios from "axios";
import { useState } from "react";

// Custom components
import Input from "../utils/input/Input";

export default function DeleteJob() {
    const [id, setId] = useState("");
    const [isVisible, setIsVisible] = useState(false);

    function handleDeleteJobById(e) {
        e.preventDefault();
        console.log(e.target.value);
        deleteJob(id);
        console.log("id in handelDeleteJobById = ", id);
    }
    async function deleteJob() {
        console.log("id in function = ", id);
        const url = `http://localhost:8080/api/v1/jobs/delete/${id}`;

        try {
            const response = await axios.delete(url, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
                    "Content-Type": "application/json",
                },
            });
            console.log(response.data.message);
            setIsVisible(true);
        } catch (error) {
            console.error("Error deleting job by id", error);
        }
    }
    return (
        <div className="main">
            <div className="heading-text-box">
                <h1 className="heading-primary">Delete Job</h1>
                <div className="form-box">
                    <form onSubmit={handleDeleteJobById}>
                        <p>
                            <Input
                                placeholder="Enter Id"
                                state={id}
                                onSetState={setId}
                            />
                        </p>
                        <p>
                            <button>Delete</button>
                        </p>
                    </form>
                    {isVisible && <p>Job wit id {id} was successfully deleted</p>}
                </div>
            </div>
        </div>
    );
}
