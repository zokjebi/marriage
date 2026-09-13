import React from 'react';
import styled from '@emotion/styled';
import data from 'data.json';
import { BrideAndGroom } from '@/types/data.ts';

const Host = () => {
  const { groom, bride } = data.greeting.host;
  return (
    <>
      <HostContainer>
        <HostInfo person={groom} role="신랑" />
        <HostInfo person={bride} role="신부" />
      </HostContainer>
    </>
  );
};

export default Host;

const HostInfo = ({ person, role }: { person: BrideAndGroom; role: '신랑' | '신부' }) => {
  return (
    <HostDetails>
      {person.parents && (
        <>
          {person.parents.map((parent, index) => (
            <React.Fragment key={index}>
              {index > 0 && ' · '}
              {parent.name}
            </React.Fragment>
          ))}
        </>
      )}
      <RelationText>
        <div>의</div>
        <Relation>{person.relation}</Relation>
      </RelationText>
      <HighlightedName>{person.name}</HighlightedName>
      <span>{role}</span>
    </HostDetails>
  );
};

const HighlightedName = styled.strong`
  font-weight: 700;
  font-synthesis: weight;
  font-size: 1.1rem;
  color: #4f4f4f;
  margin-right: 5px;
`;

const HostContainer = styled.div`
  gap: 8px;
  font-family: HSSanTokki20-Regular, serif;
`;

const HostDetails = styled.div`
  padding: 0 55px;
  justify-content: center;
  white-space: nowrap;
  display: flex;
  gap: 6px;
  text-align: center;
  align-items: center;
  font-weight: 400;
`;

const RelationText = styled.div`
  font-style: normal;
  line-height: 26px;
  width: 50px;
  display: flex;
  gap: 6px;
`;

const Relation = styled.div`
  width: inherit;
`;
