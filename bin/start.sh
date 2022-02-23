#!/bin/sh

# start the container stack
docker-compose build
docker-compose up -d

# wait for the service to be ready
while ! curl --fail --silent --head http://localhost:3000; do
  sleep 1
done

# open the browser window
python3 -m webbrowser http://localhost:3000