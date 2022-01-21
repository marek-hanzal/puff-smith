<?php
declare(strict_types=1);

namespace PuffSmith\Api\Root\User\Endpoint;

use Dibi\Exception;
use Edde\Bridge\User\UserDto;
use Edde\Mapper\Exception\ItemException;
use Edde\Mapper\Exception\SkipException;
use Edde\Repository\Exception\RepositoryException;
use Edde\Rest\Endpoint\AbstractPatchEndpoint;
use Edde\User\Mapper\UserMapperTrait;
use Edde\User\Repository\UserRepositoryTrait;
use PuffSmith\User\Dto\Patch\PatchDto;
use Throwable;

/**
 * @description An ability to alter an user.
 */
class PatchEndpoint extends AbstractPatchEndpoint {
	use UserRepositoryTrait;
	use UserMapperTrait;

	/**
	 * @param PatchDto $patchDto
	 *
	 * @return UserDto
	 *
	 * @throws Exception
	 * @throws ItemException
	 * @throws SkipException
	 * @throws RepositoryException
	 * @throws Throwable
	 */
	public function patch(PatchDto $patchDto): UserDto {
		return $this->userMapper->item($this->userRepository->update($patchDto));
	}
}
