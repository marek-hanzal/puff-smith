<?php
declare(strict_types=1);

namespace PuffSmith\Atomizer\Dto\Comment;

use Edde\Dto\AbstractDto;

class CreateDto extends AbstractDto {
	/**
	 * @var string
	 */
	public string $atomizerId;
	/**
	 * @var string
	 */
	public string $comment;
}
