#!/usr/bin/env sh
docker-compose down
docker volume rm "mysql_backup"
docker volume create "mysql_backup"
docker run --rm -v "docker-common_mysql:/from" -v "mysql_backup:/to" alpine ash -c "cd /from ; cp -av . /to"
docker-compose up -d
