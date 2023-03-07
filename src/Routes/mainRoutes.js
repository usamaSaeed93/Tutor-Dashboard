import Dashboard from "../Pages/Dashboard/Dashboard";
import TutorList from '../Pages/Tutor Pages/TutorList'
import ClassList from '../Pages/Classes/ClassList'
import StudentsList from '../Pages/Students/StudentsList'
import CategoryList from '../Pages/Categories/CategoryList'
import WorkshopList from '../Pages/Workshops/WorkshopList'
import NotificationList from '../Pages/Notifications/NotificationList'
import EmailList from '../Pages/Email/EmailList'
import RatingsLIst from '../Pages/Ratings/RatingsLIst'
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import EditOffIcon from '@mui/icons-material/EditOff';
import StarIcon from '@mui/icons-material/Star';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import FestivalIcon from '@mui/icons-material/Festival';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import PaymentIcon from '@mui/icons-material/Payment';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import CategoryIcon from '@mui/icons-material/Category';
import LogoutIcon from '@mui/icons-material/Logout';
import Diversity3Icon from '@mui/icons-material/Diversity3';
export const routesConfig = [
//   {
//     path:"/",
//     element: <Dashboard />,
//   },
  {
    path:"/",
    element: <Dashboard/>,
      icon:<RequestQuoteIcon />,
      name: "Admin Panel"
 
  },
  {
    path:"/tutor",
    element: <TutorList />,
    icon:<SchoolIcon />,
    name: "Tutors"
  },
  {
    path:"/students",
    element: <StudentsList />,
    icon:<EditOffIcon />,
    name: "Students"
  },
  {
    path:"/classes",
    element: <ClassList />,
    icon:<SupervisorAccountIcon />,
    name: "Classes"
  },
  {
    path:"/workshops",
    element: <WorkshopList />,
    icon:<FestivalIcon />,
    name: "Workshops"
  },
 
  {
    path:"/ratings",
    element: <RatingsLIst />,
    icon:<StarIcon />,
    name: "Rating"
  },
  {
    path:"/notifications",
    element: <NotificationList />,
    icon:<PaymentIcon />,
    name: "Notification"
  },
  {
    path:"/emails",
    element: <EmailList />,
    icon:<ContactEmergencyIcon />,
        name: "Emails"
  },
  {
    path:"/categories",
    element: <CategoryList />,
    icon:<FormatListBulletedIcon />,
    name: "Categories"
  },
  // {
  //   path:"/emails/:id",
  //   element: <EmailsDetail />,
  // },
  // {
  //   path:"/sub-admins",
  //   element: <SubAdmins />,
  // },
  // {
  //   path:"/categories",
  //   element: <Categories />,
  // },
  // {
  //   path:"/settings",
  //   element: <Settings />,
  // }
];
