import react, {useState, useEffect} from "react";
import API from "../utils/API";
import DataAreaContext from "../utils/DataAreaContext";
import Nav from "../components/Nav";
import DataTable from "../components/DataTable";

const DataArea = () => {
 
    const [developerState, setDeveloperState] = useState({
        user: [], 
        order: "ascend",
        filteredUsers: [],
        headings: [
            { name: "Image", width: "10%", },
            { name: "Name", width: "10%", },
            { name: "Phone", width: "20%", },
            { name: "Email", width: "20%", },
            { name: "DOB", width: "10%", }

        ]
    });

    const handleSort= heading => {
        if (developerState.order === "descend") {
            setDeveloperState({
                order:"ascend"
            })
        } else {
            setDeveloperState({
                order:"descend"
            })
        }

        const compareFx = (a, b) => {
            if(developerState.order === "ascend") {
                if (a[heading] === undefined) {
                    return 1;
                } else if (b[heading] === undefined) {
                    return -1;
                } else if (heading === "name") {
                    return a[heading].first.localeCompare(b[heading].first);
                } else {
                    return b[heading] - a[heading];
                }
            } else {
            if (a[heading] === undefined){
                return 1;
            } else if (b[heading] === undefined){
                return -1;
            } else if (heading ==="name"){
                return b[heading].first.localeCompare(a[heading].first);
            } else {
                return b[heading]- a[heading];
            }
        }
        }

        const sortUsers = developerState.filteredUsers.sort(compareFx);
    }
}