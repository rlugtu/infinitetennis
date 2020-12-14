import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    inputFirst: {
        paddingRight: 20
      }, 
  }));
const ContactForm = () => {
    const classes = useStyles()
    return (
        <div className="contactFormContainer">
            <h1>Contact Us!</h1>
            <form className="contactForm">
                <div className="formLine1">
                    <div>
                        <p>First Name</p>
                        <TextField className="inputFirstName" fullWidth={true} variant="filled" type="text" name="firstName" />
                    </div>
                    <div>
                        <p>Last Name</p>
                        <TextField className="inputLastName" fullWidth={true} variant="filled" type="text" name="lastName" />
                    </div>
                </div>
                    <div>
                        <p>Phone</p>
                        <TextField fullWidth={true} variant="filled" type="number" name="phone" />
                    </div>
                    <div>
                        <p>Email</p>
                        <TextField fullWidth={true} variant="filled" type="text" name="email" />
                    </div>
                <div className="contactSubmitContainer">
                    <Button variant="outlined">Submit</Button>
                </div>
                
            </form>
        </div>
    )
}

export default ContactForm