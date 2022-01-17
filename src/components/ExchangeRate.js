const ExhcangeRate = ({
  exhcangeRate,
  chosenPrimaryCurrency,
  chosenSecondaryCurrency,
}) => {
  return (
    <div className="exchange-rate">
      <h3>Exchange Rate</h3>
      <h1>{exhcangeRate}</h1>
      <p>
        {chosenPrimaryCurrency} to {chosenSecondaryCurrency}
      </p>
    </div>
  );
};

export default ExhcangeRate;
