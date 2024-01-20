import React, { FC, ReactNode } from 'react'
import cn from 'classnames'

import styles from './ButtonIcon.module.scss'

export interface Props {
   theme: 'green' | 'gray' | 'orange' | 'red'
   size: 'xs' | 'sm' | 'lg'
   fill?: boolean
   children: ReactNode
}

const ButtonIcon: FC<Props> = ({ theme, size, fill = false, children }, props) => {
   const classes = cn(styles[`btn`], styles[`btn-${theme}`], {
      [styles[`btn-${size}`]]: size,
      [styles[`btn-fill`]]: fill,
   })

   return (
      <button {...props} className={classes}>
         {children}
      </button>
   )
}

export default ButtonIcon
