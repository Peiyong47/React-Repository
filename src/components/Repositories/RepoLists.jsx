import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRepoRequest, clearRepos } from '../../redux/repo/repoSlice';
import { FaSearch } from 'react-icons/fa';
import { Button, Spinner } from 'flowbite-react';
import Repo from './Repo';
import Loading from '../Loading';

export default function RepoLists() {
  const dispatch = useDispatch(); 
  const { repositories, loading, error, hasMoreRepos } = useSelector(state => state.repo);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(clearRepos());
    dispatch(fetchRepoRequest({ page: 1, perPage: 10, searchTerm: '' }));
  }, [dispatch]);

  const loadMore = () => {
    if (hasMoreRepos) {
      const nextPage = page + 1;
      setPage(nextPage);
      dispatch(fetchRepoRequest({ page: nextPage, perPage: 10, searchTerm: searchTerm }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    dispatch(clearRepos());
    dispatch(fetchRepoRequest({page: 1, perPage: 10, searchTerm: searchTerm}));
  }

  return (
    <div className='max-w-5xl mx-auto px-4 flex flex-col gap-8 mt-12 mb-14'>
      <h1 className='text-darkBlue-400 font-bold text-2xl'>All Repositories</h1>
      <form 
        className='flex gap-1'
        onSubmit={handleSubmit}
      >
        <input 
          type='text' 
          placeholder='Search Repositories' 
          className='w-full p-2 border border-westly-200 bg-transparent rounded-lg focus:outline-none focus:border-westly-600'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          id='searchTerm'
        />
        <Button
          type='submit'
          className='bg-westly-200 text-westly-600 hover:bg-opacity-60 hover:text-opacity-60 rounded-lg'
        >
          <FaSearch className='text-westly' />
        </Button>
      </form>
      {
        loading && <Loading />
      }
      {repositories.length > 0 && !error && (
        <>
          {repositories.map((repo) => (
            <Repo key={repo.id} repo={repo} />
          ))}
          {hasMoreRepos && (
            <Button 
              type='button'
              onClick={loadMore}
              className='text-westly border-westly rounded-lg hover:border-westly-600 hover:text-westly-600'>
              {
                loading ? <Spinner size='sm' className='text-westly ' /> : 'Show More'
              }
            </Button>
          )}
        </>
      )}
    </div>
  );
}



