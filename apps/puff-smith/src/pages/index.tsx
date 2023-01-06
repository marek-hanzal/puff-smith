import logo              from "@/puff-smith/assets/logo/logo.svg";
import {withTranslation} from "@leight/i18n";
import {
    Features,
    Footer,
    Header,
    Hero,
    Pricing
}                        from "@puff-smith/public";

export default function Index() {
    return (
        <>
            <Header logo={logo}/>
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
