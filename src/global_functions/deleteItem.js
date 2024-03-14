import axios from "axios";

export async function deleteItem(id, itemType) {
    const pluralizedType = itemType.toLowerCase() + "s";
    const deleteFunction = `delete${itemType.charAt(0).toUpperCase()}${itemType.slice(1)}`;
    const handle = `handle${itemType.charAt(0).toUpperCase()}${itemType.slice(1)}CRUDSuccess`;

    console.log(`Got to ${deleteFunction}`);

    const url = `http://localhost:8080/api/v1/${pluralizedType}/${deleteFunction}/${id}`;

    try {
        const response = await axios.delete(url, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
                "Content-Type": "application/json",
            },
        });
        console.log(`${itemType} Delete Success`);
        // Assuming you want to handle CRUD success here
        console.log(handle);
        if (typeof window[handle] === "function") {
            window[handle]();
        } else {
            console.error(`${handle} is not a function or not defined.`);
        }
    } catch (error) {
        console.error(`Error deleting ${itemType} by id`, error);
    }
}
