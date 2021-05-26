import React, { useState, useCallback, useRef } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api"
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox";
import "@reach/combobox/styles.css"

import "./index.css"

import Header from '../../components/Header';

const SendComicGoogleMaps = () => {

    const googleMapsApiKey = 'AIzaSyDmLJWR15X4XCgwtQmZi4ktPs - AoiUpTcM';
    const libraries = ["places"]

    const mapContainerStyle = {
        margin: "0",
        width: "50%",
        height: "50%"
    }
    const center = {
        lat: -3.71839,
        lng: -38.5434,
    }

    const options = {
        disableDefaultUI: true,
        zoomControl: true
    }
    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, [])



    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey,
        libraries,
    })

    function Search() {
        const { ready, value, suggestions: { status, data }, setValue, clearSuggestions } = usePlacesAutocomplete({
            requestOptions: {
                location: {
                    lat: () => -3.71839,
                    lng: () => -38.5434
                },
                radius: 200 * 1000,
            }
        });
        return <div className="search">
            <Combobox onSelect={async (address) => { console.log(address) }}>
                <ComboboxInput value={value} onChange={(e) => { setValue(e.target.value) }} disable={!ready} placeholder="Digite seu endereço" />
                <ComboboxPopover>
                    {status === "OK" && data.map(({ id, description }) => (<ComboboxOption key={id} value={description} />))}
                </ComboboxPopover>
            </Combobox>
        </div>
    }

    if (loadError) return "Erro ao carregar o mapa";
    if (!isLoaded) return "Carregando mapa";

    return (
        <div>
            <Header />
            <div className="map-container">
                <Search />
                <GoogleMap mapContainerStyle={mapContainerStyle}
                    zoom={8}
                    center={center}
                    options={options}
                    onLoad={onMapLoad}>
                </GoogleMap>
            </div>
        </div >
    )

}

export default SendComicGoogleMaps;