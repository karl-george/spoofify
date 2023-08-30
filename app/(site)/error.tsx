'use client';

import Box from '@/components/Box';

interface errorProps {}

function Error({}: errorProps) {
  return (
    <Box className='h-full flex items-center justify-center'>
      <div className='text-neutral-400'>Something went wrong</div>
    </Box>
  );
}

export default Error;
