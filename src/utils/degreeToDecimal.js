const degreeToDecimal = value => {
  const indexOfDegree = value.indexOf('°');
  const indexOfMinute = value.indexOf('′');
  const indexOfSecond = value.indexOf('″');

  const degree = Number(value.slice(0, indexOfDegree));
  const minute = Number(value.slice(indexOfDegree + 1, indexOfMinute));
  const second = Number(value.slice(indexOfMinute + 1, indexOfSecond));

  return (degree + minute / 60 + second / 3600).toFixed(5);
};

export default degreeToDecimal;
