import Kafka from 'node-rdkafka';
import eventType from '../eventType.js';

var consumer = new Kafka.KafkaConsumer({
  'group.id': 'kafka',
  'metadata.broker.list': 'localhost:9092',
}, {});

consumer.connect();

consumer.on('ready', () => {
  consumer.subscribe(['test']);
  consumer.consume();
}).on('data', function(data) {
  console.log(eventType.fromBuffer(data.value));
});
