<?php
declare(strict_types=1);

namespace PuffSmith\Vape\Dto\Comment;

use Edde\Repository\Dto\AbstractFilterDto;

class CommentFilterDto extends AbstractFilterDto {
	/**
	 * @var string|null|void
	 */
	public ?string $vapeId;
}