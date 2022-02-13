<?php
declare(strict_types=1);

namespace PuffSmith\Api\Shared\User\Endpoint;

use Edde\Password\PasswordServiceTrait;
use Edde\Rest\Endpoint\AbstractMutationEndpoint;
use Edde\Session\Dto\SessionDto;
use Edde\Session\SessionMapperTrait;
use Edde\Session\SessionTrait;
use Edde\User\Mapper\CurrentUserMapperTrait;
use Edde\User\Repository\UserRepositoryTrait;
use PuffSmith\Api\Shared\User\Endpoint\Dto\SignUpDto;
use PuffSmith\User\Dto\CreateDto;

class SignUpEndpoint extends AbstractMutationEndpoint {
	use UserRepositoryTrait;
	use SessionTrait;
	use CurrentUserMapperTrait;
	use SessionMapperTrait;
	use PasswordServiceTrait;

	public function post(SignUpDto $signUpDto): SessionDto {
		$user = $this->userRepository->create($this->dtoService->fromArray(CreateDto::class, [
			'name'     => $signUpDto->name,
			'email'    => $signUpDto->email,
			'password' => $this->passwordService->hash($signUpDto->password),
			'site'     => 'lab',
		]));
		$this->session->set('user', $user->id);
		return $this->sessionMapper->item($this->currentUserMapper->item($user));
	}
}
