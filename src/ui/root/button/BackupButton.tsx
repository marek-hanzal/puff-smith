import {BACKUP_JOB}        from "@/puff-smith/jobs/backup/interface";
import {
	IJobButtonProps,
	JobButton
}                          from "@/puff-smith/ui/shared/button/JobButton";
import {useBackupMutation} from "@/sdk/api/root/backup";
import {FC}                from "react";

export interface IBackupButtonProps extends Partial<IJobButtonProps<any>> {
}

export const BackupButton: FC<IBackupButtonProps> = props => {
	return <JobButton
		translation={"root.backup"}
		scheduler={useBackupMutation()}
		schedule={{}}
		filter={{
			name: {
				in: [BACKUP_JOB],
			},
		}}
		{...props}
	/>;
};
