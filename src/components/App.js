import { Sales } from 'pages/Sales';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { InvoiceDetails } from './InvoiceDetails';
import { Invoices } from './Invoices/Invoices';
import { Layout } from './Layout';

export const App = () => {
  return (
    <>
      <Routes>
     <Route path='/'element={<Layout/>}>
      <Route path='dashboard' element={<div>dashboard</div>}/>
      <Route path='sales' element={<Sales/>}>
        <Route index element={<div>Sales index route</div>}/>
        <Route path='analytics' element={<div>Analytics</div>}/>
        <Route path='invoices' element={<Invoices/>}>
          <Route path=':invoiceId' element={<InvoiceDetails/>}/>
          </Route>
        <Route path='deposits' element={<div>Deposits</div>}/>
      </Route>
      <Route path='reports' element={<div>Reports</div>}/>
      <Route path='feedback' element={<div>Feedback</div>}/>
      <Route path='customers' element={<div>Customers</div>}/>
      
     </Route>
      </Routes>
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
