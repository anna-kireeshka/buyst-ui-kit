import React from 'react'
import { FC, ReactNode } from 'react'
import styles from './Button.module.scss'
// import '../index.scss'
import cx from 'classnames'
type Color = 'green' | 'gray' | 'orange' | 'red' | 'primary'

export interface MyButtonProps {
   children: ReactNode
   loading?: boolean
   size?: 'small' | 'medium'
   theme: Color
   transparent?: boolean
   fullWidth?: boolean
   withIcon?: boolean
   outline?: boolean
   disabled?: boolean
}
const Button: FC<MyButtonProps> = (
   {
      theme = 'green',
      disabled = false,
      outline = false,
      fullWidth = false,
      children,
      size = 'small',
      loading = false,
      transparent = false,
      withIcon,
   },
   props
) => {
   const classes = cx(styles[`btn`], styles[`btn-${theme}`], {
      [styles[`btn--fullWidth`]]: fullWidth,
      [styles[`btn-${theme}--transparent`]]: transparent,
      [styles[`btn-${size}`]]: size,
      [styles[`${theme}-withIcon`]]: withIcon,
      [styles[`btn-${theme}--outline`]]: outline,
      [styles[`btn-disabled`]]: disabled,
   })

   const btnLoaderClass = cx([
      {
         [styles[`btn-loading`]]: loading,
      },
   ])

   return (
      <button {...props} className={classes}>
         <span className={loading ? `${styles.btnLoadingLabel}` : ''}> {children} </span>
         <div className={styles.btnLoadingContainer}>
            <span className={btnLoaderClass} />
         </div>
      </button>
   )
}

export default Button
