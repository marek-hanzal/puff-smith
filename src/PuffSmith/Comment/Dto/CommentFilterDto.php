<?php
declare(strict_types=1);

namespace PuffSmith\Comment\Dto;

use Edde\Repository\Dto\AbstractFilterDto;

class CommentFilterDto extends AbstractFilterDto {
	/**
	 * @var string|null|void
	 */
	public ?string $userId;
}
