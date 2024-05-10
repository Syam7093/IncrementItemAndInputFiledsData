
import { createSlice } from '@reduxjs/toolkit';


export interface pageDataStore {
    eventsData: any[],
    libraryfiles: any[],
    contactsAll: any[],
    archiveMeetings: any[],
    recentEvents: any[],

}

const initialState: pageDataStore = {
    eventsData: [],
    libraryfiles: [],
    contactsAll: [],
    archiveMeetings: [],
    recentEvents: [],

};

const pagedataslice = createSlice({
    name: 'reduxStore',
    initialState,
    reducers: {

        setlibraryFiles: (state, action) => {
            state.libraryfiles = action.payload
        }, setlibraryRemove: (state, action) => {
            const { id }: any = action.payload
            console.log(id,"sai")
            const updateData = state?.libraryfiles.filter((e) => { return !id?.FileIds?.includes(e?._id) })
            console.log(updateData,"updateData")
            state.libraryfiles = updateData

        },
        setContactRemove: (state, action) => {
            const { id }: any = action.payload
            console.log(id, 'ssffssssssssssss')
            const updateData = state?.contactsAll.filter((e) => { return !id?.includes(e?.contactId) })
            state.contactsAll = updateData
        },
        setcontactsAll: (state, action) => {
            state.contactsAll = action.payload
        },
        setarchiveMeeting: (state, action) => {
            state.archiveMeetings = action.payload
        },
        setrecentEvents: (state, action) => {
            state.recentEvents = action.payload
        },
        setEventsData: (state, action) => {
            state.eventsData = action.payload
        }

    }
});

export const {
    setEventsData,
    setlibraryFiles,
    setcontactsAll,
    setarchiveMeeting,
    setrecentEvents,
    setlibraryRemove,
    setContactRemove,
} = pagedataslice.actions;
export default pagedataslice;