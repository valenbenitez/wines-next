import axios from 'axios'

export async function WinesData() {
  try {
    const { data } = await axios.get('https://sheet.best/api/sheets/c7f37a46-ba97-406a-9c92-135d875f00c1')
    return data
  } catch (error) {
    console.log(error)
  }
}
