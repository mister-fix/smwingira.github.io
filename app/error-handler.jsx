import React from 'react';
import { useRouteError } from 'react-router-dom';

function ErrorHandler() {
  const error = useRouteError();

  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      <div className='z-50 flex flex-col text-center space-y-3'>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p className='font-medium'>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}

export { ErrorHandler };
