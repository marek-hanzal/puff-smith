<?php
declare(strict_types=1);

namespace PuffSmith\Mixture\Dto\Comment;

use Edde\Repository\Dto\AbstractFilterDto;

class CommentFilterDto extends AbstractFilterDto {
	/**
	 * @var string|null|void
	 */
	public ?string $mixtureId;
	/**
	 * @var string|null|void
	 */
	public ?string $liquidId;
}
