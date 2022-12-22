import {Features}        from "@/puff-smith/ui/public/Features";
import {Hero}            from "@/puff-smith/ui/public/Hero";
import {Footer}          from "@/puff-smith/ui/public/layout/Footer";
import {Header}          from "@/puff-smith/ui/public/layout/Header";
import {Pricing}         from "@/puff-smith/ui/public/pricing/Pricing";
import {withTranslation} from "@leight/i18n";

export default function Index() {
    return (
        <>
            <Header/>
            <Hero/>
            <Features
                translation={"public.index.features"}
            />
            <Pricing
                translation={"public.index.pricing"}
                prices={[
                    {
                        title:    "basic",
                        price:    5.99,
                        features: [
                            "feat 1",
                            "feat 2",
                            "feat 3",
                            "feat 4",
                            "feat 5",
                        ],
                    },
                    {
                        title:    "pro",
                        price:    12.99,
                        features: [
                            "...prev",
                            "feat 2",
                            "feat 3",
                            "feat 4",
                            "feat 5",
                        ],
                    },
                    {
                        title:    "expert",
                        price:    24.99,
                        features: [
                            "...prev",
                            "feat 2",
                            "feat 3",
                            "feat 4",
                            "feat 5",
                        ],
                    },
                ]}
            />
            <Footer/>
        </>
    );
}

export const getServerSideProps = withTranslation();
