import React, { useEffect } from "react";

const OHIFViewer = () => {

    useEffect(() => {
        const script = document.createElement('script');
        const createScript = async () => {
            script.src = "https://unpkg.com/@ohif/viewer@1.0.3/dist/index.umd.js";
            script.async = true;
            script.crossOrigin = true;
            script.id = "viewer-script"
            document.body.appendChild(script);
        }
        createScript();
        document.getElementById("viewer-script").addEventListener('load', () => {
            var containerId = "dicom-view";
            var componentRenderedOrUpdatedCallback = function () {
                console.log('OHIF Viewer rendered/updated');
            }
            window.OHIFViewer.installViewer(
                {
                    // routerBasename: '/',
                    servers: {
                        dicomWeb: [
                            {
                                name: 'DCM4CHEE',
                                wadoUriRoot: 'https://server.dcmjs.org/dcm4chee-arc/aets/DCM4CHEE/wado',
                                qidoRoot: 'https://server.dcmjs.org/dcm4chee-arc/aets/DCM4CHEE/rs',
                                wadoRoot: 'https://server.dcmjs.org/dcm4chee-arc/aets/DCM4CHEE/rs',
                                qidoSupportsIncludeField: true,
                                imageRendering: 'wadors',
                                thumbnailRendering: 'wadors',
                            },
                        ],
                    },
                }, containerId, componentRenderedOrUpdatedCallback);
        })

        return () => {
            // document.body.removeChild(script);
            // window.location.reload();
        }
    }, []);

    return (
        <div id="dicom-view"></div>
    )
}
export default OHIFViewer;



