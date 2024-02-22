import dream from '../../assets/images/project-screenshoot/dream.png';
import corona from '../../assets/images/project-screenshoot/corona.png';
import math from '../../assets/images/project-screenshoot/math.png';
import space from '../../assets/images/project-screenshoot/space.png';
import marble from '../../assets/images/project-screenshoot/marble.png';
import management from '../../assets/images/project-screenshoot/management.png';

const PortfolioData = [
  {
    id: 6,
    category: 'Web site',
    tech: 'Laravel | MySQL | Bootstrap | Livewire',
    title: 'Marbleture management',
    image: management,
    description: 'Marbleture management system is a web application that allows the company to manage their products, orders, invoice, subscrition, customers etc',
    seelive: 'https://management.marbleture.com/',
    seesource: 'https://github.com/blue-rigel/marbleture-management.git',
  },
  {
    id: 5,
    category: 'Web site',
    tech: 'Vue | Supabase | Laravel | SQL | Tailwind',
    title: 'Dream Rent',
    image: marble,
    description: 'Marbleture is a Singapore based company that crafts furnitures using 100% natural marble.',
    seelive: 'https://marbleture.com/',
    seesource: 'https://github.com/Marbleture/v2.git',
  },
  {
    id: 1,
    category: 'Web site',
    tech: 'Ruby on Rails | React | Redux | Postgres',
    title: 'Dream Rent',
    image: dream,
    description: 'Dream Rent is a web application that allows future tenants to book an appointment with the house owner to visit their dream home.',
    seelive: 'https://dream-rent-booking.netlify.app/',
    seesource: 'https://github.com/Shubh-Dev/dream-rent.git',
  },
  {
    id: 2,
    category: 'Web app',
    tech: 'React | redux | CSS',
    title: 'Corona Tracker',
    image: corona,
    description: 'Corona Tracker is a mobile application that allows users to track the number of Covid-19 cases in any country in this world. It fetches data from an open-source API.',
    seelive: 'https://cheery-concha-41a565.netlify.app/',
    seesource: 'https://github.com/Shubh-Dev/corona-info-tracker.git',
  },
  {
    id: 3,
    category: 'Web site',
    tech: 'React | JavaScript | CSS',
    title: 'Math Magicians',
    image: math,
    description: 'Math Magicians is a website for all math lovers. A user can play with numbers and do mathematical calculations.',
    seelive: 'https://sage-nasturtium-ac5b73.netlify.app/',
    seesource: 'https://github.com/Shubh-Dev/react-math-magician-shubh.git',
  },
  {
    id: 4,
    category: 'web site',
    tech: 'React | Redux | CSS',
    title: 'Space Travelers',
    image: space,
    description: 'Space Travelers is a web application that allows users to book rockets and join selected space missions for space travel.',
    seelive: 'https://travelers-hub-rich-shubh.netlify.app/',
    seesource: 'https://github.com/assadounto/space-x.git',
  },
];
export default PortfolioData;
