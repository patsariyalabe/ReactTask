import styled from 'styled-components';
export const SidebarStyle = styled.div`
  width:230px;
  height: 100%;
  border-right: 1px solid #efefef;
  background: #eee;
  overflow-y: auto;
  ul{
    margin: 0;
    padding: 0;
    list-style: none;
   li + li{border-top:1px solid #dcdada} 
   li a{
    display: block;
    padding: 10px 15px;
    color: #000;
    font-size: 16px;
    font-weight: 600;
   }
  }

`;
