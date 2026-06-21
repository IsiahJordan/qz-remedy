#!/bin/bash

echo "~~~ Welcome to Qz-Remedy!!! ~~~"

if [[ "$1" == "run" ]]; then 
  echo "building client docker image"
  cd client && docker build -t qz-remedy-client .
  echo "running client docker container"
  docker run -d -p 5000:5000 --name client qz-remedy-client
  cd ..
  
  echo "building server docker image"
  cd server && docker build -t qz-remedy-server .
  echo "running server docker container"
  docker run -d -p 3000:3000 --env-file .env --name server qz-remedy-server
  echo "successful container background run"
  cd ..
elif [[ "$1" == "stop" ]]; then
  echo "stopping and removing containers"
  docker stop client && docker stop server
  echo "removing client and server containers"
  docker rm client && docker rm server
  echo "successful stopage"
else
  echo "cannot identify argument"
fi 
