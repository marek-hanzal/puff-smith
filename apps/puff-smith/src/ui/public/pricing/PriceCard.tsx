import type {FC} from "react";
import {TiTick}  from "react-icons/ti";

export interface IPriceCardProps {
    title: string;
    price: number;
    features: string[];
}

export const PriceCard: FC<IPriceCardProps> = ({title, price, features}) => {
    return <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-primary-600 shadow dark:border-primary-600 xl:p-8 dark:bg-gray-800 dark:text-white">
        <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Relevant for multiple users, extended & premium support.</p>
        <div className="flex justify-center items-baseline my-8">
            <span className="mr-2 text-5xl font-extrabold">${price}</span>
            <span className="text-gray-500 dark:text-gray-400">/month</span>
        </div>
        <ul role="list" className="mb-8 space-y-4 text-left">
            {features.map(feature => <li key={feature} className="flex items-center space-x-3">
                <TiTick className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"/>
                <span>{feature}</span>
            </li>)}
        </ul>
        <a href="#" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Get started</a>
    </div>;
};
