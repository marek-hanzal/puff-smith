import {
    type IPriceCardProps,
    PriceCard
}                from "@/puff-smith/ui/public/pricing/PriceCard";
import type {FC} from "react";

export interface IPricingProps {
    translation: string;
    prices: IPriceCardProps[];
}

export const Pricing: FC<IPricingProps> = ({translation, prices}) => {
    return <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{`${translation}.title`}</h2>
                <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">{`${translation}.subtitle`}</p>
            </div>
            <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                {prices.map(price => <PriceCard key={price.title} {...price} />)}
            </div>
        </div>
    </section>;
};
