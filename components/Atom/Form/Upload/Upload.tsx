import React, { FC } from 'react'
import styles from './Upload.module.scss'
import { ImageIcon, UploadIcon, VideoIcon } from '../../../svg-sprite/common'
export interface UploadProps {
   label: string
}
const Upload: FC<UploadProps> = ({ label = 'Upload' }) => {
   return (
      <div className={styles.upload}>
         <div className={styles.uploadStep}>
            <ul className={styles.uploadStepList}>
               <li className={styles.uploadStepListItem}>
                  <div className={styles.uploadStepListItemIcon}>
                     <ImageIcon />
                  </div>
                  <div className={styles.uploadStepListItemDetail}>
                     <strong>{'Image'}</strong>
                     <p>PNG, JPG, min size 8kb</p>
                  </div>
               </li>
               <li className={styles.uploadStepListItem}>
                  <div className={styles.uploadStepListItemIcon}>
                     <VideoIcon />
                  </div>
                  <div className={styles.uploadStepListItemDetail}>
                     <strong>{'Video'}</strong>
                     <p>MP4, min size 8kb</p>
                  </div>
               </li>
            </ul>
         </div>
         <div className={styles.uploadInput}>
            <input type="file" className={styles.uploadInputHidden} id="uploud" multiple={true} />
            <label className={styles.uploadInputLabel} htmlFor="uploud">
               {label}
               <UploadIcon />
            </label>
         </div>
      </div>
   )
}

export default Upload
