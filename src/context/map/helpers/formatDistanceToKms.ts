export const formatDistanceToKms = (distance: number): number => {
  let kms = distance / 1000
  kms = Math.round(kms * 100)
  kms /= 100
  
  return kms
}
