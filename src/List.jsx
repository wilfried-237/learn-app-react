import propTypes from "prop-types"
import Card from "./Card/Card";

function List(props){

    const developers = props.lists

    const devList = developers.map(developer => <Card key={developer.key} name={developer.name} role={developer.role} />);

    return(
            <>
                {devList}
            </>
    );
}

List.propTypes = {
    lists: propTypes.arrayOf(propTypes.shape({
        key: propTypes.number,
        name: propTypes.string,
        role: propTypes.string,
    }))
}

List.defaultProps ={
    lists: [],
}

export default List