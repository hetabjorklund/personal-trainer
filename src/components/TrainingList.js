import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';

function TrainingList() {

    const [trainings, setTrainings] = useState([]);

    const columns = [
        { Header: 'Date', accessor: 'date' },
        { Header: 'Duration', accessor: 'duration' },
        { Header: 'Activity', accessor: 'activity' },
        { Header: 'Customer', accessor: 'links[2].href', Cell: customer => <a href={customer.value}> {customer.value} </a> },
        {
            sortable: false,
            filterable: false,
            width: 100,
            accessor: 'links[0].href',
            Cell: row => <Button variant="contained" color="error" size="small" startIcon={<DeleteIcon />} onClick={() => deleteClicked(row.value)}>Delete</Button>
        }
    ];

    // hae treenit
    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/trainings')
            .then(response => response.json())
            .then(data => setTrainings(data.content))
    };

    // poista treeni
    const deleteClicked = (link) => {       
        if (window.confirm("Do you want to delete the training?")) {
            fetch(link, { method: 'DELETE' })
                .then(response => fetchData())
                .catch(error => console.error(error));
        }            
    };

    // useEffect jolla haetaan treenit
    useEffect(() => fetchData(), []);
    console.log(trainings); // tarkistetaan mitä saatiin vastaukseksi

    return (
        <div>
            <ReactTable filterable={true} sortable={true} data={trainings} columns={columns} />
        </div>
    );

}

export default TrainingList;