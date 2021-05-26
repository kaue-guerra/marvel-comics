import "leaflet/dist/leaflet.css";

import React, { useState } from "react";

import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import Leaflet from "leaflet";
import { v4 as uuidv4 } from "uuid";

import { fetchLocalMapBox } from "../../services/apiMapBox";
import AsyncSelect from "react-select/async";

import mapPackage from "../../package.svg";
import mapPin from "../../pin.svg";

import "./index.css";
import Header from "../../components/Header";

const initialPosition = { lat: -22.2154042, lng: -54.8331331 };

const mapPackageIcon = Leaflet.icon({
    iconUrl: mapPackage,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
});

const mapPinIcon = Leaflet.icon({
    iconUrl: mapPin,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
});

function SendComic() {
    const [deliveries, setDeliveries] = useState([]);

    const [position, setPosition] = useState(null);

    const [name, setName] = useState("");
    const [complement, setComplement] = useState("");
    const [address, setAddress] = useState(null);

    const [location, setLocation] = useState(initialPosition);

    const loadOptions = async (inputValue, callback) => {
        const response = await fetchLocalMapBox(inputValue);
        let places = [];
        if (inputValue.length < 5) return;
        response.features.map((item) => {
            places.push({
                label: item.place_name,
                value: item.place_name,
                coords: item.center,
                place: item.place_name,
            });
        });

        callback(places);
    };

    const handleChangeSelect = (event) => {
        setPosition({
            longitude: event.coords[0],
            latitude: event.coords[1],
        });

        setAddress({ label: event.place, value: event.place });

        setLocation({
            lng: event.coords[0],
            lat: event.coords[1],
        });
    };

    async function handleSubmit(event) {
        event.preventDefault();

        if (!address || !name) return;

        setDeliveries([
            ...deliveries,
            {
                id: uuidv4(),
                name,
                address: address?.value || "",
                complement,
                latitude: location.lat,
                longitude: location.lng,
            },
        ]);

        setName("");
        setAddress(null);
        setComplement("");
        setPosition(null);
        alert("Seu pedido será entregue em breve no endereço selecionado. Muito Obrigado.");
        window.location.href = "/";

    }

    return (
        <div>
            <Header />
            <div id="page-map">
                <main>
                    <form onSubmit={handleSubmit} className="landing-page-form">
                        <fieldset>
                            <legend>Selecione o endereço de entrega</legend>

                            <div className="input-block">
                                <label htmlFor="name">Nome</label>
                                <input
                                    id="name"
                                    placeholder="Digite seu nome"
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                />
                            </div>

                            <div className="input-block">
                                <label htmlFor="address">Endereço</label>
                                <AsyncSelect
                                    placeholder="Digite seu endereço..."
                                    classNamePrefix="filter"
                                    cacheOptions
                                    loadOptions={loadOptions}
                                    onChange={handleChangeSelect}
                                    value={address}
                                />
                            </div>

                            <div className="input-block">
                                <label htmlFor="complement">Complemento</label>
                                <input
                                    placeholder="Complemento"
                                    id="complement"
                                    value={complement}
                                    onChange={(event) => setComplement(event.target.value)}
                                />
                            </div>
                        </fieldset>

                        <button className="confirm-button" type="submit">
                            Confirmar
                        </button>
                    </form>
                </main>

                <Map
                    center={location}
                    zoom={15}
                    style={{ width: "100%", height: "100%" }}
                >
                    {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
                    <TileLayer
                        url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoia2F1ZS1ndWVycmEiLCJhIjoiY2twNHZwcTA1MXJ3cTJ3bXdmZ2JpYWE0aCJ9.rri04Tk-1EUMf1mo7WgqMQ`}
                    />

                    {position && (
                        <Marker
                            icon={mapPinIcon}
                            position={[position.latitude, position.longitude]}
                        ></Marker>
                    )}

                    {deliveries.map((delivery) => (
                        <Marker
                            key={delivery.id}
                            icon={mapPackageIcon}
                            position={[delivery.latitude, delivery.longitude]}
                        >
                            <Popup
                                closeButton={false}
                                minWidth={240}
                                maxWidth={240}
                                className="map-popup"
                            >
                                <div>
                                    <h3>{delivery.name}</h3>
                                    <p>
                                        {delivery.address} - {delivery.complement}
                                    </p>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </Map>
            </div>
        </div>
    );
}

export default SendComic;