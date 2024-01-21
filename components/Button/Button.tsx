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

interface ButtonLoadingProps {
   loading: boolean
   children: ReactNode
}
//@ts-ignore
const ButtonLoading: FC<ButtonLoadingProps> = ({ loading, children }) => {
   let node: ReactNode
   if (loading) {
      node = (
         <div className={styles.btnLoadingContainer}>
            <span className={styles.btnLoading} />
         </div>
      )
   } else {
      node = children
   }
   return node
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

   return (
      <button {...props} className={classes}>
         <ButtonLoading loading={loading} children={children} />
      </button>
   )
}

export default Button
