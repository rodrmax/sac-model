import queryString from "query-string";

const BrandEnum = () => {
  const marca_enum = {
    p: "p",
    ex: "ex",
  };

  return marca_enum;
};

export default BrandEnum;

export const BrandQueryString = (history) => {
  //Get value query string
  const { marca } = queryString.parse(history.location.search);
  
  console.log('Util Brand ==> ', marca)
  return marca;
};
