import { createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
root{
  width: 100%
}
body{
  background: #FAFAFA;
  font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif
}
h1{
  font-size: 1.75rem;
  font-weight: 700;
  @media (min-width: 992px) {
    font-size: 2.8rem;
  }
}
` 