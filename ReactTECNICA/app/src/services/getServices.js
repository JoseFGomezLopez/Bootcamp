export const getData = async (property) => {
  try {
    const res = await fetch(
      `http://localhost:3000/entries?programType=${property}`,
    )
    const data = await res.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
