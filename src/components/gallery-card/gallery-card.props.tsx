import React from 'react';
import { IPhoto } from '../../types/photo';

export interface GalleryCardProps extends React.ComponentProps<'div'> {
   data: IPhoto;
}
