const ACCESS_TOKEN_MAP_BOX = "access_token=pk.eyJ1Ijoia2F1ZS1ndWVycmEiLCJhIjoiY2twNHZwcTA1MXJ3cTJ3bXdmZ2JpYWE0aCJ9.rri04Tk-1EUMf1mo7WgqMQ"

export const fetchLocalMapBox = (local) =>
    fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?${ACCESS_TOKEN_MAP_BOX}`
    )
        .then(response => response.json())
        .then(data => data);