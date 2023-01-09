import {type IWithLocale} from "./api";

export const withTranslation = (namespaces: string[] = ["common"]) => {
    return async ({locale}: IWithLocale) => {
        const {serverSideTranslations} = await import("next-i18next/serverSideTranslations");
        return {
            props: {
                ...(await serverSideTranslations(locale, namespaces)),
            },
        };
    };
};
