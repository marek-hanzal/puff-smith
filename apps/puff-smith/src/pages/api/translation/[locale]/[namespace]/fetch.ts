import type {NextApiHandler} from "next";

export default (async (req, res) => {
    res.end(JSON.stringify({
        cs: {
            translation: {
                "public.index.features.title": "foo",
            },
        },
    }));
}) as NextApiHandler;
