import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';

export const CustomButton = styled(ButtonUnstyled)`
  font-family: Ubuntu, sans-serif;
  font-weight: bold;
  font-size: 14px;
  background-color: white;
  padding: 13px 16px;
  border-radius: 4px;
  color: #121212;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  height: 40px;

  &:hover {
    background-color: white;
  }

  &.${buttonUnstyledClasses.active} {
    background-color: white;
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
