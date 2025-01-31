import React from 'react';
import { getRandomAvatar } from './utils/randomizer';
import { getAvatarsByTheme } from './avatarThemes';

interface AvatarProps {
  theme: 'space' | 'blob' | 'emoji' | 'monster' | 'user' | 'cutie' ;
  size?: 'xs' | 'sm' | 'med' | 'lg' | 'xl';
  border?: boolean;
  borderShape?: 'circle' | 'square' | 'rounded';
  borderColor?: string;
  backgroundColor?: string;
  styleType?: 'style1' | 'style2' | 'style3'; // predefined styles
  seed?: number; // seed for consistent random avatar
}

export const Avatar: React.FC<AvatarProps> = ({
  theme,
  size = 'sm',
  border = false,
  borderShape = 'square',
  borderColor = 'black',
  backgroundColor = 'transparent',
  styleType,
  seed
}) => {
  // Generates a random seed if none is provided
  const effectiveSeed = seed !== undefined ? seed : Math.random() * 10;

  const avatars = getAvatarsByTheme(theme); // Fetch avatars based on theme
  console.log(avatars)
  const avatar = getRandomAvatar(avatars, effectiveSeed);
  console.log(avatar)
  const borderRadius = borderShape === 'circle' ? '50%' : borderShape === 'rounded' ? '10px' : '0';
  const avatarSize = size === 'xs' ? '25px' : size === 'sm' ? '50px' : size === 'med' ? '100px' : size === 'lg' ? '150px' : '200px';

  const defaultStyle: React.CSSProperties = {
    border: border ? `2px solid ${borderColor}` : 'none',
    borderRadius: borderRadius,
    width: avatarSize,
    height: avatarSize,
    padding: '2px',
    borderColor: borderColor,
    backgroundColor: backgroundColor
  };

  const style1: React.CSSProperties = {
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    transition: '0.3s',
    backgroundColor: 'white'
  };

  const style2: React.CSSProperties = {
    border: '8px solid black',
    backgroundColor: 'white',
    borderRadius: '50%'
  };

  const style3: React.CSSProperties = {
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    borderRadius: '20%'
  };

  const chosenStyle = styleType === 'style1' ? style1 : styleType === 'style2' ? style2 : styleType === 'style3' ? style3 : defaultStyle;
  console.log("Avatar image path:", avatar);
  return <img src={avatar} alt="Avatar" style={chosenStyle} />;
  
};


