import styled from 'styled-components';
export const HeaderStyle = styled.header`
padding: 15px;
background: linear-gradient(45deg, #000000, #063c00cc);
nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo{color:#fff;font-size:30px;}
   ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        li + li{
            margin-left: 30px;
        }
        a{color: #fff; font-size: 18px;
        }
    }
}
`;



