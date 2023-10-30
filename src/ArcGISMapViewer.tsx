import { ReactElement, createElement } from "react";
import { MapComponent } from "./components/Map";
import { ArcGISMapViewerContainerProps } from "../typings/ArcGISMapViewerProps";
import "./ui/ArcGISMapBlog.css";

export function ArcGISMapBlog(props: ArcGISMapViewerContainerProps): ReactElement {
    return <MapComponent basemap={props.basemap} />;
}