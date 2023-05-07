import { Nav } from "react-bootstrap";

const Navbar = (props)=>{

    return( 
        <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/home">Browse mods</Nav.Link>
            <Nav.Link eventKey="link-1">Create String Mod</Nav.Link>
            <Nav.Link eventKey="link-2">Blablablabla</Nav.Link>
            <Nav.Link eventKey="link-2">Other option</Nav.Link>
        </Nav>
    );
};

export default Navbar;