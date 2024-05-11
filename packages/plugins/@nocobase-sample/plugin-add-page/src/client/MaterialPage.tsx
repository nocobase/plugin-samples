import React, { useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useDocumentTitle } from '@nocobase/client';

export const MaterialPage = () => {
  return <div>
    <h1>Material Page</h1>
    <ul>
      <li>
        <Link to="video">Video</Link>
      </li>
      <li>
        <Link to="img">Img</Link>
      </li>
    </ul>
    <Outlet />
  </div>
}

export const MaterialVideo = () => {
  const { setTitle } = useDocumentTitle();

  useEffect(() => {
    setTitle('Material Video');
  }, [])

  return <div>Material Video</div>
}
export const MaterialImg = () => {
  const { setTitle } = useDocumentTitle();

  useEffect(() => {
    setTitle('Material Img');
  }, [])

  return <div>Material Img</div>;
}
