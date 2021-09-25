
import React, { setState, useState, useRef } from "react";

import { MapContainer, TileLayer,  Marker, Popup, FeatureGroup} from "react-leaflet";
import L from "leaflet";
import { EditControl} from "react-leaflet-draw";

import osm from "./osm-provider";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";

import GeojsonLayer from './GeojsonLayer';

L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";


const BasicMap = () => {

	const [center, setCenter] = useState({lat:55.757332, lng: 37.619374});
	const ZOOM_LEVEL = 9;
 
  const [geojsonvisible,setGeo] = useState(false);

  function onGeojsonToggle(bool) {
    setGeo(true)
  }

  const _onCreate = e => {
  	console.log(e);
  }
const _onEdited= e => {
  	console.log(e);
  }
const _onDeleted = e => {
  	console.log(e);
  }

	return (
		<div className="row">
		<div className="col text-center">
			<div className="col">
				<MapContainer
				center={center}
				zoom={ZOOM_LEVEL}
				>

				<FeatureGroup>
				<EditControl
				position="topright">
				onCreated={_onCreate}
				onEdited={_onEdited}
				onDeleted={_onDeleted}
				draw={{
					rectangle: false,
					polyline: false,
					circle: false,
					circlemarker: false,
					marker: false,
				}}
				></EditControl>
				</FeatureGroup>

				<TileLayer url={osm.maptiler.url} attribution={osm.maptiler.attribution}/>
					<div className="geojson-toggle">
			            <label htmlFor="layertoggle"> Toggle Geojson </label>
			           
			            <input type="checkbox"
			            name="layertoggle" id="layertoggle"
			            value={geojsonvisible} onChange={onGeojsonToggle} />       
			            </div>

			            {
			        			geojsonvisible && <GeojsonLayer url="geojson.json"/>
			            }
				</MapContainer>
			</div>
		</div>
		</div> 

	);
};

export default BasicMap;