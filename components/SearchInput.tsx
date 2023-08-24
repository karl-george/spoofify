'use client';

import useDebounce from '@/hooks/useDebounce';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import qs from 'query-string';
import Input from './Input';

interface SearchInputProps {}

function SearchInput({}: SearchInputProps) {
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce<string>(value, 500);
  const router = useRouter();

  useEffect(() => {
    const query = {
      title: debouncedValue,
    };

    const url = qs.stringifyUrl({
      url: '/search',
      query: query,
    });

    router.push(url);
  }, [debouncedValue, router]);

  return (
    <Input
      placeholder='What do you want to listen to?'
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export default SearchInput;
