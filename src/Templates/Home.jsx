function Home(props){
    return <>
    
    
    
    <div style={
        {
            border:"2px solid black",
            width:"200px",
            padding:"5px",
            height:"100px",
        }
    }>
        <div style={
            {
                fontSize:"20px"
            }
        }> Student Name:{props.name}</div>
        <div >Student Bio:{props.Bio}</div>
    </div>
    </>
}


export default Home;