import Card from "./Card/Card";

function List(){

    const developers = [{key: 1, name:"Nik", role: "PHP Developer"}, 
                        {key: 2, name:"Dan Lock", role: "Django Developer"},
                        {key: 3, name: "Zain Dev", role: "React Developer"}];

    const devList = developers.map(developer => <Card key={developer.key} name={developer.name} role={developer.role} />);

    return(
            <>
                {devList}
            </>
    );
}

export default List