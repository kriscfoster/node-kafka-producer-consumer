docker exec -it kafka /opt/bitnami/kafka/bin/kafka-topics.sh \
    --create \
    --bootstrap-server localhost:9092 \
    --replication-factor 1 \
    --partitions 1 \
    --topic test
