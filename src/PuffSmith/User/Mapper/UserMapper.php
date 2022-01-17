<?php
declare(strict_types=1);

namespace PuffSmith\User\Mapper;

use Dibi\Exception;
use Edde\Mapper\Exception\ItemException;
use Edde\Mapper\Exception\SkipException;
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
	 * @throws Exception
	 * @throws ItemException
	 * @throws JsonException
	 * @throws SkipException
	 */
	public function toUser($item, array $params = []): array {
		return [
			'id'       => $item->recno,
			'name'     => $item->first_name . ' ' . $item->last_name,
			'email'    => $item->email,
			'settings' => $item->settings ? Json::decode($item->settings) : null,
		];
	}
}
