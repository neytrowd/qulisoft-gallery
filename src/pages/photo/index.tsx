import React, { useEffect } from 'react';
import styles from './photo.module.scss';
import { useAppDispatch, useAppSelector } from '../../lib/hooks/redux';
import { selectPhoto } from '../../store/selectors/photo';
import { loadPhoto } from '../../store/thunks/photoThunk';
import { useParams } from 'react-router-dom';

const Photo: React.FC = () => {
   const { id } = useParams();
   const dispatch = useAppDispatch();
   const { photo, loading, error } = useAppSelector(selectPhoto);

   useEffect(() => {
      if (id) {
         dispatch(loadPhoto(id));
      }
   }, []);

   return (
      <div className={styles.root}>
         {!loading && (
            <div className={styles.photo}>
               <img src={photo?.urls?.full} alt="" />
            </div>
         )}

         {error && <div className={styles.message}>{error}</div>}
         {loading && <div className={styles.message}>Loading...</div>}
      </div>
   );
};

export default Photo;
