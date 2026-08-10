import { ReactNode, useState } from 'react';
import styled from '@emotion/styled';
import ExpandMore from '@/assets/icons/expand_more.svg?react';

interface IAccordionProps {
  title: string;
  children: ReactNode;
}
const Accordion = ({ title, children }: IAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionWrapper>
      <AccordionHeader isActive={isOpen} onClick={toggleAccordion}>
        <p>{title}</p>

        <span>
          <ExpandMore fill="#e88ca6" />
        </span>
      </AccordionHeader>

      <AccordionContent isOpen={isOpen}>
        {children}
      </AccordionContent>
    </AccordionWrapper>
  );
};

export default Accordion;

const AccordionWrapper = styled.div`
  font-family: HSSanTokki20-Regular, serif;
  border: 1px solid #e6ece1;
  margin-bottom: 20px;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
`;

const AccordionHeader = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #e6ece1;
  padding: 0 15px;
  cursor: pointer;
  & > p {
    color: #44484d;
  }
  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    transition: all 0.3s ease;
    transform: ${(props) => (props.isActive ? 'rotate(180deg)' : undefined)};
  }
`;

const AccordionContent = styled.div<{ isOpen: boolean }>`
  font-size: 14px;
  text-align: justify;
  background-color: #ffffff;
  overflow: hidden;
  padding: ${({ isOpen }) => (isOpen ? '10px 20px' : '0 20px')};
  max-height: ${({ isOpen }) => (isOpen ? '1000px' : '0')}; /* arbitrary large number for animation */
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: max-height 0.5s ease-out, opacity 0.5s ease-out, padding 0.5s ease-out;
`;
