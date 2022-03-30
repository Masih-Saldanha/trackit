export default function TopoEMenu(props) {
    const { logado } = props;
    if (logado) {
        return (
            <h1>TOPO E MENU</h1>
        )
    } else return <></>
}