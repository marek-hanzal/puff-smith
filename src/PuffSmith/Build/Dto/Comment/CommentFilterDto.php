<?php
declare(strict_types=1);

namespace PuffSmith\Build\Dto\Comment;

use Edde\Repository\Dto\AbstractFilterDto;

class CommentFilterDto extends AbstractFilterDto {
	/**
	 * @var string|null|void
	 */
	public ?string $userId;
	/**
	 * @var string|null|void
	 */
	public ?string $buildId;
	/**
	 * @var string[]|null|void
	 */
	public ?array $atomizerIds;
}
