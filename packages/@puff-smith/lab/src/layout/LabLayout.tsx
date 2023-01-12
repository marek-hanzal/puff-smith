import {switchScheme}   from "@leight/mantine";
import {
    Box,
    Button,
    createStyles,
    Group,
    Header
}                       from "@mantine/core";
import {
    SessionOverlay,
    useUnauthenticatedRedirect
}                       from "@puff-smith/ui";
import {signOut}        from "next-auth/react";
import {useTranslation} from "next-i18next";
import Image            from "next/image";
import Link             from "next/link";
import {
    ComponentProps,
    type FC,
    type PropsWithChildren
}                       from "react";

const useStyles = createStyles(theme => ({
    link: {
        display:        "flex",
        alignItems:     "center",
        height:         "75%",
        borderRadius:   theme.radius.md,
        paddingLeft:    theme.spacing.md,
        paddingRight:   theme.spacing.md,
        textDecoration: "none",
        fontWeight:     500,
        fontSize:       theme.fontSizes.sm,
        color:          switchScheme(theme, theme.white, theme.black),
        ...theme.fn.hover({
            backgroundColor: switchScheme(theme, theme.colors.dark[6], theme.colors.red[0]),
        }),
    },
}));

export interface ILabLayoutProps extends PropsWithChildren {
    logo: ComponentProps<typeof Image>["src"];
}

export const LabLayout: FC<ILabLayoutProps> = ({logo, children}) => {
    useUnauthenticatedRedirect();
    const {classes, theme} = useStyles();
    const {t}              = useTranslation("lab");
    return <>
        <SessionOverlay/>
        <Box>
            <Header height={72} px={"md"}>
                <Group position={"apart"} sx={{height: "100%"}}>
                    <Link href={"/"}>
                        <Image width={96} height={138} src={logo} className="mr-3 h-6 sm:h-9" alt="logo"/>
                    </Link>
                    <Group sx={{height: "100%"}} spacing={0}>
                        <Link href={"/"} className={classes.link}>{t("link.home")}</Link>
                    </Group>
                    <Group>
                        <Button
                            variant={"gradient"}
                            gradient={{from: "red.7", to: "orange.7"}}
                            onClick={() => signOut()}
                        >
                            {t("button.sign-out")}
                        </Button>
                    </Group>
                </Group>
            </Header>
        </Box>
        {children}
    </>;
};
