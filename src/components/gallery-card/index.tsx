import React from 'react';
import styles from './gallery-card.module.scss';
import { GalleryCardProps } from './gallery-card.props';
import { useNavigate } from 'react-router-dom';

const GalleryCard: React.FC<GalleryCardProps> = ({ data }) => {
   const { id, urls, user } = data;
   const navigate = useNavigate();

   const clickHandler = () => {
      navigate(`/photo/${id}`);
   };

   return (
      <div className={styles.root} onClick={clickHandler} onKeyDown={clickHandler} role="button" tabIndex={0}>
         <div className={styles.photo}>
            <img src={urls?.regular} alt="gallery" />
         </div>
         <div className={styles.info}>
            <p>{user?.username}</p>
            <p>{user?.first_name}</p>
         </div>
      </div>
   );
};

export default GalleryCard;
