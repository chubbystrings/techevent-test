import styled from "styled-components"


const Navbar = ({isOpen, setIsOpen}) => {

  return (
    <Nav>
        <h3>Discover Tech Events</h3>
    </Nav>
  )
}

const Nav = styled.nav`
    padding: 0.5rem 1rem;
    box-shadow: 0 2px 4px -1px rgba(0,0,0,0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box ;
    z-index: 10000 ;
    position: fixed;
    top: 0px;
    width: 100%;
    background-color: #fff;
    height: 100px;

    h3 {
        font-size: 30px;
    }

    @media only screen and (min-width: 1180px) {
        .bars{
            display: none;
        }
    }
`

export default Navbar