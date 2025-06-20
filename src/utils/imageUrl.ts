export const imageUrl = (provider: string) => {
  let imageUrl = "";
  if (provider == "Telkomsel") {
    imageUrl =
      "https://blob.cloudcomputing.id/images/6abee70e-c925-43d7-b2ea-bf1e66b90f73/logo-telkomsel-l-min.jpg";
  } else if (provider == "Indosat") {
    imageUrl =
      "https://upload.wikimedia.org/wikipedia/commons/0/08/Indosat_Ooredoo_logo_%282019%29.svg";
  } else if (provider == "Xl") {
    imageUrl =
      "https://e7.pngegg.com/pngimages/461/226/png-clipart-xl-axiata-axiata-group-telecommunications-graphics-logo-logo-telkomsel-angle-logo-thumbnail.png";
  } else if (provider == "Tri") {
    imageUrl =
      "https://www.kanalkalimantan.com/wp-content/uploads/2018/12/Tri-3.jpg";
  } else if (provider == "Smartfren") {
    imageUrl =
      "https://seoindonesia.co.id/wp-content/uploads/2018/12/Smartfren-Logo-Header.png";
  } else {
    imageUrl =
      "https://pulsaseluler.com/blog/wp-content/uploads/Kode-Nomer-Kartu-OPERATOR-Seluler-Indonesia.png";
  }
  return imageUrl;
};
