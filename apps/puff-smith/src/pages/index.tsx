import logo              from "@/puff-smith/assets/logo/logo.svg";
import {withTranslation} from "@leight/i18n";
import {switchScheme}    from "@leight/mantine";
import {
    Box,
    Button,
    createStyles,
    Group,
    Header
}                        from "@mantine/core";
import {useTranslation}  from "next-i18next";
import Image             from "next/image";
import Link              from "next/link";

const useStyles = createStyles(theme => ({
    link: {
        display:        "flex",
        alignItems:     "center",
        height:         "100%",
        paddingLeft:    theme.spacing.md,
        paddingRight:   theme.spacing.md,
        textDecoration: "none",
        fontWeight:     500,
        fontSize:       theme.fontSizes.sm,
        color:          switchScheme(theme, theme.white, theme.black),
        ...theme.fn.hover({
            backgroundColor: switchScheme(theme, theme.colors.dark[6], theme.colors.gray[0]),
        }),
    },
}));

export default function Index() {
    const {classes, theme} = useStyles();
    const {t}              = useTranslation("public");
    return (
        <Box pb={120}>
            <Header height={60} px={"md"}>
                <Group position={"apart"} sx={{height: "100%"}}>
                    <Link href={"/"}>
                        <Image width={96} height={138} src={logo} className="mr-3 h-6 sm:h-9" alt="logo"/>
                    </Link>
                    <Group sx={{height: "100%"}} spacing={0}>
                        <Link href={"/"} className={classes.link}>{t("link.home")}</Link>
                    </Group>
                    <Group>
                        <Button variant={"default"}>Log in</Button>
                        <Button>Sign up</Button>
                    </Group>
                </Group>
            </Header>
        </Box>
    );
}

export const getServerSideProps = withTranslation([
    "common",
    "public"
]);
