import React, {useState, useEffect} from "react";
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

        setDeveloperState({
            ...developerState,
            filteredUsers: sortedUsers
        });

    };

const handleSearchChange = event => {
    const filter = event.target.value;
    const filteredList = developerState.users.filter(item => 
    {
        let values = item.name.first.toLowerCase();
        return values.index(filter.toLowerCase()) !== -1;
    });

    setDeveloperState({
        ...developerState,
        filteredUsers: filteredList});        
        };

        useEffect(() => {
            API.getUsers()
            .then(results => {
                setDeveloperState({
                    ...developerState,
                    Users: results.data.results,
                    filteredUsers: results.data.results
                });
            });
        }, []);
    
    return (
        <DataAreaContext.Provider
        value={{ developerState, handleSearchChange, handleSort }} >
            <Nav />
            <div className="data-area">
                {developerState.filteredUsers.length > 0
    ? <DataTable /> 
     : <div></div> 
     }
         </div>
        </DataAreaContext.Provider>
    );
}

export default DataArea;