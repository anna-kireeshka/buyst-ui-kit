import { FC, ReactNode } from 'react';
type Color = 'whatsapp' | 'facebook' | 'telegram' | 'instagram';
export interface MyButtonProps {
    children: ReactNode;
    theme: Color;
    transparent?: boolean;
    onClickHandle?: () => void;
}
declare const ButtonSocialNetwork: FC<MyButtonProps>;
export default ButtonSocialNetwork;
