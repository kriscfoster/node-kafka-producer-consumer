import Kafka from 'node-rdkafka';

const stream = Kafka.Producer.createWriteStream({
  'metadata.broker.list': 'localhost:9092'
}, {}, {
  topic: 'test'
});

stream.on('error', (err) => {
  console.error('Error in our kafka stream');
  console.error(err);
});

function queueRandomMessage() {
  const message = JSON.stringify({ random: Math.random() });
  const success = stream.write(Buffer.from(message));
  if (success) {
    console.log(`message queued (${message})`);
  } else {
    console.log('Too many messages in the queue already..');
  }
}

setInterval(() => {
  queueRandomMessage();
}, 3000);
