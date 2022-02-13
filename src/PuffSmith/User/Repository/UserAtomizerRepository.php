<?php
declare(strict_types=1);

namespace PuffSmith\User\Repository;

use Edde\Repository\AbstractRepository;
use Edde\Repository\IRepository;

class UserAtomizerRepository extends AbstractRepository {
	public function __construct() {
		parent::__construct(['stamp' => IRepository::ORDER_DESC]);
	}
}
