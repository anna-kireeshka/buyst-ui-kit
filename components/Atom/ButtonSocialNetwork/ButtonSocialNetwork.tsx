import React from 'react'
import { FC, ReactNode } from 'react'
import styles from './ButtonSocialNetwork.module.scss'
import cx from 'classnames'
import {
   FacebookIcon,
   InstagramIcon,
   TelegramIcon,
   WhatsAppIcon,
} from '../../svg-sprite/SocialIconSet'

type Color = 'whatsapp' | 'facebook' | 'telegram' | 'instagram'

export interface MyButtonProps {
   children: ReactNode
   theme: Color
   transparent?: boolean
}
const ButtonSocialNetwork: FC<MyButtonProps> = ({ theme = 'whatsapp', children, ...props }) => {
   const classes = cx(styles[`btn`], styles[`btn-${theme}`])

   return (
      <button {...props} className={classes}>
         {children}
         {theme === 'whatsapp' ? (
            <WhatsAppIcon />
         ) : theme === 'instagram' ? (
            <InstagramIcon />
         ) : theme === 'telegram' ? (
            <TelegramIcon />
         ) : (
            <FacebookIcon />
         )}
      </button>
   )
}

export default ButtonSocialNetwork
