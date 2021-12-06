import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function AddTraining(props) {

    const [open, setOpen] = React.useState(false);
    const [training, setTraining] = React.useState({
        date: '', duration: '', activity: '', customer: ''});

    const handleClickOpen = () => {
        setOpen(true);
    };
  
    const handleClose = () => {
        setOpen(false);
    };

    const handleInputChange = (e) => {
        setTraining({ ...training, [e.target.name]: e.target.value });
    };

    const addTraining = () => {
        setTraining({ ...training, customer: props.customer.links[0].href });
        props.saveTraining(training);
        handleClose();
    };

    return (
        <div>
            <Button variant="outlined" color="primary" size="small" onClick={handleClickOpen}>Add training</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add training to customer</DialogTitle>
                <DialogContent>                    
                    <TextField type="datetime-local"
                        autoFocus
                        margin="dense"
                        name="date"
                        value={training.date}
                        onChange={e => handleInputChange(e)}
                        label="Date"
                        fullWidth
                    />
                    <TextField 
                        margin="dense"
                        name="duration"
                        value={training.duration}
                        onChange={e => handleInputChange(e)}
                        label="Duration"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="activity"
                        value={training.activity}
                        onChange={e => handleInputChange(e)}
                        label="Activity"
                        fullWidth
                    />                  
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={addTraining}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}