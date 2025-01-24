
import baseUrl from './../utils/baseURL'; 

export default async function uploadImage(base64Image) {
  const response = await fetch(`${baseUrl}/uploadImage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ image: base64Image }),
    });
    const data = await response.json();
    return data;
  }
  