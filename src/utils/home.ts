import image1 from '../images/home/pop_cat1.png'
import image2 from '../images/home/pop_cat2.png'
import image3 from '../images/home/pop_cat3.png'
import image4 from '../images/home/pop_cat4.png'
import image5 from '../images/home/pop_cat2.png'
import image6 from '../images/home/pop_cat3.png'
import chImage1 from '../images/home/ch_special1.png'
import chImage2 from '../images/home/ch_special2.png'
import chImage3 from '../images/home/ch_special3.png'
import chImage4 from '../images/home/ch_special4.png'

interface cats {image : string, title:string}
export const popular_categories:cats[] = [
    {
        image : image1,
        title : 'Jollof Delights'
    },
    {
        image : image2,
        title : 'Swallow & Soups'
    },
    {
        image : image3,
        title : 'Grills & BBQ'
    },
    {
        image : image4,
        title : 'Sweat Treats'
    },
    {
        image : image5,
        title : 'Jollof Delights'
    },
    {
        image : image6,
        title : 'Jollof Delights'
    }
];

interface special {image : string, title : string, text:string, price:number}
export const chef_special:special[] = [
    {
        image : chImage1,
        title : 'Spicy Tilapia Pepper Soup',
        text : 'A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy',
        price : 3500
    },
    {
        image : chImage2,
        title : 'Jollof Rice & Fried Chicken',
        text : 'Our signature Jollof rice, cooked to perfection, served with sufficient friend chicken',
        price : 3500
    },
    {
        image : chImage2,
        title : 'Jollof Rice & Fried Chicken',
        text : 'Our signature Jollof rice, cooked to perfection, served with sufficient friend chicken',
        price : 3500
    },
    {
        image : chImage2,
        title : 'Jollof Rice & Fried Chicken',
        text : 'Our signature Jollof rice, cooked to perfection, served with sufficient friend chicken',
        price : 3500
    },
    {
        image : chImage3,
        title : 'Jollof Rice & Fried Chicken',
        text : 'Our signature Jollof rice, cooked to perfection, served with sufficient friend chicken',
        price : 3500

    },
    {
        image : chImage4,
        title : 'Egusi Soup & Pounded Yam',
        text : 'Rich and savory Egusi soup with assorted meats, paired with freshly pounded yam.',
        price : 3500
    }
]