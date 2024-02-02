console.log('Welcome to Holberton School, what is your name?');

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  const readInput = process.stdin.read();
  if (readInput) process.stdout.write(`Your name is: ${readInput}`);
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
