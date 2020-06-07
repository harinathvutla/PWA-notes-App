import React from 'react';
import Header from './components/organisms/Header';
import SidebarNotes from './components/molecules/SidebarNotes';
function App() {
	return (
		<div className='App'>
			<Header />
			<SidebarNotes></SidebarNotes>
		</div>
	);
}

export default App;
