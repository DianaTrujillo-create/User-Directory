import react, {useContext} from "react";
import DataBody from "../components/DataBody";
import DataAreaContext from "../utils/DataAreaContext";
import "../styles/DataTable.css";

const DataTable = () => {

    const context = useContext(DataAreaContext);

    return (
        <div className="data mt-5">
            <table
            id="table"
            className="table table-striped table-hover table condensed">
            <thead>
                <tr>
                    {context.developerState.headings.map(({ name, width }) => {
                        return (
                            <th 
                            className="col"
                            key={name}
                            style={{width}}
                            onClick={()=> {
                                context.handleSort(name.toLowerCase());
                            }}>
                                {name}
                                <span className="carrot"></span>
                            </th>
                        )
                    })}
                </tr>

            </thead>
            <DataBody/>

            </table>
        </div>
    );
}

export default DataTable;