import styled from 'styled-components';

export const CardWrapper = styled.div`
  flex-basis: calc((100% - 4 * 24px) / 5);
`;

export const Gallery = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 48px 24px;
`;

export const ImageItem = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const ImageGalleryItemImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const Info = styled.div`
  border: 1px solid #e7e9fc;
  padding: 8px;
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
  color: #2e2f42;
`;
