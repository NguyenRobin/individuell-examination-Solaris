const BASE_URL = "https://fathomless-shelf-54969.herokuapp.com";

async function getKey() {
  try {
    const response = await fetch(`${BASE_URL}/keys`, { method: "POST" });
    if (!response.ok) throw new Error("Problem getting data! ⛔️");
    const data = await response.json();
    return data.key;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

async function getPlanets() {
  try {
    const key = await getKey();
    const response = await fetch(`${BASE_URL}/bodies`, {
      headers: {
        "x-zocom": key,
      },
    });

    if (!response.ok) throw new Error("Problem getting data! ⛔️");
    const data = await response.json();
    // console.log(data.bodies);

    return data.bodies;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export { getPlanets };

/*

// KOMMENTAR 

I denna module skickas en förfrågan om hämta data från en API för att vårt program ska kunna fungera korrekt och ta del av all data. Alla steg körs här. Om förfrågan är lyckad eller misslyckad, kan vi enkelt felsöka vart problemet inträffat .

*/
