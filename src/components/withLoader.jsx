import React from 'react'
import Spinner from './Spinner'
import ErrorPage from '../pages/ErrorPage'

// eslint-disable-next-line no-unused-vars
const withLoader = (WrappedComponent) => {
    return function LoaderWrapper({ isLoading, error, ...props }) {
        if (isLoading) return <Spinner />
        if (error) return <ErrorPage error={error} />
        return <WrappedComponent {...props} />
    };
};

export default withLoader