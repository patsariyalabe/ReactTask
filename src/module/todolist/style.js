import styled from 'styled-components';
export const BoxWrapper = styled.div`
width:100%;
max-width:550px;
margin:0 auto;
min-height:100vh;
display:flex;
align-items:center;
`;
export const Form = styled.div`
padding:30px;
width:100%;
box-shadow:0px 11px 20px 0px #ddd;
`;
export const TodoList = styled.ul`
list-style:none;
padding:0;margin:0;
li + li{margin-top:10px;}
`;
export const ListItem = styled.li`
border:1px solid #ccc;
font-size: 14px;
font-weight: 400;
cursor:pointer;
width:100%;
`;
export const SubjectName = styled.div`
line-height:1;
padding:10px;
`;
export const WriteTodo = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
padding:7px 7px 7px 15px;

`;
export const InputBox = styled.input`
min-height:34px;
width:100%;
border-radius:0;
border:1px solid #ccc;
outline:none;
box-shadow:none;
background-color:#fff;
padding: 6px 12px;
`;

export const AddButton = styled.button`
border-radius:0;
outline:none;
box-shadow:none;
min-height:34px;
background-color:#000;
color:#fff;
min-width:90px;
text-align:center;
border:none;
`;

export const AddedTodoList = styled.ul`
list-style:none;
padding:0px 7px 7px 20px;
margin:0;
li{padding:7px;}

`;