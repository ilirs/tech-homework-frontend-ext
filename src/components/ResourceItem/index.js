import PropTypes from 'prop-types';
import styled from 'styled-components';

// List item sizes
const sizes = {
  sm: 2.5,
  md: 3.5,
  lg: 4.5,
};

// Image sizes
const imageSizes = {
  sm: 24,
  md: 40,
  lg: 56,
};

// Icon sizes
const iconSizes = {
  sm: 16,
  md: 24,
  lg: 24,
};

const StyledContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  cursor: pointer;
  min-height: ${({ size }) => sizes[size]}rem;
  padding-left: ${({ size }) => (size === 'sm' ? 8 : 12)}px;
  padding-right: ${({ size }) =>
    size === 'sm' ? 8 : size === 'md' ? 12 : 16}px;

  > *:not(:last-child) {
    margin-right: 8px;
  }

  > *:first-child {
    margin-right: ${({ size }) => (size === 'lg' ? 16 : 8)}px;
  }
`;

const StyledListItem = styled.div`
  display: flex;
  width: 100%;

  &:hover {
    background-color: #f2f2f2;
  }
`;

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const StyledTitle = styled.span`
  display: inline-block;
  line-height: 1.25;
  font-size: ${(p) => p.size}px;
  font-weight: 600;
  color: #333333;
`;

const StyledDescription = styled.span`
  display: inline-block;
  line-height: 1.25;
  font-size: 14px;
  color: #737373;
`;

const StyledImage = styled.div`
  display: flex;
  align-items: center;
`;

const ResourceItem = ({
  children,
  className,
  size = 'sm',
  title,
  description,
  imageUrl,
  iconUrl,
  onClick,
}) => (
  <StyledListItem className={className} onClick={onClick}>
    <StyledContent size={size}>
      {imageUrl && (
        <StyledImage>
          <img
            src={imageUrl}
            width={imageSizes[size]}
            height={imageSizes[size]}
            alt="img"
          />
        </StyledImage>
      )}
      <StyledText>
        <StyledTitle size={size === 'lg' ? 18 : 14}>{title}</StyledTitle>
        {description && size !== 'sm' && (
          <StyledDescription>{description}</StyledDescription>
        )}
      </StyledText>
      {iconUrl && (
        <StyledImage>
          <img
            src={iconUrl}
            width={iconSizes[size]}
            height={iconSizes[size]}
            alt="icon"
          />
        </StyledImage>
      )}
      {children}
    </StyledContent>
  </StyledListItem>
);

ResourceItem.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  iconUrl: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default ResourceItem;
