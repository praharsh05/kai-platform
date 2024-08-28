import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SwitchContainer = styled(Box)(({ isActive }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '4px',
  gap: '6px',
  width: '72px',
  height: '32px',
  background: isActive ? '#444154' : '#D5CCFE',
  borderRadius: '61px',
  justifyContent: isActive ? 'flex-start' : 'flex-end',
}));

export const ToggleThumb = styled(Box)(({ isActive }) => ({
  width: '24px',
  height: '24px',
  background: isActive ? '#676381' : '#8065FF',
  borderRadius: '81px',
  flexShrink: 0,
}));

export const ThemeLabel = styled(Typography)(({ isActive }) => ({
  fontFamily: 'Satoshi',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '114.58%',
  display: 'flex',
  alignItems: 'center',
  color: isActive ? '#FFFFFF' : '#010101',
  flexShrink: 0,
}));
