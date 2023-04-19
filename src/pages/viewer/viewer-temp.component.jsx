import React, { useCallback, useEffect, useMemo, useState } from 'react';
import medical_image_preview from '../../assets/medical_image_preview.jpg'
import df from "../../assets/ID_0003_AGE_0075_CONTRAST_1_CT.dcm"
const ViewerTemp = () => {
    const [selectedFile, setSelectedFile] = useState("");
    const [nonDicomImg, setNonDicomImg] = useState(false);
    const [file, setFile] = useState(null);
    const getDcmFile = async () => {
        const file = await require("../../assets/dicom data/ID_0099_AGE_0061_CONTRAST_0_CT.dcm");
        setFile(file);
    }
    getDcmFile();
    const params = useMemo(() => {
        const p = [];

        p["showOrientation"] = true;
        p["expandable"] = true;
        // p["worldSpace"] = true;
        p["showRuler"] = true;
        p["showControls"] = true;
        p["showControlBar"] = true;
        p["images"] = [[df]];
        return p;
    }, [])

    useEffect(() => {
        if (!file) return;
        params["images"] = [[file]];
        window.papaya.Container.resetViewer(0, params);
        // eslint-disable-next-line
    }, [file])
    useEffect(() => {

        window.papaya.Container.startPapaya();
        window.papaya.Container.resetViewer(0, params);
    }, [params]);

    const updateImage = useCallback((_event) => {
        _event.preventDefault();

        if (selectedFile.type.startsWith("image")) {
            setNonDicomImg(true);
        } else {
            setNonDicomImg(false);
        }

        try {
            params["images"] = [URL.createObjectURL(selectedFile)];
            window.papaya.Container.resetViewer(0, params);
        } catch (error) {
            console.error(error)
        }
    }, [params, selectedFile]);

    const selectFile = useCallback(
        (e) => setSelectedFile(e.target.files[0]), []);

    const handleURLExpired = useCallback((e) => {
        e.target.onerror = null;
        e.target.src = medical_image_preview;
    }, []);


    return (
        <div>
            <div style={{ "width": "1200px", "marginTop": "10px" }}>
                <div id="papaya_viewer" className="papaya" hidden={nonDicomImg}></div>
                {!!selectedFile && !!nonDicomImg && <img
                    alt="Medical file preview"
                    src={URL.createObjectURL(selectedFile)}
                    style={{ width: "800px", height: "600px", objectFit: "contain" }}
                    onError={handleURLExpired}
                />
                }
                <br />

                <form style={{ margin: "10px" }}
                    onSubmit={updateImage}>
                    <label style={{ fontFamily: "monospace" }}>
                        <h3>Upload file:</h3>
                        <input
                            required
                            type="file"
                            onChange={selectFile} />
                    </label>
                    <br />
                    <button type="submit" style={{ "marginTop": "10px" }}>
                        Visualize image
                    </button>
                </form>
            </div>
        </div>
    );
}
export default ViewerTemp;