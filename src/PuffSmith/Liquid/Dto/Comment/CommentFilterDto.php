<?php
declare(strict_types=1);

namespace PuffSmith\Liquid\Dto\Comment;

use Edde\Repository\Dto\AbstractFilterDto;

class CommentFilterDto extends AbstractFilterDto {
	/**
	 * @var string|null|void
	 */
	public ?string $userId;
	/**
	 * @var string|null|void
	 */
	public ?string $liquidId;
}
