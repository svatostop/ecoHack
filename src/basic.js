
import React, { setState, useState, useRef } from "react";

import { MapConsumer, MapContainer, TileLayer,  Marker, Popup, FeatureGroup, useMap} from "react-leaflet";
import L from "leaflet";
import { EditControl} from "react-leaflet-draw";

import osm from "./osm-provider";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";

import GeojsonLayer from './GeojsonLayer';

L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";

function BasicMap(props) {

	const {onClick, mapLayers, setMapLayers, geojsonvisible, setGeo, setValue, setValueTo,fieldFrom, fieldTo, trigger, setKK} = props;

	const [center, setCenter] = useState({lat:55.757332, lng: 37.619374});
	const ZOOM_LEVEL = 9;

//	const [mapLayers, setMapLayers] = useState([]);
  const _onCreate = e => {
  	console.log(e);

  	const {layerType, layer} = e;

  	if (layerType === 'marker')
  	{
  		const {_leaflet_id } = layer;

  		setMapLayers((layers) => [
  			...layers,
  			{ id: _leaflet_id, latings: layer.getLatLng()},
  			]);
  	}

  };

const _onEdited = (e) => {
    console.log(e);
    const {
      layers: { _layers },
    } = e;

    Object.values(_layers).map(({ _leaflet_id, editing }) => {
      setMapLayers((layers) =>
        layers.map((l) =>
          l.id === _leaflet_id
            ? { ...l, latlngs: { ...editing.latlngs[0] } }
            : l
        )
      );
    });
  };
const _onDeleted = e => {
  	console.log(e);
  	setGeo(false);
  	setMapLayers([]);
  };

	return (
		<>
		<div className="row">
		<div className="col text-center">
			<div className="col">
				<MapContainer
				center={center}
				zoom={ZOOM_LEVEL}
				>

				<FeatureGroup>
				<EditControl
				position="topright"
				onCreated={_onCreate}
				onEdited={_onEdited}
				onDeleted={_onDeleted}
				draw={{
					rectangle: false,
					polyline: false,
					circle: false,
					circlemarker: false,
					polygon: false,
				}}
				/>
				</FeatureGroup>

				<TileLayer url={osm.maptiler.url} attribution={osm.maptiler.attribution}/>
          {
      			geojsonvisible && <GeojsonLayer setCenter={setCenter} mapLayers={mapLayers} setMapLayers={setMapLayers} setValue={setValue} setValueTo={setValueTo} fieldFrom={fieldFrom} fieldTo={fieldTo} trigger={trigger} setKK={setKK} setGeo={setGeo}/> 
          }

				</MapContainer>

			</div>
		</div>
		</div> 
		</>
	);
};

export default BasicMap;