import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import AddCustomer from "./AddCustomer";
import EditCustomer from "./EditCustomer";
import AddTraining from "./AddTraining";

function CustomerList() {

    const [customers, setCustomers] = useState([]);

    const columns = [
        { Header: 'First name', accessor: 'firstname' },
        { Header: 'Last name', accessor: 'lastname' },
        { Header: 'Street address', accessor: 'streetaddress' },
        { Header: 'Post code', accessor: 'postcode' },
        { Header: 'City', accessor: 'city' },
        { Header: 'E-mail', accessor: 'email' },
        { Header: 'Phone', accessor: 'phone' },
        {
            sortable: false,
            filterable: false,
            width: 80,
            Cell: row => <EditCustomer updateCustomer={updateCustomer} customer={row.original}/>
        },
        {
            sortable: false,
            filterable: false,
            width: 110,
            Cell: row => <AddTraining saveTraining={saveTraining} customer={row.original}/>
        },
        {
            sortable: false,
            filterable: false,
            width: 100,
            accessor: 'links[0].href',
            Cell: row => <Button variant="contained" color="error" size="small" startIcon={<DeleteIcon />} onClick={() => deleteClicked(row.value)}>Delete</Button>
        }
    ];

    // hae asiakkaat
    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
            .then(response => response.json())
            .then(data => setCustomers(data.content))
    };

    // poista asiakas
    const deleteClicked = (link) => {       
        if (window.confirm("Do you want to delete the customer?")) {
            fetch(link, { method: 'DELETE' })
                .then(response => fetchData())
                .catch(error => console.error(error));
        }            
    };

    // lisää asiakas
    const saveCustomer = (newcustomer) => {
        fetch('https://customerrest.herokuapp.com/api/customers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newcustomer)
        })
            .then(response => fetchData())
            .catch(error => console.error(error))
    };

    // muokkaa asiakasta
    const updateCustomer = (customer, link) => {
        fetch(link, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
            .then(response => fetchData())
            .catch(error => console.error())
    };

    // lisää asiakkaalle treeni
    const saveTraining = (training) => {
        fetch('https://customerrest.herokuapp.com/api/trainings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(training)
        })
            .then(response => fetchData())
            .catch(error => console.error(error))
    };

    // useEffect jolla haetaan asiakkaat
    useEffect(() => fetchData(), []);
    console.log(customers); // tarkistetaan mitä saatiin vastaukseksi

    return (
        <div>
            <AddCustomer saveCustomer={saveCustomer}/>
            <ReactTable filterable={true} sortable={true} data={customers} columns={columns} />
        </div>
    );
    
}

export default CustomerList;