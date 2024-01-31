function calculateNumber (type, a, b) {
  const aRounded = Math.round(a);
  const bRounded = Math.round(b);
  switch(type) {
    case 'SUM':
      return aRounded + bRounded;
    case 'SUBTRACT':
      return aRounded - bRounded;
    case 'DIVIDE':
      if (bRounded === 0) {
        return 'Error';
      }
      return aRounded / bRounded;
  }
}

module.exports = calculateNumber
