import React, { FC, ReactNode } from 'react'
import cn from 'classnames'

import styles from './Tag.module.scss'

export interface Props {
   children: ReactNode
   bgColor: string
   size?: 'small' | 'big'
}

const Tag: FC<Props> = ({ children, bgColor = '#eee', size = '' }) => {
   const classes = cn(styles[`tag`], {
      [styles[`tag-${size}`]]: size,
   })
   return (
      <p className={classes} style={{ background: bgColor }}>
         {children}
      </p>
   )
}

export default Tag
