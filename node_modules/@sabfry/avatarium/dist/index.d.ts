import React from 'react';

interface AvatarProps {
    theme: 'space' | 'blob' | 'emoji' | 'monster' | 'user' | 'cutie';
    size?: 'xs' | 'sm' | 'med' | 'lg' | 'xl';
    border?: boolean;
    borderShape?: 'circle' | 'square' | 'rounded';
    borderColor?: string;
    backgroundColor?: string;
    styleType?: 'style1' | 'style2' | 'style3';
    seed?: number;
}
declare const Avatar: React.FC<AvatarProps>;

export { Avatar };
