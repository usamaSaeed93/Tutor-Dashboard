import React from "react";
import "./index.css";
// import CategoryList from "./Pages/Categories/CategoryList";
// import StudentsList from "./Pages/Students/StudentsList";
// import WorkshopList from "./Pages/Workshops/WorkshopList";
// import NotificationList from "./Pages/Notifications/NotificationList";
// import EmailList from './Pages/Email/EmailList'
// import RatingsLIst from "./Pages/Ratings/RatingsLIst";
// import TutorList from './Pages/Tutor Pages/TutorList'
// import Transactions from './Pages/Tutor Pages/Transactions'
// import TutorDetails from "./Pages/Tutor Pages/TutorDetails";
// import Documents from "./Pages/Tutor Pages/Documents";
// import Account from "./Pages/Tutor Pages/Account";
import NotFound from "./NotFound";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import { routesConfig } from "./Routes/mainRoutes";
import DonutChart from './Components/Charts/DonutChart'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        {routesConfig?.map((item) => {
        
          return <Route path={item.path} element={item.element} />;
        })}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <DonutChart />
    </div>
  );
}

export default App;
