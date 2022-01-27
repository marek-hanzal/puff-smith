<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Build\Dto;

use Edde\Dto\AbstractDto;

class ActiveDto extends AbstractDto {
	/**
	 * @var string
	 */
	public string $id;
	/***
	 * @var bool
	 */
	public bool $active;
}
