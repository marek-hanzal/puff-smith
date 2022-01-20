<?php
declare(strict_types=1);

namespace PuffSmith\Api\Shared\User\Endpoint\Dto;

use Edde\Dto\AbstractDto;

class SignUpDto extends AbstractDto {
	/**
	 * @var string
	 */
	public string $email;
	/**
	 * @var string
	 */
	public string $name;
	/**
	 * @var string
	 */
	public string $password;
}
