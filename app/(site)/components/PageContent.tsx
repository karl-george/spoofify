'use client';

import SongItem from '@/components/SongItem';
import { Song } from '@/types';

interface PageContentProps {
  songs: Song[];
}

function PageContent({ songs }: PageContentProps) {
  if (songs.length === 0) {
    <div className='mt-4 text-neutral-400'>No songs available</div>;
  }

  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4'>
      {songs.map((song) => (
        <SongItem key={song.id} onClick={() => {}} data={song} />
      ))}
    </div>
  );
}

export default PageContent;