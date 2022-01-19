<?php
declare(strict_types=1);

namespace PuffSmith\User\Mapper;

use Edde\User\Mapper\AbstractUserMapper;
use Nette\Utils\Json;
use Nette\Utils\JsonException;

class UserMapper extends AbstractUserMapper {
	/**
	 * @param       $item
	 * @param array $params
	 *
	 * @return array
	 *
	 * @throws JsonException
	 */
	public function toUser($item, array $params = []): array {
		return [
			'id'       => $item->id,
			'name'     => $item->name,
			'email'    => $item->email,
			'site'     => $item->site,
			'settings' => $item->settings ? Json::decode($item->settings) : null,
		];
	}
}
