

const BASE_URL = 'https://restcountries.com/v3.1';


export async function fetchCountries() {

  try {
    const response = await fetch(`${BASE_URL}/all?fields=name,capital,region,population,flags`);
    if (!response.ok) {
      throw new Error('Failed to fetch countries');
    }
    
    const data = await response.json();
    return data;

  }catch (error) {
    return [];
  }
}


export async function fetchCountry(name) {
    try{
        const response = await fetch(`${BASE_URL}/name/${name}?fields=name,capital,region,population,flags,borders,subregion,tld,currencies,languages,nativeName`);
        if(!response.ok){
            throw new Error('Failed to fetch countrie');
        }

        const data = await response.json();
        return data;

    }  catch(error){
        return[];
    }
    
}




