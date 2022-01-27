<?php
declare(strict_types=1);

namespace PuffSmith\Mixture\Dto;

use Edde\Repository\Dto\AbstractOrderByDto;

class MixtureOrderByDto extends AbstractOrderByDto {
	/**
	 * @var bool|null|void
	 */
	public ?bool $mixed;
}
