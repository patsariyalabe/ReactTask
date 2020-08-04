import styled from 'styled-components';
export const FormStyle = styled.div`
padding:30px;
background:#fff;
max-width:500px;
margin:30px auto 0;
box-shadow:0px 9px 13px 0px #ddd;
.formBox{
    input{
        width:100%;
        box-sizing: border-box;
        min-height:45px;
        font-size:14px;
        border:1px solid #000;
        border-radius:0;
        margin:14px 0;
        color:#000;
        padding:6px 12px;
    }
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
        background:#000;border:none;color:#fff;
        min-height:30px;
        padding:8px 12px;
        font-size:14px;
        font-weight:600;
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



