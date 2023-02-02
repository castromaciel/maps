/* eslint-disable react/no-array-index-key */
/* eslint-disable react/self-closing-comp */
import { FC, useState } from 'react'
import styles from './SkeletonPlaces.module.scss'

const SkeletonPlaces: FC<{length: number}> = ({ length = 3 }) => {
  const [totalSkeleton] = useState(new Array(length).fill(0))
  
  return (
    <>
      {
        totalSkeleton.map((_, index) => (
          <div key={index} className={`${styles.skeleton} mt-3`}></div>
        ))
      }
    </>
  ) 
}

export default SkeletonPlaces
