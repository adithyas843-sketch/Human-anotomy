import AnatomyViewer from "./components/AnatomyViewer";

export default function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <h2>3D Anatomy Explorer</h2>
        <p>Replace placeholder meshes with your GLB anatomy models.</p>
      </aside>
      <main>
        <AnatomyViewer />
      </main>
    </div>
  );
}
