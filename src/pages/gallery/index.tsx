import React, { useEffect } from 'react';
import styles from './gallery.module.scss';
import GalleryCard from '../../components/gallery-card';
import { useAppDispatch, useAppSelector } from '../../lib/hooks/redux';
import { selectGallery } from '../../store/selectors/gallery';
import { loadGallery } from '../../store/thunks/galleryThunk';

const Gallery: React.FC = () => {
   const dispatch = useAppDispatch();
   const { photos, loading, error } = useAppSelector(selectGallery);

   useEffect(() => {
      dispatch(loadGallery());
   }, []);

   return (
      <div className={styles.root}>
         <div className={styles.gallery}>
            {photos.map((item) => (
               <GalleryCard key={item.id} data={item} />
            ))}
         </div>

         {error && <div className={styles.message}>{error}</div>}
         {loading && <div className={styles.message}>Loading...</div>}
      </div>
   );
};

export default Gallery;
