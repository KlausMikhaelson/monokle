import {Input} from 'antd';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const List = styled.ol`
  height: 100%;
  list-style-type: none;
  padding: 0;
  padding-bottom: 20px;
  overflow-y: auto;
  margin: 0;
`;

export const RegisterContainer = styled.div`
  padding: 24px;
`;

export const RegisterInput = styled(Input)`
  margin-bottom: 8px;
`;
