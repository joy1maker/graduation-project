import React, { useCallback, useEffect, useMemo, useState } from 'react';
import medical_image_preview from '../../assets/medical_image_preview.jpg'
import axios from 'axios';
import { Blob } from 'blob-polyfill'
import buffer from 'buffer';
import { useLocation } from 'react-router-dom';
const ViewerTemp = () => {
    const [selectedFile, setSelectedFile] = useState("");

    const [nonDicomImg, setNonDicomImg] = useState(false);
    const [file, setFile] = useState(null);
    const location = useLocation();
    const props = location;
    console.log(props);
    useEffect(() => {
        const getDcmFile = async () => {
            try {
                const id = await localStorage.getItem("paitent_id");
                const file_name = await localStorage.getItem("file_name");
                if (id && file_name) {
                    const response = await axios.get(`http://localhost:8000/dicom?filename=${file_name}&paitent_id=${id}`);
                    const dcmData = response.data.dcm_data;
                    const bytes = buffer.Buffer.from(dcmData, 'base64');
                    const dcmBlob = new Blob([bytes], { type: 'application/dicom' });
                    const dcmObjectUrl = URL.createObjectURL(dcmBlob);
                    setFile(dcmObjectUrl);
                }
                else {
                    setFile(null)
                }

            } catch (error) {
                console.error(error);
            }
        }
        getDcmFile()
    }, [])
    const params = useMemo(() => {
        const p = [];

        p["showOrientation"] = true;
        p["expandable"] = true;
        p["showRuler"] = true;
        p["showControls"] = true;
        p["showControlBar"] = true;
        p["displayMin"] = true;
        return p;
    }, [])

    useEffect(() => {
        if (!file) return;
        params["images"] = [[file]];
        window.papaya.Container.resetViewer(0, params);
        return () => {
        }
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