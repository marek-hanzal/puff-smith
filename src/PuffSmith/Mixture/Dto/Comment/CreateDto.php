<?php
declare(strict_types=1);

namespace PuffSmith\Mixture\Dto\Comment;

use Edde\Dto\AbstractDto;

class CreateDto extends AbstractDto {
	/**
	 * @var string
	 */
	public string $mixtureId;
	/**
	 * @var string
	 */
	public string $comment;
}
