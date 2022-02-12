import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function AddCustomer(props) {

    const [open, setOpen] = React.useState(false);
    const [newcustomer, setNewcustomer] = React.useState({
        firstname: '', lastname: '', streetaddress: '', postcode: '', city: '', email: '', phone: ''});

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleInputChange = (e) => {
        setNewcustomer({ ...newcustomer, [e.target.name]: e.target.value });
    };

    const addCustomer = () => {
        props.saveCustomer(newcustomer);
        handleClose();
    };

    return (
        <div>
            <Button style={{margin:10}} variant="contained" color="success" onClick={handleClickOpen}>Add a new customer</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add a new customer</DialogTitle>
                <DialogContent>                    
                    <TextField
                        autoFocus
                        margin="dense"
                        name="firstname"
                        value={newcustomer.firstname}
                        onChange={e => handleInputChange(e)}
                        label="First name"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="lastname"
                        value={newcustomer.lastname}
                        onChange={e => handleInputChange(e)}
                        label="Last name"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="streetaddress"
                        value={newcustomer.streetaddress}
                        onChange={e => handleInputChange(e)}
                        label="Street address"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="postcode"
                        value={newcustomer.postcode}
                        onChange={e => handleInputChange(e)}
                        label="Postcode"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="city"
                        value={newcustomer.city}
                        onChange={e => handleInputChange(e)}
                        label="City"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="email"
                        value={newcustomer.email}
                        onChange={e => handleInputChange(e)}
                        label="Email"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="phone"
                        value={newcustomer.phone}
                        onChange={e => handleInputChange(e)}
                        label="Phone"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={addCustomer}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}