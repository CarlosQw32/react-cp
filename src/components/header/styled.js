import styled from "styled-components";

export const AreaHeader = styled.div `
    height: 100px;
    background-color: SlateBlue;
    color: white;
    
    a {text-decoration: none;
        color: MediumSeaGreen;
        font-size :large;
        font-weight: bolder;
        }
    
    a:visited {text-decoration: none;}
    a:hover {text-decoration: none;}
    a:focus {text-decoration: none;}
    a:hover, a:active {text-decoration: none;}
    

    .container {
        padding: 5px 20px;
        display: flex;
        align-items: center;
    }

    .logo {
        flex: 1;
    }

    nav {
        ul {            
            display: flex;
            
        }
        li {   
            list-style: none;
            margin-left: 20px;
            
        }
      
    }

    body{
        background-color:LightSteelBlue
    }
`