import { Router } from 'next/router';
import React, { useEffect, useState } from  'react';
import ReactGA from 'react-ga';

const TrackingContext = React.createContext();

function TrackingProvider(props) {
    const [analytics, setAnalytics] = useState({
        isInitialized: false,
        trackers: ['tracker']
    })

    const handleRouteChange = url => {
        ReactGA.set({page:url}, analytics.trackers);
        ReactGA.pageView(url, analytics.trackers);
    }

    const logEvent = ({ category = '', action = '', label = ''}) => {
        if (analytics.isInitialized) {
            ReactGA.event({
                category,
                action,
                label
            }, analytics.trackers);
        }
    };

    useEffect(() => {
        const {isInitialized, trackers} = analytics;
        
        if (!isInitialized) {
            ReactGA.initialize(process.env.GOOGLE_ANALYTICS);
            Router.events.on('routeChangeComplete', handleRouteChange);
            setAnalytics(prev => ({
                ...prev,
                isInitialized: true,
            }));
        }

        return () => {
            Router.events.off('routeChangeComplete', handleRouteChange);
        }
    }, [])

    return <TrackingContext.Provider value={{logEvent}} {...props} />
}

const useTracking = () => React.useContext(TrackingContext);

export { TrackingProvider, useTracking };