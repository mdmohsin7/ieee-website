import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    cards: {
        display: 'grid',
        gridTemplateColumns: "repeat(auto-fit, minmax(350px, 0fr))",
        width: '90%',
        gap: '20px',
        margin: '50px auto',
    },
}));

