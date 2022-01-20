<?php
declare(strict_types=1);

namespace PuffSmith\User\Dto;

use Edde\Repository\Dto\AbstractFilterDto;

class UserFilterDto extends AbstractFilterDto {
	/** @var string[]|void */
	public $sites;
	/** @var string|void */
	public $email;
	/** @var string|void */
	public $name;
}
