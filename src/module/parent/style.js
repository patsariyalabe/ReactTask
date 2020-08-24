import styled from 'styled-components';
export const FormStyle = styled.div`
padding:30px;
background:#fff;
max-width:500px;
margin:30px auto 0;
box-shadow:0px 9px 13px 0px #ddd;
font-family:arial;
font-size:13px;
.formBox{
    .form-group{display:block;width:100%;margin-bottom:15px;}
    input{
        width:100%;
        box-sizing: border-box;
        min-height:45px;
        font-size:14px;
        border:1px solid #000;
        border-radius:0;
        color:#000;
        padding:6px 12px;
    }
    button:disabled {background:#ddd;}
    .error{display:inline-block;width:100%;color:red;font-size:12px;}
}
.btnGroup {
    display: flex;
    align-items: center;
    justify-content: center;
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
     -webkit-appearance: none; 
     margin: 0; 
    }
    button{
        min-height:30px;
       font-weight:600;
        padding: 0.938em;
        border: none;
        border-radius: 4px;
        background-color: #22223B;
        color: #fefefe;
        min-width:100px;
        font-family:arial;
        font-size:13px;
        margin-top:0;
    }
   
    button + button{margin-left:30px;}
    input{
        box-sizing:border-box;
        min-height:30px;
        font-size:14px;
        border:1px solid #000;
        border-radius:0;
        text-align:center;
        color:#000;
        width:100px;
    }
}
`;



