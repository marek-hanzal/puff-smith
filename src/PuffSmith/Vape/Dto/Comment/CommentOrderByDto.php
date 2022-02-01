<?php
declare(strict_types=1);

namespace PuffSmith\Vape\Dto\Comment;

use Edde\Repository\Dto\AbstractOrderByDto;

class CommentOrderByDto extends AbstractOrderByDto {
	/**
	 * @var bool|null|void
	 */
	public ?bool $stamp;
}
