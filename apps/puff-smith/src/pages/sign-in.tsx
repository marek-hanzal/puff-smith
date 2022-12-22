import {withTranslation} from "@leight/i18n";
import {
    Button,
    Divider,
    Group,
    Paper,
    PasswordInput,
    Stack,
    Text,
    TextInput
}                        from "@mantine/core";
import {useForm}         from "@mantine/form";

export default function SignIn() {
    const form = useForm({
        initialValues: {
            email:    "",
            name:     "",
            password: "",
            terms:    true,
        },

        validate: {
            email:    val => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
            password: val => (val.length <= 6 ? "Password should include at least 6 characters" : null),
        },
    });
    return (
        <Paper radius={"md"} p={"xl"} withBorder>
            <Text size={"lg"} weight={500}>
                Welcome to Mantine, sing in with
            </Text>
            <Group grow mb={"md"} mt={"md"}>
                Goo, Git, ...
                {/*<GoogleButton radius="xl">Google</GoogleButton>*/}
                {/*<TwitterButton radius="xl">Twitter</TwitterButton>*/}
            </Group>
            <Divider label={"Or continue with email"} labelPosition="center" my="lg"/>
            <form onSubmit={form.onSubmit(() => {
                console.log("yaay!");
            })}>
                <Stack>
                    <TextInput
                        required
                        label={"Email"}
                        placeholder={"hello@mantine.dev"}
                        value={form.values.email}
                        onChange={(event) => form.setFieldValue("email", event.currentTarget.value)}
                        error={form.errors.email && "Invalid email"}
                    />
                    <PasswordInput
                        required
                        label={"Password"}
                        placeholder={"Your password"}
                        value={form.values.password}
                        onChange={event => form.setFieldValue("password", event.currentTarget.value)}
                        error={form.errors.password && "Password should include at least 6 characters"}
                    />
                </Stack>
                <Group position={"apart"} mt={"xl"}>
                    <Button type={"submit"}>Sign in</Button>
                </Group>
            </form>
        </Paper>
    );
}

export const getServerSideProps = withTranslation();
