export async function FetchDogs() {
  try {
    const breedListName = await fetch("https://dog.ceo/api/breeds/list/all");

    const breedListData = await breedListName.json();

    const breedImageUrls = [];

    
    const imageRequests = Object.keys(breedListData.message).map(async (breedName) => {

        const breedImageResponse = await fetch(`https://dog.ceo/api/breed/${breedName}/images/random`);
        
        const breedImagesData = await breedImageResponse.json();
        const imageUrl = breedImagesData.message;

        breedImageUrls.push({ breed: breedName, imageUrl });

      });
  
    
      await Promise.all(imageRequests);
  
    return breedImageUrls

  } catch (error) {
    console.log(error);
    return []
  }
}
