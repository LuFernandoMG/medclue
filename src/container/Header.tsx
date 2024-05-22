import styled from "styled-components";
import { Button, Layout } from "antd";

const { Header: AntHeader } = Layout;

function Header() {
  return (
    <StyledHeader>
      <h1>MedClue</h1>
      <Button type="primary">Sign up</Button>
    </StyledHeader>
  );
}

const StyledHeader = styled(AntHeader)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  color: white;
`;

export default Header;
