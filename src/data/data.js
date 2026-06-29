
import sunsetBeach from '../assets/review/Sunset Beach.jpg'
import City_Lights from '../assets/review/City Lights.jpg'
import Countryside_Escape from '../assets/review/Countryside Escape.jpg'
import DesertDunes from '../assets/review/Desert Dunes.jpg'
import Frozen_Lake from '../assets/review/Frozen Lake.jpg'
import Historic_Castle from '../assets/review/Historic Castle.jpg'
import Island_Paradise from '../assets/review/Island Paradise.jpg'
import Lavender_Fields from '../assets/review/Lavender Fields.jpg'
import Mountain_Peak from '../assets/review/Mountain Peak.jpg'
import Rainforest_Trails from '../assets/review/Rainforest Trails.jpg'
import icon1 from '../assets/shorImage/alimentias-01.svg'
import icon2 from '../assets/shorImage/biovela-70x70.png'
import icon3 from '../assets/shorImage/biovela-70x70.png'
import icon4 from '../assets/shorImage/candelas-70x70.png'
import icon5 from '../assets/shorImage/delicat-01.svg'
import icon6 from '../assets/shorImage/logo_bazara-01.svg'
import icon7 from '../assets/shorImage/nature-blessed-70x70.png'
import icon8 from '../assets/shorImage/sprehe-70x70.png'
import icon9 from '../assets/shorImage/biovela-70x70.png'
import icon10 from '../assets/shorImage/biovela-70x70.png'
import user1 from '../assets/user/alimmargh-50x50.jpg'
import user2 from '../assets/user/Andrius-Kvaocevicius-50x50.jpg'
import user3 from '../assets/user/carlperez-50x50.jpg'
import user4 from '../assets/user/henn-m-50x50.jpg'
import user5 from '../assets/user/nicoler-50x50.jpg'
import user6 from '../assets/user/nuria-50x50.jpg'
import user7 from '../assets/user/petern-1-50x50.jpg'
import user8 from '../assets/user/Stavros-Intzes-50x50.jpg'
import user9 from '../assets/user/henn-m-50x50.jpg'
import user10 from '../assets/user/Andrius-Kvaocevicius-50x50.jpg'

const data = [
    {
        Image: sunsetBeach,
        shortImage: icon1,
        placeName: "Sunset Beach",
        description:
            "Sunset Beach offers a breathtaking coastal escape where the sky transforms into a vivid painting each evening. Known for its golden sands and calming waves, it's the perfect destination for photographers and romantics. Alice Johnson, a talented photographer from California, captures the beach’s golden hour beauty and shares the serenity found at the edge of the Pacific.",
        User: {
            userName: "Alice Johnson",
            position: "export Department ",
            placeName: "California",
            image:user1,
        },
    },
    {
        Image: City_Lights,
        shortImage: icon2,
        placeName: "Mountain Peak",
        description:
            "Rising majestically above the clouds, Mountain Peak invites hikers and nature lovers to explore its scenic trails and breathe in the crisp alpine air. The location is ideal for sunrise hikes and peaceful solitude. Brian Lee, a dedicated hiker from Colorado, considers this peak a spiritual journey and a place where adventure meets clarity.",
        User: {
            userName: "Brian Lee",
            position: "export Department ",
            placeName: "Colorado",
            image:user2
        },
    },
    {
        Image: Countryside_Escape,
        shortImage: icon3,
        placeName: "City Lights",
        description:
            "City Lights sparkles with vibrant nightlife, towering skyscrapers, and a never-ending pulse of urban life. Whether you're walking down neon-lit streets or enjoying rooftop views, the city never sleeps. Carla Mendes, a travel blogger from New York, thrives in this electric atmosphere, discovering its hidden cafés, art spots, and unforgettable energy.",
        User: {
            userName: "Carla Mendes",
            position: "Travel Blogger export sales",
            placeName: "New York",
            image:user3
        },
    },
    {
        Image: DesertDunes,
        shortImage: icon4,
        placeName: "Desert Dunes",
        description:
            "Desert Dunes is a vast expanse of golden waves under an endless sky. By day, it offers surreal, shimmering landscapes, and by night, a stargazer's paradise. David Kumar, an intrepid explorer from Nevada, finds adventure in the dunes’ silence and beauty, uncovering stories hidden in the sands and stars.",
        User: {
            userName: "David Kumar",
            position: "Explorer sales Consultant",
            placeName: "Nevada",
            image:user4 
        },
    },
    {
        Image: Frozen_Lake,
        shortImage: icon5,
        placeName: "Rainforest Trails",
        description:
            "Rainforest Trails is a lush, living world teeming with exotic wildlife and vibrant plant life. Every step leads deeper into nature’s secrets. Elena Rivera, a passionate biologist from the Amazon, spends her days studying the ecosystem’s rare species and advocating for its protection through immersive exploration.",
        User: {
            userName: "Elena Rivera",
            position: "sales Consultant",
            placeName: "Amazon",
            image:user5  
        },
    },
    {
        Image: Historic_Castle,
        shortImage: icon6,
        placeName: "Frozen Lake",
        description:
            "Frozen Lake is a tranquil, icy haven surrounded by snow-covered peaks and whispering winds. Its surface mirrors the sky in winter’s stillness. Frank Nguyen, a skater from Alaska, glides across its glassy surface, feeling both freedom and peace in nature’s quiet masterpiece.",
        User: {
            userName: "Frank Nguyen",
            position: "web Developer",
            placeName: "Alaska",
            image:user6 
        },
    },
    {
        Image: Island_Paradise,
        shortImage: icon7,
        placeName: "Historic Castle",
        description:
            "Historic Castle stands tall with stone walls and ancient towers that whisper tales from the past. Stepping inside feels like entering another era. Grace O’Neil, a historian from Scotland, guides visitors through its medieval halls, bringing history to life with stories of kings, battles, and legacy.",
        User: {
            userName: "Grace O’Neil",
            position: "App Developer",
            placeName: "Scotland",
            image:user8 
        },
    },
    {
        Image: Lavender_Fields,
        shortImage: icon8,
        placeName: "Lavender Fields",
        description:
            "Lavender Fields is a fragrant sea of purple that stretches endlessly beneath the summer sun. It's a sensory experience of color, scent, and calm. Hiro Tanaka, a botanist from France, documents the blooming cycles and biodiversity, creating a space where science meets natural beauty.",
        User: {
            userName: "Hiro Tanaka",
            position: "Buisness Manager",
            placeName: "France",
            image:user9 
        },
    },
    {
        Image: Mountain_Peak,
        shortImage: icon9,
        placeName: "Island Paradise",
        description:
            "Island Paradise is a tropical dream come true, with crystal-clear waters, swaying palms, and endless white-sand beaches. A sanctuary for relaxation and exploration. Isla Patel, a travel vlogger from the Maldives, shares the island’s charm with the world, highlighting its vibrant marine life and hidden coves.",
        User: {
            userName: "Isla Patel",
            position: "Project manager",
            placeName: "Maldives",
            image:user10 
        },
    },
    {
        Image: Rainforest_Trails,
        shortImage: icon10,
        placeName: "Countryside Escape",
        description:
            "Countryside Escape offers serene, open landscapes filled with green fields, rustic farms, and peaceful skies. Its a place where time slows down and nature leads the way. Jack Thompson, a farmer from",
        User: {
            userName: "Isla Patel",
            position: "Senior Qa Manager",
            placeName: "Maldives",
            image:user5 
        },
    }
]
export default data 