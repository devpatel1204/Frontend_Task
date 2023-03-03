import JobPage from "./Compnents/Jobpage.jsx";
// import { Router, Route, Link } from 'react-router-dom';
import availableJobs from "./Compnents/AvailableJobs.jsx";
function App() {
  return (
    <>
    <JobPage buttonText="add jobs"></JobPage>
     {/* <Router history={history}>
      <div>
        <Route exact path="/" component={JobPage} />
        <Route path="/" component={availableJobs} />
      </div>
    </Router> */}
    </>
    
  );
}

export default App;
