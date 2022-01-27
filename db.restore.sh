#!/usr/bin/env sh
docker-compose down
#docker volume rm docker-common_mysql
#docker volume create docker-common_mysql
docker run --rm -v "mysql_backup:/from" -v "docker-common_mysql:/to" alpine ash -c "cd /from ; cp -av . /to"
docker-compose up -d
