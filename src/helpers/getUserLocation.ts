type userLocation = [number, number]

export const getUserLocation = async ():Promise<userLocation> => new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(
    ({ coords }) => resolve([coords.longitude, coords.latitude]),
    (error) => {
      alert('It was not possible to get the current position')
      console.log(error)
      reject()
    }
  )
})
