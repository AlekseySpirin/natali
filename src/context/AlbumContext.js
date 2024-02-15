import { createContext, useContext } from 'react';

const AlbumContext = createContext();

export const useAlbumContext = () => {
	return useContext(AlbumContext);
};

export const AlbumProvider = ({ children, value }) => {
	return (
		<AlbumContext.Provider value={value}>
			{children}
		</AlbumContext.Provider>
	);
};
