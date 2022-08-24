import { useEffect, useState, useRef, useTransition } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import SearchItem from './SearchItem';
import useDebounce from 'src/hooks/useDebounce';
import request from 'src/utils/request';
import { Loading, SearchIcon } from '../Icons';
import axios from 'axios';

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [filterText, setFilterText] = useState(''); 
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const debouncedValue = useDebounce(filterText, 500);
  const [isPending, startTransition] = useTransition();
  const inputRef = useRef();

  useEffect(() => {
    if (!debouncedValue.trim()) {
      setSearchResult([]);
    }

    const fetchApi = async () => {
      // setLoading(true);

      const result = await axios({
        method: 'POST',
        url: 'http://localhost:3000/api/search',
        data: filterText,
      })
      console.log(result.data);

      setSearchResult(result);
      // setLoading(false);
    };

    fetchApi();
  }, [debouncedValue]);

  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(' ')) {
      setSearchValue(searchValue);
    }
    startTransition(() => {
      setFilterText(e.target.value);
    })
  };

  return (
    <div>
      <HeadlessTippy
        interactive
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <div className="" tabIndex="-1" {...attrs}>
            <div className={' flex flex-col relative w-[550px] h-[500px] bg-gray-100 border border-t-2 shadow-lg  rounded-sm'}>
              <div className="flex w-full justify-between items-center py-1 fixed top-0">
                <h4 className="text-lg inline-block">Sản Phẩm : {searchResult.length}</h4>
                {/* <Link> */}
                <a className='mr-4'>Tất cả sản phẩm</a>
                {/* </Link> */}
              </div>
              {/* {searchResult.map((result) => (
                <AccountItem key={result.id} data={result} />
              ))} */}
              <div className="w-full h-[2px] bg-slate-500 mt-7"></div>
              {searchResult.length > 0 && (
                <div className="mt-3 overflow-y-scroll">
                  <SearchItem />
                  <SearchItem />
                  <SearchItem />
                  <SearchItem />
                  <SearchItem />
                  <SearchItem />
                </div>
              )}
            </div>
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        <div className="flex items-center">
          <input
            ref={inputRef}
            value={searchValue}
            placeholder="Tìm kiếm sản phẩm"
            className="h-[32px] text-[14px] px-[5px] border-0 outline-0"
            spellCheck={false}
            onChange={handleChange}
            onFocus={() => setShowResult(true)}
          />

          {isPending && <Loading />}

          <button className="" onMouseDown={(e) => e.preventDefault()}>
            <SearchIcon classNameIcon="cursor-pointer hover:scale-90 duration-300 " />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;
