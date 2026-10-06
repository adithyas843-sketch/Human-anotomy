import React from 'react';
import AnatomyViewer from './components/AnatomyViewer';

export default function App(){
 return (
 <div className="app">
  <div className="sidebar">
   <h1>3D Anatomy Explorer</h1>
   <p>Starter template ready for GLB anatomy models.</p>
  </div>
  <div className="viewer"><AnatomyViewer /></div>
 </div>
 )
}
