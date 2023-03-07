import Nameslab from "../Components/UI/Nameslab"
import Rating from "../Components/UI/Rating"
import '../index.css'
export const tutorColumn=[
    {
        name:"name",
        label:"Tutor Name"
    },
    {
        name:"category",
        label:"Category"
    },
    {
        name:"bookings",
        label:"Bookings"
    },
    {
        name:"ratings",
        label:"Ratings"
    },
    {
        name:"created_on",
        label:"Created on"
    },
    {
        name:"status",
        label:"Status"
    },
    {
        name:"payout_status",
        label:"Payout status"
    },
    
]
export const tutorRow=[
    {
        name:<Nameslab />,
        category:"Mathematics",
        bookings:20,
        ratings:<Rating />? <Rating /> : "none",
created_on:"30-May-2022",
status:<span className='text-theme-primary'>Active</span>,
payout_status:<span className='text-theme-primary'>Completed</span>,
    }, 
]
export const classesColumns = [
    {
        name:"category",
        label:"Class cateogry"
    },
    {
        name:"booked",
        label:"Booked"
    },
    {
        name:"scheduled",
        label:"Scheduled on"
    },
    {
        name:"student",
        label:"Student"
    },
    {
        name:"tutor",
        label:"Tutor"
    },
    {
        name:"status",
        label:"Status"
    },
];
export const classesRows = [
    {
        category:"Mathematics, U...",
        booked:"Sept 18, 2022",
        scheduled:"Sept 21, 2022",
        student:"John doe",
        tutor:"Olivia Green",
        status:<span className='text-theme-primary'>Completed</span>
    }
]
export const studentColumns = [
    {
        name:"name",
        label:"Student Name"
    },
    {
        name:"category",
        label:"Category"
    },
    {
        name:"parent",
        label:"Parent"
    },
    {
        name:"classes_attended",
        label:"Classes attended"
    },
    {
        name:"created_on",
        label:"Created on"
    },
    {
        name:"status",
        label:"Status"
    },
    
];

export const studentRows = [
    {
        name:<Nameslab />,
        category:"Mathematics, U...",
        parent:"Olivia Green",
        classes_attended:"200",
        created_on:"Sept 18, 2022",
        status:<span className='text-theme-primary'>Active</span>
    }
]
export const workshopsColumns = [
    {
        name:"name",
        label:"Workshop name"
    },
    {
        name:"organized_by",
        label:"Organized by"
    },
    {
        name:"scheduled",
        label:"Scheduled on"
    },
    {
        name:"reserved",
        label:"Reserved seats"
    },
    {
        name:"charges",
        label:"Charges"
    },
    {
        name:"total",
        label:"Total"
    },
    {
        name:"location",
        label:"Location"
    },
    {
        name:"status",
        label:"Status"
    },
];
export const workshopsRows = [
    {
        name:<b>Lorem ipsum dolor sit</b>,
        organized_by:"John Doe",
        scheduled:"Sept 21, 2022",
        reserved:"100/300",
        charges:"$40.58",
        total:"$4000.58",
        location:'$4000.58',
        status:<span className='text-theme-primary'>Active</span>
    }
]
export const notificationsColumns = [
    {
        name:"notification",
        label:"Notification"
    },
    {
        name:"sent_to",
        label:"Sent to"
    },
    {
        name:"sent_on",
        label:"Sent on"
    },
    {
        name:"status",
        label:"Status"
    }
];

export const notificationsRows = [
    {
        notification:<b>Lorem ipsum dolor sit</b>,
        sent_to:"11 people",
        sent_on:"21 Sept, 2022.",
        status:<span className='text-theme-primary'>Sending</span>
    }
]

export const ratingsColumns = [
    {
        name:"review",
        label:"Review"
    },
    {
        name:"rate",
        label:"Rate"
    },
    {
        name:"given_by",
        label:"Given by"
    },
    {
        name:"given_to",
        label:"Given to"
    }
];

export const ratingsRows = [
    {
        review:<b>Lorem ipsum dolor sit</b>,
        rate:"5 star",
        given_by:"John doe",
        given_to:"Olivia Green"
    }
]
export const payoutsColumns = [

    {
        name: 'amount',
        label: 'amount'
    },
    {
        name: 'commission',
        label: 'Commission'
    },
    {
        name: 'earning',
        label: 'Earning'
    },
    {
        name: 'payment_date',
        label: 'Payment date'
    },
    {
        name: 'status',
        label: 'Status'
    }

]

export const payoutsRows = [

    {
        amount: '$18.50',
        commission: "$8.50",
        earning: "$10.50",
        payment_date: "Sept 18, 2022.",
        status: <span className='text-theme-primary'>Completed</span>
    }

]
export const tutorClassColumn=[
    {
        name:"student",
        label:"Student"

    },
    {
        name:"duration",
        label:"Duration"
    },
    {
        name:"classType",
        label:"Class Type"
    },
    {
        name:"date",
        label:"Date"
    }
];
export const tutorClassRow=[
    {
        student:"Usama",
        duration:"60 Minutes",
        classType:<span className="text-theme-primary"> Online</span>,
        date:"19-Sept-23"

    }
]
