# node-kafka-producer-consumer

Created for [this YouTube tutorial](https://www.youtube.com/watch?v=EiDLKECLcZw).

A kafka producer/consumer proof of concept using node.

![Screen Shot 2021-04-20 at 09 56 47](https://user-images.githubusercontent.com/17026751/115368228-cbcd0000-a1be-11eb-9d17-6ada1ad5ff98.png)

## Prerequisites

* `node`
* `docker`

## Running locally

* `npm install` - installs npm dependencies.
* `./scripts/start-kafka.sh` - starts kafka inside docker container.
* `./scripts/create-topic.sh` - creates kafka topic.
* `npm run start:producer` - starts producer.
* `npm run start:consumer` - starts consumer.
