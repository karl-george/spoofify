'use client';

import useGetSongById from '@/actions/useGetSongById';
import useLoadSongUrl from '@/hooks/useLoadSongUrl';
import usePlayer from '@/hooks/usePlayer';
import PlayerContent from './PlayerContent';

interface PlayerProps {}

function Player({}: PlayerProps) {
  const player = usePlayer();
  const { song } = useGetSongById(player.activeId);

  const songUrl = useLoadSongUrl(song!);

  if (!song || !songUrl || !player.activeId) {
    return null;
  }

  return (
    <div className='fixed bottom-0 bg-black w-full py-2 px-4 h-[80px]'>
      <PlayerContent />
    </div>
  );
}

export default Player;
