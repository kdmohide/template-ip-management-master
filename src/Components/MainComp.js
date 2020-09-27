import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionActions from '@material-ui/core/AccordionActions';
import Button from '@material-ui/core/Button';
import { makeStyles, TableCell, TextField } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
// import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';
import TableRow from '@material-ui/core/TableRow';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

const useStyles = makeStyles((theme) => ({
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
        },
    },
    form: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    details: {
        flexGrow: 2,
    },
    table: {
        minWidth: 650,
    },
    textField: {
        width: '25ch'
    }
}))

function MainComp(props) {
    const classes = useStyles();

    const [expanded, setExpanded] = React.useState(false);
    const [openForm, setOpenForm] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };


    return !openForm ? (
        <div>
            <React.Fragment>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    >
                    <Typography className={classes.heading}>Completed Applications</Typography>
                    <Typography className={classes.secondaryHeading}>100</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                    </Typography>
                    </AccordionDetails>
                    <Divider />
                    <AccordionActions>
                    {/* <Button size="small">Cancel</Button> */}
                    <Button size="small" color="primary">
                        View Details
                    </Button>
                    </AccordionActions>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                    >
                    <Typography className={classes.heading}>Pending Applications</Typography>
                    <Typography className={classes.secondaryHeading}>
                        50
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
                        diam eros in elit. Pellentesque convallis laoreet laoreet.
                    </Typography>
                    </AccordionDetails>
                    <Divider />
                    <AccordionActions>
                    {/* <Button size="small">Cancel</Button> */}
                    <Button size="small" color="primary">
                        View Details
                    </Button>
                    </AccordionActions>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                    >
                    <Typography className={classes.heading}>Total</Typography>
                    <Typography className={classes.secondaryHeading}>
                        150
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                        vitae egestas augue. Duis vel est augue.
                    </Typography>
                    </AccordionDetails>
                    <Divider />
                    <AccordionActions>
                    {/* <Button size="small">Cancel</Button> */}
                    <Button size="small" color="primary" onClick={() => {setOpenForm(true)}}>
                        New Application
                    </Button>
                    </AccordionActions>
                </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                    >
                    <Typography className={classes.heading}>Personal data</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                        vitae egestas augue. Duis vel est augue.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            </React.Fragment>
        </div>
    ): <SimpleForm />;
}

export default MainComp;

function SimpleForm(props) {
    const classes = useStyles();
    const [type, setType] = React.useState();    
    const [applicationType, setApplicationType] = React.useState();
    const types = ["", "Patent", "Copyright", "Trademark", "Industrial Design"].map(element => 
        <option key={element} value={element}>{element}</option>
    );

    const handleTypeChange = (e) => {
        console.log(e);
        setType(e.target.value);
    }

    const handleApplicationTypeChange = (e) => {
        console.log(e.target.value);
        setApplicationType(e.target.value)
    }

    return (
        <div className={classes.form}>
            {/* <Grid direction="row" justify="flex-end" alignItems="center" container>
                <Grid item xs={6}>
                    <InputLabel htmlFor="type">Application Type</InputLabel>
                </Grid>
                <Grid item xs={6} className={classes.details}>
                    <Select native value={type} onChange={handleTypeChange}>
                        {types}
                    </Select>        
                </Grid>
            </Grid> */}
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="type table">
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <InputLabel htmlFor="type">Section</InputLabel>
                            </TableCell>
                            <TableCell>
                                <Select native value={type} onChange={handleTypeChange}>
                                    {types}
                                </Select>        
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>                
            </TableContainer>
            &nbsp;
            <Divider />
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    {/* <TableHead>
                    <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                    </TableHead> */}
                    <TableBody>
                        <TableRow>
                            <TableCell align="left">
                                <InputLabel htmlFor="uin">Unique Identification Number</InputLabel>
                            </TableCell>
                            <TableCell align="left">
                                <TextField disabled id="uin"></TextField>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">
                                <InputLabel htmlFor="noa">Name Of Applicants</InputLabel>
                            </TableCell>
                            <TableCell align="left">
                                <TextField multiline id="noa"></TextField>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">
                                <InputLabel htmlFor="nor">Reference Person</InputLabel>
                            </TableCell>
                            <TableCell align="left">
                                <TextField id="nor"></TextField>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">
                                <InputLabel htmlFor="at">Application Type</InputLabel>
                            </TableCell>
                            <TableCell align="left">
                                    <FormControl id ="at" component="fieldset">
                                        <RadioGroup aria-label="applicationType" name="applicationType" value={applicationType} onChange={handleApplicationTypeChange}>
                                            <FormControlLabel value="Provisional" control={<Radio />} label="Provisional Application" />
                                            <FormControlLabel value="Complete" control={<Radio />} label="Complete Application" />
                                        </RadioGroup>
                                    </FormControl>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">
                                <InputLabel htmlFor="pan">Patent Application Number</InputLabel>
                            </TableCell>
                            <TableCell align="left">
                                <TextField id="pan"></TextField>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">
                                <InputLabel htmlFor="date">Application Date</InputLabel>
                            </TableCell>
                            <TableCell align="left">
                                <TextField
                                    id="date"
                                    type="date"
                                    defaultValue="2017-05-24"
                                    className={classes.textField}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                />                            
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">
                                <InputLabel htmlFor="af">Application Form</InputLabel>
                            </TableCell>
                            <TableCell align="left">
                                <TextField
                                    id="af"
                                    type="file"
                                    className={classes.textField}
                                />                            
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">
                                <InputLabel htmlFor="toi">Title Of Invention</InputLabel>
                            </TableCell>
                            <TableCell align="left">
                                <TextField id="toi"></TextField>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">
                                <InputLabel htmlFor="ahc">Attorneys</InputLabel>
                            </TableCell>
                            <TableCell align="left">
                                <TextField id="ahc"></TextField>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">
                                <InputLabel htmlFor="pas">Power Of Attorneys Submitted</InputLabel>
                            </TableCell>
                            <TableCell align="left">
                                <TextField disabled id="pas"></TextField>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">
                                <InputLabel htmlFor="paos">Power Of Attorneys Submission</InputLabel>
                            </TableCell>
                            <TableCell align="left">
                                <TextField disabled id="paos"></TextField>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">
                                <InputLabel htmlFor="poa">Power Of Attorney</InputLabel>
                            </TableCell>
                            <TableCell align="left">
                                <TextField
                                    id="poa"
                                    type="file"
                                    className={classes.textField}
                                />                            
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">
                                <InputLabel htmlFor="sd">Specification Drafter</InputLabel>
                            </TableCell>
                            <TableCell align="left">
                                <TextField disabled id="sd"></TextField>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">
                                <InputLabel htmlFor="rep">Request For Early Publication</InputLabel>
                            </TableCell>
                            <TableCell align="left">
                                <TextField id="rep"></TextField>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">
                                <InputLabel htmlFor="datep">Date Of Publication</InputLabel>
                            </TableCell>
                            <TableCell align="left">
                                <TextField
                                    id="datep"
                                    type="date"
                                    defaultValue="2017-05-24"
                                    className={classes.textField}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                />                            
                            </TableCell>
                        </TableRow>
                    {/* {rows.map((row) => (
                        <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))} */}
                    </TableBody>
                </Table>
            </TableContainer>
            {/* <form className></form> */}
        </div>
    );
}