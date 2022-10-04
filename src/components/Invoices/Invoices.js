import { NavItem } from "components/Invoices/Invoices.styled";
import { getInvoices } from "fakeApi";
import { useState,useEffect } from "react";
import {  Outlet } from "react-router-dom";
import { Box } from "../Box";
export const Invoices =()=>{
       const [invoices,setInvoices] = useState([]);
       useEffect(()=>{
        getInvoices().then(setInvoices)
       },[])
   return (<Box display="flex">
     <Box as="aside" display="flex"
    flexDirection="column"
    p={3}
    borderRight="1px solid black"
    >
        {invoices.map(({id}) =><NavItem key={id} to={`${id}`}>{id}</NavItem>)}
    </Box>
<Outlet/>
   </Box>)}