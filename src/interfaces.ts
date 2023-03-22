import { TraderLevel } from "./enums";

export interface Review {
    name:string;
    stars:number;
    trader:TraderLevel;
    dateJoined:string;
    testimonial:string; 
}