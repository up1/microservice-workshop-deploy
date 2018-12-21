#!/bin/sh
set -e

until $(curl --output /dev/null --silent --head --fail http://eureka:8761); do
  >&2 echo "Euraka is unavailable - sleeping"
  sleep 1
done

>&2 echo "Euraka is up - executing command"
exec "$@"