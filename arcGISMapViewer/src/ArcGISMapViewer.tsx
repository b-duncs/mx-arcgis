import { ReactElement, createElement } from "react";
import { MapComponent } from "./components/Map";
import { ArcGISMapViewerContainerProps } from "../typings/ArcGISMapViewerProps";
import "./ui/ArcGISMapViewer.css";

export function ArcGISMapViewer(props: ArcGISMapViewerContainerProps): ReactElement {
    return <MapComponent basemap={props.basemap} />;
}