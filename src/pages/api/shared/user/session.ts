import {IFetchEndpoint, ISession} from "@leight-core/common";

export const SessionEndpoint: IFetchEndpoint<ISession | null> = async (req, res) => {
	res.status(200).json(null);
}

export default SessionEndpoint;
