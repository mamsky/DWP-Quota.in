export const providerCard = (number: string) => {
  let normalize = number;

  if (number.startsWith("+62")) {
    normalize = "0" + number.slice(3);
  } else if (number.startsWith("62")) {
    normalize = "0" + number.slice(2);
  }

  const telkomsel = [
    "0811",
    "0812",
    "0813",
    "0821",
    "0822",
    "0852",
    "0853",
    "0823",
  ];
  const indosat = ["0814", "0815", "0816", "0855", "0856", "0857", "0858"];
  const xl = ["0817", "0818", "0819", "0859", "0877", "0878"];
  const tri = ["0895", "0896", "0897", "0898", "0899"];
  const smartfren = [
    "0881",
    "0882",
    "0883",
    "0884",
    "0885",
    "0886",
    "0887",
    "0888",
    "0889",
  ];

  const prefix = normalize.slice(0, 4);
  let provider = "";

  if (telkomsel.includes(prefix)) {
    provider = "Telkomsel";
  } else if (indosat.includes(prefix)) {
    provider = "Indosat";
  } else if (xl.includes(prefix)) {
    provider = "Xl";
  } else if (tri.includes(prefix)) {
    provider = "Tri";
  } else if (smartfren.includes(prefix)) {
    provider = "Smartfren";
  } else {
    provider = "";
  }

  return provider;
};
