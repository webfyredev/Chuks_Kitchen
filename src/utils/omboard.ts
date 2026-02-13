import type React from "react";
import { FaUtensils } from "react-icons/fa";
import { LuTruck } from "react-icons/lu";

interface board {icon : React.ElementType, title : string}
export const omboard:board[] = [
    {
        icon : FaUtensils,
        title : 'Freshly Prepared'
    },
    {
        icon : FaUtensils,
        title : 'Support Local Business'
    },
    {
        icon : LuTruck,
        title : 'Fast & Reliable Delivery'
    }
];