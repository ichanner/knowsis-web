import React from "react";
import { FixedSizeList as List } from "react-window";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLibraries } from "../../stores/librarySlice";
import { TAB_HEIGHT } from "../../libraryConstants";
import LibraryTab from "./LibraryTab";

const LibraryList = () => {

    const params = useParams();  // Get the current route parameters
    const library = useSelector(selectLibraries); // Get the list of library IDs from the Redux store

    const Row =  ({ index, style }) => {

        const library_id = library[index];  // Get the library ID for the current index
        const is_focused = params.library_id == library_id;  // Check if the current library is focused based on the URL parameter

        return <LibraryTab is_focused={is_focused} library_id={library_id} />;
    }

    return (

        <React.Fragment>

            { library.length >= 0 ? (

                <List

                    height={library.length * TAB_HEIGHT} // Calculate the list height based on the number of libraries and tab height
                    itemSize={TAB_HEIGHT}                // Set the height for each item in the list
                    itemCount={library.length}           // Number of items to render

                >
                    { Row }

                </List>

            ) : <div/> }

        </React.Fragment>
    );
};

export default LibraryList;
