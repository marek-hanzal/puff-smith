<?php
declare(strict_types=1);

namespace PuffSmith\User\Dto\Create;

use Edde\Dto\AbstractDto;

class CreateDto extends AbstractDto {
	/** @var string */
	public string $name;
	/** @var string */
	public string $email;
	/** @var string */
	public string $password;
	/** @var string */
	public string $site;
}
