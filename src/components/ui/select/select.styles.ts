import styled from "styled-components";
import Flex from "../flex";

export const StyledFlex = styled(Flex)`
  width: 300px;
  align-items: flex-start;
  gap: 10px;

  @media (max-width: 830px) {
    width: 100%;
  }
`;

export const StyledSelect = styled.div`
  position: relative;
  width: 300px;

  @media (max-width: 830px) {
    width: 100%;
  }
`;

export const StyledSelectValue = styled.div`
  padding: 0.6rem 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: #fff;
  color: #8800f0;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-itens: center;
  justify-content: space-between;
  text-transform: lowercase;

  &:hover {
    border-color: #8800f0;
  }
`;

export const StyledOptions = styled.ul`
  position: absolute;
  top: 100%;
  width: 300px;
  margin: 0;
  margin-top: -10px;
  padding: 0;
  padding-top: 10px;
  list-style: none;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  background-color: #fff;
  overflow-y: auto;
  z-index: 1000;

  @media (max-width: 830px) {
    width: 100%;
  }
`;

export const StyledOption = styled.li`
  padding: 10px;
  font-size: 12px;
  color: #000;
  cursor: pointer;
  text-align: start;
  transition: background-color 0.3s ease, transform 0.2s ease;
  text-transform: lowercase;

  &:hover {
    background-color: #8800f0;
    color: #fff;
  }
`;

export const SkeletonSelect = styled(StyledSelect)`
  pointer-events: none;
  padding: 0px;
  & > span {
    display: block;
    width: 100%;
    height: 100%;
  }
`;
