import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1024px;
  align-items: center;
  margin: 32px;
`;

const Container = ({ children }: Props) => (
  <ContainerWrapper>{children}</ContainerWrapper>
);
export default Container;
