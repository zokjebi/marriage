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
      <ParentName>{person.parents?.[0]?.name}</ParentName>
      <ParentSeparator>·</ParentSeparator>
      <ParentName>{person.parents?.[1]?.name}</ParentName>
      <RelationText>
        의 {person.relation}
      </RelationText>
      <HighlightedName>{person.name}</HighlightedName>
      <Role>{role}</Role>
    </HostDetails>
  );
};

const HighlightedName = styled.strong`
  font-weight: 700;
  font-synthesis: weight;
  font-size: 1.1rem;
  color: #4f4f4f;
`;

const HostContainer = styled.div`
  display: grid;
  grid-template-columns: max-content max-content max-content max-content max-content max-content;
  column-gap: 6px;
  row-gap: 8px;
  justify-content: center;
  align-items: center;
  font-family: HSSanTokki20-Regular, serif;
`;

const HostDetails = styled.div`
  display: contents;
`;

const ParentName = styled.span`
  white-space: nowrap;
  text-align: left;
`;

const ParentSeparator = styled.span`
  text-align: center;
`;

const RelationText = styled.span`
  white-space: nowrap;
  line-height: 26px;
`;

const Role = styled.span`
  white-space: nowrap;
  text-align: left;
`;
