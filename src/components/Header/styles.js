import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80px;
    background: #7159c1;
    color: #fff;
`;

export const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    height: 100%;
`;

export const SubPageLink = styled(Link)`
    text-decoration: none;
    font-size: 16px;
    color: white;
`;