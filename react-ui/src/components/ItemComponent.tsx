import { Paper, styled } from "@mui/material";

type opts = {value: string}
function Item(props: opts) {
    const ItemComponent = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
    }));

    return(
        <ItemComponent>{props.value}</ItemComponent>
    )
}

export default Item