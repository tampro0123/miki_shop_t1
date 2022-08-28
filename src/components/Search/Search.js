import { useEffect, useState, useRef, useTransition } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import SearchItem from './SearchItem';
import useDebounce from 'src/hooks/useDebounce';
import { Loading, SearchIcon } from '../Icons';
import axios from 'axios';
import { useRouter } from 'next/router';

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [filterText, setFilterText] = useState(''); 
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const debouncedValue = useDebounce(filterText, 500);
  const [isPending, startTransition] = useTransition();
  const inputRef = useRef();
  const router = useRouter();
  const handleEnterInput = (e) => {
    console.log(e);
    window.addEventListener('keydown', () => {
      if(searchValue) {
        router.push(`/product/search?keyword=${searchValue}`);
      }
    })
  }

  useEffect(() => {
    if (!debouncedValue.trim()) {
      setSearchResult([]);
    }

    const fetchApi = async () => {
      const result = await axios({
        method: 'POST',
        url: 'http://localhost:3000/api/search',
        data: {filterText},
      })
      const products = await result.data;
      setSearchResult(products.product);
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
        visible={showResult && debouncedValue}
        placement='bottom'
        render={(attrs) => (
          <div className="" tabIndex="-1" {...attrs}>
            <div className={' flex flex-col relative w-[550px] bg-gray-100 border border-t-2 shadow-lg  rounded-sm'}>
              <div className="py-1 fixed top-0">
                <h4 className="text-lg font-semibold inline-block pl-4">Sản Phẩm : {searchResult.length}</h4>
              </div>
              <div className="w-full h-[2px] bg-slate-500 mt-7"></div>
              {searchResult.length > 0 && (
                <div className={searchResult.length > 3 ? "mt-3 overflow-y-scroll h-[400px]" : "mt-3"}>
                 {searchResult.map((e) => (
                  <SearchItem key={e._id} product={e} />
                 ))}
                </div>
              )}
              {searchResult.length == 0  && searchValue  && (
               <p className='text-center text-xl font-semibold text-red-500 my-3'>Không tìm thấy sản phẩm nào</p>
              )}
            </div>
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        <div className="flex items-center w-[200px]">
          <input
            ref={inputRef}
            value={searchValue}
            placeholder="Tìm kiếm sản phẩm"
            className="h-[32px] text-[14px] px-[5px] border-0 outline-0 flex-1 w-[150px]"
            spellCheck={false}
            onChange={handleChange}
            onFocus={() => {
              handleEnterInput();
              setShowResult(true)}}
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
