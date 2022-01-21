export enum IJobStatus {
	/**
	 * Job has been created and currently no body cares about it (until a scheduler pick it up).
	 *
	 * In a very simple scenario this state could be omitted (thus all jobs could be scheduled for execution).
	 *
	 * In this state, job scheduler cares about the job.
	 */
	JOB_CREATED = 0,
	/**
	 * Job has been scheduled for execution; in this state, job executor cares about this job.
	 */
	JOB_SCHEDULED = 1,
	/**
	 * When a job is physically (you know, physically-virtually) executed, it's a running state.
	 *
	 * This is in job executor's space.
	 */
	JOB_RUNNING = 2,
	/**
	 * Job is done. And it means **done**. If there is some error or whatever, it's saved in a response DTO.
	 *
	 * After this, nobody cares about the job again.
	 *
	 * Ok, nobody at all.
	 */
	JOB_DONE = 3,
	/**
	 * Job execution died. This status is generally used to detect something wrong happened.
	 */
	JOB_FAILURE = 4,
	/**
	 * When a job is cancelled, this state should be used.
	 */
	JOB_INTERRUPTED = 5,
	/**
	 * When a job gets some error/warnings during import.
	 */
	JOB_CHECK = 6,
}

export interface IJobLogMissingValues {
	missing: string[];
}
