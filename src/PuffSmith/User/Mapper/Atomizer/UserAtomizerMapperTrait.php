<?php
declare(strict_types=1);

namespace PuffSmith\User\Mapper\Atomizer;

trait UserAtomizerMapperTrait {
	protected UserAtomizerMapper $userAtomizerMapper;

	/**
	 * @Inject
	 *
	 * @param UserAtomizerMapper $userAtomizerMapper
	 */
	public function setUserAtomizerMapper(UserAtomizerMapper $userAtomizerMapper): void {
		$this->userAtomizerMapper = $userAtomizerMapper;
	}
}
