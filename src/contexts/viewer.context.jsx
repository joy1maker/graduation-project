import { createContext, useState } from "react";
export const ViewerContext = createContext({
    isViewerInstalled: null,
    setisViewerInstalled: () => null
})
export const ViewerProvider = ({ children }) => {

    const [isViewerInstalled, setisViewerInstalled] = useState(false);
    const value = { isViewerInstalled, setisViewerInstalled };
    return <ViewerContext.Provider value={value}>{children}</ViewerContext.Provider>
}