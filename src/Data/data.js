//ThingsYouNeed image
import Group_1 from '../images/ThingsYouNeed_img/Group-1.png';
import Group_2 from '../images/ThingsYouNeed_img/Group-2.png';
import Group_3 from '../images/ThingsYouNeed_img/Group-3.png';
import Group_4 from '../images/ThingsYouNeed_img/Group-4.png';

//ThingsYouNeed icon
import {GiNotebook, GiWorld} from 'react-icons/gi'
import {AiTwotoneCar} from 'react-icons/ai'
import {HiLocationMarker} from 'react-icons/hi'

//VacationPlan image
import Type_1 from '../images/VacationPlan_img/Type-1.png';
import Type_2 from '../images/VacationPlan_img/Type-2.png';
import Type_3 from '../images/VacationPlan_img/Type-3.png';
import Type_4 from '../images/VacationPlan_img/Type-4.png';

// About Img
import About_1 from '../images/about/about_1.png';
import About_2 from '../images/about/about_2.jpg';
import About_3 from '../images/about/about_3.jpg';


// Nav Data
const navList = [
    {id: 1, name: 'Services', route: '/services'},
    {id: 2, name: 'About Us', route: '/about-us'},
    {id: 3, name: 'Testimonies', route: '/testimonies'},
    {id: 4, name: 'FAQ', route: '/faq'},
    {id: 5, name: 'Contact Us', route: '/contact-us'},
]



//ThingsYouNeed Data
const ThingsYouNeedData = [
    {
        id: 1,
        title: "Select Destination",
        description: "Completes all the work associated with planning and processing",
        IconItem: HiLocationMarker
    },
    {
        id: 2,
        title: "Fill in the Information",
        description: "After successful access then book from exclusive deals & pricing",
        IconItem: GiNotebook
    },
    {
        id: 3,
        title: "Select Vehicle",
        description: "Start and explore a wide range of exciting travel experience.",
        IconItem: AiTwotoneCar
    },
    {
        id: 4,
        title: "Pay Securely & Travel",
        description: "Start and explore a wide range of exciting travel experience.",
        IconItem: GiWorld,
    },
]

//
const QuestionsData = [
    {
        id: 1,
        question: 'Where can I watch?',
        answer: 'Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla. Elit adipiscing proin quis est consectetur. Felis ultricies nisi, quis malesuada sem odio. Potentiмnibh natoque amet amet, tincidunt ultricies et. Et nam rhoncus sit nullam diam tincidunt condimentum nullam.',
    },
    {
        id: 2,
        question: 'Tempus magna risus interdum ultricies sed urna?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

    },
    {
        id: 3,
        question: 'Augue in nibh urna volutpat mattis?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 4,
        question: 'Whose Eu egestas sed sed posuere ultrices?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 5,
        question: 'Elementum facilisi aliquam, nisi, orci vulputate?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 6,
        question: 'Nibh at odio dolor etiam neque in vel id orci?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 7,
        question: 'Non dolor at velit lorem erat maecenas?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }
]

//
const VacationPlanData = [
    {
        id: 1,
        title: 'Safe & Secure',
        description: 'Completes all the work associated with planning and processing',
        image: Type_1
    },
    {
        id: 2,
        title: 'Best Prices',
        description: 'Completes all the work associated with planning and processing',
        image: Type_2
    },
    {
        id: 3,
        title: 'Fast & Secure',
        description: 'Completes all the work associated with planning and processing',
        image: Type_3
    },
    {
        id: 4,
        title: 'Luxery Choices',
        description: 'Completes all the work associated with planning and processing',
        image: Type_4
    },
    {
        id: 5,
        title: 'Luxery Choices',
        description: 'Completes all the work associated with planning and processing',
        image: Type_4
    },
   
]

// About Data
const aboutData = [
    {id: 1, img: About_1, name: 'Mike Taylor', locaiton: 'Lahore, Pakistan', desc: '“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”'},
    {id: 2, img: About_2, name: 'Chris Thomas', locaiton: 'CEO of Red Button', desc: '“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”'},
    {id: 3, img: About_3, name: 'John  Doe', locaiton: 'New york, US', desc: '“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”'},
]


// Footer Data
const footerData = {
    company:[
        {id: 1, name: 'About'},
        {id: 2, name: 'Careers'},
        {id: 3, name: 'Logistic'},
        {id: 4, name: 'Privacy & Policy'},
    ],
    contact: [
        {id: 1, name: 'Help/FAQ'},
        {id: 2, name: 'Press'},
        {id: 3, name: 'Affilates'},
    ],
    more: [
        {id: 1, name: 'Press Centre'},
        {id: 2, name: 'Our Blog'},
    ]
}

// Pickup Data
const pickupData = [
    {id: 1, name: 'Paris'},
    {id: 2, name: 'Marseile'},
    {id: 3, name: 'Lyon'},
    {id: 4, name: 'Toulouse'},
    {id: 5, name: 'Nantes'},
    {id: 6, name: 'Dhaka'},
    {id: 7, name: 'Khulna'},
    {id: 8, name: 'Chottogram'},
    {id: 9, name: 'Borishal'},
    {id: 10, name: 'Rajshahi'},
    {id: 12, name: 'London'},
    {id: 13, name: 'Manchester'},
    {id: 14, name: 'New york'},
    {id: 15, name: 'Bristol'},
]

// Destination Data
const destinationData = [
    {id: 1, name: 'Paris'},
    {id: 2, name: 'Marseile'},
    {id: 3, name: 'Lyon'},
    {id: 4, name: 'Toulouse'},
    {id: 5, name: 'Nantes'},
    {id: 6, name: 'Dhaka'},
    {id: 7, name: 'Khulna'},
    {id: 8, name: 'Chottogram'},
    {id: 9, name: 'Borishal'},
    {id: 10, name: 'Rajshahi'},
    {id: 12, name: 'London'},
    {id: 13, name: 'Manchester'},
    {id: 14, name: 'New york'},
    {id: 15, name: 'Bristol'},
]

export {
    navList,
    footerData,
    pickupData,
    destinationData,
    ThingsYouNeedData,
    QuestionsData,
    VacationPlanData,
    aboutData

}