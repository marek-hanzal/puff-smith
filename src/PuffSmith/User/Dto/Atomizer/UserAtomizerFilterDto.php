<?php
declare(strict_types=1);

namespace PuffSmith\User\Dto\Atomizer;

use Edde\Repository\Dto\AbstractFilterDto;

class UserAtomizerFilterDto extends AbstractFilterDto {
	/** @var string|null|void */
	public ?string $userId;
}
