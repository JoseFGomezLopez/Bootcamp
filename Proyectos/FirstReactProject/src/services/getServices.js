
export const getApis = async() => {
     const response = await fetch('https://api.fbi.gov/wanted/v1/list');
     const data = await response.json();
     console.log(data);
     return data;
}