import React, { useContext } from "react";
import DataAreaContext from "../utils/DataAreaContext";
import "../styles/DataBody.css";



const DataBody = () => {
const context = useContext(DataAreaContext)

function formatDate(date2) {
    const dateArray= date2.split("-");
    const year = dateArray[0];
    const month = dateArray[1];
    const date = dateArray[2].split("T");
    const day = date[0];
    const DOB = [month, day, year].join("-");
    return DOB;
}

    return (
        <tbody>
            {context.developerState.filteredUsers[0] !== undefined && context.developerState.filteredUsers[0].name !== undefined ? (context.developerState.filteredUsers.map (({ login, name, picture, phone, email, dob}) => {

                return (
                    <tr key={login.uuid}>
                        <td data-th="Image" className="align-middle">
                            <img src={picture.medium}
                            alt={"profile image for" + name.first + " " + name.last}
                            className="img" />
                        </td>
                        <td data-th="Name" className="complete-name align middle">
                            {name.first} {name.last}
                        </td>
                        <td data-th="Phone" className="phone align middle">
                            {phone}
                        </td>
                        <td data-th="Email" className="email align middle">
                            <a href={"mailto:" + email} target="blank">
                                {email}
                            </a>
                        </td>
                        <td data-th="DOB" className="dob align-middle">
                            {formatDate(dob.date)}
                        </td>
                    </tr>
                );
            })
            ): (
                <></>
            )}
        </tbody>
    );
    

}

export default DataBody;
