import React from 'react'
import { FC, ReactNode } from 'react'
import styles from './Button.module.scss'
// import '../catalog-card.module.scss'
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
   onClick?: () => void
}
const ButtonLoading: FC = () => {
   return (
      <div className={styles.btnLoadingContainer}>
         <span className={styles.btnLoading} />
      </div>
   )
}
const Button: FC<MyButtonProps> = ({
   theme = 'green',
   disabled = false,
   outline = false,
   fullWidth = false,
   children,
   size = 'small',
   loading = false,
   transparent = false,
   withIcon = false,
   ...props
}) => {
   const classes = cx(styles[`btn`], styles[`btn-${theme}`], {
      [styles[`btn--fullWidth`]]: fullWidth,
      [styles[`btn-${theme}--transparent`]]: transparent,
      [styles[`btn-${size}`]]: size,
      [styles[`btn-${theme}--outline`]]: outline,
      [styles[`btn-disabled`]]: disabled,
      [styles[`btn-${theme}--withIcon`]]: withIcon,
   })

   if (loading) {
      return (
         <button {...props} className={classes} disabled={true}>
            <ButtonLoading />
         </button>
      )
   }

   return (
      <button {...props} className={classes}>
         {children}
      </button>
   )
}

export default Button
