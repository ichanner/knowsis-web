import "./styles.css"
import React, {useState} from "react"
import Icon from '@mdi/react';
import { mdiUpload } from '@mdi/js';
import DropDownAnchor from "../../components/Dropdown/DropdownAnchor"
import DropDownInput from "../../utils/DropdownInput"

const UploadBox = ({ custom_theme }) => {
    const [uploadIcon, setUploadIcon] = useState(mdiUpload);

    const UploadBoxAnchor = (props) => (
        <div {...props} className={`upload-box__container ${custom_theme}`}>
            <Icon className='upload-box__icon' path={uploadIcon} />
        </div>
    );

    return (
        <DropDownAnchor
            AnchorEl={UploadBoxAnchor}
            anchor_orgin_vertical='bottom'
            buttons={[
                DropDownInput("Upload File", mdiUpload, false, false, () => {
                    // Add your upload logic here
                    setUploadIcon(mdiUpload);
                }),
                // Add more dropdown options if needed
            ]}
        />
    );
}

export default UploadBox;
