<?php
declare(strict_types=1);

namespace PuffSmith\User\Dto;

use Edde\Dto\AbstractDto;

class PatchDto extends AbstractDto {
	/** @var string */
	public string $id;
	/** @var string|null */
	public ?string $name;
	/** @var string|null */
	public ?string $email;
	/** @var string|null */
	public ?string $password;
	/** @var string|null */
	public ?string $site;
}
