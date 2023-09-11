import React from 'react'
import Appearance from "../tools/site-settings/Appearance";
import IndexDbSettings from "../tools/site-settings/IndexDbSettings";
import MiscSettings from "../tools/site-settings/MiscSettings";

export const tabs = [
    {
        id: "appearance",
        title: "Appearance",
        component: <Appearance />
    },
    {
        id: "indexdb",
        title: "Index DB Settings",
        component: <IndexDbSettings />
    },
    {
        id: "misc",
        title: "Misc. Settings",
        component: <MiscSettings />
    }
]