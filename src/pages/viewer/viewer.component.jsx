import React, { useEffect } from "react";


const OHIFViewer = () => {
    useEffect(() => {

        var containerId = "dicom-view";
        var componentRenderedOrUpdatedCallback = function () {
            console.log('OHIF Viewer rendered/updated');
        }



        window.OHIFViewer.installViewer(
            {
                routerBasename: '/viewer',
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


    }, []);

    return (
        <div id="dicom-view"></div>
    )
}
export default OHIFViewer;



